import React from "react";
import style from "./Links.module.css";

const AddCategory = (props) => {

    
    let categoryName = React.createRef();
    let categoryPath = React.createRef();

    let updatingNewCategory = () => {
        let name = categoryName.current.value;
        let path = categoryPath.current.value;
        props.updatingNewCategoryCont(name, path);
    }

    let createCategory = () => {
        props.createCategoryCont();
    }


    return (
        <div className={style.wrapper}>
            <div className={style.addCategoryHeader}>ADD CATEGORY</div>
            <div className={style.addCategoryWrapper}>
                <textarea onChange={updatingNewCategory} placeholder="name" ref={categoryName} value={props.newLinkData.categName}/>
                <textarea onChange={updatingNewCategory} placeholder="path: /blabla" ref={categoryPath} value={props.newLinkData.categPath}/>
                <button onClick={createCategory}>Добавить категорию</button>
            </div>
        </div>
    );
}
export default AddCategory;