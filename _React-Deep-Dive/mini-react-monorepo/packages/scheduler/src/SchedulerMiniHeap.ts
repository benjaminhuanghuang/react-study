export type Heap<T extends Node> = Array<T>;

export type Node = {
  id: number; // identifier
  sortIndex: number; // use for sorting
};

export function peek<T extends Node>(heap: Heap<T>): T | null {
  return heap.length > 0 ? heap[0] : null;
}

/**
 *  1. Append the new element to the end of the array
 *  2. Shift the new element up the heap until it reaches the correct spot
 *
 */
export function push<T extends Node>(heap: Heap<T>, node: T): void {
  const index = heap.length;
  heap.push(node);
  siftUp(heap, node, index);
}

export function pop<T extends Node>(heap: Heap<T>): T | null {
  if (heap.length === 0) {
    return null;
  }

  const first = heap[0];
  const last = heap.pop()!;
  if (heap.length > 0) {
    // if there is more than 1 element
    heap[0] = last;
    // move the current first element to the correct spot
    siftDown(heap, last, 0);
  }

  return first;
}

/**
 * Starts from a leaf node and moves upward to fix the heap.
 */
function siftUp<T extends Node>(heap: Heap<Node>, node: Node, i: number): void {
  let index = i;
  while (index > 0) {
    const parentIndex = (index - 1) >>> 1;
    const parent = heap[parentIndex];
    if (compare(parent, node) > 0) {
      // need swap
      heap[parentIndex] = node;
      heap[index] = parent;
      index = parentIndex;
    } else {
      return;
    }
  }
}

/**
 * Starts from a node and moves downward to fix the heap.
 */
function siftDown<T extends Node>(
  heap: Heap<Node>,
  node: Node,
  i: number
): void {
  let index = i;
  const length = heap.length;
  const halfLength = length >>> 1;

  while (index < halfLength) {
    const leftIndex = (index + 1) * 2 - 1;
    const left = heap[leftIndex];
    const rightIndex = leftIndex + 1;
    const right = heap[rightIndex]; // may be undefined

    if (compare(left, node) < 0) {
      // left < node
      if (rightIndex < length && compare(right!, left) < 0) {
        // right exist and right < left
        heap[index] = right!;
        heap[rightIndex] = node;
        index = rightIndex;
      } else {
        heap[index] = left;
        heap[leftIndex] = node;
        index = leftIndex;
      }
    } else if (rightIndex < length && compare(right!, node) < 0) {
      heap[index] = right;
      heap[rightIndex] = node;
      index = rightIndex;
    } else {
      return;
    }
  }
}

function compare(a: Node, b: Node): number {
  const diff = a.sortIndex - b.sortIndex;

  return diff !== 0 ? diff : a.id - b.id;
}
