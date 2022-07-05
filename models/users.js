import mongoose from 'mongoose'

const usersSchema = new mongoose.Schema([{
}])

export const users = mongoose.models.users || mongoose.model('users', usersSchema)