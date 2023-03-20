import logger from "./singleton.js";


// const logger = new MyLogger();

export default function logFirstImplementation() {
    logger.printLogCount();
    logger.log('Pierwszy plik');
    logger.printLogCount();
}