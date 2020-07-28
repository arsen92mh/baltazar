import Users from "./UsersClass";
import {connect} from "react-redux";
import {setUsersAC, followAC, unFollowAC, setCurrentPageAC, setTotalCountAC, isFetchingAC} from "../redux/users-reducer";


const mapStateToProps = (state) => {
    return {
        users: state.users.usersList,
        totalCount: state.users.totalCount,
        pageSize: state.users.pageSize,
        currentPage: state.users.currentPage,
        paginationSize: state.users.paginationSize,
        isFetchingToggle: state.users.isFetchingToggle
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
        },
        isFetching: (param) => {
            dispatch(isFetchingAC(param));
        }
        
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;


