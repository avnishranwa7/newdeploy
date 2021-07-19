import React from 'react'
import './navbar.css'
import Brand from './brand.svg'
import Logo from './logo.png'
//Navbar
const Navbar = ()=>{
    return(
        <div className="nav">
            <div className="brand">
                {/* Brand */}
                <img src={Brand} alt="brand-logo"/>
            </div>
            <div className="logo">
                {/* Logo */}
                <img src={Logo} alt="logo"/>
            </div>
           <button className="btn">Sign In</button>
        </div>
    )
}

export default Navbar;