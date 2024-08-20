import React, { useState, useEffect } from 'react'
import AddUserForm from '../components/forms/AddUserForm';
import UserTable from '../components/userTable/UserTable';
//
import api from '../services/api';
import qs from 'querystring';

const Home = (props) => {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState({
        id: null,
        name: '',
        email: '',
        phone: ''
    });
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        const usersData = api.get('/api')
            .then(response => response.data)
            .then(data => {
                setUsers(data.data);
            });
    }, []);

    const refreshUserTable = () => {
        const usersData = api.get('/api')
            .then(response => response.data)
            .then(data => {
                setUsers(data.data);
            });
    }

    const addUser = (user) => {
        api.post('/api', qs.stringify(user))
            .then(response => {
                setUsers([...users, response.data]);
                // refreshUserTable()
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col s12 l6">
                    <h4>Add user</h4>
                    <AddUserForm addUser={addUser} />
                </div>
                <div className="col s12 l6">
                    <h5>Users</h5>
                    <UserTable users={users} editRow={editRow} eleteRow={deleteRow} />
                </div>
            </div>
        </div>
    )
}

export default Home