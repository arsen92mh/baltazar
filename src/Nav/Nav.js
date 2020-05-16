import React from 'react';
import style from "./Nav.module.css";
import Logo from './Logo/Logo';
import Links from './Links/Links';


const Nav = (props) => {

    

    return(
        <div className={style.wrapper}>
            <Logo/>
            <Links linkData={props.linkData}/>
        </div>
    );
}


export default Nav;