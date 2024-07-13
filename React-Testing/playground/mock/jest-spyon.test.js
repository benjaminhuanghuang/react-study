import * as mod from './traget'
    
test('jest.spyOn test', () => {
  const modMock = jest.spyOn(mod,'modTest')
  expect(mod.modTest(1, 2)).toBe(2);

  // and the spy stores the calls to add
  expect(modMock).toHaveBeenCalledWith(1, 2);
})
