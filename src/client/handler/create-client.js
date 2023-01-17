const { commandMapper } = require('ebased/handler');
const inputMode = require('ebased/handler/input/commandApi');
const outputMode = require('ebased/handler/output/commandApi');

const createClientDomain = require('../domain/create-client');

module.exports.handler = async(command, context) => {
    console.log("command",command)
    console.log("context",context)
    return commandMapper({command, context}, inputMode, createClientDomain, outputMode);
}
