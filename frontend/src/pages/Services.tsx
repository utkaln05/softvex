import { motion } from 'framer-motion'
import ServiceCard from '../components/ServiceCard'
import {
  Code,
  Smartphone,
  TrendingUp,
  Database,
  Settings,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      id: 'software-development',
      icon: Code,
      title: 'Software Development',
      description:
        'Custom software solutions tailored to your business needs. From web applications to enterprise systems, we build scalable and maintainable software that drives growth.',
      features: [
        'Custom Web Applications',
        'Enterprise Software Solutions',
        'API Development & Integration',
        'Microservices Architecture',
        'Cloud-Native Applications',
        'Legacy System Modernization',
      ],
      detailedDescription:
        'Our software development services encompass the entire software lifecycle, from initial concept to deployment and maintenance. We specialize in building robust, scalable applications using modern technologies and best practices. Whether you need a simple web application or a complex enterprise system, our team has the expertise to deliver solutions that meet your specific requirements.',
    },
    {
      id: 'app-development',
      icon: Smartphone,
      title: 'App Development',
      description:
        'Native and cross-platform mobile applications for iOS, Android, and web platforms. We create user-friendly, high-performance apps that engage users and drive business results.',
      features: [
        'iOS Native Development',
        'Android Native Development',
        'Cross-Platform Solutions (React Native, Flutter)',
        'Progressive Web Apps (PWA)',
        'App Store Optimization',
        'Post-Launch Support & Maintenance',
      ],
      detailedDescription:
        'In today\'s mobile-first world, having a strong mobile presence is essential. Our app development team creates native and cross-platform applications that provide exceptional user experiences. We follow industry best practices for design, development, testing, and deployment to ensure your app stands out in the competitive app marketplace.',
    },
    {
      id: 'digital-marketing',
      icon: TrendingUp,
      title: 'Digital Marketing',
      description:
        'Comprehensive digital marketing services to grow your online presence, reach your target audience, and drive conversions. We help you build a strong digital brand and achieve measurable results.',
      features: [
        'Search Engine Optimization (SEO)',
        'Social Media Marketing',
        'Pay-Per-Click (PPC) Advertising',
        'Content Marketing & Strategy',
        'Email Marketing Campaigns',
        'Analytics & Performance Tracking',
      ],
      detailedDescription:
        'Our digital marketing services are designed to help you reach and engage your target audience effectively. We develop comprehensive marketing strategies that combine SEO, social media, content marketing, and paid advertising to maximize your online visibility and ROI. Our data-driven approach ensures continuous optimization and improved results over time.',
    },
    {
      id: 'crm',
      icon: Database,
      title: 'CRM Solutions',
      description:
        'Customer relationship management systems to streamline your sales and customer service processes. We build custom CRM solutions that help you manage customer interactions, improve sales, and enhance customer satisfaction.',
      features: [
        'Custom CRM Development',
        'Sales Automation',
        'Customer Analytics & Reporting',
        'Integration with Existing Systems',
        'Mobile CRM Access',
        'Training & Support',
      ],
      detailedDescription:
        'A well-implemented CRM system can transform how you manage customer relationships. Our CRM solutions are tailored to your business processes and integrate seamlessly with your existing tools. We help you automate sales workflows, track customer interactions, and gain valuable insights that drive better decision-making and improved customer satisfaction.',
    },
    {
      id: 'erp',
      icon: Settings,
      title: 'ERP Solutions',
      description:
        'Enterprise resource planning systems to optimize your business operations and resource management. We develop custom ERP solutions that integrate all aspects of your business into a unified system.',
      features: [
        'Custom ERP Development',
        'Process Automation',
        'Business Intelligence & Analytics',
        'Supply Chain Management',
        'Financial Management',
        'Human Resources Integration',
      ],
      detailedDescription:
        'Our ERP solutions help you streamline operations, reduce costs, and improve efficiency across your entire organization. We design and implement ERP systems that integrate finance, HR, supply chain, and other critical business functions into a single, cohesive platform. This unified approach provides real-time visibility into your business operations and enables data-driven decision-making.',
    },
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
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT services to drive your business forward. From
              software development to digital marketing, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="scroll-mt-20"
            >
              <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon size={32} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.detailedDescription}
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
                    Key Features & Capabilities
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle
                          size={20}
                          className="text-primary-600 mt-1 flex-shrink-0"
                        />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how our services can help transform your business
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get a Quote
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services

