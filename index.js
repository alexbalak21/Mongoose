const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect("mongodb://localhost/crud");

async function create() {
    await User.create({ name: "John", age: 26 });
    await User.create({ name: "Sarah", age: 30 });
    // ANOTTHER WAY TO ADD USER TO DB
    const user2 = new User({ name: "Alex", age: 36 });
    await user2.save();
    return null;
}

async function read() {
    const users = await User.find();
    return users;
}

async function update() {
    const user = await User.findOne({ name: "John" });
    user.name = "Jack";
    const result = await user.save();
    console.log("Result Update");
    console.log(result);
    return null;
}

async function del() {
    const del = await User.deleteOne({ name: "Sarah" });
    console.log("Delete");
    console.log(del);
    return null;
}

async function crud() {
    await create();
    console.log("Created");
    const users = await read();
    console.log(users);
    console.log("Read");
    await update();
    console.log("Updated");
    await del();
    const usersUp = await read();
    console.log("Updated Read");
    console.log(usersUp);
}

crud();
