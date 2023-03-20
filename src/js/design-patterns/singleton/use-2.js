import logger from "./singleton.js";


// const logger = new MyLogger();

export default function logSecondImplementation() {
    logger.printLogCount();
    logger.log('Drugi plik');
    logger.printLogCount();
}