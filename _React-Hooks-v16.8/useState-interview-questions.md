# useState interview questions

## How React's setState is evaluated
```js
const [count, setCount] = useState(0);

function incrementTwice() {
    count = count + 1;
    count = count + 1; 
}

function incrementTwice() {
    setCount(count + 1);
    console.log("After First setCount:", count);   // No change
    setCount(count + 1);
    console.log("After Second setCount:", count);   // No change
}

function incrementTwice_correct() {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
}

return (
    <div>
        <p >Count: {count}</p>
        <button onClick={incrementTwice} > Add +2 </button >
    </div>
);
```