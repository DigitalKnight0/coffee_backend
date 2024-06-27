const db = require('../db/models');

const getAllPlants = async () => {
    const plants = await db.plant.findAll();
    return plants;
}

const getPlantById = async (plantId) => {
    const plant
        = await db.plant.findOne({
            where: { id: plantId },
        });
    
    return plant;
}

module.exports = {
    getAllPlants,
    getPlantById,
};