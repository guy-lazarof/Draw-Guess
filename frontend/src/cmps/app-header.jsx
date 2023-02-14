import { NavLink } from 'react-router-dom';

import photo from './../assets/img/logo.png';

export function AppHeader() {

    return (
        <header className="app-header">
            <NavLink to="/" className='app-logo'>
                <img className='logo' src={photo} alt="logo" />
            </NavLink>
            <nav className='nav-bar'>
                <NavLink to="/" className='navLink'>Welcome</NavLink> |
                <NavLink to="/drawing" className='navLink'>Drawing</NavLink> |
                <NavLink to="/guessing" className='navLink'>Guessing</NavLink> |
                <NavLink to="/waiting" className='navLink'>Waiting</NavLink> |
                <NavLink to="/word-choosing" className='navLink'>Word choosing</NavLink> |
                <NavLink to="/about" className='navLink'>About</NavLink>
            </nav >

        </header >
    )
}
