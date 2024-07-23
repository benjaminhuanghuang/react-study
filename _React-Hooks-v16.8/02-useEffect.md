# useEffect

effect 在每轮渲染结束后执行，模拟生命周期函数
mount
update
unmount

```js
import { useEffect } from 'react';

useEffect(callback, [])
```
dependency:
- undefine:  every time
- []: only at mount

## How it works



## Bind a event handler
```js
useEffect(() => {
    window.addEventListener('resize', onResize);
    
    return (() => { window. removeEventListener('resize', onResize);});
}, []);
```