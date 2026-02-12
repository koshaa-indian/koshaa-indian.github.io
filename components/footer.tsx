import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

interface FooterProps {
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
  }
}

export function Footer({ restaurant }: FooterProps) {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">{restaurant.name}</h3>
            <p className="text-sm text-muted-foreground">
              Experience authentic Indian cuisine with a modern twist.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{restaurant.address.street}</p>
              <p>{restaurant.address.city}, {restaurant.address.province} {restaurant.address.postalCode}</p>
              <p>{restaurant.phone}</p>
              <p>{restaurant.email}</p>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {restaurant.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
