const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        required: true,
        uniuqe: true,
    },
    password: {
        type: String,
    }
}, {
    timestamps: true,
});

const User = mongoose.model("user", UserSchema);

module.exports = User;