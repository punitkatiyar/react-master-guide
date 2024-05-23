import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function Single() {
    const [users, setUsers] = useState([])
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:4000/user/${id}`)
            .then(res =>
                setUsers(res.data)
            )
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div>
            <input type="text" value={users.title} />


            <h1>{users.title}</h1>
            <h2>{users.id}</h2>
        </div>
    )
}
export default Single