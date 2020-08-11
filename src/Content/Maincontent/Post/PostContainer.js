import React from 'react'
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import * as axios from "axios";
import {setPostsAC} from "../../../redux/post-reducer";
import {setPostsFetchingAC} from "../../../redux/post-reducer";

class MyPostsClass extends React.Component {
    componentDidMount() {
        this.props.setPostsFetching(true);
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then(response => {
            this.props.setPosts(response.data);
        this.props.setPostsFetching(false);
        })
    }
    render() {
        return <MyPosts {...this.props}/>
    }
} 

let mapStateToProps = (state) => {
    return {
        postData: state.posts.postData,
        isFetching: state.posts.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setPosts: (data) => {
            dispatch(setPostsAC(data));
        },
        setPostsFetching: (param) => {
            dispatch(setPostsFetchingAC(param));
        }
    }
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPostsClass);


export default PostContainer;