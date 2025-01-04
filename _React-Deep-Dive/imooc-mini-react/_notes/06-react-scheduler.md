# 剖析React中的任务调度器场景 合作式调度器 & 抢占式调度器

- Cooperative scheduler for browser environment, good for IO, event handler
- Preemptive Scheduler


## Cooperative scheduler in React
### time slices

https://github.com/facebook/react/blob/main/packages/scheduler/src/forks/Scheduler.js
```js
let frameInterval = frameYieldMs;

function shouldYieldToHost(): boolean {

}
```
### aging
Raise the priority of low-priority tasks that have not been processed for a long time

https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberLane.js
```js
export function markStarvedLanesAsExpired()
```


## Scheduler source code
https://github.com/facebook/react/tree/main/packages/scheduler