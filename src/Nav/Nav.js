import React from 'react';
import style from "./Nav.module.css";
import Logo from './Logo/Logo';
import LinksContainer from './Links/LinksContainer';

const Nav = (props) => {
    return (
        <div className={style.wrapper}>
            <Logo />
            <LinksContainer linkData={props.linkData}/>
        </div>
    );
}


export default Nav;