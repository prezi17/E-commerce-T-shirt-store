const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlenght: 32,
      unique: true,
    },
  },
  { trimeStamps: true }
);

module.exports = mongoose.model("Category", categorySchema);