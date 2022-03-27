import {modTest} from './target'

/*
  jest.mock mock整个module, 擦除函数的实际实现
*/
jest.mock('./target')

test.only('jest.mock test', () => {
  let result = modTest(1,2)
  expect(result).toBe(undefined);
  expect(modTest).toHaveBeenCalledTimes(1);
  expect(modTest).toHaveBeenCalledWith(1,2)
})
