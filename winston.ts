import winston from "winston";

const logger = winston.createLogger({
    format: winston.format.json(),
    level: 'debug',
    transports: [
        new winston.transports.Console(),
    ]
});

logger.info("Hello World");
logger.warn("Hello World");
logger.error("Hello World");
