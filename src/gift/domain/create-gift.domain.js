//@ts-check
const { CreateGiftValidation } = require('../schema/input/create-gift.input');
const { assignGift } = require('../service/assign-gift.service');

module.exports = async (commandPayload, commandMeta) => {
    console.log("create gift domain")
    const { birth, dni } = new CreateGiftValidation(commandPayload, commandMeta).get();
    const month = new Date(birth).getMonth();
    const gift = getSeasonGift(month);
    const dbParams = { update: { gift }, dni };

    try {
        const resp = await assignGift(dbParams);
        console.log({ resp });
    } catch (error) {
        console.error(error);
    }

    return { status: 200, body: 'Gift Created' }
}

const getSeasonGift = (month) => {
    if (3 <= month && month <= 5)  return 'Sweater' 
    if (6 <= month && month <= 8)  return 'Buzo'   
    if (9 <= month && month <= 12) return'Camisa'     
    return 'Remera';
}

