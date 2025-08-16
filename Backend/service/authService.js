import bcrypt from "bcryptjs";
import User from "../models/User.js";
import ApiError from "../utils/unifiedError.js";
import { AUTH_MESSAGES } from "../constants/authConstants.js";
import { generateToken } from "../utils/jwt.js";

export const registerUser = async ({ name, email, password }) => {
  if (!name || !email || !password) {
    throw new ApiError(400, AUTH_MESSAGES.ALL_FIELDS_REQUIRED);
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new ApiError(409, AUTH_MESSAGES.EMAIL_IN_USE);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return {
    id: newUser._id,
    name: newUser.name,
    email: newUser.email,
  };
};

export const loginUser = async ({email,password}) =>{
  const user = await User.findOne({ email });
  if(!user){
    throw new ApiError(404,AUTH_MESSAGES.INVALID_CREDENTIALS)
  }
  console.log("the user", user);
  const passwordValidation = await bcrypt.compare(password,user.password);
  console.log("is password validated", passwordValidation);
  if(!passwordValidation){
    throw new ApiError(404,AUTH_MESSAGES.INVALID_CREDENTIALS)
  }
  
  const token = generateToken({id: user._id, email: user.email});
  return {token, user};
}

const authService = { 
  registerUser,
  loginUser,
};

export default authService;