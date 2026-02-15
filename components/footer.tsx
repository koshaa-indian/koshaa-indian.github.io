import { Facebook, Instagram } from "lucide-react"

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

const socialIconClass = "size-5 text-muted-foreground transition-colors hover:text-foreground"

export function Footer({ restaurant }: FooterProps) {
  const social = restaurant.social
  const hasSocial = social && (social.facebook || social.instagram)

  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="container max-w-5xl px-4 py-6 sm:px-6 sm:py-8">
        {hasSocial && (
          <div className="mb-4 flex justify-center gap-6 sm:mb-5" aria-label="Social media">
            {social?.facebook && (
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={socialIconClass}
                aria-label="Facebook"
              >
                <Facebook className="size-5" aria-hidden />
              </a>
            )}
            {social?.instagram && (
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={socialIconClass}
                aria-label="Instagram"
              >
                <Instagram className="size-5" aria-hidden />
              </a>
            )}
          </div>
        )}
        <p className="text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {restaurant.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
