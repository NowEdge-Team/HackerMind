import {all, call, fork, put, takeEvery , delay} from "redux-saga/effects";
import {
    DAY1_GET_DETAIL,
    DAY1_VALIDATION_PV_CH,
    DAY2_PV_CH_GET_DETAIL,
    DAY2_VALID_DAY_PV_CH,
    DAY3_PV_CH_GET_DETAIL,
    DAY3_VALIDATION_PV_CH,
    DAY4_PV_CH_GET_DETAIL,
    DAY4_VALIDATION_PV_CH,
    DAY5_PV_CH_GET_DETAIL, VALIDATION_DAY,
} from "../../constants/actionTypes";
import {
    day1getDetailFailed,
    day1getDetailSuccess,
    day1Step2ValidationsFailed,
    day2getDetailFailed,
    day2getDetailSuccess,
    day2ValidDayFailed,
    day2ValidDaySuccess,
    day3getDetailFailed,
    day3getDetailSuccess,
    day4getDetailFailed,
    day4getDetailSuccess,
    day5getDetailFailed,
    day5getDetailSuccess,
    validDay3Failed,
    validDay4Failed, validDaySuccess
} from "./actions";
import {closeDayService5, getDetailsService5, saveDecisionsService5, saveDetailsService5} from "./service";
import {closeDayPVChSuccess} from "../pvChallenge/actions";
import _ from "lodash";
import store from "../store.js";
function* day4validationSaga({payload: {challengeId, day4, callback}}) {
    try {


        const list_c = [117, 119, 121, 123, 125, 127, 129, 132, 133, 135, 137, 139, 141, 143, 145, 148, 152, 125, 127];

        const lst = day4.categories.map((elem) => {

            return Object.entries(elem).filter(([key, value], index) => {
                return key.includes("selectedDecision")
            }).filter(([key, value], index) => {
                return list_c.includes(value);
            }).map(([key, val]) => val);

        })

        const correctResponse = lst.reduce(function (prev, next) {
            return prev.concat(next);
        });

        if (day4.part2.decisions[1].isSelected)
            correctResponse.push(154)


       yield call(
            saveDecisionsService5,
            4,
            correctResponse,
            challengeId
        );

         yield call(
            saveDetailsService5,
            4,
            challengeId,
            JSON.stringify(day4)
        );

        const responseCloseDay = yield call(closeDayService5, 4, challengeId);
        //console.log("response *******************", responseCloseDay);

        yield put(closeDayPVChSuccess(responseCloseDay));
        // yield put(validDay4Success());
        callback();
    } catch (error) {
        console.log("error ................", error);
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
        yield put(validDay4Failed(message));
    }
}
function* day4getDetailSaga({payload: {challengeId}}) {
    try {
        const responseDetail = yield call(getDetailsService5, 4, challengeId);
        //console.log("responseDetail ................", responseDetail);

        yield put(day4getDetailSuccess(responseDetail.details));
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
        yield put(day4getDetailFailed(message));
    }
}
function* day5getDetailSaga({payload: {challengeId}}) {
    try {
        const responseDetail = yield call(getDetailsService5, 5, challengeId);
        //console.log("responseDetail ................", responseDetail);

        yield put(day5getDetailSuccess(responseDetail.details));
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
        yield put(day5getDetailFailed(message));
    }
}
export function* watchDay5GetDetails() {
    yield takeEvery(DAY5_PV_CH_GET_DETAIL, day5getDetailSaga);
}

// -------
function* day1getDetailSaga({payload: {missionId}}) {
    try {
        const responseDetail = yield call(getDetailsService5, 1, missionId);
        console.log("responseDetail ................", responseDetail);

        yield put(day1getDetailSuccess(responseDetail.details));
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
        yield put(day1getDetailFailed(message));
    }
}


const validateData = (day,option)=>{

    const {parts , correctResponse} = option;
    const list = []
    for (const key in parts) {
        const part = day[`part${key}`];
        switch (parts[key].type) {
          case 'select':
              list.push(part.decisions.filter((el) => correctResponse.find(elm => elm === el.id && el.isSelected)).map((elm) => elm.id));
              break ;
         case "dgd":
             list.push(part.decisions.filter((el) => +el.category === +el.v_category).map((elm) => elm.id));
             break ;
         case 'classement':
             const cls_list =  Object.entries(part).map(([id,value])=> value).filter((el,index) =>  parts[key].position[index] === el);

             list.push(cls_list);
             break;
         case 'folder':
                list.push(parts[key].decisions.filter(elm=> correctResponse.includes(elm)));
             break;
        }
    }

    return _.flatten(list);

}

function* validationSaga({payload: {missionId, day, callback , option}}) {
    try {

       const  dayData =   store.store.getState().DaysPvCh[`day${day}`];

        const correctResponse =  validateData(dayData,option);

        // todo : delete this
        // yield delay(3000);
        // console.log("----correctResponse--->>>",correctResponse);
        // yield put(validDaySuccess());
        // callback();
        // return ;
        //

        yield call(
            saveDecisionsService5,
            day,
            correctResponse,
            missionId
        );

        yield call(
            saveDetailsService5,
            day,
            missionId,
            JSON.stringify(dayData)
        );

        const responseCloseDay = yield call(closeDayService5, day, missionId);

        yield put(closeDayPVChSuccess(responseCloseDay));

        yield put(validDaySuccess());

        console.log("-----responseCloseDay----",responseCloseDay)
        callback(responseCloseDay.success);

    } catch (error) {
        console.log("error ................", error);
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
        yield put(day1Step2ValidationsFailed(message));
    }
}

function* day1validationSaga({payload: {challengeId, day1, callback }}) {
    try {


        const responseBlock1 = [4, 7, 9, 12, 15, 18];

        const list1 = day1.part1.decisions.filter((el) => responseBlock1.find(elm => elm === el.id && el.isSelected)).map((elm) => elm.id);
        const list2 = day1.part2.decisions.filter((el) => +el.category === +el.v_category).map((elm) => elm.id);

        const correctResponse = [...list1, ...list2]

        const response = yield call(
            saveDecisionsService5,
            1,
            correctResponse,
            challengeId
        );
        console.log("response *******************", response);

        yield call(
            saveDetailsService5,
            1,
            challengeId,
            JSON.stringify(day1)
        );

        //console.log("response *******************", responseDetail);

        const responseCloseDay = yield call(closeDayService5, 1, challengeId);
        //console.log("response *******************", responseCloseDay);

        yield put(closeDayPVChSuccess(responseCloseDay));
        // yield put(day1Step2ValidationsSuccess());
        callback();
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
        yield put(day1Step2ValidationsFailed(message));
    }
}

function* PVPhaDay3getDetailSaga({payload: {challengeId}}) {
    try {
        const responseDetail = yield call(getDetailsService5, 3, challengeId);
        //console.log("responseDetail ................", responseDetail);

        yield put(day3getDetailSuccess(responseDetail.details));
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
        yield put(day3getDetailFailed(message));
    }
}

function* day3validationSaga({payload: {challengeId, day3, callback}}) {
    try {

        const correctL1 = [69, 71, 74, 77, 80, 82, 95, 97, 99, 103, 107, 110, 112, 113];

        const list1 = [...day3.part1.decisions, ...day3.part3.decisions, ...day3.part4.decisions, ...day3.part5.decisions].filter((elem) => correctL1.includes(elem.id)).map((elem) => elem.id);
        const list2 = day3.part2.decisions.filter((elem) => elem.category !== "block" && elem.category === elem.category_v).map((elem) => elem.id);

        const correctResponse = [...list1, ...list2];


         yield call(
            saveDecisionsService5,
            3,
            correctResponse,
            challengeId
        );

         yield call(
            saveDetailsService5,
            3,
            challengeId,
            JSON.stringify(day3)
        );

        const responseCloseDay = yield call(closeDayService5, 3, challengeId);
        //console.log("response *******************", responseCloseDay);

        yield put(closeDayPVChSuccess(responseCloseDay));
        // yield put(validDay3Success());
        callback();
    } catch (error) {
        console.log("error ................", error);
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
        yield put(validDay3Failed(message));
    }
}

function* day2getDetailSaga({payload: {challengeId,}}) {
    try {
        const responseDetail = yield call(getDetailsService5, 2, challengeId);
        //console.log("responseDetail ................", responseDetail);

        yield put(day2getDetailSuccess(responseDetail.details));
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
        yield put(day2getDetailFailed(message));
    }
}

function* validDay2Saga({payload: {decisions, challengeId, day2, callback}}) {
    try {


        const orderResponse = [58, 59, 60, 61, 62];

        const responseBlock1 = [39, 40, 66, 67, 68];

        const list1 = [...day2.part3.decisions, ...day2.part4.decisions].filter((el) => responseBlock1.find(elm => elm === el.id && el.isSelected)).map((elm) => elm.id);

        const list2 = day2.part1.decisions.filter((el) => el.category_v !== "block" && el.category_v === el.category).map((elm) => elm.id);

        const list3 = Object.entries(day2.part2).filter(([key, value], index) => orderResponse[index] === +value).map(([key, value]) => value);

        const correctResponse = [...list1, ...list2, ...list3]


         call(saveDecisionsService5, 2, correctResponse, challengeId);
        // console.log("response *******************", response);
         yield call(
            saveDetailsService5,
            2,
            challengeId,
            JSON.stringify(day2)
        );
        //console.log("response *******************", responseDetail);
        const responseCloseDay = yield call(closeDayService5, 2, challengeId);
        //console.log("response *******************", responseCloseDay);
        yield put(closeDayPVChSuccess(responseCloseDay));
        yield put(day2ValidDaySuccess());
        callback();
    } catch (error) {
        console.log("error ................", error);
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
        yield put(day2ValidDayFailed(message));
    }
}


export function* watchValidDay1() {
    yield takeEvery(DAY1_VALIDATION_PV_CH, day1validationSaga);
}

export function* watchDay3GetDetails() {
    yield takeEvery(DAY3_PV_CH_GET_DETAIL, PVPhaDay3getDetailSaga);
}

export function* watchValidDay3() {
    yield takeEvery(DAY3_VALIDATION_PV_CH, day3validationSaga);
}

export function* watchDay1GetDetails() {
    yield takeEvery(DAY1_GET_DETAIL, day1getDetailSaga);
}

export function* watchValidDay2() {
    yield takeEvery(DAY2_VALID_DAY_PV_CH, validDay2Saga);
}


export function* watchDay2GetDetails() {
    yield takeEvery(DAY2_PV_CH_GET_DETAIL, day2getDetailSaga);
}

export function* watchValidDay4() {
    yield takeEvery(DAY4_VALIDATION_PV_CH, day4validationSaga);
}


export function* watchDay4GetDetails() {
    yield takeEvery(DAY4_PV_CH_GET_DETAIL, day4getDetailSaga);
}

export function* watchValidation() {
    yield takeEvery(VALIDATION_DAY, validationSaga);
}

function* DaysChSaga() {
    yield all([
        fork(watchValidDay2),
        fork(watchValidDay1),
        fork(watchDay1GetDetails),
        fork(watchValidDay4),
        fork(watchValidDay3),
        fork(watchDay2GetDetails),
        fork(watchDay4GetDetails),
        fork(watchDay5GetDetails),
        fork(watchDay3GetDetails),
        fork(watchValidation),
    ]);
}

export default DaysChSaga;
