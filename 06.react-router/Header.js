import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'


function Header() {
    return (
        <>
            <div className="container">
                <ul className="nav nav-tabs mt-5">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
                    </li>
                    <li className="/nav-item">
                        <NavLink to="about" className="nav-link" >About</NavLink>
                    </li>
                    <li className="/nav-item">
                        <NavLink to="contact" className="nav-link">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/blog" className="nav-link" >blog</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/login" className="nav-link" >Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/blog" className="nav-link" >blog</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/blog" className="nav-link" >blog</NavLink>
                    </li>
                </ul>
                <h1 className="text-primary p-1">Ducat India</h1>
                <hr />
            </div>
            <Outlet />

        </>
    )
}

export default Header