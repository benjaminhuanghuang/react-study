import { describe, it, expect } from "vitest";
import {
  scheduleCallback,
  cancelCallback,
  getCurrentPriorityLevel,
  shouldYield,
  NormalPriority,
  UserBlockingPriority,
  ImmediatePriority,
} from "../src/Scheduler";

describe("scheduler", () => {
  it("2 same priority tasks", () => {
    let eventTasks: string[] = [];

    scheduleCallback(NormalPriority, () => {
      eventTasks.push('Task1');
      expect(eventTasks).toEqual(['Task1']);
    });

    scheduleCallback(NormalPriority, () => {
      eventTasks.push('Task2');
      expect(eventTasks).toEqual(['Task1', 'Task2']);
    });

  });

  it("3 different priority tasks", () => {
    let eventTasks: string[] = [];

    scheduleCallback(NormalPriority, () => {
      eventTasks.push('Task1');
      expect(eventTasks).toEqual(['Task3', 'Task2','Task1']);
    });

    scheduleCallback(UserBlockingPriority, () => {
      eventTasks.push('Task2');
      expect(eventTasks).toEqual(['Task3', 'Task2']);
    });

    scheduleCallback(ImmediatePriority, () => {
      eventTasks.push('Task3');
      expect(eventTasks).toEqual(['Task3']);
    });

  });

  it("4 different priority tasks", () => {
    let eventTasks: string[] = [];

    scheduleCallback(NormalPriority, () => {
      eventTasks.push('Task1');
      expect(eventTasks).toEqual(['Task3', 'Task2','Task1']);
    });

    scheduleCallback(UserBlockingPriority, () => {
      eventTasks.push('Task2');
      expect(eventTasks).toEqual(['Task3', 'Task2']);
    });

    scheduleCallback(ImmediatePriority, () => {
      eventTasks.push('Task3');
      expect(eventTasks).toEqual(['Task3']);
    });

    scheduleCallback(NormalPriority, () => {
      eventTasks.push('Task4');
      expect(eventTasks).toEqual(['Task3', 'Task2','Task1', 'Task4']);
    });
  });
});
