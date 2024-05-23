import axios from 'axios'
import React, { useEffect, useState } from 'react'
// step 1
import { useParams } from 'react-router-dom'
function EditData() {
    // step 3
    const [users, setUsers] = useState([])
    // const [upuser, setUpuser] = useState({ title: "" })
    // step 2
    const { id } = useParams()

    // step 4
    useEffect(() => {
        axios.get(`http://localhost:4000/user/${id}`)
            .then(res =>
                setUsers(res.data)
            )
            .catch(err => {
                console.log(err)
            })
    }, [])
    // step 6
    const submitHandler = () => {
        axios.put(`http://localhost:4000/user/${id}`, users)

        // axios.delete(`http://localhost:4000/user/${id}`)
    }
    return (
        <>
            {/* step 5 */}
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    value={users.title}
                    onChange={(e) => setUsers({ ...users, title: e.target.value })} />
                <button >Update</button>
            </form>




        </>
    )
}

export default EditData