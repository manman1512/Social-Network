const queryString = require('query-string');
const category = require('../models/category.model')

module.exports = {
    // CREATE CATEGORY
    createCate: async (req, res) => {
        // console.log(req);
        const {_id} = req.user;
        const {name} = req.body;
        const newCate = new category({
            owner: _id,
            name: name
        })
        try {
            const saveCate = await newCate.save();
            res.status(200).json(saveCate)
        } catch (error) {
            console.log(error);
            res.status(500).json({success: false, message: "Loi server!"});
        }
    },
    // GET CATEGORY BY USER
    getCateByUser: async (req,res)=>{
        const {_id} = req.params;
        const cates = await category.find({
            owner: _id
        })
        console.log(cates);
        res.status(200).json(cates)

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