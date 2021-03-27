import * as actions from "../actionType";
const initialState = {
    loading: false,
    error: null,
    forks: []
};

const singleGistReducer = (state = initialState, action) => {
    if (action.type === actions.FETCH_GIST_REQUEST) 
        return {
            ...state,
            loading: true,
            error: null,
            forks: []
        };
    if (action.type === actions.FETCH_GIST_SUCCESS)
        return {
            ...state,
            loading: false,
            error: null,
            forks: [...action.payload]
        };
    if (action.type === actions.FETCH_GIST_FAILED)
        return {
            ...state,
            loading: false,
            forks: [],
            error: action.payload
        };
    return state;
};

export default singleGistReducer;