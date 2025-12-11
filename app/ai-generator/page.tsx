"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sparkles, Loader2, Download, Share2, Heart, Info } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AiGeneratorPage() {
  const [prompt, setPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedRecipes, setGeneratedRecipes] = useState<
    Array<{
      id: number
      title: string
      description: string
      image: string
      ingredients: string[]
      instructions: string[]
    }>
  >([])

  const handleGenerate = () => {
    if (!prompt.trim()) return

    setIsGenerating(true)

    // Simulate AI generation
    setTimeout(() => {
      const newRecipe = {
        id: Date.now(),
        title: "AI-Generated Food Design",
        description:
          "A beautiful arrangement of seasonal vegetables with a modern twist, featuring geometric patterns and vibrant colors.",
        image: "/placeholder.svg?height=400&width=600",
        ingredients: [
          "2 cups fresh strawberries, halved",
          "2 kiwis, peeled and sliced",
          "1 mango, peeled and cubed",
          "1 cup blueberries",
          "1 cup raspberries",
          "Fresh mint leaves for garnish",
        ],
        instructions: [
          "Start by selecting a large flat platter or board for your design.",
          "Wash and prepare all fruits, ensuring they are thoroughly dried.",
          "Begin by creating a central focal point using the star fruit or dragon fruit slices.",
          "Arrange the larger fruit pieces in geometric patterns radiating from the center.",
          "Fill in gaps with smaller fruits like berries, creating color blocks or gradients.",
        ],
      }

      setGeneratedRecipes([newRecipe, ...generatedRecipes])
      setIsGenerating(false)
      setPrompt("")
    }, 3000)
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="glassmorphism py-16 rounded-xl my-4 mx-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Food Design Generator</h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto mb-8">
            Create unique food designs and recipes with our AI-powered tool. Just describe what you want, and watch the
            magic happen!
          </p>
        </div>
      </section>

      {/* Generator Section */}
      <section className="py-12 glassmorphism rounded-xl my-4 mx-4">
        <div className="container mx-auto px-4">
          <Card className="p-6 glassmorphism border shadow-lg max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">Describe Your Ideal Food Design</h2>
            </div>

            <div className="mb-6">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the food design or recipe you want to create... (e.g., 'A colorful summer fruit platter with a geometric arrangement' or 'A modern take on traditional sushi presentation')"
                className="w-full p-4 rounded-lg glassmorphism min-h-[150px] focus:ring-2 focus:ring-primary/50 focus:border-primary"
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPrompt(prompt + " Geometric pattern")}
                className="glassmorphism"
              >
                Geometric
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPrompt(prompt + " Colorful arrangement")}
                className="glassmorphism"
              >
                Colorful
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPrompt(prompt + " Minimalist design")}
                className="glassmorphism"
              >
                Minimalist
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPrompt(prompt + " Seasonal ingredients")}
                className="glassmorphism"
              >
                Seasonal
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPrompt(prompt + " Artistic plating")}
                className="glassmorphism"
              >
                Artistic
              </Button>
            </div>

            <div className="flex justify-end">
              <Button
                onClick={handleGenerate}
                disabled={!prompt.trim() || isGenerating}
                size="lg"
                className="gap-2 group glassmorphism"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 group-hover:animate-ping" />
                    Generate Design
                  </>
                )}
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Generated Recipes */}
      {generatedRecipes.length > 0 && (
        <section className="py-12 glassmorphism rounded-xl my-4 mx-4">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Your Generated Designs</h2>

            <div className="space-y-8">
              {generatedRecipes.map((recipe) => (
                <Card key={recipe.id} className="overflow-hidden animate-fade-in glassmorphism">
                  <div className="grid md:grid-cols-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={recipe.image || "/placeholder.svg"}
                        alt={recipe.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                      />
                    </div>
                    <div className="p-6 glassmorphism">
                      <h3 className="text-xl font-bold mb-3">{recipe.title}</h3>
                      <p className="text-muted-foreground mb-6">{recipe.description}</p>

                      <Tabs defaultValue="ingredients">
                        <TabsList className="grid w-full grid-cols-2 glassmorphism">
                          <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
                          <TabsTrigger value="instructions">Instructions</TabsTrigger>
                        </TabsList>
                        <TabsContent value="ingredients" className="mt-4">
                          <ul className="space-y-1">
                            {recipe.ingredients.map((ingredient, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                                <span>{ingredient}</span>
                              </li>
                            ))}
                          </ul>
                        </TabsContent>
                        <TabsContent value="instructions" className="mt-4">
                          <ol className="space-y-2">
                            {recipe.instructions.map((instruction, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="font-bold">{idx + 1}.</span>
                                <span>{instruction}</span>
                              </li>
                            ))}
                          </ol>
                        </TabsContent>
                      </Tabs>

                      <div className="flex gap-2 mt-6">
                        <Button variant="outline" size="sm" className="gap-1 glassmorphism">
                          <Heart className="h-4 w-4" />
                          Save
                        </Button>
                        <Button variant="outline" size="sm" className="gap-1 glassmorphism">
                          <Download className="h-4 w-4" />
                          Download
                        </Button>
                        <Button variant="outline" size="sm" className="gap-1 glassmorphism">
                          <Share2 className="h-4 w-4" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How It Works */}
      <section className="py-16 glassmorphism rounded-xl my-4 mx-4">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered food design generator creates unique culinary presentations based on your descriptions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Describe Your Vision",
                description:
                  "Tell our AI what kind of food design you want to create. Be as specific or creative as you like!",
                icon: <Info className="h-6 w-6 text-primary" />,
              },
              {
                step: 2,
                title: "AI Generation",
                description:
                  "Our advanced AI analyzes your description and generates a unique food design with ingredients and instructions.",
                icon: <Sparkles className="h-6 w-6 text-primary" />,
              },
              {
                step: 3,
                title: "Bring It To Life",
                description:
                  "Follow the generated recipe to create your beautiful food design in real life, or save it for later.",
                icon: <Heart className="h-6 w-6 text-primary" />,
              },
            ].map((item) => (
              <Card key={item.step} className="p-6 hover:shadow-lg transition-all duration-300 glassmorphism">
                <div className="h-12 w-12 rounded-full glassmorphism bg-primary/10 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 glassmorphism rounded-xl my-4 mx-4">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Create Your Own Designs?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Upgrade to our premium plan for unlimited AI generations, higher quality designs, and exclusive features.
          </p>
          <Button size="lg" asChild className="glassmorphism">
            <a href="/premium">Upgrade to Premium</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
