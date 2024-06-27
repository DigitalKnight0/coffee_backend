const db = require('../db/models');

async function getAllFarmers(){
    const farmers = await db.farmer.findAll();
    return farmers;
}

async function getFarmerById(farmerId) {
    const farmer = await db.farmer.findOne({
        where: { id: farmerId },
    });

    return farmer;
}

module.exports = {
    getAllFarmers,
    getFarmerById,
};