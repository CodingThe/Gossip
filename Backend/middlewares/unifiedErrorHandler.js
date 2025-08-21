import ApiError from "../utils/ApiError.js";

const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,

    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};

export default errorHandler;
