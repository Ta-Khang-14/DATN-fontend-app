const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductScheme = new Schema(
    {
        userID: {
            type: Schema.Types.ObjectId,
            ref: "users",
        },
        tableID: {
            type: Schema.Types.ObjectId,
            ref: "tables",
        },
        timeType: {
            type: Number,
            enum: [1, 2, 3, 4, 5, 6, 7],
        },
        date: {
            type: String,
        },
        name: {
            type: String,
        },
        phone: {
            type: String,
        },
        status: {
            type: Number,
        },
    },
    {
        timestamps: {
            currentTime: () => new Date(Date.now() + 7 * 60 * 60 * 1000),
        },
    }
);

module.exports = mongoose.model("table_users", ProductScheme);
