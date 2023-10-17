import { all } from 'redux-saga/effects';
import PvChallengeSaga from "./pvChallenge/saga";
import DaysChSaga from "./levels/saga";

export default function* rootSaga(getState) {
    yield all([
        PvChallengeSaga(),
        DaysChSaga()
    ]);
}
