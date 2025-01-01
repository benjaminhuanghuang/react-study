import { describe, expect, it } from "vitest";
import { peek, push, pop, Heap, Node } from "../src/SchedulerMiniHeap";

let idCounter = 0;
function createNode(val: number): Node {
  return {
    id: idCounter++,   
    sortIndex: val,
  };
}

describe("SchedulerMiniHeap", () => {
  it("empty heap", () => {
    const tasks: Heap<Node> = [];
    expect(peek(tasks)).toBe(null);
  });


  it("1 element", () => {
    const tasks: Heap<Node> = [createNode(1)];

    expect(peek(tasks)?.sortIndex).toEqual(1);
  });


  it("push, pop", () => {
    const tasks: Heap<Node> = [createNode(1)];
    push(tasks, createNode(2));
    push(tasks, createNode(3));

    expect(peek(tasks)?.sortIndex).toEqual(1);

    // push(tasks, createNode(0));
    // expect(peek(tasks)?.sortIndex).toEqual(0);

    // pop(tasks);
    // expect(peek(tasks)?.sortIndex).toEqual(1);
  });


});
