const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const cartSchema = new Schema({
  idUser: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  product: [
    {
      type: Schema.Type.ObjectId,
      ref: "products",
    },
  ],
});

module.exports = mongoose.model("carts", cartSchema);
