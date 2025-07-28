const log = require("../utils/customLogger");

const requestLogger = (req, res, next) => {
  log.info(`${req.method} ${req.originalUrl}`);
  next();
};

module.exports = requestLogger;
