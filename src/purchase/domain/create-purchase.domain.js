const { ErrorHandled } = require('ebased/util/error');
const { v4: uuidv4 } = require('uuid');
const { getClientByIdService } = require('../../client/service/get-client-by-id.service');
const { updateClientService } = require('../../client/service/update-client.service');
const { descByClient } = require('../helper/calculate-discount.helper');
const { CreatePurchaseValidation } = require('../schema/input/create-purchase.input');
const { createPurchaseService } = require('../service/create-purchase.service');


const createPurchaseDomain = async (commandPayload, commandMeta) => {
    
        commandPayload.id = uuidv4();
        const data = new CreatePurchaseValidation(commandPayload, commandMeta).get();
        const client = await getClientByIdService(data.dni);

        console.log({client});
        if(client.disabled) {
            throw new ErrorHandled('Client Disabled', { status: 401, code: 'UNAUTHORIZED', layer: 'CLIENT'});
        }

        const { purchaseData, clientData } = descByClient(data, client);
        await createPurchaseService(purchaseData);
        await updateClientService(clientData);
        return { body: { message: 'Purchase Created!', purchaseData, clientData } };
    
};

module.exports = { createPurchaseDomain };
