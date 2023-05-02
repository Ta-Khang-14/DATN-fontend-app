const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductScheme = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        postedBy: {
            type: Schema.Types.ObjectId,
            ref: "users",
        },
        postedDate: {
            type: String,
            required: true,
            unique: true,
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
module.exports = mongoose.model("tables", ProductScheme);
