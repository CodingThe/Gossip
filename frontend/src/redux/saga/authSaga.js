import { call, put, takeLatest } from "redux-saga/effects";
import {signupRequest,signupSuccess,signupFail} from "../slice/auth.slice";
import { USER_REGISTER } from "../../routes/unifiedRoutes";
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
export function* watchLoginRegisterSaga(){
    yield takeLatest(signupRequest,signupUser);
}