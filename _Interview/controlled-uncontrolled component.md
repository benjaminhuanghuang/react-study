# React controlled vs uncontrolled component

React 中的组件根据是否受 React 控制可分为受控的(controlled)和非受控的(uncontrolled)

判断标准：React 能否得知当前状态修改

非受控组件即不受状态的控制，获取数据就是相当于操作DOM。

非受控组件的好处是很容易和第三方组件结合


## Controlled component
```html 
<input value={someValue} onChange={handleChange} />
```


## Uncontrolled component
非受控组件的输入控件就和传统的 HTML 输入控件一样


## Covert uncontrolled component to controlled component
```js
const App=() =>{
    const [value, setValue] - useState(**);
    const [checked, setChecked] = useState(false);
    return (
        <>
    <input volue={value} onInput={event - setValue(event, target. value)} />
    < input
    type="checkbox"
    checked={checked}
    onchange={event »› setChecked(event. target.value)}/>
    </>
    );
};
```