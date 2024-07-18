# Higher-Order Component (HOC) 
A Higher-Order Component (HOC) in React is a pattern used to enhance the functionality of a component by wrapping it in another component.

```js
const withLoadingSpinner = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      const { isLoading, ...otherProps } = this.props;

      if (isLoading) {
        return <div>Loading...</div>;
      }

      return <WrappedComponent {...otherProps} />;
    }
  };
};
```


