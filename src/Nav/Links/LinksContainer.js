import Links from "./Links";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        linkData: state.links.linkData
    }
}

let mapDispatchToProps = () => {
    return {

    }
}

const LinksContainer = connect(mapStateToProps, mapDispatchToProps)(Links)


export default LinksContainer;