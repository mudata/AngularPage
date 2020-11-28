const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    orders: [{ type: String, required: true }],
});

module.exports = mongoose.model("order", postSchema);