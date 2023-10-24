import {
    CHANGE_SELECT_DECISIONS_FOLDER,
    CLEAR_ALL_DAY_DATA,
    CLEAR_DAY,
    DAY1_STEP_2_VALIDATIONS_FAILED,
    DAY2_PART2_PV_CH_ONCHANGE_IS_SELECTED,
    DAY2_PV_CH_GET_DETAIL,
    DAY3_PART2_PV_CH_ONDRAG,
    DAY3_PV_CH_GET_DETAIL,
    DAY4_PV_CH_GET_DETAIL,
    DAY4_PV_CH_ONCHANGE_CAT1,
    DAY4_PV_CH_ONCHANGE_CAT2,
    DAY4_PV_CH_ONCHANGE_CAT3,
    DAY5_PV_CH_GET_DETAIL,
    DGD_DECISIONS,
    ONCHANGE_RADIO,
    VALIDATION_DAY,
    VALIDATION_DAY_SUCCESS,
    VALIDATE_ACTIVITY,
    MOVE_MATRIX_DRD,
    SET_MATRIX_STEP,
    SET_CURRENT_AVATAR,
    DAY_GET_DETAIL,
    DAY_GET_DETAIL_SUCCESS,
    DAY_GET_DETAIL_FAILED
} from "../../constants/actionTypes";


export const day2getDetail = (challengeId) => ({
    type: DAY2_PV_CH_GET_DETAIL,
    payload: { challengeId },
});


export const day3getDetail = (challengeId) => ({
    type: DAY3_PV_CH_GET_DETAIL,
    payload: { challengeId },
});

export const day3Part2UpdateDecisions = (decisions) => ({
    type: DAY3_PART2_PV_CH_ONDRAG,
    payload: decisions,
});

export const day2Part2ChangeIsSelected = (index, value) => ({
    type: DAY2_PART2_PV_CH_ONCHANGE_IS_SELECTED,
    payload: { index, value },
});



export const onChangePvChCat3Day4 = (id, value) => ({
    type: DAY4_PV_CH_ONCHANGE_CAT3,
    payload: { id, value },
});
export const onChangePvChCat2Day4 = (id, value) => ({
    type: DAY4_PV_CH_ONCHANGE_CAT2,
    payload: { id, value },
});

export const onChangePvChCat1Day4 = (id, value) => ({
    type: DAY4_PV_CH_ONCHANGE_CAT1,
    payload: { id, value },
});


export const day4getDetail = (challengeId) => ({
    type: DAY4_PV_CH_GET_DETAIL,
    payload: { challengeId },
});

export const day5getDetail = (challengeId) => ({
    type: DAY5_PV_CH_GET_DETAIL,
    payload: { challengeId },
});

export const dragDropUpdateDecisions = (decisions, day, part) => ({
    type: DGD_DECISIONS,
    payload: {
        decisions,
        day,
        part
    },
});

export const day1Step2ValidationsFailed = () => ({
    type: DAY1_STEP_2_VALIDATIONS_FAILED,
    payload: null,
});

export const ChangeSelectedRadio = (decisions, day, part) => ({
    type: ONCHANGE_RADIO,
    payload: {
        decisions,
        day,
        part
    },
});

export const validDay = (missionId, day, option, callback) => ({
    type: VALIDATION_DAY,
    payload: { missionId, day, callback, option },
});

export const validDaySuccess = () => ({
    type: VALIDATION_DAY_SUCCESS,
    payload: {},
});

export const changeSelectDecisionsFolder = (id) => ({
    type: CHANGE_SELECT_DECISIONS_FOLDER,
    payload: id,
});

export const clearDayData = (index) => ({
    type: CLEAR_DAY,
    payload: index,
});


export const initDaysData = () => ({
    type: CLEAR_ALL_DAY_DATA,
    payload: null,
});

export const validateActivity = (day, part, decisions) => ({
    type: VALIDATE_ACTIVITY,
    payload: { day, part, decisions },
})

export const day1MoveMatrixDrd = (id, idCell) => ({
    type: MOVE_MATRIX_DRD,
    payload: { id, idCell },
})
export const setMatrixStep = (name, value) => ({
    type: SET_MATRIX_STEP,
    payload: { name, value },
})
export const setCurrentAvatar = (activeitem, isUpdate) => ({
    type: SET_CURRENT_AVATAR,
    payload: { activeitem, isUpdate },
})

export const dayGetDetail = (dayId, missionId) => ({
    type: DAY_GET_DETAIL,
    payload: { dayId, missionId },
});

export const dayGetDetailSuccess = (dayId, data) => ({
    type: DAY_GET_DETAIL_SUCCESS,
    payload: { dayId, data },
});

export const dayGetDetailFailed = (error) => ({
    type: DAY_GET_DETAIL_FAILED,
    payload: { error },
});


