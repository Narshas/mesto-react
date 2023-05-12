import React from 'react';
import { logoWhite } from '../images/logo-white.svg'

function Header() {
    return (
        <header className='header'>
            <img src={logoWhite} alt="Логотип сервиса Место" className='header__logo' />
        </header>
    )
}

export default Header;