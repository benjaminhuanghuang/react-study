import { sort } from "./sort";

const arr = [5, 6, 1, 3, 2, 4];

test("Sort arr", () => {
  expect(sort(arr)).toEqual([1, 2, 3, 4, 5, 6]);
});
