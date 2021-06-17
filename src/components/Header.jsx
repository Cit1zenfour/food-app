import React from 'react'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav className='green darken-1'>
            <div className='nav-wrapper'>
                <Link to='/' className='brand-logo'>Food Appgit init</Link>
                {/*<img className='fortnite-logo brand-logo' src="https://pngimg.com/uploads/fortnite/fortnite_PNG25.png" alt="fortnite"/>*/}
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contacts</Link></li>
                    <li><Link to="/movies">Movies</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header