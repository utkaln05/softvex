import { motion } from 'framer-motion'
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react'
import { useState, FormEvent } from 'react'
import axios from 'axios'

const Careers = () => {
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null)
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null as File | null,
    coverLetter: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const positions = [
    {
      id: 'senior-frontend',
      title: 'Senior Frontend Developer',
      location: 'Remote / San Francisco, CA',
      type: 'Full-time',
      department: 'Engineering',
      description:
        'We are looking for an experienced Frontend Developer to join our team. You will be responsible for building user interfaces using React, TypeScript, and modern web technologies.',
      requirements: [
        '5+ years of experience in frontend development',
        'Strong proficiency in React, TypeScript, and JavaScript',
        'Experience with state management (Redux, Zustand)',
        'Knowledge of modern CSS frameworks (Tailwind CSS)',
        'Experience with RESTful APIs',
        'Strong problem-solving skills',
      ],
    },
    {
      id: 'backend-developer',
      title: 'Backend Developer',
      location: 'Remote / New York, NY',
      type: 'Full-time',
      department: 'Engineering',
      description:
        'Join our backend team to build scalable APIs and services using Node.js, Express, and modern backend technologies.',
      requirements: [
        '3+ years of experience in backend development',
        'Proficiency in Node.js and Express.js',
        'Experience with databases (MongoDB, PostgreSQL)',
        'Knowledge of RESTful API design',
        'Experience with cloud platforms (AWS, Azure)',
        'Understanding of microservices architecture',
      ],
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing Specialist',
      location: 'Remote / Austin, TX',
      type: 'Full-time',
      department: 'Marketing',
      description:
        'We are seeking a creative Digital Marketing Specialist to develop and execute marketing campaigns across various digital channels.',
      requirements: [
        '3+ years of experience in digital marketing',
        'Experience with SEO, SEM, and social media marketing',
        'Proficiency in Google Analytics and marketing tools',
        'Strong content creation skills',
        'Experience with email marketing campaigns',
        'Analytical mindset with data-driven approach',
      ],
    },
    {
      id: 'ui-ux-designer',
      title: 'UI/UX Designer',
      location: 'Remote / Los Angeles, CA',
      type: 'Full-time',
      department: 'Design',
      description:
        'We are looking for a talented UI/UX Designer to create beautiful and intuitive user experiences for our products.',
      requirements: [
        '4+ years of experience in UI/UX design',
        'Proficiency in design tools (Figma, Adobe XD)',
        'Strong portfolio showcasing design skills',
        'Understanding of user-centered design principles',
        'Experience with responsive design',
        'Knowledge of design systems',
      ],
    },
  ]

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setApplicationData({
        ...applicationData,
        resume: e.target.files[0],
      })
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    const formData = new FormData()
    formData.append('name', applicationData.name)
    formData.append('email', applicationData.email)
    formData.append('phone', applicationData.phone)
    formData.append('position', applicationData.position)
    formData.append('coverLetter', applicationData.coverLetter)
    if (applicationData.resume) {
      formData.append('resume', applicationData.resume)
    }

    try {
      const baseUrl = import.meta.env.VITE_API_URL ?? ''
      const response = await axios.post(`${baseUrl}/api/careers/apply`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      if (response.data.success) {
        setStatus('success')
        setApplicationData({
          name: '',
          email: '',
          phone: '',
          position: '',
          resume: null,
          coverLetter: '',
        })
        setSelectedPosition(null)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're always looking for talented individuals to join our growing
              team. Explore open positions and find your next opportunity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-gray-600">
              Find the perfect role for you
            </p>
          </motion.div>

          <div className="space-y-6">
            {positions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Briefcase size={16} className="mr-1" />
                        {position.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedPosition(position.id)
                      setApplicationData({
                        ...applicationData,
                        position: position.title,
                      })
                    }}
                    className="mt-4 md:mt-0 px-6 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center space-x-2"
                  >
                    <span>Apply Now</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
                <p className="text-gray-600 mb-4">{position.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Requirements:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {position.requirements.map((req, reqIndex) => (
                      <li
                        key={reqIndex}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <CheckCircle
                          size={16}
                          className="text-primary-600 mr-2 mt-1 flex-shrink-0"
                        />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      {selectedPosition && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                Apply for {applicationData.position}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={applicationData.name}
                    onChange={(e) =>
                      setApplicationData({
                        ...applicationData,
                        name: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={applicationData.email}
                    onChange={(e) =>
                      setApplicationData({
                        ...applicationData,
                        email: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={applicationData.phone}
                    onChange={(e) =>
                      setApplicationData({
                        ...applicationData,
                        phone: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="resume"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Resume (PDF, DOC, DOCX)
                  </label>
                  <input
                    type="file"
                    id="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="coverLetter"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Cover Letter
                  </label>
                  <textarea
                    id="coverLetter"
                    rows={6}
                    value={applicationData.coverLetter}
                    onChange={(e) =>
                      setApplicationData({
                        ...applicationData,
                        coverLetter: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none"
                    placeholder="Tell us why you're interested in this position..."
                  />
                </div>

                {status === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                    Application submitted successfully! We'll review your
                    application and get back to you soon.
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                    Failed to submit application. Please try again.
                  </div>
                )}

                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="flex-1 px-6 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? 'Submitting...' : 'Submit Application'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPosition(null)
                      setApplicationData({
                        name: '',
                        email: '',
                        phone: '',
                        position: '',
                        resume: null,
                        coverLetter: '',
                      })
                    }}
                    className="px-6 py-4 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  )
}

export default Careers

