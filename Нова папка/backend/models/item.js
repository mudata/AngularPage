const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    category: { type: String, required: true },
    disc: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true }
});

module.exports = mongoose.model("item", postSchema);