//@ts-check
const { CreateGiftValidation } = require('../schema/input/create-gift.input');
const { assignGift } = require('../service/assign-gift.service');

module.exports = async (commandPayload, commandMeta) => {

    const { birthDate, dni } = new CreateGiftValidation(commandPayload, commandMeta).get();
    const month = new Date(birthDate).getMonth();
    const gift = getSeason(month);
    const dbParams = { update: { gift }, dni };

    try {
        const resp = await assignGift(dbParams);
        console.log({ resp });
    } catch (error) {
        console.error(error);
    }

    return { status: 200, body: 'Gift Created' }
}

const getSeason = (month) => {
    if (3 <= month && month <= 5)  return 'Sweater' // autumn
    if (6 <= month && month <= 8)  return 'Buzo'   // winter
    if (9 <= month && month <= 12) return'Camisa' // spring    
    return 'Remera'; // summer
}

