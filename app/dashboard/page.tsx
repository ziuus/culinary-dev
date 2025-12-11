"use client"

import { Switch } from "@/components/ui/switch"

import { Input } from "@/components/ui/input"

import { Label } from "@/components/ui/label"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart3,
  BookOpen,
  Heart,
  History,
  ImageIcon,
  LayoutDashboard,
  LogOut,
  Plus,
  Settings,
  Sparkles,
  User,
} from "lucide-react"
import Link from "next/link"
import RecipeCard from "@/components/recipe-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  // Sample data
  const savedDesigns = [
    {
      id: 1,
      title: "Geometric Fruit Platter",
      image: "/placeholder.svg?height=400&width=600",
      category: "Presentation",
      isPremium: false,
    },
    {
      id: 2,
      title: "Molecular Gastronomy Dessert",
      image: "/placeholder.svg?height=400&width=600",
      category: "Advanced",
      isPremium: true,
    },
    {
      id: 3,
      title: "Rainbow Sushi Art",
      image: "/placeholder.svg?height=400&width=600",
      category: "International",
      isPremium: false,
    },
  ]

  const recentActivity = [
    {
      id: 1,
      action: "Generated design",
      design: "Summer Fruit Arrangement",
      time: "2 hours ago",
    },
    {
      id: 2,
      action: "Saved design",
      design: "Molecular Gastronomy Dessert",
      time: "Yesterday",
    },
    {
      id: 3,
      action: "Viewed tutorial",
      design: "Advanced Plating Techniques",
      time: "3 days ago",
    },
  ]

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:flex w-64 flex-col fixed inset-y-0 z-50">
          <div className="flex flex-col flex-grow bg-background/80 backdrop-blur-lg border-r h-full">
            <div className="flex items-center gap-2 px-6 py-4 border-b">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">CulinaryDev</span>
            </div>

            <div className="flex-1 flex flex-col overflow-y-auto pt-5 pb-4">
              <nav className="flex-1 px-3 space-y-1">
                <Link
                  href="/dashboard"
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === "overview"
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/60 hover:bg-muted hover:text-foreground"
                  }`}
                  onClick={() => setActiveTab("overview")}
                >
                  <LayoutDashboard className="mr-3 h-5 w-5" />
                  Overview
                </Link>
                <Link
                  href="/dashboard?tab=designs"
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === "designs"
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/60 hover:bg-muted hover:text-foreground"
                  }`}
                  onClick={() => setActiveTab("designs")}
                >
                  <ImageIcon className="mr-3 h-5 w-5" />
                  My Designs
                </Link>
                <Link
                  href="/dashboard?tab=favorites"
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === "favorites"
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/60 hover:bg-muted hover:text-foreground"
                  }`}
                  onClick={() => setActiveTab("favorites")}
                >
                  <Heart className="mr-3 h-5 w-5" />
                  Favorites
                </Link>
                <Link
                  href="/dashboard?tab=activity"
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === "activity"
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/60 hover:bg-muted hover:text-foreground"
                  }`}
                  onClick={() => setActiveTab("activity")}
                >
                  <History className="mr-3 h-5 w-5" />
                  Activity
                </Link>
                <Link
                  href="/dashboard?tab=tutorials"
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === "tutorials"
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/60 hover:bg-muted hover:text-foreground"
                  }`}
                  onClick={() => setActiveTab("tutorials")}
                >
                  <BookOpen className="mr-3 h-5 w-5" />
                  Tutorials
                </Link>
                <Link
                  href="/dashboard?tab=analytics"
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === "analytics"
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/60 hover:bg-muted hover:text-foreground"
                  }`}
                  onClick={() => setActiveTab("analytics")}
                >
                  <BarChart3 className="mr-3 h-5 w-5" />
                  Analytics
                </Link>
                <Link
                  href="/dashboard?tab=settings"
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === "settings"
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/60 hover:bg-muted hover:text-foreground"
                  }`}
                  onClick={() => setActiveTab("settings")}
                >
                  <Settings className="mr-3 h-5 w-5" />
                  Settings
                </Link>
              </nav>
            </div>

            <div className="p-4 border-t">
              <div className="flex items-center">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="ml-3">
                  <p className="text-sm font-medium">Jamie Doe</p>
                  <p className="text-xs text-muted-foreground">Premium Member</p>
                </div>
              </div>
              <Button variant="ghost" className="w-full justify-start mt-4 text-muted-foreground" asChild>
                <Link href="/">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 md:ml-64">
          <header className="bg-background/80 backdrop-blur-lg border-b sticky top-0 z-40">
            <div className="flex h-16 items-center justify-between px-4 md:px-6">
              <div className="flex items-center md:hidden">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold ml-2">CulinaryDev</span>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" className="hidden md:flex">
                  <Plus className="mr-2 h-4 w-4" />
                  New Design
                </Button>
                <Avatar className="h-8 w-8 md:hidden">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </header>

          <main className="p-4 md:p-6">
            <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h1 className="text-2xl font-bold">Dashboard</h1>
                  <p className="text-muted-foreground">Welcome back, Jamie!</p>
                </div>
                <TabsList className="hidden md:flex">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="designs">My Designs</TabsTrigger>
                  <TabsTrigger value="favorites">Favorites</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="overview" className="space-y-6">
                <motion.div
                  className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={fadeIn}>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Total Designs</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">24</div>
                        <p className="text-xs text-muted-foreground">+3 from last month</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                  <motion.div variants={fadeIn}>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">AI Generations</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">12/20</div>
                        <p className="text-xs text-muted-foreground">Monthly limit</p>
                        <Progress value={60} className="h-2 mt-2" />
                      </CardContent>
                    </Card>
                  </motion.div>
                  <motion.div variants={fadeIn}>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Saved Tutorials</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">7</div>
                        <p className="text-xs text-muted-foreground">2 premium tutorials</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                  <motion.div variants={fadeIn}>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Subscription</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">Premium</div>
                        <p className="text-xs text-muted-foreground">Renews in 18 days</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>

                <motion.div variants={fadeIn} initial="hidden" animate="visible">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Recent Designs</CardTitle>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="/dashboard?tab=designs">View all</Link>
                        </Button>
                      </div>
                      <CardDescription>Your recently created and saved designs</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        {savedDesigns.map((design) => (
                          <RecipeCard
                            key={design.id}
                            title={design.title}
                            image={design.image}
                            category={design.category}
                            isPremium={design.isPremium}
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2">
                  <motion.div variants={fadeIn} initial="hidden" animate="visible">
                    <Card>
                      <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>Your recent actions and updates</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {recentActivity.map((activity) => (
                            <div key={activity.id} className="flex items-center">
                              <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                <History className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <p className="text-sm font-medium">{activity.action}</p>
                                <p className="text-xs text-muted-foreground">
                                  {activity.design} • {activity.time}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={fadeIn} initial="hidden" animate="visible">
                    <Card>
                      <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                        <CardDescription>Common tasks and shortcuts</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          <Button className="justify-start" asChild>
                            <Link href="/ai-generator">
                              <Sparkles className="mr-2 h-4 w-4" />
                              New AI Design
                            </Link>
                          </Button>
                          <Button variant="outline" className="justify-start">
                            <Plus className="mr-2 h-4 w-4" />
                            Upload Design
                          </Button>
                          <Button variant="outline" className="justify-start">
                            <BookOpen className="mr-2 h-4 w-4" />
                            Browse Tutorials
                          </Button>
                          <Button variant="outline" className="justify-start">
                            <User className="mr-2 h-4 w-4" />
                            Edit Profile
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </TabsContent>

              <TabsContent value="designs">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>My Designs</CardTitle>
                      <Button size="sm">
                        <Plus className="mr-2 h-4 w-4" />
                        New Design
                      </Button>
                    </div>
                    <CardDescription>All your created and saved designs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      {savedDesigns.map((design) => (
                        <RecipeCard
                          key={design.id}
                          title={design.title}
                          image={design.image}
                          category={design.category}
                          isPremium={design.isPremium}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="favorites">
                <Card>
                  <CardHeader>
                    <CardTitle>Favorite Designs</CardTitle>
                    <CardDescription>Designs you've saved as favorites</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      {savedDesigns.slice(0, 2).map((design) => (
                        <RecipeCard
                          key={design.id}
                          title={design.title}
                          image={design.image}
                          category={design.category}
                          isPremium={design.isPremium}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>Manage your account preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Profile Information</h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" defaultValue="Jamie Doe" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" defaultValue="jamie@example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="username">Username</Label>
                          <Input id="username" defaultValue="jamiedoe" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bio">Bio</Label>
                          <Input id="bio" defaultValue="Food enthusiast and home chef" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Subscription</h3>
                      <div className="rounded-lg border p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">Premium Plan</p>
                            <p className="text-sm text-muted-foreground">$9.99/month, renews on June 15, 2025</p>
                          </div>
                          <Button variant="outline">Manage</Button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Preferences</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Email Notifications</Label>
                            <p className="text-sm text-muted-foreground">
                              Receive updates about new features and designs
                            </p>
                          </div>
                          <Switch checked={true} />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Dark Mode</Label>
                            <p className="text-sm text-muted-foreground">Toggle between light and dark mode</p>
                          </div>
                          <Switch checked={false} />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button>Save Changes</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  )
}
