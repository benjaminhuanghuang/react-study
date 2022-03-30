
## Setup
```
npm i -D typescript ts-jest @types/jest 
```
在 jest.config.js 中添加 preset: 'ts-jest'


执行单测时不校验 ts 类型
有时你可能会希望不校验 ts 类型, 仅执行代码测试, 比如需要在 CI 中将类型校验和单元测试分为两个任务
在 jest.config.js 中添加如下内容
globals: {
    'ts-jest': {
        isolatedModules: true,
    },
}
