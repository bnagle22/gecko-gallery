import { Router } from 'express'
import * as uploadCtrl from '../controllers/uploads.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// localhost:3000/upload - GET
router.get('/', uploadCtrl.index)



// to upload photos:
// router.post('/post', upload.single('image'), async function(req, res) {
//   const imagePath = path.join(__dirname, '/public/images')
//   const fileUpload = new Resize(imagePath)
//   if (!req.file) {
//     res.status(401).json({error: 'Please provide an image'})
//   }
//   const filename = await fileUpload.save(req.file.buffer)
//   return res.status(200).json({ name: filename})
// })

// module.exports = router

export {
  router
}