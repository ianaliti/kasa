import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'
import logo from '../../../assets/logo/logo-header.png'

export default function Header() {
    return (
        <nav>
            <img src={logo} alt='logo' className='logo'></img>
            <div className='header-link'>
                <NavLink exact="true" to="/kasa/" className={({ isActive }) => (isActive ? "active" : "")}>Accueil</NavLink>
                <NavLink to="/propos" className={({ isActive }) => (isActive ? "active" : "")}>A Propos</NavLink>
            </div>
        </nav>
    )
}
