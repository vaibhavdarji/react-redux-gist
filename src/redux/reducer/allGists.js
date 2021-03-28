import * as actions from "../actionType";
const initialState = {
    loading: false,
    error: null,
    gists: [],
    userName: ''
};

const allGistReducer = (state = initialState, action) => {
    if (action.type === actions.FETCH_ALL_GISTS_REQUEST) 
        return {
            ...state,
            loading: true,
            error: null,
            gists: [],
            userName: ''
        };
    if (action.type === actions.FETCH_ALL_GISTS_SUCCESS)  {
        return {
            ...state,
            loading: false,
            error: null,
            gists: [...action.payload],
            userName: action.userName
        };
    }
    if (action.type === actions.FETCH_ALL_GISTS_FAILED)
        return {
            ...state,
            loading: false,
            gists: [],
            // userName: action.userName,
            error: action.payload
        };
    return state;
};

export default allGistReducer;