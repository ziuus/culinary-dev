"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles, Loader2, Download, Share2, Heart, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useToast } from "@/components/ui/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AiRecipeGenerator() {
  const [prompt, setPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedRecipe, setGeneratedRecipe] = useState<null | {
    title: string
    description: string
    image: string
    ingredients: string[]
    instructions: string[]
  }>(null)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  const handleGenerate = () => {
    if (!prompt.trim()) {
      setError("Please enter a description of what you'd like to create")
      return
    }

    setError(null)
    setIsGenerating(true)

    // Simulate AI generation
    setTimeout(() => {
      try {
        setGeneratedRecipe({
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
        })
        setIsGenerating(false)
        toast({
          title: "Design generated successfully!",
          description: "Your food design has been created based on your description.",
        })
      } catch (err) {
        setError("Something went wrong. Please try again.")
        setIsGenerating(false)
        toast({
          title: "Error generating design",
          description: "There was a problem creating your design. Please try again.",
          variant: "destructive",
        })
      }
    }, 2000)
  }

  const handleSave = () => {
    toast({
      title: "Design saved!",
      description: "Your design has been saved to your collection.",
    })
  }

  const handlePromptSuggestion = (suggestion: string) => {
    setPrompt((prev) => (prev ? `${prev} ${suggestion}` : suggestion))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="p-6 glassmorphism relative overflow-hidden rounded-xl">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-sm -z-10"></div>

        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="h-5 w-5 text-primary" />
          <h3 className="text-xl font-bold">AI Recipe Creator</h3>
        </div>

        <div className="mb-6">
          <textarea
            value={prompt}
            onChange={(e) => {
              setPrompt(e.target.value)
              if (error) setError(null)
            }}
            placeholder="Describe the food design or recipe you want to create... (e.g., 'A colorful summer fruit platter with a geometric arrangement')"
            className={`w-full p-4 rounded-lg glassmorphism ${
              error ? "border-red-500 focus:ring-red-500" : "focus:ring-primary/50 focus:border-primary"
            } min-h-[120px]`}
          />
          {error && (
            <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
              <AlertCircle className="h-4 w-4" />
              <span>{error}</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePromptSuggestion("Geometric pattern")}
            className="glassmorphism hover:bg-primary/10"
          >
            Geometric
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePromptSuggestion("Colorful arrangement")}
            className="glassmorphism hover:bg-primary/10"
          >
            Colorful
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePromptSuggestion("Minimalist design")}
            className="glassmorphism hover:bg-primary/10"
          >
            Minimalist
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePromptSuggestion("Seasonal ingredients")}
            className="glassmorphism hover:bg-primary/10"
          >
            Seasonal
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePromptSuggestion("with edible flowers")}
            className="glassmorphism hover:bg-primary/10"
          >
            Edible Flowers
          </Button>
        </div>

        <div className="flex justify-end mb-6">
          <Button
            onClick={handleGenerate}
            disabled={!prompt.trim() || isGenerating}
            className="gap-2 group glassmorphism"
          >
            <span className="relative z-10 flex items-center">
              {isGenerating ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 group-hover:animate-ping" />
                  Create Design
                </>
              )}
            </span>
          </Button>
        </div>

        {generatedRecipe && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 border-t border-white/10 pt-6"
          >
            <h4 className="font-bold text-lg mb-4">{generatedRecipe.title}</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img
                  src={generatedRecipe.image || "/placeholder.svg"}
                  alt={generatedRecipe.title}
                  className="w-full h-auto rounded-lg shadow-md relative"
                />
              </div>
              <div className="glassmorphism p-4 rounded-lg">
                <p className="opacity-80 mb-4">{generatedRecipe.description}</p>

                <Tabs defaultValue="ingredients" className="mt-4">
                  <TabsList className="grid w-full grid-cols-2 glassmorphism">
                    <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
                    <TabsTrigger value="instructions">Instructions</TabsTrigger>
                  </TabsList>
                  <TabsContent value="ingredients" className="mt-4">
                    <ul className="space-y-1">
                      {generatedRecipe.ingredients.map((ingredient, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                          <span>{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="instructions" className="mt-4">
                    <ol className="space-y-2">
                      {generatedRecipe.instructions.map((instruction, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="font-bold">{idx + 1}.</span>
                          <span>{instruction}</span>
                        </li>
                      ))}
                    </ol>
                  </TabsContent>
                </Tabs>

                <div className="flex gap-2 mt-6">
                  <Button variant="outline" className="flex-1 gap-1 glassmorphism" onClick={handleSave}>
                    <Heart className="h-4 w-4" />
                    Save
                  </Button>
                  <Button variant="outline" className="flex-1 gap-1 glassmorphism">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                  <Button variant="outline" className="flex-1 gap-1 glassmorphism">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
