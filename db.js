const mongoose = require("mongoose")
require("dotenv").config()

const connection = mongoose.connect(process.env.mongoURL)
// const connection = mongoose.connect(`mongodb+srv://mohdaamil120:aamil@123@cluster0.vv90n0p.mongodb.net/notesapp?retryWrites=true&w=majority`)
// const connection = mongoose.connect(`mongodb+srv://mohdaamil120:aamil@cluster0.vv90n0p.mongodb.net/notesapp?retryWrites=true&w=majority`)
// const connection = mongoose.connect(`mongodb+srv://mohdaamil120:aamil@cluster0.vv90n0p.mongodb.net/?retryWrites=true&w=majority`)



// const connection = mongoose.connect(`mongodb://127.0.0.1:27017/notesapp`)

module.exports = {
    connection
}