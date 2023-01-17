//@ts-check
const { commandMapper } = require('ebased/handler');
const inputMode = require('ebased/handler/input/commandApi');
const outputMode = require('ebased/handler/output/commandApi');
const getClientByIdDomain = require('../domain/get-client-by-id.domain');


module.exports.handler = async(command, context) => {
    return commandMapper({command, context}, inputMode, getClientByIdDomain, outputMode);
}
