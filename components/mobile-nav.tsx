"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Sparkles, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import ThemeToggle from "./theme-toggle"

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Define routes but filter out Home when on the home page
  const routes = [
    { href: "/recipes", label: "Recipes" },
    { href: "/ai-generator", label: "AI Generator" },
    { href: "/premium", label: "Premium" },
    { href: "/about", label: "About" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" className="w-9 h-9">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px] pr-0 glassmorphism">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between py-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="font-bold text-lg flex items-center gap-1">
                <span>Culinary</span>
                <Code className="h-4 w-4" />
                <span>Dev</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
          </div>

          <nav className="flex flex-col gap-1 py-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 text-lg font-medium transition-colors hover:bg-primary/10 rounded-md glassmorphism ${
                  pathname === route.href ? "text-primary" : "text-foreground/70"
                }`}
              >
                {route.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto border-t border-white/10 py-4 px-4">
            <div className="flex flex-col gap-2">
              <Button className="w-full glassmorphism" onClick={() => setOpen(false)} asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button variant="outline" className="w-full glassmorphism" onClick={() => setOpen(false)} asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
