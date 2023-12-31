import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistReducer } from 'redux-persist';
import { LOGOUT_USER } from '../constants/actionTypes';
import PvChallenge from "./pvChallenge/reducers";
import Levels from "./levels/reducers";

const persistConfig = {
    key: 'hackermind', storage: storage, whitelist: [],
};

const appReducer = combineReducers({
    PvChallenge,
    Levels
});


const rootReducer = (state, action) => {
    if (action.type === LOGOUT_USER) {
        storage.removeItem('persist:hackermind');
        state = undefined;
    }
    return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
