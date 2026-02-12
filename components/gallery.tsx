"use client"

import Image from "next/image"
import { useState } from "react"

interface GalleryItem {
  id: number
  src: string
  alt: string
  category: string
}

interface GalleryProps {
  gallery: GalleryItem[]
}

export function Gallery({ gallery }: GalleryProps) {
  const [filter, setFilter] = useState<string>("all")

  const filteredGallery =
    filter === "all" ? gallery : gallery.filter((item) => item.category === filter)

  const categories = ["all", ...Array.from(new Set(gallery.map((item) => item.category)))]

  return (
    <section id="gallery" className="py-20">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">Gallery</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A glimpse into our restaurant and culinary creations
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === category
                  ? "bg-orange-600 text-white"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-lg bg-muted"
            >
              {/* Placeholder for images */}
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-950 dark:to-amber-950">
                <span className="text-sm text-muted-foreground">{item.alt}</span>
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex h-full items-center justify-center p-4 text-center">
                  <p className="text-sm text-white">{item.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
