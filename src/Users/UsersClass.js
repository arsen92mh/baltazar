import React from 'react'
import * as axios from "axios";
import user from "../img/user.jpg";
import style from "./users.module.css";
import Preloader from "../Content/Preloader/Preloader";


class Users extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.isFetching(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
                this.props.isFetching(false);
                
            });
        }
    }



    follow = (userId) => {
        this.props.follow(userId);
    }
    unFollow = (userId) => {
        this.props.unFollow(userId);
    }
    setCurrentPage = (page) => {
        this.props.isFetching(true);
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.isFetching(false);
            
        });
    }
    
    render() {
        debugger;
        
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = [];

        if (pagesCount <= this.props.paginationSize) {
            for (let i = 1; i< pagesCount; i++){
                pages.push(i);
            }
        } else {
                let min = this.props.currentPage - (Math.ceil(this.props.paginationSize/2)),
                    max;
                    if (min <= 1) {
                        max = this.props.paginationSize;
                    } else { 
                        max = this.props.currentPage + (Math.ceil(this.props.paginationSize/2));
                    }
                for (let i = min; i <= max; i++){
                    if (i > 0){
                        pages.push(i);
                    }
                }
            

        }
        return <div>

            {(this.props.isFetchingToggle) ? <Preloader /> : <></>}

            Сотрудники подразделения
            <div className={style.pagination}>
                {pages.map(p => <span
                    className={this.props.currentPage === p ? style.activePage : null}
                    onClick={() => this.setCurrentPage(p)}>{p}</span>)}
            </div>
            <div>
                {this.props.users.map(u => {
                return (
                    <div key={u.id}>
                        <div>{u.name}</div>
                        {(u.photos.small === null) ? <img className={style.avatar} src={user}></img> : <img src={u.photos.small}></img>}
                        <div>{u.status}</div>
                        {(u.followed) ? <button onClick={() => this.unFollow(u.id)}>Unfollow</button> : <button onClick={() => this.follow(u.id)}>Follow</button>}
                    </div>
                )
            })
            }
            </div>

        </div>
    }
}

export default Users;