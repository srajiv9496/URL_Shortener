const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectUrl: {
        type: String,
        required: true,
    },
    visitHistory:[{ timestamp: {type: Date }}],
});

const URL = mongoose.model("URL", UrlSchema);

module.exports = URL;