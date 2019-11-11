const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Payment = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    nameoncard: {
        type: String,
        required: true
    },
    cardnumber: {
        type: Number,
        required: true
    },
    expmonth: {
        type: Number,
        required: true
    },
    expyear: {
        type: Number,
        required: true
    },
    cvv: {
        type: Number,
        required: true
    }
});

module.exports = Payment = mongoose.model("payment", Payment);