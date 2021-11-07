import { Router } from 'express'
import * as uploadCtrl from '../controllers/uploads.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// localhost:3000/upload - GET
router.get('/', uploadCtrl.index)

export {
  router
}