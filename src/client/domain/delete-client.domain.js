//@ts-check
const { ErrorHandled } = require("ebased/util/error");
const { GetClientByIdValidation } = require("../schema/input/get-client-by-id.input");
const { deleteClientService } = require("../service/delete-client.service");
const { getClientByIdService } = require("../service/get-client-by-id.service");

module.exports = async (commandPayload, commandMeta) => {

    try {
        const data = new GetClientByIdValidation(commandPayload, commandMeta).get();
        await getClientByIdService(data.dni);
        const clientDeleted = await deleteClientService(data);
        return { status: 200, body: clientDeleted };   
        
    } catch (error) {
        throw new ErrorHandled(error.message || 'Unable to delete Client', 
        { status: 400, code: 'ERROR', layer: 'CLIENT'});        
    }


}

