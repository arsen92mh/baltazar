import React from 'react'
import * as axios from "axios";

const Users = (props) => {


    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        });

        
    }

    let follow = (userId) => {
        props.follow(userId);
    }

    let unFollow = (userId) => {
        props.unFollow(userId);
    }
    
    let UsersArr = props.users.map( u => {return (
        <div key={u.id}>
            <div>{u.name}</div>
            <img src={u.photos.small}></img>
            <div>{u.status}</div>
            { (u.followed) ? <button onClick={() => unFollow(u.id)}>Unfollow</button> : <button onClick={() => follow(u.id)}>Follow</button> }
        </div>
    )} )

    return(
        <>
        Сотрудники подразделения

        {UsersArr}
        </>
    );
}

export default Users;