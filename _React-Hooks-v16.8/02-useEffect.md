# useEffect
Used to manage side effects in your components, 
For example, call API when page load.

effect 在每轮渲染结束后执行，模拟生命周期函数
mount
update
unmount

```js
import { useEffect } from 'react';

useEffect(callback, [])
```

useEffect dependency:
- undefine:   callback get called every time
- []: only at mount
- []: 

## How it works


## Call API
```js

const [productlist, setProductList] = useState([]);

async function fetchAllProducts() {
    try {
        const response = await fetch ("https://dummyjson.com/products");
        const result = await response. json();
        if (result && result-products) 
            setProductList(result.products);
    }
    catch (error) {
        console. log(error);
    }
}

useEffect(()=>{
    fetchAllProducts();
    return () => {
        
    }
}, [])

<ul>
{productList && productList.length › 0
? productList.map((item) =› ‹li>(item.title)</li>
: null
}
</ul>

```


## Bind a event handler
```js
useEffect(() => {
    window.addEventListener('resize', onResize);
    
    return (() => { window. removeEventListener('resize', onResize);});
}, []);
```