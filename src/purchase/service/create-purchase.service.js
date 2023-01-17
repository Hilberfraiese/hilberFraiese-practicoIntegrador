
const dynamoDB = require('ebased/service/storage/dynamo');
const config = require('ebased/util/config');
const PURCHASE_TABLE = config.get('PURCHASE_TABLE');

const createPurchaseService = async (purchase) => dynamoDB.putItem({ TableName: PURCHASE_TABLE, Item: purchase });

module.exports = { createPurchaseService };
