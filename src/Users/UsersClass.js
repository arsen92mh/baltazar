import React from 'react'
import * as axios from "axios";
import user from "../img/user.jpg";
import style from "./users.module.css";


class Users extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
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
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
            });
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return <div>
            Сотрудники подразделения
            <div className={style.pagination}>
                {pages.map(p => <span
                    className={this.props.currentPage === p ? style.activePage : null}
                    onClick={() => this.setCurrentPage(p)}>{p}</span>)}
            </div>
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
    }
}

export default Users;