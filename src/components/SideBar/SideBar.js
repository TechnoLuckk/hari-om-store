import React from 'react'
import { Link } from 'react-router-dom'
import './SideBar.css'
function SideBar() {
    return (
        <div className='sidebar-main'>
            <ul className='sidebar-main-list'>
                <li className='sidebar-main-list-element'>
                    Products
                    <ul className='sidebar-sub-list'>
                        <li className='sidebar-sub-list-element'><Link to={'/products/copypaper'} className='sidebar-link'>Copy-Paper</Link></li>
                        <li className='sidebar-sub-list-element'><Link to={`/products/soap`} className='sidebar-link'>Soap</Link></li>
                        <li className='sidebar-sub-list-element'><Link to={`/products/stationary`} className='sidebar-link'>Stationary</Link></li>
                        <li className='sidebar-sub-list-element'><Link to={`/products/disposables`} className='sidebar-link'>Disposables</Link></li>
                        <li className='sidebar-sub-list-element'><Link to={`/products/misc`} className='sidebar-link'>Miscellaneous</Link></li>
                    </ul>
                </li>
                <li className='sidebar-main-list-element'>
                    Services
                    <ul className='sidebar-sub-list'>
                        <li className='sidebar-sub-list-element'><Link to="/products/printing" className='sidebar-link'>Printing</Link></li>
                        <li className='sidebar-sub-list-element'><Link to="/products/officework" className='sidebar-link'>Office Work</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default SideBar
