import {
    CLEAR_ALL_DAY_DATA,
    CLOSE_DAY_CLEAR_PV_CH,
    CLOSE_DAY_PV_CH,
    GET_CENTER_INF_PV_CH,
    GET_CENTER_INF_PV_CH_FAILED,
    GET_CENTER_INF_PV_CH_SUCCESS,
    GET_SCORE5_PV_CH,
    GET_SCORE5_PV_CH_FAILED,
    GET_SCORE5_PV_CH_SUCCESS,
    GET_SCORE_GLOBAL_MODERATOR_PV_CH,
    GET_SCORE_GLOBAL_MODERATOR_PV_CH_FAILED,
    GET_SCORE_GLOBAL_MODERATOR_PV_CH_SUCCESS,
    GET_SCORE_GLOBAL_PV_CH,
    GET_SCORE_GLOBAL_PV_CH_FAILED,
    GET_SCORE_GLOBAL_PV_CH_SUCCESS,
    UPDATE_CENTER_INF_PV_CH,
    UPDATE_CENTER_INF_PV_CH_FAILED,
    UPDATE_CENTER_INF_PV_CH_SUCCESS,
} from "../../constants/actionTypes";
import {REHYDRATE} from "redux-persist";

const INIT_STATE = {
    center: {},
    score: {},
    loading: false,
    closeDay: null,
    scoreGlobal: [],
    scoreGlobalModerator: [],
};

const PvChallenge = (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_CENTER_INF_PV_CH:
            return {...state, loading: true};

        case GET_CENTER_INF_PV_CH_SUCCESS:
            return {...state, center: action.payload.center, loading: false};

        case GET_CENTER_INF_PV_CH_FAILED:
            return {...state, error: action.payload.error, loading: false};

        case UPDATE_CENTER_INF_PV_CH:
            return {...state, loading: true, center: {...state.center, name: action.payload.name}};

        case UPDATE_CENTER_INF_PV_CH_SUCCESS:
            return {...state, center: action.payload.center, loading: false};

        case UPDATE_CENTER_INF_PV_CH_FAILED:
            return {...state, error: action.payload.error, loading: false};

        case GET_SCORE5_PV_CH:
            return {...state, loading: true};

        case GET_SCORE5_PV_CH_SUCCESS:
            return {...state, score: action.payload.score, loading: false};

        case GET_SCORE5_PV_CH_FAILED:
            return {...state, error: action.payload.error, loading: false};

        case GET_SCORE_GLOBAL_PV_CH:
            return {...state, loading: true};

        case GET_SCORE_GLOBAL_PV_CH_SUCCESS:
            return {
                ...state,
                scoreGlobal: action.payload.scoreGlobal,
                loading: false,
            };

        case GET_SCORE_GLOBAL_PV_CH_FAILED:
            return {...state, error: action.payload.error, loading: false};

        case GET_SCORE_GLOBAL_MODERATOR_PV_CH:
            return {...state, loading: true};

        case GET_SCORE_GLOBAL_MODERATOR_PV_CH_SUCCESS:
            return {
                ...state,
                scoreGlobalModerator: action.payload.scoreGlobalModerator,
                loading: false,
            };

        case GET_SCORE_GLOBAL_MODERATOR_PV_CH_FAILED:
            return {...state, error: action.payload.error, loading: false};

        case CLOSE_DAY_PV_CH:
            return {...state, closeDay: action.payload};

        case CLOSE_DAY_CLEAR_PV_CH:
            return {...state, closeDay: null};

        case CLEAR_ALL_DAY_DATA:
            return {...INIT_STATE};

        case REHYDRATE:
            return action.payload
                ? {
                    ...state,
                    ...action.payload.PvChallenge,
                }
                : {
                    ...state,
                };
        default:
            return {...state};
    }
};

export default PvChallenge;
