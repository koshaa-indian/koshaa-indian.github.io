import { SocialLinks } from "./social-links"

interface FooterProps {
  restaurant: {
    name: string
    social?: {
      facebook?: string
      instagram?: string
    }
  }
  footer?: unknown
}

export function Footer({ restaurant }: FooterProps) {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="container max-w-5xl px-4 py-5 sm:px-6">
        <div className="flex flex-col items-center gap-4">
          {restaurant.social && (
            <SocialLinks
              links={restaurant.social}
              labelPrefix={restaurant.name}
            />
          )}
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {restaurant.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
