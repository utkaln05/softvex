import express from 'express'
import { submitContact, getContacts } from '../controllers/contactController.js'
import { contactRateLimiter } from '../middleware/rateLimiter.js'
import { validate, contactValidation } from '../middleware/validation.js'

const router = express.Router()

// Submit contact form
router.post(
  '/',
  contactRateLimiter,
  validate(contactValidation),
  submitContact
)

// Get all contacts (admin only - add authentication in production)
router.get('/', getContacts)

export default router

