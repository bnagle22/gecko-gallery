import { Router } from 'express'
import * as photosCtrl from '../controllers/photos.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// localhost:3000/photos - GET
router.get('/', photosCtrl.index)

export {
  router
}