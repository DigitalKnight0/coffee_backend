const {importerService} = require('../services');
const catchAsync = require('../utils/catchAsync');

const getAllImporters = catchAsync(async (req, res) => {
    const importers = await importerService.getAllImporters();
    res.send(importers);
}

);

const getImporterById = catchAsync(async (req, res) => {
    
        const {importerId} = req.params;
        const importer = await importerService.getImporterById(importerId);
        res.send(importer);
    }
            
            );

module.exports = {
    getAllImporters,
    getImporterById,
};
