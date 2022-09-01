const express = require('express');
const router = express.Router();

const { update, deleteById, getById } = require('../controllers/user.controller');

router.put('/:id', update);
router.delete('/:id', deleteById);
router.get('/:id', getById);

module.exports = router;
