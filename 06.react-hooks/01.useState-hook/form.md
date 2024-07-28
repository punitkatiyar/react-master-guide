# React useState() hook with form 

```
import React, { useState } from 'react'
function FormDemo() {
    const [user,setUser]=useState({FirstName:'demo',LastName:"demo"})
    return (
    <>
    <form>
        <input
        type="text"
        value={user.FirstName}
        onChange={e=>setUser({...user,FirstName : e.target.value})}
        />

        <input
        type="text"
        value={user.LastName}
        onChange={e=>setUser({...user,LastName : e.target.value})}
        />

    </form>
    <h1>{user.FirstName}</h1>
    <h1>{user.LastName}</h1>
    <h2>{JSON.stringify(user)}</h2>
    </>
  )
}
export default FormDemo
```
