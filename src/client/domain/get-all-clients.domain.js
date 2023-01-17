//@ts-check
const { ErrorHandled } = require("ebased/util/error");
const { getAllClientService } = require("../service/get-all-clients.service");


module.exports = async (commandPayload, commandMeta) => {

    try {
        const clients = await getAllClientService();
        return { status: 200, body: clients || [] };
    } catch (error) {        
        throw new ErrorHandled(error.message || 'Unable to List Clients', 
        { status: 400, code: 'ERROR', layer: 'CLIENT'});        
    }

}
