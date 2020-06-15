import React from "react";
import {addPostActionCreator, newPostTextActionCreator} from "../../redux/post-reducer";
import Maincontent from "./Maincontent"; 

const MaincontentContainer = (props) => {

    let addpostCont = () => {
        props.dispatch(addPostActionCreator());
    }

    let newPostTextCont = (questText, ansText) => {
        props.dispatch(newPostTextActionCreator(questText, ansText));
    }

    return (
        <Maincontent state={props.state} addpostCont={addpostCont} newPostTextCont={newPostTextCont} dispatch={props.dispatch}/>
    );

}

export default MaincontentContainer;