import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features?: string[]
  delay?: number
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features = [],
  delay = 0,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col"
    >
      <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
        <Icon size={28} className="text-white" />
      </div>
      <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      {features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600">
              <span className="text-primary-600 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  )
}

export default ServiceCard

