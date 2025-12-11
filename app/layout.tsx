import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/toaster"
import AnimatedBlobs from "@/components/animated-blobs"

// Using Outfit - a modern, clean sans-serif font
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "CulinaryDev - Food Design & AI Recipe Generator",
  description: "Discover beautiful food designs, tutorials, and create unique recipes with our AI generator.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="min-h-screen relative overflow-hidden">
            <AnimatedBlobs />
            {children}
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'