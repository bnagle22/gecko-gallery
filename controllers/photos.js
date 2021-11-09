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
      title: "show",
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

function newPhoto(req, res) {
  res.render('photos/new')
}

function newComment(req, res) {
  Photo.findById(req.params.id, function(error, photo) {
    photo.comments.push(req.body)
    console.log(photo)
    photo.save(function(err) {
      res.render('photos/show', {
        photo
      })
    })
  })
}

function deletePhoto(req, res) {
  Photo.findById(req.params.id)
  .then(photo => {
    if (photo.owner.equals(req.user.profile._id)) {
      photo.delete()
      .then(() => {
        res.redirect('/photos')
      })
    } else {
      throw new Error("Not authorized")
    }
  })
  .catch(err => {
    res.redirect('/photos')
  })
}

export {
  index,
  show,
  create,
  newPhoto as new,
  newComment as comment,
  deletePhoto as delete
}