import mongoose from 'mongoose'

const Schema = mongoose.Schema

const photoSchema = new Schema({
  name: String,
  image: String,
  owner: {type: Schema.Types.ObjectId, ref:'Profile'},
  likes: Number
}, {
  timestamps: true
})

const Photo = mongoose.model("Photo", photoSchema)

export {
  Photo
}