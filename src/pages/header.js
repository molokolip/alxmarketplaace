import React from 'react'

export default function Header() {
    return (
        
        <nav>
            <div className="logo">Phee </div>
            <ul>
                <li>Home</li>
                <li>Our Products</li>
                <li>Contacts</li>
                <li>About us</li>
            </ul>
            <div className="search">
                <i className="fa fa-search"></i>
                <i className="fa fa-shopping-basket"></i>

            </div>
        </nav>
    )
}
