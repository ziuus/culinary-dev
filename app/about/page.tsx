import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Former chef with a passion for food presentation and technology.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Maria Rodriguez",
      role: "Head of Food Design",
      bio: "Award-winning food stylist with 15 years of experience in the industry.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "David Chen",
      role: "AI Research Lead",
      bio: "PhD in Computer Science specializing in AI and computer vision.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Williams",
      role: "Creative Director",
      bio: "Background in graphic design and food photography for major publications.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const values = [
    {
      title: "Creativity",
      description: "We believe food should be as visually stunning as it is delicious.",
    },
    {
      title: "Innovation",
      description: "We constantly push the boundaries of food design with cutting-edge technology.",
    },
    {
      title: "Accessibility",
      description: "We make professional food design techniques accessible to everyone.",
    },
    {
      title: "Community",
      description: "We foster a supportive community of food enthusiasts and professionals.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden glassmorphism rounded-xl my-4 mx-4">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-lg text-muted-foreground mb-8">
              CulinaryDev was founded with a simple mission: to transform everyday cooking into culinary art through
              innovative design and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 glassmorphism rounded-xl my-4 mx-4">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Our mission"
                className="rounded-lg shadow-xl glassmorphism"
              />
            </div>
            <div className="space-y-6 glassmorphism p-6 rounded-xl">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-lg">
                We believe that food is not just sustenance—it's an art form. Our mission is to democratize food design
                by providing tools, inspiration, and education that empower everyone to create visually stunning
                culinary experiences.
              </p>
              <p className="text-lg">
                By combining traditional food styling techniques with cutting-edge AI technology, we're creating a
                platform where creativity knows no bounds. Whether you're a professional chef, a food blogger, or
                someone who simply loves to cook at home, CulinaryDev is here to help you elevate your food
                presentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 glassmorphism rounded-xl my-4 mx-4">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at CulinaryCanvas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <Card
                key={idx}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/30 group glassmorphism"
              >
                <div className="h-12 w-12 rounded-full glassmorphism bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-xl font-bold text-primary">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 glassmorphism rounded-xl my-4 mx-4">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind CulinaryCanvas who bring their expertise in food, design, and
              technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative mb-4 overflow-hidden rounded-lg glassmorphism">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white">{member.bio}</p>
                  </div>
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="glassmorphism p-4 rounded-lg">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 glassmorphism rounded-xl my-4 mx-4">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From a small idea to a thriving platform for food design enthusiasts.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                year: "2020",
                title: "The Beginning",
                description: "CulinaryDev started as a blog sharing food styling tips and techniques.",
              },
              {
                year: "2021",
                title: "Community Growth",
                description: "Our community grew to over 100,000 food enthusiasts sharing their designs.",
              },
              {
                year: "2022",
                title: "AI Integration",
                description: "We launched our first AI-powered food design generator, revolutionizing the platform.",
              },
              {
                year: "2023",
                title: "Premium Launch",
                description: "Introduced premium features for professionals and serious enthusiasts.",
              },
              {
                year: "2024",
                title: "Global Expansion",
                description: "Expanded to serve users in over 150 countries with localized content.",
              },
              {
                year: "2025",
                title: "The Future",
                description: "Continuing to innovate at the intersection of food, design, and technology.",
              },
            ].map((milestone, idx) => (
              <div key={idx} className="flex gap-6 mb-12 group">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full glassmorphism bg-primary/20 text-primary-foreground flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                    {milestone.year}
                  </div>
                  {idx < 5 && <div className="w-1 h-full bg-primary/20 mt-2"></div>}
                </div>
                <div className="pt-3 glassmorphism p-4 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 glassmorphism rounded-xl my-4 mx-4">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Be part of a growing community of food design enthusiasts and professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="glassmorphism">
              <Link href="/recipes">Explore Designs</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="glassmorphism">
              <Link href="/contact" className="group">
                Contact Us
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
