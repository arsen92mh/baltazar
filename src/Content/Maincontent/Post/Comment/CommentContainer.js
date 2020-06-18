import React from "react";
import style from "./Comment.module.css";
import Comment from "./Comment";

const CommentContainer = (props) => {

    let commentArr = props.commentData.map(c => <Comment key={c.commId} commentData={c} />);

   

    return (
        <div className={style.comm}>
            {commentArr}
        </div>
    );
}

export default CommentContainer;