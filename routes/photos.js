import { Router } from 'express'
import * as photosCtrl from '../controllers/photos.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// localhost:3000/photos - GET
router.get('/', photosCtrl.index)

// localhost:3000/photos/new - GET
router.get('/new', photosCtrl.new)

// localhost:3000/photos/:id - GET
router.get('/:id', photosCtrl.show)

// localhost:3000/photos/ - POST
router.post('/', photosCtrl.create)

export {
  router
}