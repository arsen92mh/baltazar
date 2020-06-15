import React from 'react';
import style from "./Nav.module.css";
import Logo from './Logo/Logo';
import LinksContainer from './Links/LinksContainer';
import AddCategoryContainer from './Links/AddCategoryContainer';

const Nav = (props) => {
    return (
        <div className={style.wrapper}>
            <Logo />
            <AddCategoryContainer linkData={props.linkData} newLinkData={props.newLinkData} dispatch={props.dispatch}/>
            <LinksContainer linkData={props.linkData}/>
        </div>
    );
}


export default Nav;