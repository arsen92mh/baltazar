import AddCategory from "./AddCategory";
import {createCategoryActionCreator, updateNewCategoryActionCreator} from "./../../redux/links-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        linkData: state.links.linkData,
        newLinkData: state.links.newLinkData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        createCategoryCont: () => {
            dispatch(createCategoryActionCreator());
        },
        updatingNewCategoryCont: (name, path) => {
            dispatch(updateNewCategoryActionCreator(name, path));
        }
    }
}

const AddCategoryContainer = connect(mapStateToProps, mapDispatchToProps)(AddCategory);

export default AddCategoryContainer;