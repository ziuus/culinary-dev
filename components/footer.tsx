"use client"

import Link from "next/link"
import { Sparkles, Code, Github, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="glassmorphism py-12 relative overflow-hidden">
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold flex items-center gap-1">
                <span>Culinary</span>
                <Code className="h-5 w-5" />
                <span>Dev</span>
              </h3>
            </div>
            <p className="opacity-70">
              Transforming everyday cooking into culinary code with design tutorials and AI-powered creativity.
            </p>
            <div className="flex gap-4 mt-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="h-10 w-10 rounded-full glassmorphism flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="h-10 w-10 rounded-full glassmorphism flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="h-10 w-10 rounded-full glassmorphism flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/recipes" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">
                  Recipes
                </Link>
              </li>
              <li>
                <Link href="/ai-generator" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">
                  AI Generator
                </Link>
              </li>
              <li>
                <Link href="/premium" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">
                  Premium
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/support" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/about" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="opacity-70 mb-4">Subscribe to get the latest recipes and design tips.</p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-full">
              <input type="email" placeholder="Your email" className="px-3 py-2 rounded-md glassmorphism w-full" />
              <Button className="glassmorphism bg-primary/20 hover:bg-primary/30 whitespace-nowrap">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-70 text-sm">© 2025 CulinaryDev. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-all text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-all text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
