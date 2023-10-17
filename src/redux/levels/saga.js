import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
    VALIDATION_DAY
} from "../../constants/actionTypes";
import { closeDaySuccess } from "../pvChallenge/actions";
import store from "../store.js";
import {
    day1Step2ValidationsFailed,
    validDaySuccess
} from "./actions";
import { closeDayService, saveDecisionsService, saveDetailsService } from "./service";
import _ from "lodash";



const validateData = (day, option) => {

    const { parts, correctResponse } = option;
    const list = []
    for (const key in parts) {
        const part = day[`part${key}`];
        switch (parts[key].type) {
            case 'select':
                list.push(part.decisions.filter((el) => correctResponse.find(elm => elm === el.id && el.isSelected)).map((elm) => elm.id));
                break;
            case "dgd":
                list.push(part.decisions.filter((el) => +el.category === +el.v_category).map((elm) => elm.id));
                break;
            case 'classement':
                const cls_list = Object.entries(part).map(([id, value]) => value).filter((el, index) => parts[key].position[index] === el);

                list.push(cls_list);
                break;
            case 'folder':
                list.push(parts[key].decisions.filter(elm => correctResponse.includes(elm)));
                break;
            case 'matrixDrd':
                list.push(part.decisions.filter(elm => elm.isCorrect).map(elm=>elm.id));
                break;
        }
    }

    return _.flatten(list);

}

function* validationSaga({ payload: { missionId, day, callback, option } }) {
    try {

        const dayData = store.store.getState().Levels[`day${day}`];

        const correctResponse = validateData(dayData, option);

        // todo : delete this
        // yield delay(3000);
        // console.log("----correctResponse--->>>",correctResponse);
        // yield put(validDaySuccess());
        // callback();
        // return ;
        //

        yield call(
            saveDecisionsService,
            day,
            correctResponse,
            missionId
        );

        yield call(
            saveDetailsService,
            day,
            missionId,
            JSON.stringify(dayData)
        );

        const responseCloseDay = yield call(closeDayService, day, missionId);

        yield put(closeDaySuccess(responseCloseDay));

        yield put(validDaySuccess());

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
        yield put(levelValidationsFailed(message));
    }
}



export function* watchValidation() {
    yield takeEvery(VALIDATION_DAY, validationSaga);
}

function* DaysChSaga() {
    yield all([

        fork(watchValidation),
    ]);
}

export default DaysChSaga;
