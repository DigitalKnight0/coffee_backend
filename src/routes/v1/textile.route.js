const express = require('express');
const router = express.Router();

const textileController = require('../../controllers/textile.controller');

router.get('/', textileController.getAllTextiles);
router.get('/:textileId', textileController.getTextileById);

module.exports = router;