const {exporterService} = require('../services');
const catchAsync = require('../utils/catchAsync');

const getAllExporters = catchAsync(async (req, res) => {
    const exporters = await exporterService.getAllExporters();
    res.send(exporters);
}

);

const getExporterById = catchAsync(async (req, res) => {

    const {exporterId} = req.params;
    const exporter = await exporterService.getExporterById(exporterId);
    res.send(exporter);
}
    
    );


module.exports = {
    getAllExporters,
    getExporterById,
};
