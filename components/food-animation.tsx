"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function FoodAnimation() {
  const [isMounted, setIsMounted] = useState(false)
  const { scrollYProgress } = useScroll()

  // Transform values based on scroll position
  const yAnimation = useTransform(scrollYProgress, [0, 1], [0, 50])
  const rotateAnimation = useTransform(scrollYProgress, [0, 1], [0, 360])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <motion.div
      className="fixed right-10 bottom-10 w-40 h-40 md:w-60 md:h-60 z-10 pointer-events-none"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full h-full relative">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            rotate: rotateAnimation,
            y: yAnimation,
          }}
        >
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm flex items-center justify-center">
            <span className="text-4xl md:text-6xl">🍽️</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
