import React from 'react';
import {Link} from 'react-router-dom';
import '../style/header.css';
import companyLogo from '../public/pictures/carLogo.png';


function Header() {
    return(
        <header className="main-header">
            <Link to="/" className="brand-logo">
                <img src={companyLogo} alt="logo" className="logo"></img>
                <div className="brand-logo-name">RentYourCar</div>
            </Link>
        </header>
    )
}

export default Header;