
# Class Component-Function Component


## Class Component
```js
class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1> {this.props.name} </h1>
    }
}

```
State is managed using this.state and updated with this.setState()


Have access to lifecycle methods such as componentDidMount, componentDidUpdate, componentWillUnmount, etc.

Methods often require binding this, either manually in the constructor or using arrow functions.
```js
    <button onClick={this.handleClick.bind(this)}>
    or
    <button onClick={this.handleClick.bind(this, id)} />
```

## Function Component
```js
function Welcome(props) {
    return <h1> {props.name} </h1>
}
```
State is managed using the useState hook.

Use hooks like useEffect to handle side effects and lifecycle events
Similar with componentDidMount and componentWillUnmount


There is no this context in function components, you don't need to worry about binding methods.