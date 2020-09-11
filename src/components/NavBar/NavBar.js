import React from 'react'
import './NavBar.css';

import AnchorLink from 'react-anchor-link-smooth-scroll'

function NavBar(props) {
    window.onscroll = () => {
        const nav = document.querySelector('#header');
        if(window.scrollY <= 10) nav.className = ''; else nav.className = 'header-fixed';
      };
    return (
        <header id="header">
            <div className="container">

                <nav id="nav-menu-container">
                    <ul className="nav-menu">
                        <li className="menu-active"><AnchorLink href="#hero">Home</AnchorLink></li>
                        <li><AnchorLink href='#about'>About Us</AnchorLink></li>
                        <li><AnchorLink href='#services'>Services</AnchorLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default NavBar

