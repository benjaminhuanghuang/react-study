React Testing Overview
- https://reactjs.org/docs/testing.html
## Test runner and framework
- Jest [recommand]
JavaScript test framework based on Jasmine. From Facebook, integrated with create-react-app and @vue/cli
    
Jest has following key features 
    - DOM API
    - Assertion
    - Mock
    - Code coverage
    - Snapshot testing
    - Instant Feedback


- Karma 基于Node.js的JavaScript测试执行过程管理工具（Test Runner），让你的代码自动在多个浏览器（chrome，firefox，ie等）环境下运行

- Mocha 测试框架，在vue-cli中配合 chai 断言库实现单元测试（ Mocha+chai ）


## Tesing libaray
- React Testing Library [recommand]
```
  npm install --save-dev @testing-library/react
```

```
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('loads and displays greeting', async () => {

  render(<FetchGreeting />)

  userEvent.click(screen.getByText('Load Greeting'))

  await screen.findByRole('heading', {name: 'hello there'})

  expect(screen.getByRole('button')).toHaveAttribute('disabled')
}


```

- enzyme 
  jQuery style DOM API,  created by Airbnb


## Mock
- Jest
- Sinon
## babel
    If you want to test code need transpile, you need add .babelrc
    If you use webpack you need install babel-jest