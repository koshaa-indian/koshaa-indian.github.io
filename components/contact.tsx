import { MapPin, Phone, Mail } from "lucide-react"
import { Hours } from "./hours"
import { ReservationForm } from "./reservation-form"

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
  }
}

export function Contact({ restaurant }: ContactProps) {
  return (
    <section id="contact" className="py-20">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">Contact Us</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Get in touch with us for reservations or any inquiries
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-lg bg-background p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                <h3 className="text-xl font-semibold">Location</h3>
              </div>
              <p className="text-muted-foreground">
                {restaurant.address.street}<br />
                {restaurant.address.city}, {restaurant.address.province} {restaurant.address.postalCode}
              </p>
            </div>

            <div className="rounded-lg bg-background p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <Phone className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                <h3 className="text-xl font-semibold">Phone</h3>
              </div>
              <a
                href={`tel:${restaurant.phone}`}
                className="text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400"
              >
                {restaurant.phone}
              </a>
            </div>

            <div className="rounded-lg bg-background p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <Mail className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                <h3 className="text-xl font-semibold">Email</h3>
              </div>
              <a
                href={`mailto:${restaurant.email}`}
                className="text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400"
              >
                {restaurant.email}
              </a>
            </div>

            <Hours hours={restaurant.hours} />
          </div>

          <div id="reservation">
            <ReservationForm />
          </div>
        </div>
      </div>
    </section>
  )
}
