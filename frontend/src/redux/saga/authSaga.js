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
        localStorage.setItem("username", response.data.user.name);
        localStorage.setItem("useremail", response.data.user.email);
        localStorage.setItem("userrole", response.data.user.role);
        yield put(signinSuccess(response));
    }catch(error){
        const errorMessage = error.message || "Something went wrong";
        yield put(signinFail(errorMessage));
    }
}
export function* watchLoginRegisterSaga(){
    yield takeLatest(signupRequest,signupUser);
    yield takeLatest(signinRequest, signinUser);
}