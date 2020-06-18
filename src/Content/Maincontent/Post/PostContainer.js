import {newCommentTextActionCreator, newCommentActionCreator} from "./../../../redux/post-reducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    return {
        postData: state.posts.postData,
        newCommentData: state.posts.newCommentData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewCommentTextCont: (message, id) => {
            dispatch(newCommentTextActionCreator(message, id));
        },
        addCommentCont: (id) => {
            dispatch(newCommentActionCreator(id));
        }
    }
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default PostContainer;