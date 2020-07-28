import React from "react";
import style from "./Header.module.css";
import loginImg from "../../icons/sign-in-alt-solid.svg";
import searchImg from "../../icons/search-solid.svg";


const Header = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.searchPlace}>
                <div className={style.search_icon}><img src={searchImg} alt="logo"></img></div>
                <input type="search" placeholder= "Поиск..."></input>
                <button>Поиск</button>
            </div>
        </div>
    );
}


export default Header;