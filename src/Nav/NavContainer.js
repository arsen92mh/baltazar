import React from 'react';
import style from "./Nav.module.css";
import Nav from "./Nav"
import {createCategoryActionCreator, updateNewCategoryActionCreator} from "./../redux/links-reducer";

const NavContainer = (props) => {

    let updatingNewCategoryCont = (name, path) => {
        props.dispatch(updateNewCategoryActionCreator(name, path));
    }

    let createCategoryCont = () => {
        props.dispatch(createCategoryActionCreator());
    }



    return (
        <div className={style.wrapper}>
            <Nav linkData={props.linkData} newLinkData={props.newLinkData} createCategoryCont={createCategoryCont} updatingNewCategoryCont={updatingNewCategoryCont}/>
        </div>
    );
}


export default NavContainer;