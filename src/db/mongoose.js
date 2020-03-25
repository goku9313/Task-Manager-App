const mongoose = require("mongoose");
let validator = require("validator");

const url = process.env.MONGODB_URL;
mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
