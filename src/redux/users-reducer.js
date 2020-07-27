const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState= {
    usersList: []
}

export const setUsersAC = (users) =>  ({type: SET_USERS, users});
export const followAC = (userId) =>  ({type: FOLLOW, userId});
export const unFollowAC = (userId) =>  ({type: UNFOLLOW, userId});

export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS:
            return {...state, usersList: [...state.usersList, ...action.users]}
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
        default:
            return state;
    }
}


