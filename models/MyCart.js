const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MyCartSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    items: [
        {
            name: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            size: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ]
});

module.exports = MyCart = mongoose.model("myCart", MyCartSchema);

