import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Crown, X } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PremiumPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Basic access to food designs and recipes",
      features: [
        { included: true, text: "Browse basic food designs" },
        { included: true, text: "Access to public recipes" },
        { included: true, text: "5 AI generations per month" },
        { included: false, text: "Premium food designs" },
        { included: false, text: "Advanced AI features" },
        { included: false, text: "Download high-resolution images" },
        { included: false, text: "Priority support" },
      ],
      buttonText: "Current Plan",
      buttonVariant: "outline" as const,
      popular: false,
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "per month",
      description: "Full access to all designs and AI features",
      features: [
        { included: true, text: "All free features" },
        { included: true, text: "Unlimited AI generations" },
        { included: true, text: "Access to all premium designs" },
        { included: true, text: "Advanced AI customization" },
        { included: true, text: "Download high-resolution images" },
        { included: true, text: "Priority support" },
        { included: true, text: "Early access to new features" },
      ],
      buttonText: "Upgrade Now",
      buttonVariant: "default" as const,
      popular: true,
    },
    {
      name: "Professional",
      price: "$19.99",
      period: "per month",
      description: "For food professionals and businesses",
      features: [
        { included: true, text: "All premium features" },
        { included: true, text: "Commercial usage rights" },
        { included: true, text: "White-label exports" },
        { included: true, text: "API access" },
        { included: true, text: "Team collaboration" },
        { included: true, text: "Dedicated account manager" },
        { included: true, text: "Custom branding options" },
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
      popular: false,
    },
  ]

  const testimonials = [
    {
      quote:
        "The premium designs have completely transformed my catering business. My clients are amazed by the presentations!",
      author: "Sarah Johnson",
      role: "Professional Caterer",
    },
    {
      quote: "As a food photographer, the AI generator has saved me hours of styling time. Worth every penny!",
      author: "Michael Chen",
      role: "Food Photographer",
    },
    {
      quote:
        "I was skeptical at first, but the premium features have elevated my home cooking to restaurant quality presentation.",
      author: "Emma Rodriguez",
      role: "Home Chef",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="glassmorphism py-16 rounded-xl my-4 mx-4">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 glassmorphism bg-primary/20 rounded-full">
              <Crown className="h-5 w-5 text-primary" />
              <span className="font-medium">Premium Features</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Elevate Your Culinary Creativity</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Unlock premium food designs, unlimited AI generations, and exclusive features to take your culinary
            presentations to the next level.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 glassmorphism rounded-xl my-4 mx-4">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`p-6 relative overflow-hidden transition-all duration-300 hover:shadow-xl glassmorphism ${
                  plan.popular ? "border-primary" : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="glassmorphism bg-primary/20 text-primary-foreground px-4 py-1 text-sm font-medium transform rotate-0 translate-x-2 -translate-y-0">
                      Popular
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? "" : "text-muted-foreground"}>{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <Button variant={plan.buttonVariant} className="w-full glassmorphism" disabled={plan.name === "Free"}>
                  {plan.buttonText}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 glassmorphism rounded-xl my-4 mx-4">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Premium Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover all the exclusive benefits that come with our premium subscription.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Unlimited AI Generations",
                description: "Create as many AI-powered food designs as you want without any monthly limits.",
              },
              {
                title: "Exclusive Design Library",
                description: "Access our collection of premium food designs created by professional food stylists.",
              },
              {
                title: "Advanced AI Customization",
                description: "Fine-tune your AI generations with detailed parameters and style controls.",
              },
              {
                title: "High-Resolution Downloads",
                description: "Download high-quality images of all designs for your presentations or social media.",
              },
              {
                title: "Priority Support",
                description: "Get faster responses from our dedicated support team whenever you need help.",
              },
              {
                title: "Early Access",
                description: "Be the first to try new features and designs before they're released to everyone.",
              },
            ].map((feature, idx) => (
              <Card key={idx} className="p-6 hover:shadow-md transition-all duration-300 group glassmorphism">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 glassmorphism rounded-xl my-4 mx-4">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Premium Users Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from professionals and enthusiasts who have upgraded to our premium plans.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-6 glassmorphism hover:shadow-lg transition-all duration-300">
                <div className="mb-4 text-4xl text-primary">"</div>
                <p className="italic mb-6">{testimonial.quote}</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="h-10 w-10 rounded-full glassmorphism bg-primary/20"></div>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 glassmorphism rounded-xl my-4 mx-4">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our premium subscription.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Can I cancel my subscription at any time?",
                answer:
                  "Yes, you can cancel your premium subscription at any time. Your benefits will continue until the end of your billing period.",
              },
              {
                question: "How do I upgrade from Free to Premium?",
                answer:
                  "Simply click the 'Upgrade Now' button and follow the payment process. Your account will be upgraded instantly after payment.",
              },
              {
                question: "Is there a difference in AI generation quality between Free and Premium?",
                answer:
                  "Premium users get access to more advanced AI models with higher quality outputs and more customization options.",
              },
              {
                question: "Can I use the designs commercially?",
                answer:
                  "Premium users can use designs for personal and small business use. For full commercial rights, please consider our Professional plan.",
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 7-day money-back guarantee if you're not satisfied with your premium subscription.",
              },
            ].map((faq, idx) => (
              <Card key={idx} className="p-6 hover:shadow-md transition-all duration-300 glassmorphism">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 glassmorphism rounded-xl my-4 mx-4">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Food Designs?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of food enthusiasts and professionals who have upgraded to premium.
          </p>
          <Button size="lg" className="glassmorphism animate-pulse">
            Upgrade to Premium
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
