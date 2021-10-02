import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './NavBar.css'
function NavBar() {
    const theme = useTheme();
    const isSmallBP = useMediaQuery(theme.breakpoints.up('sm'));
    const [openDrawer, setOpenDrawer] = useState(false);
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
            {console.log(isSmallBP,openDrawer)}
            {isSmallBP && <div className='nav-element'>
                <ul className='nav-list'>
                    <li ><Link className='nav-list-element' to="/">Home</Link></li>
                    <li ><Link className='nav-list-element' to="/products">Products</Link></li>
                    <li ><Link className='nav-list-element' to="/about">About</Link></li>
                    <li ><Link className='nav-list-element' to="/contact">Contact Us</Link></li>
                </ul>
            </div>}
            { 
                !isSmallBP && <div className='nav-list-open-button'>
                    <button onClick={() => setOpenDrawer(!openDrawer)}><MenuIcon/></button>
                </div>
            }
            {
                !isSmallBP && openDrawer && <div className='nav-drawer-open'>
                    <button onClick={() => setOpenDrawer(!openDrawer)} className='nav-drawer-close-button'><CloseIcon /></button>
                    <ul className='nav-list-drawer'>
                    <li onClick={() => setOpenDrawer(!openDrawer)}><Link className='nav-list-element-drawer' to="/">Home</Link></li>
                    <li onClick={() => setOpenDrawer(!openDrawer)}><Link className='nav-list-element-drawer' to="/products">Products</Link></li>
                    <li onClick={() => setOpenDrawer(!openDrawer)}><Link className='nav-list-element-drawer' to="/about">About</Link></li>
                    <li onClick={() => setOpenDrawer(!openDrawer)}><Link className='nav-list-element-drawer' to="/contact">Contact Us</Link></li>
                </ul>
                </div>
            }
        </div>
    )
}

export default NavBar
