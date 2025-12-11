import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Clock, Crown, Heart, Share2, Star, Users } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import RecipeCard from "@/components/recipe-card"

export default function RecipeDetailPage({ params }: { params: { slug: string } }) {
  // This would normally come from a database
  const recipe = {
    title: "Geometric Fruit Platter",
    slug: params.slug,
    image: "/placeholder.svg?height=800&width=1200",
    category: "Presentation",
    isPremium: false,
    rating: 4.8,
    reviews: 124,
    prepTime: "30 min",
    difficulty: "Medium",
    servings: 6,
    chef: "Chef Maria",
    description:
      "A stunning geometric arrangement of seasonal fruits that creates a visually appealing centerpiece for any table. This design combines colors, textures, and flavors in a harmonious pattern that's as delicious as it is beautiful.",
    ingredients: [
      "2 cups fresh strawberries, halved",
      "2 kiwis, peeled and sliced",
      "1 mango, peeled and cubed",
      "1 cup blueberries",
      "1 cup raspberries",
      "1 dragon fruit, sliced",
      "1 star fruit, sliced",
      "2 oranges, peeled and segmented",
      "1 cup green grapes",
      "1 cup red grapes",
      "Fresh mint leaves for garnish",
      "2 tablespoons honey (optional)",
      "1 tablespoon lime juice (optional)",
    ],
    instructions: [
      "Start by selecting a large flat platter or board for your design.",
      "Wash and prepare all fruits, ensuring they are thoroughly dried to prevent moisture on the platter.",
      "Begin by creating a central focal point using the star fruit or dragon fruit slices.",
      "Arrange the larger fruit pieces (mango, kiwi, orange segments) in geometric patterns radiating from the center.",
      "Fill in gaps with smaller fruits like berries, creating color blocks or gradients.",
      "Create symmetrical patterns on opposite sides of the platter for visual balance.",
      "Use contrasting colors next to each other to make the design pop.",
      "Add height variation by stacking some fruit pieces.",
      "Garnish with fresh mint leaves for color contrast and aroma.",
      "If desired, mix honey and lime juice and lightly drizzle over the arrangement just before serving.",
    ],
    tips: [
      "Choose fruits that are firm and will hold their shape.",
      "Use a sharp knife for clean, precise cuts.",
      "Create a sketch of your design before arranging the fruit.",
      "Consider using cookie cutters for uniform shapes.",
      "Prepare the platter close to serving time to maintain freshness.",
    ],
    relatedRecipes: [
      {
        id: 1,
        title: "Rainbow Sushi Art",
        image: "/placeholder.svg?height=400&width=600",
        category: "International",
        isPremium: false,
      },
      {
        id: 2,
        title: "Artistic Vegetable Carving",
        image: "/placeholder.svg?height=400&width=600",
        category: "Presentation",
        isPremium: true,
      },
      {
        id: 3,
        title: "Edible Flower Arrangement",
        image: "/placeholder.svg?height=400&width=600",
        category: "Seasonal",
        isPremium: false,
      },
    ],
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Recipe Hero */}
      <section className="pt-8 pb-16 glassmorphism rounded-xl my-4 mx-4">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative rounded-lg overflow-hidden shadow-xl glassmorphism">
                <img
                  src={recipe.image || "/placeholder.svg"}
                  alt={recipe.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {recipe.isPremium && (
                  <div className="absolute top-4 right-4 glassmorphism bg-primary/20 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                    <Crown className="h-3 w-3 mr-1" />
                    Premium
                  </div>
                )}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6 glassmorphism p-6 rounded-xl">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium px-2 py-1 rounded-full glassmorphism bg-primary/10 text-primary">
                    {recipe.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium">{recipe.rating}</span>
                    <span className="text-sm text-muted-foreground">({recipe.reviews} reviews)</span>
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mb-4">{recipe.title}</h1>
                <p className="text-lg text-muted-foreground">{recipe.description}</p>
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 glassmorphism p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Prep Time</p>
                    <p className="font-medium">{recipe.prepTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 glassmorphism p-2 rounded-lg">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Difficulty</p>
                    <p className="font-medium">{recipe.difficulty}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 glassmorphism p-2 rounded-lg">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Servings</p>
                    <p className="font-medium">{recipe.servings}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button className="gap-2 glassmorphism">
                  <Heart className="h-4 w-4" />
                  Save
                </Button>
                <Button variant="outline" className="gap-2 glassmorphism">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full glassmorphism bg-primary/20"></div>
                  <div>
                    <p className="font-medium">{recipe.chef}</p>
                    <p className="text-sm text-muted-foreground">Food Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Content */}
      <section className="py-12 glassmorphism rounded-xl my-4 mx-4">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="instructions" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8 glassmorphism">
              <TabsTrigger value="instructions">Instructions</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="tips">Tips</TabsTrigger>
            </TabsList>

            <TabsContent value="instructions" className="animate-fade-in">
              <Card className="p-6 glassmorphism">
                <h2 className="text-2xl font-bold mb-6">Step-by-Step Instructions</h2>
                <ol className="space-y-4">
                  {recipe.instructions.map((step, index) => (
                    <li key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full glassmorphism bg-primary/20 text-primary-foreground flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <p className="pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </Card>
            </TabsContent>

            <TabsContent value="ingredients" className="animate-fade-in">
              <Card className="p-6 glassmorphism">
                <h2 className="text-2xl font-bold mb-6">Ingredients</h2>
                <ul className="grid md:grid-cols-2 gap-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </TabsContent>

            <TabsContent value="tips" className="animate-fade-in">
              <Card className="p-6 glassmorphism">
                <h2 className="text-2xl font-bold mb-6">Chef's Tips</h2>
                <ul className="space-y-4">
                  {recipe.tips.map((tip, index) => (
                    <li key={index} className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full glassmorphism bg-primary/20 text-primary flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <p>{tip}</p>
                    </li>
                  ))}
                </ul>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Recipes */}
      <section className="py-16 glassmorphism rounded-xl my-4 mx-4">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {recipe.relatedRecipes.map((related) => (
              <RecipeCard
                key={related.id}
                title={related.title}
                image={related.image}
                category={related.category}
                isPremium={related.isPremium}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
