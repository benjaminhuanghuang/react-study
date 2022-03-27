## Reference
- My experience moving from Enzyme to react-testing-library [2019]
  - https://medium.com/@boyney123/my-experience-moving-from-enzyme-to-react-testing-library-5ac65d992ce#:~:text=Both%20Enzyme%20and%20react%2Dtesting,mindset%20when%20writing%20your%20tests

- [React Testing Library vs Enzyme](https://www.youtube.com/watch?v=SyAYO5w-nUI&ab_channel=LogRocket)


react-testing-library tends to support new features of React out the box which for me was a huge benefit when testing Hooks.

Enzyme focus on the implementation(state and props), React-testing-library are more focused on user behavior
Focusing on testing users behavior rather than the implementation allows you to easily refactor code.

对于使用useState的Component Enzyme 会报错，函数组件中无法使用state: ShallowWrapper::state() can only be called on class components

参见 smaple Counter 和 HookCounter
