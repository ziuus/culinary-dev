import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, Search, SlidersHorizontal } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import RecipeCard from "@/components/recipe-card"

export default function RecipesPage() {
  // Sample recipe categories
  const categories = [
    "All",
    "Presentation",
    "Desserts",
    "Appetizers",
    "Main Course",
    "International",
    "Seasonal",
    "Vegan",
    "Advanced",
  ]

  // Sample recipes data
  const recipes = [
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
    {
      id: 4,
      title: "Artistic Vegetable Carving",
      image: "/placeholder.svg?height=400&width=600",
      category: "Presentation",
      isPremium: true,
    },
    {
      id: 5,
      title: "Edible Flower Arrangement",
      image: "/placeholder.svg?height=400&width=600",
      category: "Seasonal",
      isPremium: false,
    },
    {
      id: 6,
      title: "Chocolate Sculpture Showpiece",
      image: "/placeholder.svg?height=400&width=600",
      category: "Desserts",
      isPremium: true,
    },
    {
      id: 7,
      title: "Layered Cocktail Presentation",
      image: "/placeholder.svg?height=400&width=600",
      category: "Appetizers",
      isPremium: false,
    },
    {
      id: 8,
      title: "Deconstructed Classic Dish",
      image: "/placeholder.svg?height=400&width=600",
      category: "Main Course",
      isPremium: true,
    },
    {
      id: 9,
      title: "Vegan Color Wheel Platter",
      image: "/placeholder.svg?height=400&width=600",
      category: "Vegan",
      isPremium: false,
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="glassmorphism py-12 rounded-xl my-4 mx-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Explore Food Designs</h1>
          <p className="text-lg opacity-80 max-w-2xl">
            Browse our collection of beautiful food designs, presentations, and creative recipes from around the world.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 glassmorphism rounded-xl my-4 mx-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search recipes..." className="pl-10 glassmorphism" />
            </div>

            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="gap-1 glassmorphism">
                Sort By <ChevronDown className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="gap-1 glassmorphism">
                <SlidersHorizontal className="h-4 w-4" /> Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Tabs */}
      <section className="py-8 glassmorphism rounded-xl my-4 mx-4">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="All" className="w-full">
            <div className="overflow-x-auto pb-2">
              <TabsList className="h-auto p-1 flex flex-nowrap min-w-max glassmorphism">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="px-4 py-2 data-[state=active]:bg-primary/20 data-[state=active]:text-primary-foreground transition-all glassmorphism"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(category === "All" ? recipes : recipes.filter((recipe) => recipe.category === category)).map(
                    (recipe) => (
                      <div
                        key={recipe.id}
                        className="animate-fade-in"
                        style={{ animationDelay: `${recipe.id * 0.1}s` }}
                      >
                        <RecipeCard
                          title={recipe.title}
                          image={recipe.image}
                          category={recipe.category}
                          isPremium={recipe.isPremium}
                        />
                      </div>
                    ),
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Load More */}
      <section className="py-8 mb-8 glassmorphism rounded-xl my-4 mx-4">
        <div className="container mx-auto px-4 text-center">
          <Button variant="outline" size="lg" className="gap-2 glassmorphism">
            Load More <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
