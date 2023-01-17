const config = require('ebased/util/config');
const sns = require('ebased/service/downstream/sns');
const CLIENT_TOPIC = config.get('CLIENT_TOPIC');

const emitClientService = async (clientCreatedEvent) => {
    console.log("emit-client-create")
    const { eventPayload, eventMeta } = clientCreatedEvent.get();
    console.log("Event Payload DNI", eventPayload.dni)
     
    const snsPublishParams = {
        TopicArn: CLIENT_TOPIC,
        Message: JSON.stringify(eventPayload)
    };

    await sns.publish(snsPublishParams, eventMeta)
}


module.exports = { emitClientService };
