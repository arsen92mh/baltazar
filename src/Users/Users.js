import React from 'react'
import user from "../img/user.jpg";
import style from "./users.module.css";
import Preloader from "../Content/Preloader/Preloader";


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
        let pages = [];

        if (pagesCount <= props.paginationSize) {
            for (let i = 1; i< pagesCount; i++){
                pages.push(i);
            }
        } else {
                let min = props.currentPage - (Math.ceil(props.paginationSize/2)),
                    max;
                    if (min <= 1) {
                        max = props.paginationSize;
                    } else { 
                        max = props.currentPage + (Math.ceil(props.paginationSize/2));
                    }
                for (let i = min; i <= max; i++){
                    if (i > 0){
                        pages.push(i);
                    }
                }
            

        }
        return <div>

            {(props.isFetchingToggle) ? <Preloader /> : null}

            Сотрудники подразделения
            <div className={style.pagination}>
                {pages.map(p => <span
                    className={props.currentPage === p ? style.activePage : null}
                    onClick={() => props.setCurrentPage(p)}>{p}</span>)}
            </div>
            <div>
                {props.users.map(u => {
                return (
                    <div key={u.id}>
                        <div>{u.name}</div>
                        {(u.photos.small === null) ? <img className={style.avatar} src={user}></img> : <img src={u.photos.small}></img>}
                        <div>{u.status}</div>
                        {(u.followed) ? <button onClick={() => props.unFollow(u.id)}>Unfollow</button> : <button onClick={() => props.follow(u.id)}>Follow</button>}
                    </div>
                )
            })
            }
            </div>

        </div>
}

export default Users;