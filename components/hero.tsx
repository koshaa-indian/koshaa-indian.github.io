import Link from "next/link"
import { Button } from "./ui/button"

interface HeroProps {
  restaurant: {
    name: string
    tagline: string
    description: string
  }
}

export function Hero({ restaurant }: HeroProps) {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-950 dark:to-amber-950">
      <div className="container relative z-10 px-4 text-center">
        <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Welcome to <span className="text-orange-600 dark:text-orange-400">{restaurant.name}</span>
        </h1>
        <p className="mb-4 text-xl text-muted-foreground sm:text-2xl">
          {restaurant.tagline}
        </p>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          {restaurant.description}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg">
            <Link href="#menu">View Menu</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#reservation">Reserve a Table</Link>
          </Button>
        </div>
      </div>
      
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.3),transparent_50%)]"></div>
      </div>
    </section>
  )
}
