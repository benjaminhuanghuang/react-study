import React from 'react'

const UserTable = (props) => {
    return (
        <div>
            <table className="responsive-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.users.length > 0 ? (
                            users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <button className="waves-effect waves-light btn-small red darken-4"
                                        onClick={() => props.deleteUser(user.id)}>delete</button>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3}>No users</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}

export default UserTable