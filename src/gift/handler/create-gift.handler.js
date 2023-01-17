const { batchEventMapper } = require("ebased/handler")
const inputMode = require('ebased/handler/input/batchEventQueue');
const outPutMode = require('ebased/handler/output/batchEventConfirmation');
const createGiftDomain = require('../domain/createGift.domain');


module.exports.create = async (events, context) => {
    return batchEventMapper({ events, context }, inputMode, createGiftDomain, outPutMode)
}
