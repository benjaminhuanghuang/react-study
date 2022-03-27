/*

*/
let A1 = {type:'div', key:"A1"}
let B1 = {type:'div', key:"B1", return: A1}
let B2 = {type:'div', key:"B2", return: A1}
let C1 = {type:'div', key:"C1", return: B1}
let C2 = {type:'div', key:"C2", return: B1}

A1.child = B1;
B1.sibling = B2;
B1.child = C1;
C1.sibling = C2;


let rootFiber = A1;

let nextUnitOfWork = rootFiber;
requestIdleCallback(workLoop, { timeout: 1000 });

let start = Date.now()

// dealine is passed by browser
function workLoop(dealine) {
  while ((dealine.timeRemaining() > 1 || deadline.didTimeout) && nextUnitOfWork) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
  }
  if (!nextUnitOfWork) {
    console.log("render is done");
    console.log(Date.now() - start);
    start = Date.now();
  } else {
    requestIdleCallback(workLoop, { time: 1000 });
  }
}

function performUnitOfWork(fiber) {
  beginWork(fiber);
  if (fiber.child) {
    return fiber.child;
  }
  while (fiber) {
    completeUnitOfWork(fiber);
    if (fiber.sibling) {
      return fiber.sibling;
    }
    fiber = fiber.return;
  }
}

function beginWork(fiber) {
  console.log("start", fiber.key);
}

function completeUnitOfWork(fiber) {
  console.log("end", fiber.key);
}
