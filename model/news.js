const mongoose = require("mongoose");
const { schema } = require("./user");
const Schema = mongoose.Schema;

const newsSchema = new Schema(
  {
    headline: {
      type: String,
      required: true,
    },
    context: {
      type: String,
      required: true,
    },
    postlink: {
      type: String,
      required: true,
    },
    imagelink: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("News", newsSchema);
