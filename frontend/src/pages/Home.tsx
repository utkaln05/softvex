import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/ServiceCard'
import {
  Code,
  Smartphone,
  TrendingUp,
  Database,
  Settings,
  MapPin,
  Shield,
  Zap,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'

const Home = () => {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description:
        'Custom software solutions tailored to your business needs. From web applications to enterprise systems.',
      features: ['Web Applications', 'Enterprise Software', 'API Development'],
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description:
        'Native and cross-platform mobile applications for iOS, Android, and web platforms.',
      features: ['iOS Apps', 'Android Apps', 'Cross-platform Solutions'],
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description:
        'Comprehensive digital marketing services to grow your online presence and reach your target audience.',
      features: ['SEO', 'Social Media', 'PPC Advertising', 'Content Marketing'],
    },
    {
      icon: Database,
      title: 'CRM Solutions',
      description:
        'Customer relationship management systems to streamline your sales and customer service processes.',
      features: ['Custom CRM', 'Sales Automation', 'Customer Analytics'],
    },
    {
      icon: Settings,
      title: 'ERP Solutions',
      description:
        'Enterprise resource planning systems to optimize your business operations and resource management.',
      features: ['Custom ERP', 'Process Automation', 'Business Intelligence'],
    },
  ]

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Agile development process with rapid deployment',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced developers and designers at your service',
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Rigorous testing and quality assurance processes',
    },
  ]

  const technologies = [
    'React',
    'Node.js',
    'TypeScript',
    'Python',
    'Java',
    'AWS',
    'Docker',
    'MongoDB',
    'Firebase',
    'PostgreSQL',
  ]

  const testimonials = [
    {
      name: 'John Smith',
      role: 'CEO, TechCorp',
      content:
        'Softvex transformed our business operations with their custom ERP solution. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director, GrowthCo',
      content:
        'Their digital marketing services helped us increase our online presence by 300%. Outstanding results!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CTO, StartupXYZ',
      content:
        'The mobile app they developed exceeded our expectations. Professional team and excellent communication.',
      rating: 5,
    },
  ]

  return (
    <div>
      <HeroSection />

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT services to drive your business forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                delay={index * 0.1}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              View All Services
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
                Bus Tracking System
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Real-time GPS tracking solution for schools and transportation
                companies. Monitor bus locations, track routes, and keep parents
                informed with our comprehensive bus tracking system.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Real-time GPS tracking',
                  'Admin dashboard',
                  'Driver mobile app',
                  'Parent/Student app',
                  'Push notifications',
                  'Route optimization',
                ].map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <CheckCircle size={20} className="text-primary-600 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/product"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Learn More
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-xl shadow-2xl p-8 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center">
                  <MapPin size={64} className="text-primary-600" />
                </div>
                <p className="text-center text-sm text-gray-500 mt-4">
                  Bus Tracking System Dashboard Preview
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              Why Choose Softvex?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver excellence through innovation, expertise, and
              dedication
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-gray-600">
              Modern tech stack for cutting-edge solutions
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <span className="text-gray-900 font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by businesses worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how we can help you achieve your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get a Quote
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

