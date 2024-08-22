# Container Component

Container component responsible for handling data loading an data management on behalf of their child components

```js
const Component => {
    const [data, setData] = useState();

    // Load data
    useEffect(()=>{

    }, []);

    return (
        // Display data in children components
    )
}
```

Server setup
```bash
npm i express axios
node server.js
```
Set proxy for React app
Modify package.json
```
  "proxy": "http://localhost:9090",
```
or modify vite.config.js
```js
server: {
    proxy: {
      // Forward any requests starting with `/api` to `localhost:9090`
      '/api': {
        target: 'http://localhost:9090',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: Remove /api prefix if needed
      },
    },
  },
```

## Container component with Render props
Pass the sub component as a render
```js
<DataSourceWithRenderProps
        getData={() => fetchData("/users/1")}
        render={(resource) => <UserInfo user={resource} />}>
</DataSourceWithRenderProps>
```

