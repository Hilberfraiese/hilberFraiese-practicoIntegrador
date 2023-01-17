//@ts-check
const { ErrorHandled } = require("ebased/util/error");
const { GetClientByIdValidation } = require("../schema/input/get-client-by-id.input");
const { getClientByIdService } = require("../service/get-client-by-id.service");


module.exports = async (commandPayload, commandMeta) => {

    try {
        const { dni } = new GetClientByIdValidation(commandPayload, commandMeta).get();
        const client = await getClientByIdService(dni);
        return { status: 200, body: client };

    } catch (error) {
        throw new ErrorHandled(error.message || 'Unable to Get Client', 
        { status: 400, code: 'ERROR', layer: 'CLIENT'});        
    }
}
