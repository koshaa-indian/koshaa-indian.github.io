import Link from "next/link"
import { Star, ExternalLink } from "lucide-react"
import { Button } from "./ui/button"
import { SectionHeading } from "./section-heading"

interface Testimonial {
  id: number
  name: string
  rating: number
  text: string
  date: string
}

interface GoogleReviewsConfig {
  url: string
  label: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
  googleReviews?: GoogleReviewsConfig | null
}

export function Testimonials({ testimonials, googleReviews }: TestimonialsProps) {
  return (
    <section id="testimonials" className="flex justify-center bg-muted/50 py-12 sm:py-20">
      <div className="container w-full px-4">
        <SectionHeading
          title="What Our Customers Say"
          subtitle="Don't just take our word for it — hear from our satisfied customers"
          align="center"
          className="mb-8 sm:mb-12"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-lg border border-border bg-card p-5 shadow-sm sm:p-6"
            >
              <div className="mb-4 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 sm:h-5 sm:w-5 ${
                      i < testimonial.rating
                        ? "fill-primary text-primary"
                        : "text-muted-foreground/40"
                    }`}
                  />
                ))}
              </div>
              <p className="mb-4 text-sm text-muted-foreground sm:text-base">{testimonial.text}</p>
              <div className="border-t border-border pt-4">
                <p className="text-sm font-semibold sm:text-base">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  {new Date(testimonial.date).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>

        {googleReviews?.url && (
          <div className="mt-10 flex flex-col items-center text-center">
            <p className="mb-4 text-sm text-muted-foreground">
              Read more reviews from guests who dined with us.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link
                href={googleReviews.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Google reviews in a new tab"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden>
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                {googleReviews.label}
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
