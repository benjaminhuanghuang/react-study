/*
  当 `before` 和 `after` 的块在 `describe` 块内部时，只适用于该 `describe` 块内的测试。
 
  顶级的 `beforeEach` 在 `describe` 块级的 `beforeEach` 之前被执行
*/

beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));

beforeEach(() => console.log(' 1 - beforeEach'));
afterEach(() => console.log(' 1 - afterEach'));

test('', () => console.log('   1 - test'));

describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll'));
  afterAll(() => console.log('2 - afterAll'));
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));
  test('', () => console.log('2 - test'));
});

// 1 - beforeAll
//  1 - beforeEach
//   1 - test
//  1 - afterEach
// 
// 2 - beforeAll     - block level beforeAll
//  1 - beforeEach   - top level beforeEach
//   2 - beforeEach  - block level beforeEach
//    2 - test
//   2 - afterEach
//  1 - afterEach
// 2 - afterAll
// 1 - afterAll
