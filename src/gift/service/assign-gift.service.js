const config = require('ebased/util/config');
const dynamoDB = require('ebased/service/storage/dynamo');
const CLIENT_TABLE = config.get('CLIENT_TABLE');

const assignGift = async(data) => {
    console.log("ASSIGN GIFT", data);    

    const params = {
        TableName: CLIENT_TABLE,
        Key: { dni: data.dni },
        UpdateExpression: 'SET',
        ExpressionAttributeNames: {},
        ExpressionAttributeValues: {},
        ReturnValues: 'ALL_NEW',
    }
    Object.keys(data.update).forEach(key => {
        params.UpdateExpression += ` #${key}=:${key},`;
        params.ExpressionAttributeNames[`#${key}`] = key;
        params.ExpressionAttributeValues[`:${key}`] = data.update[key];
    });
    params.UpdateExpression = params.UpdateExpression.slice(0, -1);

    const { Attributes } = await dynamoDB.updateItem(params);
    return Attributes;
}

module.exports = { assignGift };
