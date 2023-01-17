// @ts-check
const { ErrorHandled } = require('ebased/util/error');
const { CreateCardValidation } = require('../schema/input/create-card.input');

const { createCard } = require('../service/create-card.service');
const MIN_CARD_NUM = 1000;
const MAX_CARD_NUM = 9999;
const MIN_CODE_NUM = 100;
const MAX_CODE_NUM = 999;


module.exports = async (commandPayload, commandMeta) => {

    console.log({ commandPayload });

    const { birthDate, dni } = new CreateCardValidation(commandPayload, commandMeta).get();
    const type = calculateAge(birthDate) > 45 ? 'Gold' : 'Classic';
    const cardNumber = randomNumber(1000, 9999) + '-' +
        randomNumber(1000, 9999) + '-' +
        randomNumber(1000, 9999) + '-' +
        randomNumber(1000, 9999);
    const cardCode = randomNumber(100, 999);
    // @ts-ignore
    const expirationDate = randomNumber(01, 12) + '/' + randomNumber(22, 30);

    const data = { update: { type, cardNumber, cardCode, expirationDate }, dni };

    try {
        await createCard(data);
        return { status: 200, body: 'Card Created' };

    } catch (error) {
        throw new ErrorHandled(error.message || 'Unable to create Card',
            { status: 500, code: 'ERROR', layer: 'CARD' });
    }
}

const calculateAge = (birthDate) => {
    const ageDiff = Date.now() - new Date(birthDate).getTime()
    const ageDiffToDateFormat = new Date(ageDiff);
    return Math.abs((ageDiffToDateFormat.getUTCFullYear() -1970));    
}

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min); 
}

