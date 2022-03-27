https://juejin.cn/post/6844904129178009613


如果你的React项目中使用react hook、redux、redux-thunk，可能你需要用 redux-toolkit （以下简称RTK）优化你的项目结构，它看起来可以这么清爽

```
# 优化前
 /counter
    constants.ts
    actions.ts
    reducer.ts
    saga.ts
    index.tsxÏ
# 优化后
/counter
    slice.ts
    index.tsx

```

## Setup
```
  # 使用 redux-typescript 模板，推荐使用typescript
  npx create-react-app react-rtk-ts --template redux-typescript

  # 使用redux 模板
  # npx create-react-app react-rtk-ts --template redux
```
For existed project
```
  npm install @reduxjs/toolkit
```
