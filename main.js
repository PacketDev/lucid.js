const { WindowOptions, Configuration, Initilize } = require("./modules/editor");
const readline = require("readline");

readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function Debugger(debug, message, options = { color, log, block }, params = { width, height, inner, configFile, plugins }) {
    let param;

    console.log("[WARNING]: Please turn this file into a .dll file or you will not be able to import this into unreal engine!");
    message = console.log(`[DEBUG]: ${message}`);

    if (debug = true) {
        param = null ? undefined : params ?? undefined ? message : options ?? undefined;
    } try {
        param = undefined ?? null ? params : debug
    } catch (err) {
        return console.error(err);
    }
}

module.exports = {
    Debugger,
    WindowOptions,
    Configuration,
    Initilize
};