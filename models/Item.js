const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  size: {
    type: String
  },
  type: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.Now
  }
});

module.exports = Item = mongoose.model("item", ItemSchema);
