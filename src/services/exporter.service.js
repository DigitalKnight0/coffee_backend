const db = require('../db/models');

async function getAllExporters(){
    const exporters = await db.exporter.findAll();
    return exporters;
}

async function getExporterById(exporterId) {
    const exporter = await db.exporter.findOne({
        where: { id: exporterId },
    });

    return exporter;
}

module.exports = {
    getAllExporters,
    getExporterById,
};