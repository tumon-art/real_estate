import mongoose from "mongoose"

const myUserSchema = new mongoose.Schema({
    email: String,
    fav:[],
})

module.exports = mongoose.models.myusers || mongoose.model('myusers', myUserSchema)