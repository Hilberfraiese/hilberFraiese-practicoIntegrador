
const { CreateClientValidation } = require("../schema/input/create-client.input");
const { ClientCreatedEvent } = require("../schema/event/event-client.event");
const { createClientService } = require('../service/create-client.service');
const { emitClientService } = require("../service/emit-client.service");
const { v4: uuidv4 } = require('uuid');

module.exports = async (commandPayload, commandMeta) => {

    console.log("domain",commandPayload);
    console.log("META", commandMeta)
    commandPayload.id = uuidv4();
    const data = new CreateClientValidation(commandPayload, commandMeta).get();  
    console.log("commandPayload",commandPayload)
    try {        
        let age = calculateAge(data.birth);
        if(age < 18 || age > 65){
            throw new Error("Your age is invalid.");
        }
        console.log("Age OK")
    } catch (error) {
        return {status: 400, body: {message: error.message} };   
    }

    console.log({data});
    await createClientService(data);    
    await emitClientCreated(new ClientCreatedEvent(data, commandMeta));
    
    return {status: 200, body: 'Client Created' };   

}

function calculateAge(birthday) { 
    const birthDate = new Date(birthday);
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}