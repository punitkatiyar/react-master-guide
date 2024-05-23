import axios from 'axios'
import React, { useState } from 'react'
function InsertData() {
    const [user, setUser] = useState({ id: "", title: "" })
    const submitHandler = () => {
        axios.post("http://localhost:4000/user", user)
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                    type='text'
                    placeholder='Enter Your Name'
                    onChange={e => setUser({ ...user, title: e.target.value })}
                />
                <button>Insert Data</button>
            </form>
        </div>
    )
}
export default InsertData