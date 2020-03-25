import React from 'react'
import {NavLink} from 'react-router-dom'


const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
                <div className="nav-wrapper grey darken-3">
                    <NavLink to='/' className="brand-logo">Products</NavLink>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/add'>Add</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>


    )
}

export default Navbar