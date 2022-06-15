import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

// src: https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/pages/api/pets/index.js

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URL environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}

export default dbConnect