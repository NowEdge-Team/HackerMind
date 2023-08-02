import {
    CHANGE_SELECT_DECISIONS_FOLDER, CLEAR_ALL_DAY_DATA, CLEAR_DAY,
    Day10_GET_DETAIL,
    Day10_GET_DETAIL_FAILED,
    Day10_GET_DETAIL_SUCCESS,
    DAY10_ON_CHANGE_PART1,
    DAY10_ON_CHANGE_PART2,
    DAY10_RESET_PART2,
    DAY10_VALIDATIONS,
    DAY10_VALIDATIONS_FAILED,
    DAY10_VALIDATIONS_SUCCESS,
    DAY1_GET_DETAIL,
    DAY1_GET_DETAIL_FAILED,
    DAY1_GET_DETAIL_SUCCESS,
    DAY1_PART1_ONCHANGE_IS_SELECTED,
    DAY1_PART2_ONDRAG,
    DAY1_PART3_ONCHANGE_PV_CH,
    DAY1_STEP_2_GET_DETAIL,
    DAY1_STEP_2_GET_DETAIL_FAILED,
    DAY1_STEP_2_GET_DETAIL_SUCCESS,
    DAY1_STEP_2_VALIDATIONS,
    DAY1_STEP_2_VALIDATIONS_FAILED,
    DAY1_STEP_2_VALIDATIONS_SUCCESS,
    DAY1_VALIDATION_FAILED,
    DAY1_VALIDATION_PV_CH,
    DAY1_VALIDATION_SUCCESS,
    DAY2_GET_PV_CH_DETAIL_FAILED,
    DAY2_GET_PV_CH_DETAIL_SUCCESS,
    DAY2_PART1_PV_CH_ONCHANGE_IS_SELECTED,
    DAY2_PART2_PV_CH_ONCHANGE_IS_SELECTED,
    DAY2_PART4_PV_CH_ONCHANGE_IS_SELECTED,
    DAY2_PV_CH_GET_DETAIL,
    DAY2_VALID_DAY_PV_CH,
    DAY3_GET_PV_CH_DETAIL_FAILED,
    DAY3_GET_PV_CH_DETAIL_SUCCESS,
    DAY3_PART1_ONCHANGE_PV_CH,
    DAY3_PART1_PV_CH_ONCHANGE_IS_SELECTED,
    DAY3_PART2_PV_CH_ONDRAG,
    DAY3_PART3_PV_CH_ONCHANGE_IS_SELECTED,
    DAY3_PART4_ONCHANGE_PV_CH,
    DAY3_PART5_PV_CH_ONCHANGE_IS_SELECTED,
    DAY3_PV_CH_GET_DETAIL,
    DAY3_VALIDATION_PV_CH,
    DAY4_PART2_PV_CH_CHANGE_IS_SELECTED_RADIO,
    DAY4_PV_CH_GET_DETAIL,
    DAY4_PV_CH_GET_DETAIL_FAILED,
    DAY4_PV_CH_GET_DETAIL_SUCCESS,
    DAY4_PV_CH_ONCHANGE_CAT1,
    DAY4_PV_CH_ONCHANGE_CAT2,
    DAY4_PV_CH_ONCHANGE_CAT3,
    DAY4_VALIDATION_PV_CH,
    DAY5_ONCHANGE_CAT0_RANK1,
    DAY5_ONCHANGE_CAT0_RANK2,
    DAY5_ONCHANGE_CAT0_RANK3,
    DAY5_ONCHANGE_CAT0_RANK4,
    DAY5_ONCHANGE_CAT1_LEFT_DECISIONS1,
    DAY5_ONCHANGE_CAT1_LEFT_DECISIONS2,
    DAY5_ONCHANGE_CAT1_LEFT_DECISIONS3,
    DAY5_ONCHANGE_CAT1_LEFT_DECISIONS4,
    DAY5_ONCHANGE_CAT1_RIGHT_DECISIONS1,
    DAY5_ONCHANGE_CAT1_RIGHT_DECISIONS2,
    DAY5_ONCHANGE_CAT1_RIGHT_DECISIONS3,
    DAY5_ONCHANGE_CAT1_RIGHT_DECISIONS4,
    DAY5_ONCHANGE_CAT2_LEFT_DECISIONS1,
    DAY5_ONCHANGE_CAT2_LEFT_DECISIONS2,
    DAY5_ONCHANGE_CAT2_LEFT_DECISIONS3,
    DAY5_ONCHANGE_CAT2_LEFT_DECISIONS4,
    DAY5_ONCHANGE_CAT2_RANK1,
    DAY5_ONCHANGE_CAT2_RANK2,
    DAY5_ONCHANGE_CAT2_RANK3,
    DAY5_ONCHANGE_CAT2_RANK4,
    DAY5_ONCHANGE_CAT2_RIGHT_DECISIONS1,
    DAY5_ONCHANGE_CAT2_RIGHT_DECISIONS2,
    DAY5_ONCHANGE_CAT2_RIGHT_DECISIONS3,
    DAY5_ONCHANGE_CAT2_RIGHT_DECISIONS4,
    DAY5_ONSELECT_CAT,
    DAY5_PV_CH_GET_DETAIL,
    DAY5_PV_CH_GET_DETAIL_FAILED,
    DAY5_PV_CH_GET_DETAIL_SUCCESS,
    DAY5_VALIDATION,
    DAY5_VALIDATION_FAILED,
    DAY5_VALIDATION_SUCCESS,
    DAY7_GET_DETAIL,
    DAY7_GET_DETAIL_FAILED,
    DAY7_GET_DETAIL_SUCCESS,
    DAY7_ON_CHANGE_CAS_OPTION,
    DAY7_VALID_CAS,
    DAY7_VALID_CAS_FAILED,
    DAY7_VALID_CAS_SUCCESS,
    DAY7_VALID_DAY,
    DAY7_VALID_DAY_FAILED,
    DAY7_VALID_DAY_SUCCESS,
    DAY8_VALIDATION,
    DAY8_VALIDATION_FAILED,
    DAY8_VALIDATION_SUCCESS,
    DGD_DECISIONS,
    ONCHANGE_RADIO,
    PH5_DAY2_Part1_ONCHANGE,
    PH5_DAY2_VALID_DAY_FAILED,
    PH5_DAY2_VALID_DAY_SUCCESS,
    PH5_DAY4_PART2_ONCHANGE_IS_SELECTED,
    PH5_DAY4_PART3_ONCHANGE_IS_SELECTED,
    PH5_DAY4_STEP_4_UPDATE_DECISIONS,
    PH5_DAY4_VALIDATION_FAILED,
    PH5_DAY4_VALIDATION_SUCCESS,
    PH5_DAY5_PART1_ONCHANGE_IS_SELECTED,
    PVPHA_Day3_GET_DETAIL,
    PVPHA_Day3_GET_DETAIL_FAILED,
    PVPHA_Day3_GET_DETAIL_SUCCESS,
    PVPHA_Day3_ONCHANGE_CAT1,
    PVPHA_Day3_VALIDATION_FAILED,
    PVPHA_Day3_VALIDATION_SUCCESS, VALIDATION_DAY, VALIDATION_DAY_SUCCESS
} from "../../constants/actionTypes";

export const onChangeCasValue = (response, axe, _idCas, _idLevel) => ({
    type: DAY7_ON_CHANGE_CAS_OPTION,
    payload: {response, axe, _idCas, _idLevel},
});

export const day2Part1OnChange = (title, value) => ({
    type: PH5_DAY2_Part1_ONCHANGE,
    payload: {title, value},
});

export const day2ValidDay = (challengeId, day2, callback) => ({
    type: DAY2_VALID_DAY_PV_CH,
    payload: {day2, challengeId, callback},
});
export const day2getDetail = (challengeId) => ({
    type: DAY2_PV_CH_GET_DETAIL,
    payload: {challengeId},
});
export const day2getDetailSuccess = (day2) => ({
    type: DAY2_GET_PV_CH_DETAIL_SUCCESS,
    payload: day2,
});
export const day2getDetailFailed = (error) => ({
    type: DAY2_GET_PV_CH_DETAIL_FAILED,
    payload: {error},
});

export const day3getDetail = (challengeId) => ({
    type: DAY3_PV_CH_GET_DETAIL,
    payload: {challengeId},
});
export const day3getDetailSuccess = (day3) => ({
    type: DAY3_GET_PV_CH_DETAIL_SUCCESS,
    payload: day3,
});
export const day3getDetailFailed = (error) => ({
    type: DAY3_GET_PV_CH_DETAIL_FAILED,
    payload: {error},
});


export const day2ValidDaySuccess = (callback) => ({
    type: PH5_DAY2_VALID_DAY_SUCCESS,
    payload: {callback},
});
export const day2ValidDayFailed = (error) => ({
    type: PH5_DAY2_VALID_DAY_FAILED,
    payload: {error},
});

export const onChangePartOneDay10 = (response, index, itemIndex) => ({
    type: DAY10_ON_CHANGE_PART1,
    payload: {response, index, itemIndex},
});

export const onChangePartTwoDay10 = (currentIndex, axe, index, response) => ({
    type: DAY10_ON_CHANGE_PART2,
    payload: {currentIndex, axe, index, response},
});

export const resetPartTwoDay10 = (currentIndex) => ({
    type: DAY10_RESET_PART2,
    payload: {currentIndex},
});

export const validCas = (cas, _idCas, _idLevel) => ({
    type: DAY7_VALID_CAS,
    payload: {_idCas, _idLevel, cas},
});

export const validCasSuccess = (cas, _idCas, _idLevel) => ({
    type: DAY7_VALID_CAS_SUCCESS,
    payload: {_idCas, _idLevel, cas},
});

export const validCasFailed = (error) => ({
    type: DAY7_VALID_CAS_FAILED,
    payload: {error},
});


export const day3Part2UpdateDecisions = (decisions) => ({
    type: DAY3_PART2_PV_CH_ONDRAG,
    payload: decisions,
});

export const day2Part2ChangeIsSelected = (index, value) => ({
    type: DAY2_PART2_PV_CH_ONCHANGE_IS_SELECTED,
    payload: {index, value},
});


export const day4Step4UpdateDecisions = (decisions) => ({
    type: PH5_DAY4_STEP_4_UPDATE_DECISIONS,
    payload: {decisions},
});

export const day4Part2ChangeIsSelected = (index, value) => ({
    type: PH5_DAY4_PART2_ONCHANGE_IS_SELECTED,
    payload: {index, value},
});

export const day4Part3ChangeIsSelected = (index, value) => ({
    type: PH5_DAY4_PART3_ONCHANGE_IS_SELECTED,
    payload: {index, value},
});


export const validDay4Failed = (error) => ({
    type: PH5_DAY4_VALIDATION_FAILED,
    payload: {error},
});

export const validDay4Success = () => ({
    type: PH5_DAY4_VALIDATION_SUCCESS,
    payload: null,
});

export const onChangeCatDay5 = (index) => ({
    type: DAY5_ONSELECT_CAT,
    payload: index,
});

export const onChangeCategory0Rank1Day5 = (index) => ({
    type: DAY5_ONCHANGE_CAT0_RANK1,
    payload: index,
});

export const onChangeCategory0Rank2Day5 = (index) => ({
    type: DAY5_ONCHANGE_CAT0_RANK2,
    payload: index,
});

export const onChangeCategory0Rank3Day5 = (index) => ({
    type: DAY5_ONCHANGE_CAT0_RANK3,
    payload: index,
});

export const onChangeCategory0Rank4Day5 = (index) => ({
    type: DAY5_ONCHANGE_CAT0_RANK4,
    payload: index,
});
export const onChangeCategory2Rank1Day5 = (index) => ({
    type: DAY5_ONCHANGE_CAT2_RANK1,
    payload: index,
});

export const onChangeCategory2Rank2Day5 = (index) => ({
    type: DAY5_ONCHANGE_CAT2_RANK2,
    payload: index,
});

export const onChangeCategory2Rank3Day5 = (index) => ({
    type: DAY5_ONCHANGE_CAT2_RANK3,
    payload: index,
});

export const onChangeCategory2Rank4Day5 = (index) => ({
    type: DAY5_ONCHANGE_CAT2_RANK4,
    payload: index,
});

export const onChangeCategory1LeftDecisions1Day5 = (index) => ({
    type: DAY5_ONCHANGE_CAT1_LEFT_DECISIONS1,
    payload: index,
});

export const onChangeCategory1LeftDecisions2Day5 = (index) => ({
    type: DAY5_ONCHANGE_CAT1_LEFT_DECISIONS2,
    payload: index,
});

export const onChangeCategory1LeftDecisions3Day5 = (index) => ({
    type: DAY5_ONCHANGE_CAT1_LEFT_DECISIONS3,
    payload: index,
});

export const onChangeCategory1LeftDecisions4Day5 = (index) => ({
    type: DAY5_ONCHANGE_CAT1_LEFT_DECISIONS4,
    payload: index,
});

export const onChangeCategory1RightDecisions1Day5 = (index) => ({
    type: DAY5_ONCHANGE_CAT1_RIGHT_DECISIONS1,
    payload: index,
});

export const onChangeCategory1RightDecisions2Day5 = (index) => ({
    type: DAY5_ONCHANGE_CAT1_RIGHT_DECISIONS2,
    payload: index,
});

export const onChangeCategory1RightDecisions3Day5 = (index) => ({
    type: DAY5_ONCHANGE_CAT1_RIGHT_DECISIONS3,
    payload: index,
});

export const onChangeCategory1RightDecisions4Day5 = (index) => ({
    type: DAY5_ONCHANGE_CAT1_RIGHT_DECISIONS4,
    payload: index,
});

export const onChangeCategory2LeftDecisions1Day5 = (index) => ({
    type: DAY5_ONCHANGE_CAT2_LEFT_DECISIONS1,
    payload: index,
});

export const onChangeCategory2LeftDecisions2Day5 = (index) => ({
    type: DAY5_ONCHANGE_CAT2_LEFT_DECISIONS2,
    payload: index,
});

export const onChangeCategory2LeftDecisions3Day5 = (index) => ({
    type: DAY5_ONCHANGE_CAT2_LEFT_DECISIONS3,
    payload: index,
});

export const onChangeCategory2LeftDecisions4Day5 = (index) => ({
    type: DAY5_ONCHANGE_CAT2_LEFT_DECISIONS4,
    payload: index,
});

export const onChangeCategory2RightDecisions1Day5 = (index) => ({
    type: DAY5_ONCHANGE_CAT2_RIGHT_DECISIONS1,
    payload: index,
});

export const onChangeCategory2RightDecisions2Day5 = (index) => ({
    type: DAY5_ONCHANGE_CAT2_RIGHT_DECISIONS2,
    payload: index,
});

export const onChangeCategory2RightDecisions3Day5 = (index) => ({
    type: DAY5_ONCHANGE_CAT2_RIGHT_DECISIONS3,
    payload: index,
});

export const onChangeCategory2RightDecisions4Day5 = (index) => ({
    type: DAY5_ONCHANGE_CAT2_RIGHT_DECISIONS4,
    payload: index,
});

export const validDay5 = (missionId, day5, callback) => ({
    type: DAY5_VALIDATION,
    payload: {missionId, day5, callback},
});

export const validDay5Failed = (error) => ({
    type: DAY5_VALIDATION_FAILED,
    payload: {error},
});

export const validDay5Success = () => ({
    type: DAY5_VALIDATION_SUCCESS,
    payload: null,
});


export const validDay3Failed = (error) => ({
    type: PVPHA_Day3_VALIDATION_FAILED,
    payload: {error},
});

export const validDay3Success = () => ({
    type: PVPHA_Day3_VALIDATION_SUCCESS,
    payload: null,
});
export const onChangePvChCat3Day4 = (id, value) => ({
    type: DAY4_PV_CH_ONCHANGE_CAT3,
    payload: {id, value},
});
export const onChangePvChCat2Day4 = (id, value) => ({
    type: DAY4_PV_CH_ONCHANGE_CAT2,
    payload: {id, value},
});

export const onChangePvChCat1Day4 = (id, value) => ({
    type: DAY4_PV_CH_ONCHANGE_CAT1,
    payload: {id, value},
});

export const onChangePvPHACat1Day3 = (id, value) => ({
    type: PVPHA_Day3_ONCHANGE_CAT1,
    payload: {id, value},
});
export const validDay8 = (missionId, day8, callback) => ({
    type: DAY8_VALIDATION,
    payload: {missionId, day8, callback},
});

export const validDay8Failed = (error) => ({
    type: DAY8_VALIDATION_FAILED,
    payload: {error},
});

export const validDay8Success = () => ({
    type: DAY8_VALIDATION_SUCCESS,
    payload: null,
});


export const day4getDetail = (challengeId) => ({
    type: DAY4_PV_CH_GET_DETAIL,
    payload: {challengeId},
});
export const day4getDetailSuccess = (day4) => ({
    type: DAY4_PV_CH_GET_DETAIL_SUCCESS,
    payload: day4,
});
export const day4getDetailFailed = (error) => ({
    type: DAY4_PV_CH_GET_DETAIL_FAILED,
    payload: {error},
});

export const day5getDetail = (challengeId) => ({
    type: DAY5_PV_CH_GET_DETAIL,
    payload: {challengeId},
});
export const day5getDetailSuccess = (day5) => ({
    type: DAY5_PV_CH_GET_DETAIL_SUCCESS,
    payload: day5,
});
export const day5getDetailFailed = (error) => ({
    type: DAY5_PV_CH_GET_DETAIL_FAILED,
    payload: {error},
});

export const day7getDetail = (missionId) => ({
    type: DAY7_GET_DETAIL,
    payload: {missionId},
});
export const day7getDetailSuccess = (day7) => ({
    type: DAY7_GET_DETAIL_SUCCESS,
    payload: {day7},
});
export const day7getDetailFailed = (error) => ({
    type: DAY7_GET_DETAIL_FAILED,
    payload: {error},
});

export const Day3getDetail = (missionId) => ({
    type: PVPHA_Day3_GET_DETAIL,
    payload: {missionId},
});
export const Day3getDetailSuccess = (day3) => ({
    type: PVPHA_Day3_GET_DETAIL_SUCCESS,
    payload: {day3},
});
export const Day3getDetailFailed = (error) => ({
    type: PVPHA_Day3_GET_DETAIL_FAILED,
    payload: {error},
});

export const day10Validations = (missionId, day10, callback) => ({
    type: DAY10_VALIDATIONS,
    payload: {missionId, day10, callback},
});

export const day10ValidationsSuccess = () => ({
    type: DAY10_VALIDATIONS_SUCCESS,
    payload: null,
});

export const day10ValidationsFailed = () => ({
    type: DAY10_VALIDATIONS_FAILED,
    payload: null,
});

export const Day10getDetail = (missionId) => ({
    type: Day10_GET_DETAIL,
    payload: {missionId},
});
export const Day10getDetailSuccess = (day10) => ({
    type: Day10_GET_DETAIL_SUCCESS,
    payload: {day10},
});
export const Day10getDetailFailed = (error) => ({
    type: Day10_GET_DETAIL_FAILED,
    payload: {error},
});

export const day7Validations = (missionId, day7, callback) => ({
    type: DAY7_VALID_DAY,
    payload: {missionId, day7, callback},
});
export const day7ValidationsSuccess = (currentLevel) => ({
    type: DAY7_VALID_DAY_SUCCESS,
    payload: {currentLevel},
});
export const day7ValidationsFailed = (error) => ({
    type: DAY7_VALID_DAY_FAILED,
    payload: {error},
});


export const day1Part3Change = (decisions) => ({
    type: DAY1_PART3_ONCHANGE_PV_CH,
    payload: decisions,
});

export const day3Part1Change = (decisions) => ({
    type: DAY3_PART1_ONCHANGE_PV_CH,
    payload: decisions,
});

export const day3Part4Change = (decisions) => ({
    type: DAY3_PART4_ONCHANGE_PV_CH,
    payload: decisions,
});


export const dragDropUpdateDecisions = (decisions, day, part) => ({
    type: DGD_DECISIONS,
    payload: {
        decisions,
        day,
        part
    },
});

export const day1Step2Validations = (missionId, list, callback) => ({
    type: DAY1_STEP_2_VALIDATIONS,
    payload: {missionId, list, callback},
});

export const day1Step2ValidationsSuccess = () => ({
    type: DAY1_STEP_2_VALIDATIONS_SUCCESS,
    payload: null,
});

export const day1Step2ValidationsFailed = () => ({
    type: DAY1_STEP_2_VALIDATIONS_FAILED,
    payload: null,
});

export const day1Step2getDetail = (missionId) => ({
    type: DAY1_STEP_2_GET_DETAIL,
    payload: {missionId},
});
export const day1Step2getDetailSuccess = (day3) => ({
    type: DAY1_STEP_2_GET_DETAIL_SUCCESS,
    payload: {day3},
});
export const day1Step2getDetailFailed = (error) => ({
    type: DAY1_STEP_2_GET_DETAIL_FAILED,
    payload: {error},
});


export const day2Part1ChangeIsSelected = (decision) => ({
    type: DAY2_PART1_PV_CH_ONCHANGE_IS_SELECTED,
    payload: decision,
});

export const day2Part3ChangeIsSelected = (decision) => ({
    type: DAY2_PART4_PV_CH_ONCHANGE_IS_SELECTED,
    payload: decision,
});


export const day3Part1ChangeIsSelected = (decision) => ({
    type: DAY3_PART1_PV_CH_ONCHANGE_IS_SELECTED,
    payload: decision,
});

export const day1Part2UpdateDecisions = (decisions) => ({
    type: DAY1_PART2_ONDRAG,
    payload: decisions,
});

export const day3Part3UpdateDecisions = (decisions) => ({
    type: DAY3_PART3_PV_CH_ONCHANGE_IS_SELECTED,
    payload: decisions,
});

export const day3Part5UpdateDecisions = (decisions) => ({
    type: DAY3_PART5_PV_CH_ONCHANGE_IS_SELECTED,
    payload: decisions,
});

export const day1Part1ChangeIsSelected = (decision) => ({
    type: DAY1_PART1_ONCHANGE_IS_SELECTED,
    payload: decision,
});

export const ChangeSelectedRadio = (decisions, day, part) => ({
    type: ONCHANGE_RADIO,
    payload: {
        decisions,
        day,
        part
    },
});

export const day4Part2ChangeIsSelectedRadio = (decisions) => ({
    type: DAY4_PART2_PV_CH_CHANGE_IS_SELECTED_RADIO,
    payload: decisions
});


export const day5Part1ChangeIsSelected = (decision) => ({
    type: PH5_DAY5_PART1_ONCHANGE_IS_SELECTED,
    payload: decision,
});
export const validDay1 = (challengeId, day1, callback) => ({
    type: DAY1_VALIDATION_PV_CH,
    payload: {challengeId, day1, callback},
});

export const validDay1Failed = (error) => ({
    type: DAY1_VALIDATION_FAILED,
    payload: {error},
});

export const validDay1Success = () => ({
    type: DAY1_VALIDATION_SUCCESS,
    payload: null,
});

export const day1getDetail = (missionId) => ({
    type: DAY1_GET_DETAIL,
    payload: {missionId},
});
export const day1getDetailSuccess = (day1) => ({
    type: DAY1_GET_DETAIL_SUCCESS,
    payload: day1,
});
export const day1getDetailFailed = (error) => ({
    type: DAY1_GET_DETAIL_FAILED,
    payload: {error},
});

export const validDay3 = (challengeId, day3, callback) => ({
    type: DAY3_VALIDATION_PV_CH,
    payload: {challengeId, day3, callback},
});

export const validDay4 = (challengeId, day4, callback) => ({
    type: DAY4_VALIDATION_PV_CH,
    payload: {challengeId, day4, callback},
});


export const validDay = (missionId, day,option,callback ) => ({
    type: VALIDATION_DAY,
    payload: {missionId, day, callback , option},
});

export const validDaySuccess= () => ({
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
