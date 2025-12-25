import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ProductCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
}

const ProductCard = ({
  icon: Icon,
  title,
  description,
  delay = 0,
}: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-100 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
        <Icon size={24} className="text-white" />
      </div>
      <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  )
}

export default ProductCard

