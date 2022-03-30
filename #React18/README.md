# React 18

Release date: 



## ReactDOM.render()
ReactDOM.render() is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot

createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".