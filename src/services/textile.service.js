const db = require('../db/models');

async function getAllTextiles(){
    const textiles = await db.textile.findAll();
    return textiles;
}

async function getTextileById(textileId) {
    const textile
        = await db.textile.findOne({
            where: { id: textileId },
        });

    return textile;
}

module.exports = {
    getAllTextiles,
    getTextileById,
};