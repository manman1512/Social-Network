const express = require('express');
const router = express.Router();

const { update, deleteById, getById } = require('../controllers/user.controller');

router.put('/update/:id', update);
router.delete('/deleteById/:id', deleteById);
router.get('/getById/:id', getById);

module.exports = router;
