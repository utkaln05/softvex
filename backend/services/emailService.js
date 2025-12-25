import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

// Create transporter (configure based on your email provider)
const createTransporter = () => {
  // For Gmail, you'll need to use an App Password
  // For other providers, adjust the configuration accordingly
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

// Send contact form email
export const sendContactEmail = async (contactData) => {
  try {
    const transporter = createTransporter()
    
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'noreply@softvex.com',
      to: process.env.EMAIL_TO || 'info@softvex.com',
      subject: `New Contact Form Submission - ${contactData.service || 'General Inquiry'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${contactData.name}</p>
        <p><strong>Email:</strong> ${contactData.email}</p>
        <p><strong>Phone:</strong> ${contactData.phone || 'Not provided'}</p>
        <p><strong>Service:</strong> ${contactData.service || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${contactData.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${contactData.name}
        Email: ${contactData.email}
        Phone: ${contactData.phone || 'Not provided'}
        Service: ${contactData.service || 'Not specified'}
        
        Message:
        ${contactData.message}
        
        Submitted at: ${new Date().toLocaleString()}
      `,
    }

    const info = await transporter.sendMail(mailOptions)
    console.log('Contact email sent:', info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Error sending contact email:', error)
    // Don't throw error - log it but don't fail the request
    return { success: false, error: error.message }
  }
}

// Send careers application email
export const sendCareersEmail = async (applicationData) => {
  try {
    const transporter = createTransporter()
    
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'noreply@softvex.com',
      to: process.env.EMAIL_TO || 'careers@softvex.com',
      subject: `Job Application - ${applicationData.position}`,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Name:</strong> ${applicationData.name}</p>
        <p><strong>Email:</strong> ${applicationData.email}</p>
        <p><strong>Phone:</strong> ${applicationData.phone}</p>
        <p><strong>Position:</strong> ${applicationData.position}</p>
        ${applicationData.coverLetter ? `
          <p><strong>Cover Letter:</strong></p>
          <p>${applicationData.coverLetter.replace(/\n/g, '<br>')}</p>
        ` : ''}
        ${applicationData.resume ? `
          <p><strong>Resume:</strong> Attached</p>
        ` : ''}
        <hr>
        <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
      `,
      text: `
        New Job Application
        
        Name: ${applicationData.name}
        Email: ${applicationData.email}
        Phone: ${applicationData.phone}
        Position: ${applicationData.position}
        
        ${applicationData.coverLetter ? `Cover Letter:\n${applicationData.coverLetter}\n` : ''}
        ${applicationData.resume ? 'Resume: Attached\n' : ''}
        
        Submitted at: ${new Date().toLocaleString()}
      `,
      attachments: applicationData.resume ? [
        {
          filename: applicationData.resume.originalname,
          content: applicationData.resume.buffer,
        }
      ] : [],
    }

    const info = await transporter.sendMail(mailOptions)
    console.log('Careers email sent:', info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Error sending careers email:', error)
    return { success: false, error: error.message }
  }
}

