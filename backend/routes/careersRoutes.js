import express from 'express'
import multer from 'multer'
import { submitApplication, getApplications } from '../controllers/careersController.js'
import { careersRateLimiter } from '../middleware/rateLimiter.js'
import { validate, careersValidation } from '../middleware/validation.js'

const router = express.Router()

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    // Accept PDF, DOC, DOCX files
    const allowedMimes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ]
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error('Invalid file type. Only PDF, DOC, and DOCX files are allowed.'), false)
    }
  },
})

// Submit job application
router.post(
  '/apply',
  careersRateLimiter,
  upload.single('resume'),
  validate(careersValidation),
  submitApplication
)

// Get all applications (admin only - add authentication in production)
router.get('/', getApplications)

export default router

