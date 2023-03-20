class MyLogger {
    constructor() {
        if (MyLogger.instance == null) {
            MyLogger.instance = this;
            this.logs = [];
        }
        return MyLogger.instance;
    }

    log(message) {
        this.logs.push(message);
        console.log(`Wiadomość : ${message}`)
    }

    printLogCount() {
        console.log(`${this.logs.length} akcja`);
    }
}


const logger = new MyLogger();
Object.freeze(logger);

export default logger;
