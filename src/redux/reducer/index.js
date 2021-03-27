import { combineReducers } from 'redux';

import allGistReducer from "./allGists";
import singleGistReducer from "./singleGist";

const rootReducer = combineReducers({
    all: allGistReducer,
    single: singleGistReducer
});

export default rootReducer;