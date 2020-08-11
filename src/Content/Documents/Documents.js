import React from 'react'
import {connect} from "react-redux";
import { Redirect } from 'react-router-dom';

const Documents = (props) => {
    return (
        <>

        {(props.isAuthorized === false) ? <Redirect to="login"/> : null}

        Documents
        </>
    );
}

let mapStateToProps = (state) => {
    return {
        isAuthorized: state.auth.isAuthorized
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const DocumentsContainer = connect(mapStateToProps, mapDispatchToProps)(Documents);

export default DocumentsContainer;