import { body, validationResult } from 'express-validator'

// Validation middleware
export const validate = (validations) => {
  return async (req, res, next) => {
    // Run all validations
    await Promise.all(validations.map(validation => validation.run(req)))

    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }

    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array()
    })
  }
}

// Contact form validation rules
export const contactValidation = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters')
    .matches(/^[a-zA-Z\s]+$/).withMessage('Name can only contain letters and spaces'),
  
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email address')
    .normalizeEmail(),
  
  body('phone')
    .optional()
    .trim()
    .matches(/^[\d\s\-\+\(\)]+$/).withMessage('Please provide a valid phone number'),
  
  body('service')
    .optional()
    .trim()
    .isLength({ max: 100 }).withMessage('Service name is too long'),
  
  body('message')
    .trim()
    .notEmpty().withMessage('Message is required')
    .isLength({ min: 10, max: 2000 }).withMessage('Message must be between 10 and 2000 characters')
]

// Careers application validation rules
export const careersValidation = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters'),
  
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email address')
    .normalizeEmail(),
  
  body('phone')
    .trim()
    .notEmpty().withMessage('Phone is required')
    .matches(/^[\d\s\-\+\(\)]+$/).withMessage('Please provide a valid phone number'),
  
  body('position')
    .trim()
    .notEmpty().withMessage('Position is required')
    .isLength({ max: 100 }).withMessage('Position name is too long'),
  
  body('coverLetter')
    .optional()
    .trim()
    .isLength({ max: 5000 }).withMessage('Cover letter is too long')
]

