import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
function NavBar() {
    return (
        <div className='nav-container'>
            <Link to='/'>
                <div className='nav-logo'>
                    <div className='nav-logo-upper'>
                        HariOm.
                    </div>    
                    <div className='nav-logo-lower'>
                    Since 1998
                    </div>
                </div>
            </Link>
            <div className='nav-element'>
                <ul className='nav-list'>
                    <li ><Link className='nav-list-element' to="/">Home</Link></li>
                    <li ><Link className='nav-list-element' to="/products">Products</Link></li>
                    <li ><Link className='nav-list-element' to="/about">About</Link></li>
                    <li ><Link className='nav-list-element' to="/contact">Contact Us</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
