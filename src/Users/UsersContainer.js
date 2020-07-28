import React from 'react'
import Users from "./Users";
import {connect} from "react-redux";
import {setUsersAC, followAC, unFollowAC, setCurrentPageAC, setTotalCountAC, isFetchingAC} from "../redux/users-reducer";
import * as axios from "axios";

class UsersClass extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.isFetching(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
                this.props.isFetching(false);
                
            });
        }
    }

    follow = (userId) => {
        this.props.follow(userId);
    }
    unFollow = (userId) => {
        this.props.unFollow(userId);
    }
    setCurrentPage = (page) => {
        debugger;
        this.props.isFetching(true);
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.isFetching(false);
            
        });
    }
    
    render() {
        
        
        return <Users
            isFetchingToggle={this.props.isFetchingToggle}
            totalCount={this.props.totalCount}
            users={this.props.users}
            pageSize={this.props.pageSize}
            paginationSize={this.props.paginationSize}
            currentPage={this.props.currentPage}
            isFetchingToggle={this.props.isFetchingToggle}
            setCurrentPage={this.setCurrentPage}
            unFollow={this.unFollow}
            follow={this.follow}

        />
    }
}


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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);

export default UsersContainer;


