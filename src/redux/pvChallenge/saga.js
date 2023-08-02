import {all, call, fork, put, takeEvery} from "redux-saga/effects";

import {
    GET_CENTER_INF_PV_CH,
    GET_SCORE5_PV_CH,
    GET_SCORE_GLOBAL_MODERATOR_PV_CH,
    GET_SCORE_GLOBAL_PV_CH,
    UPDATE_CENTER_INF_PV_CH,
} from "../../constants/actionTypes";

import {
    getCenterInfoService,
    getScoreGlobalModeratorService,
    getScoreGlobalService,
    getScoreService,
    updateCenterInfoService
} from "./service";
import {
    getCenterInfoPvChFailed,
    getCenterInfoPvChSuccess,
    getScoreGlobalModeratorPvChFailed,
    getScoreGlobalModeratorPvChSuccess,
    getScoreGlobalPvChFailed,
    getScoreGlobalPvChSuccess,
    getscorePVChFailed,
    getscorePVChSuccess,
    updateCenterInfoPvChFailed,
    updateCenterInfoPvChSuccess,
} from "./actions";

function* updateCenterInfoSaga({
                                   payload: {gameSessionId, name, avatarId, fonction},
                               }) {
    try {
        const response = yield call(
            updateCenterInfoService,
            gameSessionId,
            name,
            avatarId,
            fonction
        );
        yield put(updateCenterInfoPvChSuccess(response));
    } catch (error) {
        //console.log("error ................", error);
        let message;
        switch (error.status) {
            case 500:
                message = "Internal Server Error";
                break;
            case 401:
                message = "Invalid credentials";
                break;
            default:
                message = error;
        }
        yield put(updateCenterInfoPvChFailed(message));
    }
}

function* getCenterInfoSaga({payload: {gameSessionId}}) {
    try {
        const response = yield call(getCenterInfoService, gameSessionId);
        yield put(getCenterInfoPvChSuccess(response));
    } catch (error) {
        //console.log("error ................", error);
        let message;
        switch (error.status) {
            case 500:
                message = "Internal Server Error";
                break;
            case 401:
                message = "Invalid credentials";
                break;
            default:
                message = error;
        }
        yield put(getCenterInfoPvChFailed(message));
    }
}

function* getScore({payload: {missionId}}) {
    try {
        const response = yield call(getScoreService, missionId);
        yield put(getscorePVChSuccess(response));
    } catch (error) {
        let message;
        switch (error.status) {
            case 500:
                message = "Internal Server Error";
                break;
            case 401:
                message = "Invalid credentials";
                break;
            default:
                message = error;
        }
        yield put(getscorePVChFailed(message));
    }
}

function* getScoreGlobalModerator({payload: {gameSessionId}}) {
    try {
        const response = yield call(getScoreGlobalModeratorService, gameSessionId);
        yield put(getScoreGlobalModeratorPvChSuccess(response));
    } catch (error) {
        let message;
        switch (error.status) {
            case 500:
                message = "Internal Server Error";
                break;
            case 401:
                message = "Invalid credentials";
                break;
            default:
                message = error;
        }
        yield put(getScoreGlobalModeratorPvChFailed(message));
    }
}

function* getScoreGlobal({payload: {gameSessionId}}) {
    try {
        const response = yield call(getScoreGlobalService, gameSessionId);
        yield put(getScoreGlobalPvChSuccess(response));
    } catch (error) {
        let message;
        switch (error.status) {
            case 500:
                message = "Internal Server Error";
                break;
            case 401:
                message = "Invalid credentials";
                break;
            default:
                message = error;
        }
        yield put(getScoreGlobalPvChFailed(message));
    }
}

export function* watchGetCenterInfoSaga() {
    yield takeEvery(GET_CENTER_INF_PV_CH, getCenterInfoSaga);
}

export function* watchGetScore() {
    yield takeEvery(GET_SCORE5_PV_CH, getScore);
}

export function* watchGetScoreGlobal() {
    yield takeEvery(GET_SCORE_GLOBAL_PV_CH, getScoreGlobal);
}

export function* watchGetScoreGlobalModerator() {
    yield takeEvery(GET_SCORE_GLOBAL_MODERATOR_PV_CH, getScoreGlobalModerator);
}

export function* watchUpdateCenterInfoSaga() {
    yield takeEvery(UPDATE_CENTER_INF_PV_CH, updateCenterInfoSaga);
}


function* PvChallengeSaga() {
    yield all([fork(watchGetCenterInfoSaga),
        fork(watchUpdateCenterInfoSaga),
        fork(watchGetScore),
        fork(watchGetScoreGlobal),
        fork(watchGetScoreGlobalModerator),

    ]);
}

export default PvChallengeSaga;
