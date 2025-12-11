"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Sparkles, Github, Twitter, ArrowLeft, Eye, EyeOff } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import Header from "@/components/header"
import Footer from "@/components/footer"

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  rememberMe: z.boolean().optional(),
})

type LoginFormValues = z.infer<typeof loginSchema>

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Fix hydration mismatch by waiting for client-side render
  useEffect(() => {
    setMounted(true)
  }, [])

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  })

  function onSubmit(data: LoginFormValues) {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      console.log(data)
      setIsLoading(false)
      // Redirect to dashboard after successful login
      window.location.href = "/dashboard"
    }, 1500)
  }

  if (!mounted) {
    return null // Return nothing during server render to prevent hydration mismatch
  }

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-20">
        <div className="flex justify-center">
          <motion.div
            className="w-full max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              {/* Glassmorphic card */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl"></div>
              <div className="absolute inset-0 glassmorphism rounded-2xl"></div>

              <div className="relative glassmorphism rounded-2xl p-8 shadow-xl border border-white/10">
                <div className="flex justify-between items-center mb-8">
                  <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    <ArrowLeft className="h-5 w-5" />
                  </Link>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <span className="font-bold">CulinaryDev</span>
                  </div>
                </div>

                <h1 className="text-2xl font-bold mb-2">Welcome back, chef</h1>
                <p className="text-muted-foreground mb-6">Sign in to access your culinary workspace</p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              placeholder="chef@example.com"
                              className="glassmorphism border-white/20 focus:border-primary/50"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input
                                {...field}
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="glassmorphism border-white/20 focus:border-primary/50 pr-10"
                              />
                              <button
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex items-center justify-between">
                      <FormField
                        control={form.control}
                        name="rememberMe"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} id="rememberMe" />
                            </FormControl>
                            <FormLabel htmlFor="rememberMe" className="text-sm cursor-pointer">
                              Remember me
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                      <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>

                    <Button type="submit" className="w-full glassmorphism" disabled={isLoading}>
                      {isLoading ? "Signing in..." : "Sign In"}
                    </Button>

                    <div className="relative flex items-center justify-center">
                      <div className="border-t border-white/10 absolute w-full"></div>
                      <span className="glassmorphism px-2 text-xs text-muted-foreground relative">
                        OR CONTINUE WITH
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="glassmorphism border-white/20" type="button">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Button>
                      <Button variant="outline" className="glassmorphism border-white/20" type="button">
                        <Twitter className="h-4 w-4 mr-2" />
                        Twitter
                      </Button>
                    </div>

                    <p className="text-center text-sm text-muted-foreground">
                      Don't have an account?{" "}
                      <Link href="/signup" className="text-primary hover:underline">
                        Sign up
                      </Link>
                    </p>
                  </form>
                </Form>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-20 -left-10 w-20 h-20 bg-primary/30 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 -right-10 w-20 h-20 bg-secondary/30 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
