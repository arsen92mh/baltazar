import React from 'react'
import style from "../Maincontent.module.css";
import PostContainer from "./PostContainer";
import AddPost from './AddPost';
import {Redirect} from "react-router-dom"

const Posts = (props) => {



    return (
        <>

            {(props.isAuthorized === false) ? <Redirect to="login"/> : null}

            <div className={style.content}>
                {
                    (props.isAbletoModerate) ?
                        <AddPost
                            addpostCont={props.addpostCont}
                            newPostTextCont={props.newPostTextCont}
                            newPostData={props.newPostData}
                        /> : null
                }

            {props.categories.map( c => <span>{c.param}</span>)}


                <PostContainer />

            </div>

        </>
    );
}

export default Posts;