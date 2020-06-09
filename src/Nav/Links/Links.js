import React from "react";
import style from "./Links.module.css";
import { NavLink, Route } from "react-router-dom";
import {updateNewCategoryActionCreator, createCategoryActionCreator} from "./../../redux/state.js";

const Links = (props) => {

    let linksArr = props.linkData.map(l => <NavLink to={l.path} activeClassName={style.active}>{l.name}</NavLink>)
    
    let categoryName = React.createRef();
    let categoryPath = React.createRef();

    let updatingNewCategory = () => {
        let name = categoryName.current.value;
        let path = categoryPath.current.value;
        props.dispatch(updateNewCategoryActionCreator(name, path));
    }

    let createCategory = () => {
        props.dispatch(createCategoryActionCreator());
    }

    return (
        <div className={style.wrapper}>
            <div className={style.addCategoryHeader}>ADD CATEGORY</div>
            <div className={style.addCategoryWrapper}>
                <textarea onChange={updatingNewCategory} placeholder="name" ref={categoryName} value={props.newSublinkData.categName}/>
                <textarea onChange={updatingNewCategory} placeholder="path: /blabla" ref={categoryPath} value={props.newSublinkData.categPath}/>
                <button onClick={createCategory}>Добавить категорию</button>
            </div>
            {linksArr}
        </div>
    );
}
export default Links;