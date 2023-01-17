//@ts-check
const config = require('ebased/util/config');
const dynamoDB = require('ebased/service/storage/dynamo');
const { ErrorHandled } = require('ebased/util/error');
const CLIENT_TABLE = config.get('CLIENT_TABLE');

const getClientByIdService = async(id) => {
    const { Item } = await dynamoDB.getItem({
        TableName: CLIENT_TABLE,
        Key: { dni: id },
      });
      if (!Item) throw new ErrorHandled('Missing Client', { status: 404, code: 'NOT_FOUND', layer: 'CLIENT'});
      return Item;
}

module.exports = { getClientByIdService }
