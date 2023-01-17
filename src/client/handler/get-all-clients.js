//@ts-check
const { commandMapper } = require('ebased/handler');
const inputMode = require('ebased/handler/input/commandApi');
const outputMode = require('ebased/handler/output/commandApi');
const getAllClientsDomain = require('../domain/get-all-clients.domain');

module.exports.handler = async(command, context) => {
    return commandMapper({command, context}, inputMode, getAllClientsDomain, outputMode);
}
