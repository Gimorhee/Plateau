const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DeliveryInfoSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = DeliveryInfo = mongoose.model("deliveryInfo", DeliveryInfoSchema);