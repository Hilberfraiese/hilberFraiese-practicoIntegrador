const config = require('ebased/util/config');
const dynamoDB = require('ebased/service/storage/dynamo');
const CLIENT_TABLE = config.get('CLIENT_TABLE');

const deleteClientService = async(data) => {

    const params = {
        TableName: CLIENT_TABLE,
        Key: { dni: data.dni },
        UpdateExpression: 'SET #disabled = :disabled',
        ExpressionAttributeNames: { '#disabled': 'disabled' },
        ExpressionAttributeValues: {
          ':disabled': true,
        },
        ReturnValues: 'ALL_NEW',
      }        

  const { Attributes } = await dynamoDB.updateItem(params);
  return Attributes;
}

module.exports = { deleteClientService }
