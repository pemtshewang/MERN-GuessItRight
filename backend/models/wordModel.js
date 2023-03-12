const mongoose = require('mongoose')

const wordSchema = new mongoose.Schema({
  word: String,
  hint: String
})

module.exports = new mongoose.model("word", wordSchema)
