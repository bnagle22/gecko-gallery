import { Photo } from '../models/photo.js'

function index(req, res) {
  Photo.find({})
  .then(photos => {
    res.render('photos/index', {
      photos,
      title: "photo"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/photos")
  })
}

export {
  index
}