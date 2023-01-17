//@ts-check
const { InputValidation } = require('ebased/schema/inputValidation');

class UpdateClientValidation extends InputValidation {
    constructor(payload, meta) {
        super({
            type: 'CLIENT.CREATE',
            specversion: 'v1.0.0',
            source: meta.source,
            payload: payload,
            schema: {
              strict: false,              
              dni: { type: String, required: true },
              firstName: { type: String, required: false },
              lastName: { type: String, required: false },
              birthDate: {type: String, required: false }
            },
        })
    }
}

module.exports = { UpdateClientValidation };
