import React from 'react'
import '../styles/header.css'

const Header = () => {
  return (
    <div id='header-container'>
        <img id='logo-left' src='./images/Search/Auckland-Property-Management-Web-Logo.png' alt='logo' />
        <ul id='header-navbar-list'>
            <li className='header-navbar-list-item'>Property Rental</li>
            <li className='header-navbar-list-item'>Property Management</li>
            <li className='header-navbar-list-item'>Body Corporate</li>
            <li className='header-navbar-list-item'>Commercial</li>
            <li className='header-navbar-list-item'>Resources</li>
        </ul>
        <div id='right-header-content'>
            <div id='header-user-info'>
                <p>Hi, Peter</p>
                <img id='user-avatar' src='./images/Search/avatar.png' alt='avatar' />
            </div>
            <div id='contact-nav-item'>
                Contact Us
            </div>
        </div>
    </div>
  )
}

export default Header