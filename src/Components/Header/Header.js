import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <div className='header'>
        <nav>
            <div className='logo'>
                Dress-<span>Delight</span>
            </div>

            <div className='linkContainer'>
                <NavLink to="/" className={({isActive}) => isActive ? "activeLink" : "link" }>Home</NavLink>
                <NavLink to="/shop" className={({isActive}) => isActive ? "activeLink" : "link"}>Shop</NavLink>
                <NavLink to="/dress" className={({isActive}) => isActive ? "activeLink" : "link" }>Dress</NavLink>
                <NavLink to="/shoes" className={({isActive}) => isActive ? "activeLink" : "link" }>Shoes</NavLink>
            </div>
        </nav>
    </div>
  )
}
