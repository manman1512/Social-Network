const express = require('express');
const router = express.Router();

const { update, deleteById, getById, getMe } = require('../controllers/user.controller');

router.put('/update/:id', update);
router.delete('/deleteById/:id', deleteById);
router.get('/getById/:id', getById);
router.get("/getMe", getMe);

module.exports = router;
