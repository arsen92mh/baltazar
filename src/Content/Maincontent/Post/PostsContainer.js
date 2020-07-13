import { addPostActionCreator, newPostTextActionCreator} from "../../../redux/post-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        linkData: state.links.linkData,
        postData: state.posts.postData,
        newPostQuestion: state.posts.newPostData.newPostQuestion,
        newPostAnswer: state.posts.newPostData.newPostAnswer
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