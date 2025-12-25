import { motion } from 'framer-motion'
import { Target, Eye, Users, TrendingUp, CheckCircle } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description:
        'We stay ahead of the curve with cutting-edge technologies and innovative solutions.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description:
        'We work closely with our clients to understand their needs and deliver tailored solutions.',
    },
    {
      icon: CheckCircle,
      title: 'Quality',
      description:
        'We maintain the highest standards in everything we do, ensuring excellence in every project.',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description:
        'We help our clients grow by providing scalable solutions that adapt to their evolving needs.',
    },
  ]

  const milestones = [
    { year: '2020', event: 'Company Founded' },
    { year: '2021', event: 'First 100 Clients' },
    { year: '2022', event: 'Launched Bus Tracking System' },
    { year: '2023', event: 'Expanded to 5 Countries' },
    { year: '2024', event: '500+ Successful Projects' },
  ]

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
              About Softvex
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a leading IT services and software solutions provider,
              dedicated to delivering excellence through innovation and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8"
            >
              <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center mb-6">
                <Eye size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the most trusted and innovative IT solutions provider,
                empowering businesses worldwide to achieve their digital
                transformation goals through cutting-edge technology and
                exceptional service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-8"
            >
              <div className="w-16 h-16 bg-accent-600 rounded-lg flex items-center justify-center mb-6">
                <Target size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To deliver scalable, smart software solutions that drive
                business growth, enhance operational efficiency, and create
                lasting value for our clients through innovation, expertise, and
                unwavering commitment to excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project
              delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Discovery',
                description:
                  'We start by understanding your business needs, goals, and challenges.',
              },
              {
                step: '02',
                title: 'Planning',
                description:
                  'We create a detailed roadmap and strategy tailored to your requirements.',
              },
              {
                step: '03',
                title: 'Development',
                description:
                  'Our expert team builds your solution using agile methodologies.',
              },
              {
                step: '04',
                title: 'Launch & Support',
                description:
                  'We deploy your solution and provide ongoing support and maintenance.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="text-4xl font-bold text-primary-600 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Journey */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Our Growth Journey
            </h2>
            <p className="text-xl text-white/90">
              Milestones that shaped our success
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/30 hidden md:block"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:w-full`}
                >
                  <div className="md:w-1/2 flex justify-center md:justify-end pr-8">
                    {index % 2 === 0 && (
                      <div className="bg-white rounded-xl p-6 shadow-lg max-w-md text-center md:text-right">
                        <div className="text-3xl font-bold text-primary-600 mb-2">
                          {milestone.year}
                        </div>
                        <div className="text-lg text-gray-900">
                          {milestone.event}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="w-4 h-4 bg-white rounded-full border-4 border-primary-600 z-10 hidden md:block"></div>
                  <div className="md:w-1/2 flex justify-center md:justify-start pl-8">
                    {index % 2 !== 0 && (
                      <div className="bg-white rounded-xl p-6 shadow-lg max-w-md text-center md:text-left">
                        <div className="text-3xl font-bold text-primary-600 mb-2">
                          {milestone.year}
                        </div>
                        <div className="text-lg text-gray-900">
                          {milestone.event}
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Mobile view */}
                  <div className="md:hidden w-full">
                    <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                      <div className="text-3xl font-bold text-primary-600 mb-2">
                        {milestone.year}
                      </div>
                      <div className="text-lg text-gray-900">
                        {milestone.event}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              Why Softvex is Different
            </h2>
            <p className="text-lg text-gray-600">
              What sets us apart from the competition
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Client-Centric Approach',
                description:
                  'We prioritize your success and work as an extension of your team.',
              },
              {
                title: 'Proven Track Record',
                description:
                  '500+ successful projects and satisfied clients worldwide.',
              },
              {
                title: 'Innovation First',
                description:
                  'We leverage the latest technologies to deliver cutting-edge solutions.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-100"
              >
                <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

