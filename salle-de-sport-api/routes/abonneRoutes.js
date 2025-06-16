const express = require('express');
const router = express.Router();
const abonneController = require('../controllers/abonneController');

router.get('/', abonneController.getAll);
router.get('/:id', abonneController.getById);
router.post('/', abonneController.create);
router.put('/:id', abonneController.update);
router.delete('/:id', abonneController.remove);

// Liaison N:N
router.post('/:id/cours', abonneController.inscrire);
router.get('/:id/cours', abonneController.getCours);

module.exports = router;
