import React from 'react';
import style from "./Nav.module.css";
import { NavLink } from 'react-router-dom';
import Logo from './Logo/Logo';
import Links from './Links/Links';


const Nav = () => {
    return(
        <div className={style.wrapper}>
            <Logo/>
            <Links/>
        </div>
    );
}


export default Nav;