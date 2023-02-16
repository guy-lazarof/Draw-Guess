import { NavLink } from 'react-router-dom';

import photo from './../assets/img/logo.png';

export function AppHeader() {

    return (
        <header className="app-header">
            <img className='logo' src={photo} alt="logo" />
            <nav className='nav-bar'>
                <NavLink to="/about" className='navLink'>About</NavLink>
            </nav >
        </header >
    )
}
