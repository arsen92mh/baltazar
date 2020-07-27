import Users from "./Users";
import {connect} from "react-redux";
import {setUsersAC, followAC, unFollowAC} from "../redux/users-reducer";


const mapStateToProps = (state) => {
    return {
        users: state.users.usersList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId));
        }
        
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;


