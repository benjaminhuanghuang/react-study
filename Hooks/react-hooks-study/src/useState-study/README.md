# useState
Used to manage your component state


## Handle form fields change
```js
import {useState} from 'react';

const initialState = {
    name: '',
    city: ''
}

function App() {
    const [formData, setFormData] = useState(initialState);

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData, // Keep the previous form fields
            [name]: value, // Update only the field that changed
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data:", formData);
    };

    return () {
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input type="text" name="name"
                value={formData.name}
                onChange={handleChange}
                />
            </div>
            <div>
                <label>Email: </label>
                <input type="email" name="email"
                value={formData.email}
                onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    }

}
```

## Wrong way
