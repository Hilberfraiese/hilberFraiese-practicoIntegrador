//@ts-check

const { InputValidation } = require('ebased/schema/inputValidation');


class CreateGiftValidation extends InputValidation {
    constructor(payload, meta) {
        super({
            type: 'GIFT.CREATE',
            specversion: 'v1.0.0',
            source: meta.source,
            payload: payload,
          schema: {
            strict: false,
            dni: { type: String, required: true },
            birthDate: { type: String, required: true }
          },
        })
      }
}

module.exports = { CreateGiftValidation }
