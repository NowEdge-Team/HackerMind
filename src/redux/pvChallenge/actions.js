import {
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
    GET_SCORE_PV_CH,
    GET_SCORE_PV_CH_FAILED,
    GET_SCORE_PV_CH_SUCCESS,
    UPDATE_CENTER_INF_PV_CH,
    UPDATE_CENTER_INF_PV_CH_FAILED,
    UPDATE_CENTER_INF_PV_CH_SUCCESS,
} from "../../constants/actionTypes";

export const getCenterInfoPvCh = (gameSessionId) => ({
    type: GET_CENTER_INF_PV_CH,
    payload: { gameSessionId },
});

export const getCenterInfoPvChSuccess = (center) => ({
    type: GET_CENTER_INF_PV_CH_SUCCESS,
    payload: { center },
});

export const getCenterInfoPvChFailed = (error) => ({
    type: GET_CENTER_INF_PV_CH_FAILED,
    payload: { error },
});

export const updateCenterPvChInfo = (
    gameSessionId,
    name,
    avatarId,
    fonction
) => ({
    type: UPDATE_CENTER_INF_PV_CH,
    payload: { gameSessionId, name, avatarId, fonction },
});

export const updateCenterInfoPvChSuccess = (center) => ({
    type: UPDATE_CENTER_INF_PV_CH_SUCCESS,
    payload: { center },
});

export const updateCenterInfoPvChFailed = (error) => ({
    type: UPDATE_CENTER_INF_PV_CH_FAILED,
    payload: { error },
});

export const getscorePvCh = (centerId) => ({
    type: GET_SCORE_PV_CH,
    payload: { centerId },
});

export const getscorePvChSuccess = (score) => ({
    type: GET_SCORE_PV_CH_SUCCESS,
    payload: { score },
});

export const getscorePvChFailed = (error) => ({
    type: GET_SCORE_PV_CH_FAILED,
    payload: { error },
});

export const getScoreGlobalPvCh = (gameSessionId) => ({
    type: GET_SCORE_GLOBAL_PV_CH,
    payload: { gameSessionId },
});

export const getScoreGlobalPvChSuccess = (scoreGlobal) => ({
    type: GET_SCORE_GLOBAL_PV_CH_SUCCESS,
    payload: { scoreGlobal },
});

export const getScoreGlobalPvChFailed = (error) => ({
    type: GET_SCORE_GLOBAL_PV_CH_FAILED,
    payload: { error },
});

export const getScoreGlobalPvChModerator = (gameSessionId) => ({
    type: GET_SCORE_GLOBAL_MODERATOR_PV_CH,
    payload: { gameSessionId },
});

export const getScoreGlobalModeratorPvChSuccess = (scoreGlobalModerator) => ({
    type: GET_SCORE_GLOBAL_MODERATOR_PV_CH_SUCCESS,
    payload: { scoreGlobalModerator },
});

export const getScoreGlobalModeratorPvChFailed = (error) => ({
    type: GET_SCORE_GLOBAL_MODERATOR_PV_CH_FAILED,
    payload: { error },
});

export const closeDaySuccess = (closeDay) => ({
    type: CLOSE_DAY_PV_CH,
    payload: closeDay,
});

export const closeDayPvChClear = () => ({
    type: CLOSE_DAY_CLEAR_PV_CH,
    payload: null,
});


export const getscorePVCh = (missionId) => ({
    type: GET_SCORE5_PV_CH,
    payload: { missionId },
});

export const getscorePVChSuccess = (score) => ({
    type: GET_SCORE5_PV_CH_SUCCESS,
    payload: { score },
});

export const getscorePVChFailed = (error) => ({
    type: GET_SCORE5_PV_CH_FAILED,
    payload: { error },
});
