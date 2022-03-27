
## Use cases
```
useEffect(() => {}) //任何元素变化都执行

useEffect(() => {},[n]) //n变化执行

useEffect(() => {},[])  //挂载执行

useEffect(() => {
    return ()=>{}  //消亡执行
},[]) 
```

Effectr callback are synchronous to prevent race conditions. Do not write code like
```
    useEffect(async ()=> {
        
    })
```


- By default runs every-re-ender 不使用第二个参数，每次渲染后都会调用
```
  useEffect(() => {
    document.title = String(count);
  });
```

- 第二个参数是[], 只在第一次渲染后执行
```
  useEffect(() => {
    window.addEventListener("resize", onResize, false);

    return () => {
      window.removeEventListener("resize", onResize, false);
    };
  }, []);
```

- 如果第二个参数改变，useEffect每次执行
```
  useEffect(() => {
    console.log(count);
  }, [count]);
```  

- useEffect returns a function for cleanup
```
  useEffect(() => {
    console.log("render");

    return ()=>{
      console.log("unmount");
    }
  }, []);

  return (
    <div>
      Hello
    </div>
  );
```  
## Clean up
由于副效应函数默认是每次渲染都会执行，所以清理函数不仅会在组件卸载时执行一次，每次副效应函数重新执行之前，也会执行一次，用来清理上一次渲染的副效应。


useEffect 的 clean up 函數時機改變
React 16：元件更新 → 執行 cleanup 函數 → DOM 作對應改變 → 畫面更新

React 17：元件更新 → DOM 作對應改變 → 畫面更新 → 執行 cleanup 函數

這大概是這次改版最重大的改變了。

使用 useEffect 時，因為大部分的 effect 都跟畫面的更新沒有關係，所以 React 會在畫面更新之後再執行 effect。

整體來說流程會像這樣：

元件更新 → DOM 作對應改變 → 畫面更新 → 執行 effect

這避免了 effect 裡頭作的事情因計算量太大可能會影響到 DOM 的繪製。例如：
```
const App = () => {
  useEffect(() => {
    longlongTask();　// 我會跑很久哦
    console.log('Hello World');
  })
  return <Component />
}
```
因為上述提到的流程，React 確保了畫面更新後才作其他 effect 避免破壞使用者體驗。

但是有時候某些場景你會希望在畫面更新前執行 effect 來避免畫面的跳動，這時候就可以透過 useLayoutEffect 來代替。

