const db = require('../db/models');

const getAllImporters = async () => {
    const importers = await db.importer.findAll();
    return importers;
}

const getImporterById = async (importerId) => {
    const importer = await db.importer.findOne({
        where: { id: importerId },
    });

    return importer;
}

module.exports = {
    getAllImporters,
    getImporterById,
};