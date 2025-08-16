import authService from "../service/authService.js";
import unifiedResponse from "../utils/unifiedResponse.js";
import { AUTH_MESSAGES } from "../constants/authConstants.js";

export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body.form;
    const userData = await authService.registerUser({ name, email, password });
    return unifiedResponse(res, 201, userData, AUTH_MESSAGES.REGISTER_SUCCESS);
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    console.log("inside controller");
    const { email, password } = req.body.form;
    const userData = await authService.loginUser({email, password});
    return unifiedResponse(res,201,userData, AUTH_MESSAGES.LOGIN_SUCCESS);
  } catch(error){
    next(error);
  }
}
