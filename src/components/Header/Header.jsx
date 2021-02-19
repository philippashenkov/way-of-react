import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return <header className={s.header}>
        <img alt="" src='https://www.freelogodesign.org/file/app/client/thumb/7f4cb450-edab-4141-9819-90b243b966a1_200x200.png?1613209135320' />
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div> {props.login} - <button onClick={props.logout}>Log out</button></div>
            : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header;