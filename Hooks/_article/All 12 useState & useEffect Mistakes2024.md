# All 12 useState & useEffect Mistakes Junior React Developers Still Make in 2024

https://www.youtube.com/watch?v=-yIsQPp31L0


1. Multiple set

```js
const [count, setCount] = useState(0);
const handleClick = () =>{
    setCount(count + 1);
    setCount(count + 1); // count is still 0
}
```

solution
the updater function is scheduled
```js
const handleClick = () =>{
    setCount( prev => prev + 1);
    setCount( prev => prev + 1);
}
```

2. Conditional render 
Hooks must be called in the exact some order in every component render.
```js
function ProduceCard({id}) {
    if(!id) {
        return "No id provided";
    }
    // useState can not be called conditionally
    const [something, setSomething] = useState('hi');
}
```

3. Update object
```js
const [user, setUser] = useState({ name: "",  city: "", age: 50 });

console. log (user);

const handleChange = (e) =>{
    setUser (prev =>({
        ... prev,
        name: e. target.value,
    }));
};
```

4. Object state instead of multiple smaller ones
```js
const [form, setForm] = useState({ name: "",  city: "", age: 50 });

const handleChange = (e) =>{
    setForm (prev =>({
        ...form,
        [e.target.name]: e.target.value
    }));
};
```

5. Information can be derived from state / props
```js
const [quantity, setQuantity] = useState (1);
const [totalPrice, setTotalPrice] = useState(0) ;

const handleClick = () => {
    setQuantity(quantity + 1);
};

useEffect( =› {
    setTotalPrice(quantity * PRICE_PER_ITEM) ;
}, [quantity]);
```

Solution:
```js
const [quantity, setQuantity] = useState (1);
const totalPrice = quantity * PRICE_PER_ITEM;

const handleClick = () => {
    setQuantity(quantity + 1);  // cause re-render and run the function again
};
```  

6. Primitives vs non-primitives
```js
const [price, setPrice] = useState({
    number: 100,
    totalPrice: true,
}) ;

const handleClick = () => {
    // cause re-render
    setPrice({
        number: 100,
        totalPrice: true,
    }) ;
} ;
```