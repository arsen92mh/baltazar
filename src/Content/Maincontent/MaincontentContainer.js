import { addPostActionCreator, newPostTextActionCreator, newCommentTextActionCreator, newCommentActionCreator } from "../../redux/post-reducer";
import Maincontent from "./Maincontent";
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

const MaincontentContainer = connect(mapStateToProps,mapDispatchToProps)(Maincontent);

export default MaincontentContainer;