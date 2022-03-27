# Jest

## Setup
``` 
    npm i -D jest babel-jest
```

## Command
```
$ jest --watch
$ jest --coverage
$ jest --config jest.config.js
npm test -- --watch


# Test foldeer
jest src/utils


# Test single file
jest src/utils/sort.test.js


# Test test suit

```

## Run jest by using npm script
```
    "scripts": {
        "test": "jest"

    }
    $ npm test
```
    
## Default config
    Place tests in a __tests__ folder, or name your test files with a .spec.js or .test.js extension. 

## Config Jest 
in package.json
```
  "jest": {
    "moduleFileExtensions": [
      "js",
      "jsx"
    ],
    "moduleNameMapper": {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      ".*\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js"
    },
    "transform": {
      "^.+\\.js$": "babel-jest"
    }
  },
```
in jest.config.json 
```
{
    "moduleFileExtensions": [
        "js",
        "jsx"
    ],
    "moduleNameMapper": {
        "Clock": "app/components/Clock.jsx",
        "CountdownForm": "app/components/CountdownForm.jsx",
        "Countdown": "app/components/Countdown.jsx"
    }
}

```
moduleFileExtensions specifies an array of file extensions your modules 

In moduleNameMapper, we map different files to their respective aliases. 
The test case will use the aliases to find the module to be test.


## Jest API
- 选择运行某个Test case
```
   test.only('my only true test', () => {
    expect(1 + 1).toEqual(2);
  });
```
- Matchers


- Truthiness
```
toBeNull 只匹配 null
toBeUndefined, toBeDefined 匹配 undefined, definde
toBeTruthy 匹配任何 if 语句为真
toBeFalsy 匹配任何 if 语句为假
```
- Numbers
```
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);

  // Float
   expect(value).toBeCloseTo(4.12344);
```

- String
```
  expect('Christoph').toMatch(/stop/);
```

- Array
```
 expect(shoppingList).toContain('beer');
```

- Exception
```
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);

  // use the exact error message or a regexp
  expect(compileAndroidCode).toThrow('you are using the wrong JDK');
  expect(compileAndroidCode).toThrow(/JDK/);
```

- Async
Samples: 
```
  /playground/async
```

- Setup and Teardown
Samples: 
```
  /playground/setup-teardown.test.js
```

- Mock
 Mock 函数允许你测试代码之间的连接——实现方式包括：擦除函数的实际实现、捕获对函数的调用 ( 以及在这些调用中传递的参数) 、在使用 `new` 实例化时捕获构造函数的实例、允许测试时配置返回值。

jest.fn() 创建一个mock函数  
jest.mock() mock整个module, 擦除函数的实际实现, put mocks into __mocks__ folder
jest.spyOn()方法同样创建一个mock函数，但是该mock函数不仅能够捕获函数的调用情况，还可以正常的执行被spy的函数。jest.spyOn()是jest.fn()的语法糖，它创建了一个和被spy的函数具有相同内部代码的mock函数。
jest.useFakeTimers();   来模拟定时器函数
jest.runAllTimers()，    在测试中将时间“快进”到正确的时间点

Samples: 
```
  /playground/mock
```