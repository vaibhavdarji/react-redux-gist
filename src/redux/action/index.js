import * as actions from "../actionType";
import * as api from "../../config";


export const fetchAllGistsRequest = () => ({
    type: actions.FETCH_ALL_GISTS_REQUEST
});

export const fetchAllGistsSuccess = (payload, userName) => ({
    type: actions.FETCH_ALL_GISTS_SUCCESS,
    payload,
    userName
});

export const fetchAllGistsFailed = payload => ({
    type: actions.FETCH_ALL_GISTS_FAILED,
    payload
});

export const fetchAllGists = userName => {
    return function (dispatch) {
        dispatch(fetchAllGistsRequest());
        fetch(api.getAllGists(userName))
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error(`No result found for ${userName}`);
                }
            })
            .then(response => dispatch(fetchAllGistsSuccess(response, userName)))
            .catch(error => dispatch(fetchAllGistsFailed(error.message)));

    }
}

export const fetchGistRequest = () => ({
    type: actions.FETCH_GIST_REQUEST
});

export const fetchGistSuccess = payload => ({
    type: actions.FETCH_GIST_SUCCESS,
    payload
});

export const fetchGistFailed = payload => ({
    type: actions.FETCH_GIST_FAILED,
    payload
});

export const fetchGistDetail = id => {
    return function (dispatch) {
        dispatch(fetchGistRequest());
        fetch(api.getGist(id))
            .then(response => response.json())
            .then(response => dispatch(fetchGistSuccess(response)))
            .catch(error => dispatch(fetchGistFailed(error.message)));
    };
};