import { call, put, takeLatest } from "redux-saga/effects";
import {signupRequest,signupSuccess,signupFail, signinSuccess, signinRequest, signinFail} from "../slice/auth.slice";
import { USER_REGISTER, USER_SIGNIN } from "../../routes/unifiedRoutes";
import apiCalling from "../api"

function* signupUser(action){
    try{
        const {payload} = action;
        const response=yield call(apiCalling,"POST",USER_REGISTER,payload);
        yield put(signupSuccess(response.responseData.message));
    }catch(error){
        const errorMessage = error.message || "Something went wrong";
        yield put(signupFail(errorMessage));
    }
}
function* signinUser(action){
    try{
        const {payload} = action;
        const response=yield call(apiCalling,"POST",USER_SIGNIN,payload);
        yield put(signinSuccess(response.responseData.message));
    }catch(error){
        const errorMessage = error.message || "Something went wrong";
        yield put(signinFail(errorMessage));
    }
}
export function* watchLoginRegisterSaga(){
    yield takeLatest(signupRequest,signupUser);
    yield takeLatest(signinRequest, signinUser);
}