import {describe, it, expect} from 'vitest';
import {isStr} from "shared/utils";

describe('scheduler', () => {
  it('should work', () => {
    expect(isStr("1")).toBe(true);
  });
});
