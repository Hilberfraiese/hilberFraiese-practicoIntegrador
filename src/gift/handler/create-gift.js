//@ts-check
const { batchEventMapper } = require("ebased/handler")
const inputMode = require('ebased/handler/input/batchEventQueue');
const outPutMode = require('ebased/handler/output/batchEventConfirmation');
const createGiftDomain = require('../domain/create-gift.domain');


module.exports.handler = async (events, context) => {
    console.log("Asiggn gift")
    return batchEventMapper({ events, context }, inputMode, createGiftDomain, outPutMode)
}
