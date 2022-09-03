const category = require('../models/category.model')

module.exports = {
    // CREATE CATEGORY
    createCate: async (req, res) => {
        const newCate = new category(req.body)
        try {
            const saveCate = await newCate.save();
            res.status(200).json(saveCate)
        } catch (error) {
            console.log(error);
            res.status(500).json({success: false, message: "Loi server!"});
        }
    },

    // GET CATEGORY
    getCate: async (req, res) => {
        try {
            const cats = await category.find();
            res.status(200).json(cats)
        } catch (error) {
            console.log(error);
            res.status(500).json({success: false, message: "Loi server!"});
        }
    }
}