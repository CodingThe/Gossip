const logger = require("../config/logger");

const log = {
  info: (msg) => logger.info(msg),
  error: (err) =>
    logger.error(err instanceof Error ? err.stack : err),
  warn: (msg) => logger.warn(msg),
};

module.exports = log;
