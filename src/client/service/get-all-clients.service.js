//@ts-check
const config = require('ebased/util/config');
const dynamoDB = require('ebased/service/storage/dynamo');
const CLIENT_TABLE = config.get('CLIENT_TABLE');

const getAllClientService = async() => {
    const { Items } = await dynamoDB.scanTable({
        TableName: CLIENT_TABLE
      });      
      return Items;
}

module.exports = { getAllClientService }