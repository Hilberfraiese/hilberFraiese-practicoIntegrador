const { InputValidation } = require('ebased/schema/inputValidation');

class CreatePurchaseValidation extends InputValidation {
    constructor(payload, meta) {
        super({
            type: 'PURCHASE.CREATE',
            specversion: 'v1.0.0',
            source: meta.source,
            payload: payload,
            schema: {
                strict: true,
                id: { type: String, required: true },
                dni: { type: String, required: true },
                products: { type: [], min: 1, max: 10, required: true },
            },
        })
    }
}

module.exports = { CreatePurchaseValidation };
