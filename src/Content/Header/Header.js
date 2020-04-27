import React from "react";
import style from "./Header.module.css";


const Header = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.searchPlace}>
                <div className={style.search_icon}><img src="https://www.mei-huntingtonbeach.jp/assets/images/icon_search.png" alt="logo"></img></div>
                <input type="search" placeholder= "Поиск..."></input>
                <button>Поиск</button>
            </div>
        </div>
    );
}


export default Header;