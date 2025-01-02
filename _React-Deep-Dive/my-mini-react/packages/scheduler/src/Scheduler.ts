import { getCurrentTime, isFn } from "../../shared/utils";
import {
  lowPriorityTimeout,
  maxSigned31BitInt,
  normalPriorityTimeout,
  userBlockingPriorityTimeout,
} from "./SchedulerFeatureFlags";
import { peek, pop, push } from "./SchedulerMiniHeap";
import {
  PriorityLevel,
  NoPriority,
  ImmediatePriority,
  UserBlockingPriority,
  NormalPriority,
  LowPriority,
  IdlePriority,
} from "./SchedulerPriorities";

type Callback = (arg: boolean) => Callback | null | undefined;

export type Task = {
  id: number;
  callback: Callback | null;
  priorityLevel: PriorityLevel;
  startTime: number;
  expirationTime: number;
  sortIndex: number;
};

// task queue no delay
const taskQueue: Array<Task> = [];
// task queue has delay
const timerQueue: Array<Task> = [];

// identifier for the task
let taskIdCounter = 1;
// is the main thread busy
let isHostCallbackScheduled = false;
let currentTask: Task | null = null;
let currentPriorityLevel: PriorityLevel = NoPriority;

// start of the time slice
let startTime = -1;
let frameInterval = 5;
// Is there any work running
let isPerformingWork = false;
let isMessageLoopRunning = false;

// Entry point for the scheduler
function scheduleCallback(
  priorityLevel: PriorityLevel,
  callback: Callback,
  options?: { delay: number }
): Task {
  const currentTime = getCurrentTime();
  let startTime: number = currentTime;

  if (typeof options === "object" && options !== null) {
    let delay = options.delay;
    if (typeof delay === "number" && delay > 0) {
      startTime = currentTime + delay;
    }
  }
  let timeOut: number = 5000;
  switch (priorityLevel) {
    case ImmediatePriority:
      timeOut = -1;
      break;
    case UserBlockingPriority:
      timeOut = userBlockingPriorityTimeout;
      break;
    case IdlePriority:
      timeOut = maxSigned31BitInt;
    case LowPriority:
      timeOut = lowPriorityTimeout;
    case NormalPriority:
    default:
      timeOut = normalPriorityTimeout;
  }
  const expirationTime = startTime + timeOut;
  const newTask: Task = {
    id: taskIdCounter++,
    callback,
    priorityLevel,
    startTime,
    expirationTime,
    sortIndex: -1,
  };
  if (startTime > currentTime) {
    // task has delay
    newTask.sortIndex = startTime;
    push(timerQueue, newTask);
    if (peek(taskQueue) == null && newTask === peek(timerQueue)) {
      // if the new task is the first task
      if (!isHostCallbackScheduled && !isPerformingWork) {
        isHostCallbackScheduled = true; // lock the main thread
        requestHostCallback();
      }
    }
  } else {
    newTask.sortIndex = expirationTime;
    push(taskQueue, newTask);
    if (!isHostCallbackScheduled && !isPerformingWork) {
      isHostCallbackScheduled = true; // lock the main thread
      requestHostCallback();
    }
  }
  return newTask;
}

function requestHostCallback() {
  if (!isMessageLoopRunning) {
    isMessageLoopRunning = true;
    schedulePerformWorkUnitDeadline();
  }
}
const channel = new MessageChannel();
const port = channel.port2;
channel.port1.onmessage = performWorkUntilDeadline;
function schedulePerformWorkUnitDeadline() {
  port.postMessage(null);
}

function performWorkUntilDeadline() {
  if (isMessageLoopRunning) {
    const currentTime = performance.now();
    startTime = currentTime;
    let hasMoreWork = true;
    try {
      hasMoreWork = flushWork(currentTime);
    } finally {
      if (hasMoreWork) {
        schedulePerformWorkUnitDeadline();
      } else {
        isMessageLoopRunning = false;
      }
    }
  }
}

function flushWork(initialTime: number): boolean {
  isHostCallbackScheduled = false;
  isPerformingWork = true;
  let previousPriorityLevel = currentPriorityLevel;
  try {
    return workLoop(initialTime);
  } finally {
    currentTask = null;
    currentPriorityLevel = previousPriorityLevel;
    isPerformingWork = false;
  }
}
function cancelCallback(task: Task) {
  currentTask!.callback = null;
}

function getCurrentPriorityLevel() {
  return currentPriorityLevel;
}

function shouldYieldToHost() {
  const timeElapsed = performance.now() - startTime;
  return timeElapsed > frameInterval;
}

/**
 *
 * @param initialTime
 * @returns true if there is more work to do
 */
function workLoop(initialTime: number): boolean {
  let currentTime = initialTime;
  currentTask = peek(taskQueue);

  while (currentTask !== null) {
    if (currentTask.expirationTime > currentTime && shouldYieldToHost()) {
      break;
    }

    const callback = currentTask.callback;
    if (isFn(callback)) {
      currentTask.callback = null;
      currentPriorityLevel = currentTask.priorityLevel;
      const didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
      const continueCallback = callback!(didUserCallbackTimeout);
      if (isFn(continueCallback)) {
        currentTask.callback = continueCallback;
        return true;
      } else {
        if (currentTask === peek(taskQueue)) {
          pop(taskQueue);
        }
        currentTask = peek(taskQueue);
      }
    } else {
      // invalid task
      peek(taskQueue);
    }

    currentTask = peek(taskQueue);
  }

  return currentTask !== null;
}

export {
  ImmediatePriority,
  UserBlockingPriority,
  NormalPriority,
  IdlePriority,
  LowPriority,
  scheduleCallback,
  cancelCallback,
  getCurrentPriorityLevel,
  shouldYieldToHost as shouldYield, // give the control to main thread
};
