/*
  jest.fun
*/

test("mock test", () => {
  const mock = jest.fn(()=> 'jest.fn test');
  expect(mock()).toBe('jest.fn test'); //函数返回结果
  expect(mock).toHaveBeenCalled(); //函数被调用
  expect(mock).toHaveBeenCalledTimes(1); //调用1次
 });
 
 test("mock 返回值", () => {
   const mock = jest.fn();
   mock.mockReturnValue("return value"); //mock 返回值
   expect(mock()).toBe("return value");
 });
 
 test("mock promise", () => {
   const mock = jest.fn();
   mock.mockResolvedValue("promise resolve"); // mock promise
 
   expect(mock("promise")).resolves.toBe("promise resolve");
   expect(mock).toHaveBeenCalledWith("promise"); // 调用参数检验
 });
 
 //或者使用赋值的形式 
 function add(v1,v2){
   return v1 + v2
 }
 
 add = jest.fn((a, b)=> a + b)
 
 test("mock dependency", () => {
   let result = add(1,2);
   expect(result).toBeDefined();
   expect(add).toHaveBeenCalledWith(1,2)
 });
 