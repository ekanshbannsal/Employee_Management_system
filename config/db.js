const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/employeemanagementsystem");
        console.log("MongoDB Connected");
    } catch (err) {
        console.log(err);
    }
};

module.exports = connectDB;

mongodb+srv://<db_username>:<db_password>@cluster0.ewcazcr.mongodb.net/?appName=Cluster0