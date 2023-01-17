const { DownstreamEvent } = require('ebased/schema/downstreamEvent');

class ClientUpdatedEvent extends DownstreamEvent {
  constructor(payload, meta) {
    super({
      type: 'CLIENT.UPDATE',
      specversion: 'v1.0.0',
      payload: payload,
      meta: meta,
      schema: {
        strict: false,
        dni: { type: String, required: true },
        firstName: { type: String, required: false },
        lastName: { type: String, required: false },
        birth: {type: String, required: false }
      },
    })
  }
}

module.exports = { ClientUpdatedEvent };
