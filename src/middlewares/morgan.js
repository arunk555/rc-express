const morgan = require("morgan");
const logger = require("../utills/logger");
const { NODE_ENV } = require("../config");

const stream = {
    write: (message)=>logger.http(message)
}

const skip = ()=>{
    const env = NODE_ENV || 'development';
    return env !== 'development';
}

const morgan_middleware = morgan(
    ":remote-addr :user-agent :method :url :status :res[content-length] - :response-time ms",
    {
        stream, skip
    }
)

module.exports = morgan_middleware;