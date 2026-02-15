import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react"
import { Button } from "./ui/button"
import { SocialLinks } from "./social-links"
import contentData from "@/data/content.json"

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.465226472018!2d-79.49005522376865!3d43.61767515472762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3749a4d3c89d%3A0xa071ef1a1fe29df9!2sKoshaa%20Fine%20Indian%20Cuisine!5e0!3m2!1sen!2sin!4v1771133127472!5m2!1sen!2sin"

interface ContactProps {
  restaurant: {
    name: string
    phone: string
    email: string
    address: {
      street: string
      city: string
      province: string
      postalCode: string
    }
    hours: Array<{
      day: string
      hours: string
    }>
    social?: {
      facebook?: string
      instagram?: string
    }
  }
}

export function Contact({ restaurant }: ContactProps) {
  const { pages } = contentData
  const contact = pages.contact
  const addressLine = [
    restaurant.address.street,
    `${restaurant.address.city}, ${restaurant.address.province} ${restaurant.address.postalCode}`,
  ].join(", ")

  return (
    <section id="contact" className="scroll-mt-16 py-12 sm:py-16 lg:py-20">
      <div className="container w-full max-w-5xl px-4 sm:px-6">
        <header className="mb-8 text-center sm:mb-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {contact.title}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            {contact.subtitle}
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px] lg:gap-8">
          {/* Map first on mobile for immediate context */}
          <div className="relative w-full overflow-hidden rounded-lg bg-muted min-h-[220px] sm:min-h-[260px] lg:min-h-[320px]">
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Koshaa Fine Indian Cuisine — map location"
              className="absolute inset-0 h-full w-full"
            />
          </div>

          {/* Single panel: contact + hours + CTA */}
          <div className="flex flex-col gap-6 lg:gap-7">
            <div className="space-y-4">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressLine)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-left text-muted-foreground hover:text-foreground transition-colors min-h-[44px] sm:min-h-0"
              >
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <span className="text-sm leading-snug">
                  {restaurant.address.street}
                  <br />
                  {restaurant.address.city}, {restaurant.address.province}{" "}
                  {restaurant.address.postalCode}
                </span>
              </a>
              <a
                href={`tel:${restaurant.phone}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors min-h-[44px] sm:min-h-0"
              >
                <Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                <span className="text-sm">{restaurant.phone}</span>
              </a>
              <a
                href={`mailto:${restaurant.email}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors min-h-[44px] sm:min-h-0 break-all"
              >
                <Mail className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                <span className="text-sm">{restaurant.email}</span>
              </a>
            </div>

            <div className="border-t border-border pt-5">
              <p className="mb-3 flex items-center gap-2 text-sm font-medium text-foreground">
                <Clock className="h-4 w-4 text-primary" aria-hidden />
                Hours
              </p>
              <dl className="space-y-1.5 text-sm text-muted-foreground">
                {restaurant.hours.map(({ day, hours }) => (
                  <div key={day} className="flex justify-between gap-4">
                    <dt>{day}</dt>
                    <dd className="text-right tabular-nums">{hours}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {restaurant.social && (restaurant.social.facebook || restaurant.social.instagram) && (
              <div className="border-t border-border pt-5">
                <SocialLinks
                  links={restaurant.social}
                  labelPrefix={restaurant.name}
                  showLabel
                />
              </div>
            )}
            <div className="border-t border-border pt-5 mt-auto">
              <Button asChild size="lg" className="w-full min-h-[44px] sm:min-h-11">
                <Link href="/reservation" className="flex items-center justify-center gap-2">
                  <Calendar className="h-4 w-4" aria-hidden />
                  {contact.reservationCta}
                </Link>
              </Button>
              <p className="mt-2 text-xs text-muted-foreground text-center">
                {contact.reservationCtaDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
