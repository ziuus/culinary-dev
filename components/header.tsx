"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sparkles, Code, Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Define routes
  const routes = [
    { href: "/", label: "Home" },
    { href: "/recipes", label: "Recipes" },
    { href: "/ai-generator", label: "AI Generator" },
    { href: "/premium", label: "Premium" },
    { href: "/about", label: "About" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 glassmorphism",
        scrolled ? "backdrop-blur-lg border-b shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur-sm opacity-70 group-hover:opacity-100 animate-pulse"></div>
            <Sparkles className="h-6 w-6 text-primary relative" />
          </div>
          <span className="text-xl font-bold hover:text-primary transition-colors flex items-center gap-1">
            <span>Culinary</span>
            <Code className="h-5 w-5" />
            <span>Dev</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "font-medium transition-all hover:text-primary relative py-2",
                pathname === route.href ? "text-primary" : "text-foreground/70",
              )}
            >
              {route.label}
              {pathname === route.href && (
                <motion.span
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Search and Auth Buttons */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search className="h-5 w-5" />
          </Button>

          <ThemeToggle />

          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" asChild className="glassmorphism border-primary/20 hover:border-primary/50">
              <Link href="/login">Sign In</Link>
            </Button>
            <Button
              asChild
              className="glassmorphism bg-gradient-to-r from-primary/80 to-primary/60 hover:from-primary/90 hover:to-primary/70"
            >
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="glassmorphism">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between py-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <span className="font-bold text-lg">CulinaryDev</span>
                  </div>
                </div>

                <nav className="flex flex-col gap-1 py-6">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={`px-4 py-3 text-lg font-medium transition-colors hover:bg-primary/10 rounded-md ${
                        pathname === route.href ? "text-primary" : "text-foreground/70"
                      }`}
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto border-t border-white/10 py-4 px-4">
                  <div className="flex flex-col gap-2">
                    <Button className="w-full glassmorphism" asChild>
                      <Link href="/login">Sign In</Link>
                    </Button>
                    <Button variant="outline" className="w-full glassmorphism" asChild>
                      <Link href="/signup">Sign Up</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
