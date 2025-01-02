```js
const [form, setForm] = useState({ name: "",  city: "", age: 50 });

const handleChange = (e) =>{
    setForm (prev =>({
        ...prev,
        [e.target.name]: e.target.value
    }));
};
```
