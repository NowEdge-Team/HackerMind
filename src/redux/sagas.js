import {all} from 'redux-saga/effects';
import PvChallengeSaga from "./pvChallenge/saga";
import DaysChSaga from "./daysPvCh/saga";

export default function* rootSaga(getState) {
    yield all([
        PvChallengeSaga(),
        DaysChSaga()
    ]);
}
