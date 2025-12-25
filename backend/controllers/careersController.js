import { sendCareersEmail } from '../services/emailService.js'

// Store applications (in production, use a database)
const applications = []

export const submitApplication = async (req, res) => {
  try {
    const { name, email, phone, position, coverLetter } = req.body
    const resume = req.file

    // Sanitize input
    const applicationData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      position: position.trim(),
      coverLetter: coverLetter ? coverLetter.trim() : null,
      resume: resume ? {
        filename: resume.originalname,
        mimetype: resume.mimetype,
        size: resume.size,
        buffer: resume.buffer,
      } : null,
      submittedAt: new Date().toISOString(),
      ip: req.ip || req.connection.remoteAddress,
    }

    // Store application (in production, save to database)
    applications.push(applicationData)
    console.log('Application stored:', {
      ...applicationData,
      resume: applicationData.resume ? 'Attached' : 'Not provided',
    })

    // Send email notification
    const emailResult = await sendCareersEmail(applicationData)
    if (!emailResult.success) {
      console.warn('Email notification failed, but application was stored')
    }

    res.status(200).json({
      success: true,
      message: 'Application submitted successfully! We will review your application and get back to you soon.',
      data: {
        id: applications.length,
        position: applicationData.position,
        submittedAt: applicationData.submittedAt,
      },
    })
  } catch (error) {
    console.error('Error in submitApplication:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to submit application. Please try again later.',
    })
  }
}

// Get all applications (for admin - in production, add authentication)
export const getApplications = async (req, res) => {
  try {
    const applicationsList = applications.map((app, index) => ({
      id: index + 1,
      name: app.name,
      email: app.email,
      phone: app.phone,
      position: app.position,
      submittedAt: app.submittedAt,
      hasResume: !!app.resume,
    }))

    res.status(200).json({
      success: true,
      data: applicationsList,
      count: applications.length,
    })
  } catch (error) {
    console.error('Error in getApplications:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve applications.',
    })
  }
}

