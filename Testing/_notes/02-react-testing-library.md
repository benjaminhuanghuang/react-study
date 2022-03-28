# Testing Library
https://testing-library.com/docs/dom-testing-library/intro/

```
npm i -D @testing-library/react
```
## Add data-testid to the component
```
<Navbar bg="dark" variant="dark" data-testid="navbar">
```

## 以下是一些来自文档的查询示例:
- getByLabelText:搜索与作为参数传递的给定文本匹配的标签，然后查找与该标签关联的元素。
- getByText:搜索具有文本节点的所有元素，其中的textContent与作为参数传递的给定文本匹配。
- getByTitle:返回具有与作为参数传递的给定文本匹配的title属性的元素。
- getByPlaceholderText:搜索具有占位符属性的所有元素，并找到与作为参数传递的给定文本相匹配的元素。

## 一个特定的查询有很多变体:
- getBy:返回查询的第一个匹配节点，如果没有匹配的元素或找到多个匹配，则抛出一个错误。
- getAllBy:返回一个查询中所有匹配节点的数组，如果没有匹配的元素，则抛出一个错误。
- queryBy:返回查询的第一个匹配节点，如果没有匹配的元素，则返回null。这对于断言不存在的元素非常有用。
- queryAllBy:返回一个查询的所有匹配节点的数组，如果没有匹配的元素，则返回一个空数组([])。
- findBy：返回一个promise，该promise将在找到与给定查询匹配的元素时解析。如果未找到任何元素，或者在默认超时时间为4500毫秒后找到了多个元素，则承诺将被拒绝。
- findAllBy：返回一个promise，当找到与给定查询匹配的任何元素时，该promise将解析为元素数组。


1. Create snapshot
```
  const { asFragment } = render(<App />)
  expect(asFragment()).toMatchSnapshot()
```

2. Test DOM
```
  const { getByTestId } = render(<TestElements />); 

  expect(getByTestId('counter')).toHaveTextContent(0)
  
  expect(getByTestId('button-up')).not.toHaveAttribute('disabled')
  
  expect(getByTestId('button-down')).toBeDisabled()
```


3. Test Event
```
  const { getByTestId } = render(<TestEvents />); 
    
  fireEvent.click(getByTestId('button-up'))

  expect(getByTestId('counter')).toHaveTextContent('1')
```

4. Test Async
```
```

5. Test Redux


6. Test React Context


7. Test Router
要测试React Router，我们首先必须有一个导航历史记录。因此，我们使用 createMemoryHistory() 来创建导航历史。

接下来，使用助手函数 renderWithRouter() 来呈现组件，并将历史记录传递给路由器组件。这样，我们现在就可以测试在开始时加载的页面是否是主页。以及导航栏是否加载了预期的链接。

测试当我们点击链接时，它是否用参数导航到其他页面:

现在，要检查导航是否工作，我们必须触发导航链接上的单击事件。

对于第一个测试，我们检查内容是否等于About页面中的文本，对于第二个测试，我们测试路由参数并检查它是否正确通过。

8. Test Http request
Mock 
