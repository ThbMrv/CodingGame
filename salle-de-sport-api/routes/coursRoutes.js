const express = require('express');
const router = express.Router();
const coursController = require('../controllers/coursController');

router.get('/', coursController.getAll);
router.get('/:id', coursController.getById);
router.post('/', coursController.create);
router.put('/:id', coursController.update);
router.delete('/:id', coursController.remove);

module.exports = router;
