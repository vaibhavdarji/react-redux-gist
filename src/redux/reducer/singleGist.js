import * as actions from "../actionType";
const initialState = {
    loading: false,
    error: null,
    gist: {}
};

const singleGistReducer = (state = initialState, action) => {
    if (action.type === actions.FETCH_GIST_REQUEST) 
        return {
            ...state,
            loading: true,
            error: null,
            gist: {}
        };
    if (action.type === actions.FETCH_GIST_SUCCESS)
        return {
            ...state,
            loading: false,
            error: null,
            gist: {...action.payload}
        };
    if (action.type === actions.FETCH_GIST_FAILED)
        return {
            ...state,
            loading: false,
            gist: {},
            error: action.payload
        };
    return state;
};

export default singleGistReducer;