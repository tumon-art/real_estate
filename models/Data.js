import mongoose from 'mongoose'

const arraySchema = new mongoose.Schema({
    array: []
})

module.exports = mongoose.models.Array || mongoose.model('Array', arraySchema)