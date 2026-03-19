"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { GlassCard } from "@/components/GlassCard";

const filters = ["All", "Events", "Classes", "Sports"] as const;

type GalleryCategory = (typeof filters)[number];

type GalleryItem = {
  title: string;
  category: Exclude<GalleryCategory, "All">;
  image: string;
};

const galleryItems: GalleryItem[] = [
  { title: "Prize Giving Day", category: "Events", image: "/images/dance.jpeg" },
  { title: "School Assembly", category: "Events", image: "/images/ruto.jpeg" },
  { title: "Science Lab", category: "Classes", image: "/images/buildings.svg" },
  { title: "Reading Hour", category: "Classes", image: "/images/showcase.svg" },
  { title: "Football Team", category: "Sports", image: "/images/food.jpeg" },
  { title: "Athletics Meet", category: "Sports", image: "/images/uniform.svg" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("All");

  const visibleItems = useMemo(() => {
    if (activeFilter === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen w-full font-sans text-zinc-900 px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-3">
              Gallery
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-3">School Moments</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore highlights from our events, classroom learning, and sports activities.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => {
              const isActive = filter === activeFilter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={
                    isActive
                      ? "px-4 py-2 rounded-full text-sm font-semibold text-white bg-emerald-600 shadow"
                      : "px-4 py-2 rounded-full text-sm font-semibold glass border border-border text-foreground"
                  }
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item) => (
            <GlassCard key={item.title} hover={true} padded={false} className="overflow-hidden">
              <div className="relative h-56">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/70">
                    {item.category}
                  </p>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold"
          >
            Back to Home
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
