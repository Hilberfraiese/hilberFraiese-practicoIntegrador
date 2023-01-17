//@ts-check
const { InputValidation } = require('ebased/schema/inputValidation');

class GetClientByIdValidation extends InputValidation {
    constructor(payload, meta) {
        super({
            type: 'CLIENT.READ',
            specversion: 'v1.0.0',
            source: meta.source,
            payload: payload,
            schema: {
              strict: false,              
              dni: { type: String, required: true },              
            },
        })
    }
}

module.exports = { GetClientByIdValidation };
