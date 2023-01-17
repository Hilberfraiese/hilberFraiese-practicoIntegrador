const config = require('ebased/util/config');
const dynamoDB = require('ebased/service/storage/dynamo');
const CLIENT_TABLE = config.get('CLIENT_TABLE');

const createClientService = async (client) => {
    console.log("create client service",{client});
    dynamoDB.putItem({ TableName:CLIENT_TABLE, Item: client })
}

module.exports = { createClientService };
