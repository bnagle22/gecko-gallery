import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: String,
  author: {type: Schema.Types.ObjectId, ref:'Profile'},
  likes: Number
}, {
  timestamps: true
})

const Comment = mongoose.model("Comment", commentSchema)

export {
  Comment
}