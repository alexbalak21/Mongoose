const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    updatedAt: Date,
    friend: mongoose.SchemaTypes.ObjectId,
});

module.exports = mongoose.model("User", UserSchema);
