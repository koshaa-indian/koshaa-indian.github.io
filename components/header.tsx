"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => {
    // Normalize for trailingSlash: true (pathname can be "/about/" while href is "/about")
    const norm = (p: string) => (p === "/" ? p : p.replace(/\/$/, ""))
    return norm(pathname) === norm(href)
  }

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container flex h-16 w-full items-center justify-between px-4" aria-label="Main navigation">
          <Link href="/" className="flex shrink-0 items-center gap-2 outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0" aria-label="Koshaa - Home">
            <Image src="/images/logo.png" alt="Koshaa - Fine Indian Cuisine" width={140} height={44} className="h-9 w-auto object-contain" priority />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive(item.href) ? "text-primary" : "text-foreground/90"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild size="sm">
              <Link
                href="/reservation"
                className={cn(
                  isActive("/reservation") && "ring-2 ring-primary ring-offset-2 ring-offset-background"
                )}
              >
                Reserve Table
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t md:hidden">
            <div className="container space-y-1 px-4 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block px-3 py-2 text-base font-medium transition-colors hover:text-primary",
                    isActive(item.href) ? "text-primary" : "text-foreground/90"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="mt-2 w-full">
                <Link href="/reservation" onClick={() => setMobileMenuOpen(false)}>
                  Reserve Table
                </Link>
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
