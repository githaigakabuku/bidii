"use client";

import Image from "next/image";
import Link from "next/link";
import { GlassCard } from "@/components/GlassCard";

const cards = [
  {
    title: "Bidii Primary Uniform",
    href: "/bidii-primary-uniform",
    image: "/images/uniform.svg",
    desc: "Our uniform reflects pride, discipline, and unity.",
  },
  {
    title: "Best Showcase",
    href: "/best-showcase",
    image: "/images/showcase.svg",
    desc: "Student projects and exhibitions that lead the region.",
  },
  {
    title: "Visit by the President",
    href: "/visit-president-guest",
    image: "/images/ruto.jpeg",
    desc: "Honored guests celebrate our success and community impact.",
  },
  {
    title: "Headteacher Achievements",
    href: "/headteacher-achievements",
    image: "/images/hd.jpeg",
    desc: "Leadership milestones that lifted Bidii to the top.",
  },
  {
    title: "Bidii Students",
    href: "/students",
    image: "/images/food.jpeg",
    desc: "Bright, disciplined, and ambitious learners.",
  },
  {
    title: "School Life",
    href: "/school-life",
    image: "/images/school-life.svg",
    desc: "Daily routines, clubs, faith, and fun at Bidii.",
  },
  {
    title: "Buildings & Passaries",
    href: "/buildings-passaries",
    image: "/images/buildings.svg",
    desc: "Modern classrooms and clean, safe surroundings.",
  },
  {
    title: "Favoured & Godly School",
    href: "/favoured-godly-school",
    image: "/images/godly.svg",
    desc: "Faith-based values that shape character and excellence.",
  },
  {
    title: "Achievements",
    href: "/achievements",
    image: "/images/dance.jpeg",
    desc: "Awards and results that prove we are the best.",
  },
];

export default function StoriesPage() {
  return (
    <div className="min-h-screen w-full font-sans text-zinc-900">
      <section className="relative min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="orb w-[520px] h-[520px] bg-violet-300/40 dark:bg-violet-600/20 -top-32 -left-32 animate-float-slow" />
        <div className="orb w-[400px] h-[400px] bg-emerald-300/35 dark:bg-emerald-500/15 top-1/2 -right-40 animate-float" />
        <div className="orb w-[300px] h-[300px] bg-sky-300/30 dark:bg-sky-500/10 bottom-0 left-1/3" />

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-3">
              Stories
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Archive of Achievements</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Each card opens a chapter of Bidii Primary. Explore moments that define our
              excellence, discipline, and community impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cards.map((card, index) => (
              <Link
                key={card.href}
                href={card.href}
                className="group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <GlassCard
                  hover={true}
                  padded={false}
                  className="overflow-hidden h-80 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                >
                  <div className="relative h-full">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-300 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-sm text-gray-200 leading-relaxed mb-4">
                        {card.desc}
                      </p>
                      <span className="inline-flex items-center gap-2 text-emerald-400 font-medium text-sm group-hover:text-emerald-300 transition-colors">
                        Explore Story
                        <svg
                          className="w-4 h-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold"
            >
              Back to Home
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
