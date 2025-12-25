import rateLimit from 'express-rate-limit'

// Contact form rate limiter
export const contactRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: {
    success: false,
    message: 'Too many contact form submissions from this IP, please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false,
})

// Careers application rate limiter
export const careersRateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3, // Limit each IP to 3 applications per hour
  message: {
    success: false,
    message: 'Too many job applications from this IP, please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false,
})

