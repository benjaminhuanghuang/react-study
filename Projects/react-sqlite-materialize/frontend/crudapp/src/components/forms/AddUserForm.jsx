import React, {useState} from 'react'

const AddUserForm = (props) => {
    const initialFormState = { id: null, name: '', username: '', phone: '' }
    const [user, setUser] = useState(initialFormState);
    
    const handleInputChange = (event) => {
        const {name, value} = event.target;

        setUser({ ...user, [name]: value });
    }

    const submitForm = (event) => {
        event.preventDefault();
        if (!user.name || !user.username) return;

        props.addUser(user);

        setUser(initialFormState);
    }

    return (

        <div className='row'>
            <form className="col s12" onSubmit={submitForm}>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="name" name="user" type="text" className="validate"
                            value={user.name} onChange={handleInputChange} required />
                        <label htmlFor="name">Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="username" name="username" type="text" className="validate"
                            value={user.username} onChange={handleInputChange} required />
                        <label htmlFor="username">Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <button className="waves-effect waves-light btn">Add User</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddUserForm