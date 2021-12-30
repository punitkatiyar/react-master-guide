import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/html'>HTML</Link></li>
                    <li><Link to='/css'>CSS</Link></li>
                    <li><Link to='/js'>Javascript</Link></li>
                    <li><Link to='/react'>React</Link></li>
                    <li><Link to='/node'>Node</Link></li>

                </ul>
            </nav>

        </div>
    )
}

export default Nav
