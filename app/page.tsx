"use client"

import Link from "next/link"
import { ChevronRight, Sparkles, BookOpen, Crown, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import AiRecipeGenerator from "@/components/ai-recipe-generator"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { foodCategories } from "@/lib/constants"
import AnimatedBlobs from "@/components/animated-blobs"

// Dynamically import components to prevent SSR issues
const ChefGenie = dynamic(() => import("@/components/chef-genie"), {
  ssr: false,
})

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      y: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  }

  // User reviews data
  const userReviews = [
    {
      name: "Sarah Johnson",
      role: "Food Blogger",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      review:
        "CulinaryDev has completely transformed how I present my food. The AI generator gives me fresh ideas when I'm in a creative rut!",
    },
    {
      name: "Michael Chen",
      role: "Professional Chef",
      image: "/placeholder.svg?height=100&width=100",
      rating: 4,
      review:
        "As a professional chef, I was skeptical at first, but the designs are truly innovative. The premium features are worth every penny.",
    },
    {
      name: "Emma Rodriguez",
      role: "Home Cook",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      review:
        "I've impressed my family and friends with the beautiful presentations I've created using the tutorials. So easy to follow!",
    },
    {
      name: "David Kim",
      role: "Food Photographer",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      review:
        "The geometric designs have elevated my food photography portfolio. My clients are amazed by the results!",
    },
  ]

  return (
    <div className="min-h-screen animated-bg">
      <Header />
      <AnimatedBlobs />
      <ChefGenie />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden glassmorphism rounded-xl my-4 mx-4">
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" />

        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className="space-y-6" variants={fadeIn}>
              <motion.div
                className="inline-flex items-center px-3 py-1 rounded-full glassmorphism text-primary text-sm font-medium mb-4"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Sparkles className="mr-2 h-4 w-4" /> Elevate Your Culinary Creations
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight glow-text">
                Where{" "}
                <motion.span
                  className="text-primary"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  Food
                </motion.span>{" "}
                Meets{" "}
                <motion.span
                  className="text-primary"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
                >
                  Artistry
                </motion.span>
              </h1>
              <p className="text-lg opacity-80">
                Discover beautiful food designs and create stunning culinary masterpieces with our innovative platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="group relative overflow-hidden glassmorphism">
                    <span className="relative z-10 flex items-center">
                      Explore Recipes
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="group glassmorphism">
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:text-primary transition-colors duration-300">
                      Try AI Generator
                    </span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              variants={fadeIn}
              animate={floatingAnimation}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl -z-10 animate-pulse-glow" />
              <div className="relative rounded-xl overflow-hidden shadow-2xl glassmorphism">
                <img
                  src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Beautiful food arrangement"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 glassmorphism rounded-b-xl">
                    <p className="text-white font-medium">Create stunning food presentations with our design tools</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Browse by Category Section */}
      <section className="py-16 glassmorphism rounded-xl my-4 mx-4">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent glow-text">
              Browse by Category
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {foodCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="glassmorphism rounded-xl p-6"
                  style={{
                    borderColor: `hsla(var(--${category.color}), 0.3)`,
                  }}
                >
                  <motion.div
                    className="text-4xl mb-2"
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="font-bold text-lg mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.tutorials} tutorials</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* User Reviews Section */}
      <section className="py-16 glassmorphism rounded-xl my-4 mx-4">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">What Our Users Say</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Join thousands of food enthusiasts who are transforming their culinary creations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {userReviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glassmorphism rounded-xl p-6 relative"
              >
                <div className="absolute -top-6 -right-6">
                  <div className="bg-primary/10 glassmorphism rounded-full p-3 text-primary">
                    <Quote className="h-5 w-5" />
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img
                      src={review.image || "/placeholder.svg"}
                      alt={review.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                    />
                  ))}
                </div>

                <p className="text-sm opacity-90">{review.review}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Simplified */}
      <section className="py-20 glassmorphism rounded-xl my-4 mx-4">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">Elevate Your Culinary Experience</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              From stunning food presentations to AI-powered recipe creation
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            {/* Feature 1 */}
            <motion.div variants={fadeIn}>
              <motion.div
                className="p-6 glassmorphism rounded-xl"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="h-12 w-12 rounded-full glassmorphism flex items-center justify-center mb-6"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <BookOpen className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">Design Tutorials</h3>
                <p className="opacity-80 mb-4">Step-by-step guides to create visually stunning food presentations.</p>
                <Link href="/tutorials" className="text-primary flex items-center hover:underline">
                  Browse Tutorials
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div variants={fadeIn}>
              <motion.div
                className="p-6 glassmorphism rounded-xl"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="h-12 w-12 rounded-full glassmorphism flex items-center justify-center mb-6"
                  animate={{ rotate: [0, 10, 0, -10, 0] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Sparkles className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">AI Recipe Creator</h3>
                <p className="opacity-80 mb-4">
                  Generate unique recipes based on your preferences and available ingredients.
                </p>
                <Link href="/ai-generator" className="text-primary flex items-center hover:underline">
                  Try AI Generator
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div variants={fadeIn}>
              <motion.div
                className="p-6 glassmorphism rounded-xl"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="h-12 w-12 rounded-full glassmorphism flex items-center justify-center mb-6"
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Crown className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">Premium Content</h3>
                <p className="opacity-80 mb-4">
                  Access exclusive designs, professional techniques, and advanced inspiration.
                </p>
                <Link href="/premium" className="text-primary flex items-center hover:underline">
                  View Premium Plans
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* AI Generator Preview */}
      <section className="py-20 glassmorphism rounded-xl my-4 mx-4">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">Create with AI</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Generate unique recipes and food designs with our AI-powered tool
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <AiRecipeGenerator />
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" asChild className="glassmorphism">
                <Link href="/ai-generator">Try Full AI Generator</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 glassmorphism rounded-xl my-4 mx-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80')] opacity-5"></div>
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        ></motion.div>
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        ></motion.div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 glow-text">
              Ready to Transform Your Culinary Creations?
            </h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto mb-8">
              Join thousands of food enthusiasts who are elevating their culinary presentations
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="glassmorphism animate-pulse" asChild>
                <Link href="/signup">Create Your Free Account</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
