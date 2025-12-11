"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-mobile"

export default function ChefGenie() {
  const [isMounted, setIsMounted] = useState(false)
  const [scrollSection, setScrollSection] = useState("welcome")
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isTablet = useMediaQuery("(max-width: 1024px)")

  // Transform values based on screen size and scroll position
  const yPos = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 150 : 300])
  const xPos = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    isMobile ? [0, 20, -20, 0] : isTablet ? [0, 30, -30, 0] : [0, 50, -50, 0],
  )
  const rotate = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 10 : 15])
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isMobile ? [0.7, 0.8, 0.7] : isTablet ? [0.85, 0.95, 0.85] : [1, 1.1, 1],
  )

  // Points to different sections as user scrolls - adjusted for responsiveness
  const pointingAngle = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    isMobile ? [0, 15, -15, 20, -20, 0] : [0, 20, -20, 30, -30, 0],
  )
  const armRotate = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], isMobile ? [0, 20, -20, 0] : [0, 30, -30, 0])
  const hatRotate = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 7 : 10])

  // Update scroll section based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      if (value < 0.3) {
        setScrollSection("welcome")
      } else if (value < 0.6) {
        setScrollSection("recipes")
      } else {
        setScrollSection("ai")
      }
    })

    return () => unsubscribe()
  }, [scrollYProgress])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <motion.div
      className={`fixed z-10 pointer-events-none ${
        isMobile ? "right-4 bottom-4" : isTablet ? "right-6 bottom-6" : "right-10 bottom-10"
      }`}
      style={{ y: yPos, x: xPos, rotate, scale }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      ref={containerRef}
    >
      {/* Chef hat */}
      <motion.div
        className={`absolute ${isMobile ? "-top-10 left-3 w-16 h-16" : "-top-16 left-4 w-24 h-24"}`}
        style={{ rotate: hatRotate }}
      >
        <div className="w-full h-full bg-white rounded-t-full relative">
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-white"></div>
          <div
            className={`absolute top-2 left-1/2 -translate-x-1/2 ${isMobile ? "w-8 h-8" : "w-10 h-10"} bg-white rounded-full border-2 border-gray-200`}
          ></div>
        </div>
      </motion.div>

      {/* Chef face */}
      <motion.div
        className={`rounded-full bg-[#FFD7B5] relative flex items-center justify-center overflow-hidden border-4 border-white shadow-lg ${
          isMobile ? "w-24 h-24" : isTablet ? "w-28 h-28" : "w-32 h-32"
        }`}
        style={{ rotate: pointingAngle }}
      >
        {/* Eyes - adjusted for mobile */}
        <div
          className={`absolute ${isMobile ? "top-8 left-5 w-3 h-3" : "top-10 left-6 w-4 h-4"} bg-black rounded-full`}
        ></div>
        <div
          className={`absolute ${isMobile ? "top-8 right-5 w-3 h-3" : "top-10 right-6 w-4 h-4"} bg-black rounded-full`}
        ></div>

        {/* Smile - adjusted for mobile */}
        <div
          className={`absolute ${isMobile ? "bottom-8 left-1/2 -translate-x-1/2 w-10 h-5 border-b-3" : "bottom-10 left-1/2 -translate-x-1/2 w-12 h-6 border-b-4"} border-black rounded-b-full`}
        ></div>

        {/* Mustache - adjusted for mobile */}
        <div
          className={`absolute ${isMobile ? "top-12 left-1/2 -translate-x-1/2 w-12 h-1.5" : "top-16 left-1/2 -translate-x-1/2 w-16 h-2"} bg-black rounded-full`}
        ></div>

        {/* Pointing arm - adjusted for mobile */}
        <motion.div
          className={`absolute ${isMobile ? "-right-8 top-1/2 -translate-y-1/2 w-12 h-3" : "-right-12 top-1/2 -translate-y-1/2 w-16 h-4"} bg-[#FFD7B5] rounded-full`}
          style={{ rotate: armRotate }}
        >
          <div
            className={`absolute right-0 top-1/2 -translate-y-1/2 ${isMobile ? "w-3 h-3" : "w-4 h-4"} bg-[#FFD7B5] rounded-full`}
          ></div>
        </motion.div>

        {/* Speech bubble that changes text based on scroll position - adjusted for mobile */}
        <motion.div
          className={`absolute ${isMobile ? "-top-12 -left-20 px-2 py-1.5 text-xs" : "-top-16 -left-32 px-3 py-2"} bg-white rounded-lg shadow-lg`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.p className={`${isMobile ? "text-[10px]" : "text-xs"} font-bold text-primary`}>
            {scrollSection === "welcome"
              ? "Welcome to CulinaryDev!"
              : scrollSection === "recipes"
                ? "Check out our recipes!"
                : "Try our AI generator!"}
          </motion.p>
          <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-4 h-4 bg-white"></div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
