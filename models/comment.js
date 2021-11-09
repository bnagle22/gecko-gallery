import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: [],
  author: {type: Schema.Types.ObjectId, ref:'Profile'},
}, {
  timestamps: true
})

const Comment = mongoose.model("Comment", commentSchema)

export {
  Comment
}