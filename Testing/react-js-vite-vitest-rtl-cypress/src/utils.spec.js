import { describe, expect, test } from "vitest";
// Component to test
import { range } from "./utils";

describe("utils", () => {
  describe("range", () => {
    test("return correct result form 1-6 ", () => {
      const result = range(1, 6);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    test("return correct result form 41-46 ", () => {
      const result = range(41, 45);
      expect(result).toEqual([41, 42, 43, 44]);
    });
  });
});
