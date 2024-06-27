const db = require('../db/models');

const getAllLogistics = async () => {
    const logistics = await db.logistics.findAll();
    return logistics;
}

const getLogisticsById = async (logisticsId) => {
    const logistics = await db.logistics.findOne({
        where: { id: logisticsId },
    });

    return logistics;
}

module.exports = {
    getAllLogistics,
    getLogisticsById,
};