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

function show(req, res) {
  Photo.findById(req.params.id)
  .populate("owner")
  .then(photo => {
    res.render('photos/show', {
      photo,
      title: "show"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/photos')
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  Photo.create(req.body)
  .then(photo => {
    res.redirect('/photos')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/photos')
  })
}

export {
  index,
  show,
  create
}