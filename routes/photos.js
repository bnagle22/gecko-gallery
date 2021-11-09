import { Router } from 'express'
import * as photosCtrl from '../controllers/photos.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// localhost:3000/photos - GET
router.get('/', photosCtrl.index)

// localhost:3000/photos/new - GET
router.get('/new', isLoggedIn, photosCtrl.new)

// localhost:3000/photos/:id - GET
router.get('/:id', photosCtrl.show)

// localhost:3000/photos/ - POST
router.post('/', isLoggedIn, photosCtrl.create)

// localhost:3000/photos/:id - POST
router.post('/:id', isLoggedIn, photosCtrl.comment)

// localhost:3000/photos- DELETE
router.delete('/:id', isLoggedIn, photosCtrl.delete)

export {
  router
}