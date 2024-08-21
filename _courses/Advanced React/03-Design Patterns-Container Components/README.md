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
Modify package.json
```
  "proxy": "http://localhost:9090",
```