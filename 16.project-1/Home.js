import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
    return (
        <div className='head'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/insert">Insert Data</NavLink>
            <NavLink to="/view">View Data</NavLink>
            <NavLink to="/update">Update Data</NavLink>
            <NavLink to="/delete">Delete Data</NavLink>
        </div>
    )
}

export default Home