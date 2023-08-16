const { createError } = require("./createerror");
const logger = require("./logger");
const makehttprequest = async function (path, options={}){
    //console.log(`HTTP error! status Arun`);
    const response = await fetch(path, options);
    /* if (!response.ok) {
        console.log(`HTTP error! status: ${response.status}`);
        createError(`${response.statusText}`, response.status)
    } */
    return await response.json();
}

module.exports = { makehttprequest }