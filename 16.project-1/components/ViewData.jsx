import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ViewData() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/user")
            .then(res =>
                setUsers(res.data)
            )
            .catch(err =>
                console.log(err)
            )
    }, [])

    const list = users.map(user => <tr key={user.id}><td>{user.title}</td><td><Link to={`../single/${user.id}`}>View</Link></td></tr >)
    return (
        <div>
            <table className="table table-hover table-primary">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </table>



        </div>
    )
}

export default ViewData