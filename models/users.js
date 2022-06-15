import mongoose from 'mongoose'

const usersSchema = new mongoose.Schema({
    fav:[]
})

module.exports = mongoose.models.users || mongoose.model('users', usersSchema)