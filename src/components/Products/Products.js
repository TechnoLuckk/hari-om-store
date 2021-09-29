import React from 'react'
import SideBar from '../SideBar/SideBar'
import './Products.css'
import '../SideBar/SideBar.css'
function Products() {
    return (
        <div className='product-main'>
          <SideBar />
          <div className='product-select-product'>
            {'<..'} Please select a product or service from the sidebar
          </div>
        </div>
    )
}

export default Products
