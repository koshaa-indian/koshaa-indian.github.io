import Link from "next/link"
import Image from "next/image"
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
    <section id="home" className="relative flex min-h-[85vh] items-center justify-center overflow-hidden sm:min-h-screen">
      {/* Cover image: mobile gets a tighter crop focused on center dish; desktop keeps full frame */}
      <Image
        src="/images/cover.jpg"
        alt="Koshaa restaurant dining and Indian cuisine"
        fill
        className="hero-cover-image object-cover"
        priority
        sizes="100vw"
      />
      {/* Gradient overlay for depth and text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/75" aria-hidden />
      <div className="container relative z-10 w-full px-4">
        <div className="flex flex-col items-center text-center animate-in fade-in duration-300 delay-150 motion-reduce:animate-none motion-reduce:delay-0">
          <h1 className="mb-4 leading-tight text-3xl font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to <span className="text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">{restaurant.name}</span>
          </h1>
          <p className="mb-3 text-base font-medium tracking-wide text-white/95 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] sm:mb-4 sm:text-xl md:text-2xl">
            {restaurant.tagline}
          </p>
          <p className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-white/85 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] sm:mb-8 sm:text-base md:text-lg">
            {restaurant.description}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/menu">View Menu</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/reservation">Reserve a Table</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
