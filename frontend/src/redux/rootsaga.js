import { all } from 'redux-saga/effects';
import { watchLoginRegisterSaga } from "./saga/authSaga";

export default function* rootSaga(){
    yield all([
        watchLoginRegisterSaga()
    ])
}