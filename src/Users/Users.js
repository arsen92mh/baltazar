import React from 'react'
import * as axios from "axios";
import user from "../img/user.jpg";
import style from "./users.module.css";

const Users = (props) => {

    let getUsers = () => {

    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        });

        
    }

}

    let follow = (userId) => {
        props.follow(userId);
    }
 
    let unFollow = (userId) => {
        props.unFollow(userId);
    }
    
    

    return(
        <>
        Сотрудники подразделения

        <button onClick={getUsers}>Get users</button>

      {  props.users.map( u => {return (
        <div key={u.id}>
            <div>{u.name}</div>
            { (u.photos.small === null) ? <img className={style.avatar} src={user}></img> : <img src={u.photos.small}></img>}
            <div>{u.status}</div>
            { (u.followed) ? <button onClick={() => unFollow(u.id)}>Unfollow</button> : <button onClick={() => follow(u.id)}>Follow</button> }
        </div>
    )} )
      }

        </>
    );
}

export default Users;