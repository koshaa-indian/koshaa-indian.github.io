"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"

interface BannerPopoverProps {
  banner: {
    enabled: boolean
    image: string
    alt: string
  }
}

export function BannerPopover({ banner }: BannerPopoverProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if banner should be shown (not dismissed in this session)
    const dismissed = sessionStorage.getItem("bannerDismissed")
    if (banner.enabled && !dismissed) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [banner.enabled])

  const handleClose = () => {
    setIsOpen(false)
    sessionStorage.setItem("bannerDismissed", "true")
  }

  // Block scroll when banner is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Handle keyboard events
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  if (!banner.enabled || !isOpen) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="banner-title"
    >
      {/* Backdrop/Overlay */}
      <div
        className="absolute inset-0 z-[100] bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Banner Content */}
      <div className="relative z-[102] mx-4 max-w-2xl animate-in fade-in zoom-in-95 duration-300">
        <div className="relative overflow-hidden rounded-lg bg-background shadow-2xl">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 z-[103] h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
            onClick={handleClose}
            aria-label="Close banner"
          >
            <X className="h-4 w-4" />
          </Button>

          {/* Banner Image */}
          <div className="relative aspect-video w-full">
            <Image
              src={banner.image}
              alt={banner.alt}
              fill
              className="object-cover"
              priority
              onError={() => {
                // Close banner if image fails to load
                handleClose()
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
