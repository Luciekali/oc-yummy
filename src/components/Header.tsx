import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/components/header.scss'

function Header() {
    return (
    <div className='header'>
        <img className='header-logo' src='src\assets\icons\logo.svg' alt="logo Yummy"/>
        <nav id='navigation-bar'>
            <NavLink  to="/">Accueil</NavLink>
            <NavLink  to="/menu">Menu</NavLink>
            <NavLink  to="/contact">Contact</NavLink>
            <NavLink  to="/commander">Commander</NavLink>
        </nav>
    </div>
    )
}

export default Header