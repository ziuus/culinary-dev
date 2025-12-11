"use client"
import { Crown } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

interface RecipeCardProps {
  title: string
  image: string
  category: string
  isPremium?: boolean
}

export default function RecipeCard({ title, image, category, isPremium = false }: RecipeCardProps) {
  return (
    <Link href={`/recipes/${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <div className="overflow-hidden rounded-xl group transition-all duration-300 hover:shadow-xl glassmorphism">
          <div className="relative">
            <div className="overflow-hidden">
              <motion.img
                src={image || "/placeholder.svg"}
                alt={title}
                className="w-full h-64 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {isPremium && (
              <motion.div
                className="absolute top-3 right-3 glassmorphism bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium flex items-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Crown className="h-3 w-3 mr-1" />
                Premium
              </motion.div>
            )}

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <motion.span
                className="text-xs font-medium px-2 py-1 rounded-full glassmorphism bg-white/10 backdrop-blur-sm text-white"
                whileHover={{ scale: 1.05 }}
              >
                {category}
              </motion.span>
            </div>
          </div>

          <div className="p-4 glassmorphism backdrop-blur-md">
            <motion.h3
              className="font-bold text-lg mb-2 group-hover:text-primary transition-colors"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {title}
            </motion.h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <motion.div
                  className="h-6 w-6 rounded-full bg-primary/20 glassmorphism"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                ></motion.div>
                <span className="text-sm opacity-70">Chef Name</span>
              </div>
              <span className="text-sm opacity-70">15 min</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
