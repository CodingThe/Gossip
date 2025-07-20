const bcrypt = require('bcryptjs');
const User = require('../models/User');
const ApiError = require('../utils/unifiedError');
const unifiedResponse = require('../utils/unifiedResponse');
const { AUTH_MESSAGES } = require('../constants/authConstants');

exports.registerUser = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

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
      role: role || 'user',
    });

    return unifiedResponse(res, 201, {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    }, AUTH_MESSAGES.REGISTER_SUCCESS);
  } catch (error) {
    next(error);
  }
};
