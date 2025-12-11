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

const signupSchema = z
  .object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z.string(),
    terms: z.boolean().refine((val) => val === true, {
      message: "You must agree to the terms and conditions",
    }),
    userType: z.enum(["homeCook", "professional", "photographer", "blogger"]),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

type SignupFormValues = z.infer<typeof signupSchema>

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Fix hydration mismatch by waiting for client-side render
  useEffect(() => {
    setMounted(true)
  }, [])

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
      userType: "homeCook",
    },
    mode: "onChange",
  })

  function onSubmit(data: SignupFormValues) {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      console.log(data)
      setIsLoading(false)
      // Redirect to dashboard after successful signup
      window.location.href = "/dashboard"
    }, 1500)
  }

  const nextStep = async () => {
    if (step === 1) {
      const isValid = await form.trigger(["name", "email"])
      if (isValid) setStep(2)
    } else if (step === 2) {
      const isValid = await form.trigger(["password", "confirmPassword", "terms"])
      if (isValid) setStep(3)
    }
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const userTypes = [
    { value: "homeCook", label: "Home Cook" },
    { value: "professional", label: "Professional Chef" },
    { value: "photographer", label: "Food Photographer" },
    { value: "blogger", label: "Food Blogger" },
  ]

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
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/80 to-secondary/10 rounded-2xl backdrop-blur-xl border border-white/10"></div>

              <div className="relative backdrop-blur-sm bg-background/30 rounded-2xl p-8 shadow-xl border border-white/10">
                <div className="flex justify-between items-center mb-8">
                  <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    <ArrowLeft className="h-5 w-5" />
                  </Link>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <span className="font-bold">CulinaryDev</span>
                  </div>
                </div>

                <h1 className="text-2xl font-bold mb-2">Join the culinary revolution</h1>
                <p className="text-muted-foreground mb-6">Create your account to start designing delicious creations</p>

                {/* Progress indicator */}
                <div className="flex items-center mb-6">
                  <div className={`h-1 flex-1 rounded-full ${step >= 1 ? "bg-primary" : "bg-muted"}`}></div>
                  <div
                    className={`h-6 w-6 rounded-full flex items-center justify-center mx-2 ${
                      step >= 1 ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    1
                  </div>
                  <div className={`h-1 flex-1 rounded-full ${step >= 2 ? "bg-primary" : "bg-muted"}`}></div>
                  <div
                    className={`h-6 w-6 rounded-full flex items-center justify-center mx-2 ${
                      step >= 2 ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    2
                  </div>
                  <div className={`h-1 flex-1 rounded-full ${step >= 3 ? "bg-primary" : "bg-muted"}`}></div>
                  <div
                    className={`h-6 w-6 rounded-full flex items-center justify-center mx-2 ${
                      step >= 3 ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    3
                  </div>
                  <div className={`h-1 flex-1 rounded-full ${step >= 3 ? "bg-primary" : "bg-muted"}`}></div>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="Jamie Oliver"
                                  className="bg-background/50 border-white/20 focus:border-primary/50 backdrop-blur-sm"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

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
                                  className="bg-background/50 border-white/20 focus:border-primary/50 backdrop-blur-sm"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="button"
                          className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
                          onClick={nextStep}
                        >
                          Continue
                        </Button>

                        <div className="relative flex items-center justify-center">
                          <div className="border-t border-white/10 absolute w-full"></div>
                          <span className="bg-background/30 px-2 text-xs text-muted-foreground relative">
                            OR CONTINUE WITH
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <Button variant="outline" className="bg-background/50 border-white/20" type="button">
                            <Github className="h-4 w-4 mr-2" />
                            GitHub
                          </Button>
                          <Button variant="outline" className="bg-background/50 border-white/20" type="button">
                            <Twitter className="h-4 w-4 mr-2" />
                            Twitter
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
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
                                    className="bg-background/50 border-white/20 focus:border-primary/50 backdrop-blur-sm pr-10"
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

                        <FormField
                          control={form.control}
                          name="confirmPassword"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Confirm Password</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  type="password"
                                  placeholder="••••••••"
                                  className="bg-background/50 border-white/20 focus:border-primary/50 backdrop-blur-sm"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="terms"
                          render={({ field }) => (
                            <FormItem className="flex items-start space-x-2">
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-sm">
                                  I agree to the{" "}
                                  <Link href="/terms" className="text-primary hover:underline">
                                    Terms of Service
                                  </Link>{" "}
                                  and{" "}
                                  <Link href="/privacy" className="text-primary hover:underline">
                                    Privacy Policy
                                  </Link>
                                </FormLabel>
                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />

                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            className="flex-1 bg-background/50 border-white/20"
                            onClick={prevStep}
                            type="button"
                          >
                            Back
                          </Button>
                          <Button
                            className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
                            onClick={nextStep}
                            type="button"
                          >
                            Continue
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <div className="text-center py-4">
                          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 mb-4">
                            <Sparkles className="h-8 w-8 text-primary" />
                          </div>
                          <h3 className="text-xl font-bold mb-2">Almost there!</h3>
                          <p className="text-muted-foreground">Tell us a bit about your culinary interests</p>
                        </div>

                        <FormField
                          control={form.control}
                          name="userType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>What best describes you?</FormLabel>
                              <div className="grid grid-cols-2 gap-2">
                                {userTypes.map((type) => (
                                  <Button
                                    key={type.value}
                                    type="button"
                                    variant="outline"
                                    className={`bg-background/50 border-white/20 hover:bg-primary/20 hover:border-primary/50 ${
                                      field.value === type.value ? "bg-primary/20 border-primary/50 text-primary" : ""
                                    }`}
                                    onClick={() => form.setValue("userType", type.value as any)}
                                  >
                                    {type.label}
                                  </Button>
                                ))}
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            className="flex-1 bg-background/50 border-white/20"
                            onClick={prevStep}
                            type="button"
                          >
                            Back
                          </Button>
                          <Button
                            className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
                            type="submit"
                            disabled={isLoading}
                          >
                            {isLoading ? "Creating Account..." : "Complete Sign Up"}
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    <p className="text-center text-sm text-muted-foreground mt-6">
                      Already have an account?{" "}
                      <Link href="/login" className="text-primary hover:underline">
                        Sign in
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
