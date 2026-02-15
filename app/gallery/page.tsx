"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import contentData from "@/data/content.json";

type GalleryItem = (typeof contentData.gallery)[number];

export default function GalleryPage() {
  const { restaurant, gallery, pages } = contentData;
  const [filter, setFilter] = useState<string>("all");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const filteredGallery =
    filter === "all"
      ? gallery
      : gallery.filter((item) => item.category === filter);
  const categories = [
    "all",
    ...Array.from(new Set(gallery.map((item) => item.category))),
  ];

  return (
    <>
      <Header />
      <main id="main-content" className="pt-16">
        {/* Page header */}
        <section className="border-b border-border/50 bg-muted/20 py-8 md:py-10">
          <div className="container px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="mb-2 text-3xl font-semibold tracking-tight md:text-4xl">
                {pages.gallery.title}
              </h1>
              <p className="text-base text-muted-foreground md:text-lg">
                {pages.gallery.subtitle}
              </p>
            </div>
          </div>
        </section>

        <section className="flex justify-center py-12">
          <div className="container w-full px-4">
            <div className="mb-8 flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    filter === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                  aria-pressed={filter === category}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {filteredGallery.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelected(item)}
                  className="group relative aspect-square overflow-hidden rounded-lg bg-muted text-left"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="flex h-full items-center justify-center p-4 text-center">
                      <p className="text-sm text-white">{item.alt}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer restaurant={restaurant} footer={contentData.footer} />

      {/* Popover */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative max-h-[85vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selected.src}
              alt={selected.alt}
              width={1200}
              height={1200}
              className="max-h-[85vh] w-auto rounded-lg object-contain"
            />
            <p className="mt-2 text-center text-sm text-white">{selected.alt}</p>
          </div>
        </div>
      )}
    </>
  );
}
