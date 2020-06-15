import React from "react";
import style from "./Links.module.css";
import { updateNewCategoryActionCreator, createCategoryActionCreator } from "../../redux/links-reducer";
import AddCategory from "./AddCategory";

const AddCategoryContainer = (props) => {

    /* let updatingNewCategoryCont = (name, path) => {
        props.dispatch(updateNewCategoryActionCreator(name, path));
    }

    let createCategoryCont = () => {
        props.dispatch(createCategoryActionCreator());
    } */


    return (
        <div className={style.wrapper}>
            <AddCategory createCategoryCont={props.createCategoryCont} updatingNewCategoryCont={props.updatingNewCategoryCont} linkData={props.linkData} newLinkData={props.newLinkData} />
        </div>
    );
}
export default AddCategoryContainer;