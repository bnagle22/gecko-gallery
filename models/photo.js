import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: [],
  author: {type: Schema.Types.ObjectId, ref:'Profile'},
}, {
  timestamps: true
})

const photoSchema = new Schema({
  name: String,
  image: String,
  owner: {type: Schema.Types.ObjectId, ref:'Profile'},
  likes: Number,
  comments: [commentSchema]
}, {
  timestamps: true
})

const Photo = mongoose.model("Photo", photoSchema)

export {
  Photo
}