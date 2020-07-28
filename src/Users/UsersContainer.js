import Users from "./UsersClass";
import {connect} from "react-redux";
import {setUsersAC, followAC, unFollowAC, setCurrentPageAC, setTotalCountAC} from "../redux/users-reducer";


const mapStateToProps = (state) => {
    return {
        users: state.users.usersList,
        totalCount: state.users.totalCount,
        pageSize: state.users.pageSize,
        currentPage: state.users.currentPage,
        paginationSize: state.users.paginationSize
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
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page));
        },
        setTotalCount: (count) => {
            dispatch(setTotalCountAC(count));
        }
        
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;


