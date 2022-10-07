class Logger {
    log(value:any) {
        console.log("\x1b[32m", value);
    }
}

export default Logger