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
    role: {
        type: String,
        required: true,
        default: "NORMAL",
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

const User = mongoose.model("user", UserSchema);

module.exports = User;