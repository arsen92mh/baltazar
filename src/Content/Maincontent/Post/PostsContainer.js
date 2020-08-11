import { addPostActionCreator, newPostTextActionCreator, setPostsAC} from "../../../redux/post-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        isAbletoModerate: state.posts.isAbletoModerate,
        newPostData: state.posts.newPostData,
        categories: state.posts.categories,
        isAuthorized: state.auth.isAuthorized
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addpostCont: () => {
            dispatch(addPostActionCreator());
        },
        newPostTextCont: (questText, ansText) => {
            dispatch(newPostTextActionCreator(questText, ansText));
        }
    }
}

const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);

export default PostsContainer;