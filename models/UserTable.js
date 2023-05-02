const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductScheme = new Schema(
    {
        idUser: {
            type: String,
            required: true,
            trim: true,
        },
        userName: {
            type: String,
            required: true,
            trim: true,
        },
        typeTime: {
            type: Number,
            required: true,
            trim: true,
        },
        timeBook: {
            type: String,
            required: true,
            trim: true,
        },
        status: {
            type: Number,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

ProductScheme.index({
    title: "text",
});
module.exports = mongoose.model("user_table", ProductScheme);
