import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import logo from '../../assets/logo/logo-header.png'

export default function Header() {
    return (
        <nav>
            <img src={logo} alt='logo' className='logo'></img>
            <div className='header-link'>
                <Link to="/">Accueil</Link>
                <Link to="/propos">A Propos</Link>
            </div>
        </nav>
    )
}
