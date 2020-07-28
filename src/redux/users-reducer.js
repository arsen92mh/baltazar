const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";

let initialState= {
    usersList: [],
    totalCount: 0,
    pageSize: 10,
    currentPage: 1,
    paginationSize: 10
}

export const setUsersAC = (users) =>  ({type: SET_USERS, users});
export const followAC = (userId) =>  ({type: FOLLOW, userId});
export const unFollowAC = (userId) =>  ({type: UNFOLLOW, userId});
export const setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalCountAC = (count) => ({type: SET_TOTAL_COUNT, count});

export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS:
            return {...state, usersList: [...action.users]}
        case FOLLOW:
            return {
                ...state,
                usersList: state.usersList.map( u => {
                    if (action.userId === u.id) {
                        return {...u, followed: true};
                    } else {
                        return u;
                    }
                } )
            }
            case UNFOLLOW:
            return {
                ...state,
                usersList: state.usersList.map( u => {
                    if (action.userId === u.id) {
                        return {...u, followed: false};
                    } else {
                        return u;
                    }
                } )
            }
            case SET_CURRENT_PAGE:
                return {
                    ...state, currentPage: action.page
                }
                case SET_TOTAL_COUNT:
                    return {
                        ...state, totalCount: action.count
                    }
        default:
            return state;
    }
}


