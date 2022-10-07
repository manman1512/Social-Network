const queryString = require('query-string');
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
            const queryObject = queryString.parseUrl(req.url);
            if(queryObject.query.q){
            const cates = await category.find({
                name: {$regex: queryObject.query.q} 
            });
            res.status(200).json(cates)}
            else{
                const cates = await category.find();
                res.status(200).json(cates)
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({success: false, message: "Loi server!"});
        }
    }
}