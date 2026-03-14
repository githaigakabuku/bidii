"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { GlassCard } from "@/components/GlassCard";
import { BookOpen, Bell, BarChart3, Users } from "lucide-react";

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

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.18 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen w-full font-sans text-zinc-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        {/* Ambient orbs — light mode soft, dark mode vivid */}
        <div className="orb w-[520px] h-[520px] bg-violet-300/40 dark:bg-violet-600/20 -top-32 -left-32 animate-float-slow" />
        <div className="orb w-[400px] h-[400px] bg-emerald-300/35 dark:bg-emerald-500/15 top-1/2 -right-40 animate-float" />
        <div className="orb w-[300px] h-[300px] bg-sky-300/30 dark:bg-sky-500/10 bottom-0 left-1/3" />

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ── Left: Copy ── */}
            <div className="text-center lg:text-left">
              {/* Tagline */}
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-muted-foreground mb-4 flex items-center gap-2 justify-center lg:justify-start">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Bidii Primary School
              </p>

              {/* Main heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-4">
                <span className="text-foreground">Empowering</span>
                <br />
                <span className="gradient-text">Young Minds</span>
                <br />
                <span className="text-foreground">Through</span>
                <br />
                <span className="gradient-text">Excellence</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10">
                Located in the heart of our community, Bidii Primary is known for
                top academic results, strong discipline, and a caring, godly
                culture. Explore each chapter to learn why visitors and leaders
                celebrate our school.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#showcase"
                  className="px-8 py-4 rounded-2xl text-base font-semibold text-white gradient-brand shadow-lg shadow-violet-500/20 hover:shadow-violet-500/35 hover:scale-[1.02] transition-all duration-250"
                >
                  Explore Our Story
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 rounded-2xl text-base font-semibold glass hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200 border border-border"
                >
                  Contact Us
                </a>
              </div>

              {/* Stats */}
              <div className="mt-12 pt-8 border-t border-border flex items-center justify-center lg:justify-start gap-10">
                {[
                  { n: "500+", l: "Students" },
                  { n: "20+", l: "Teachers" },
                  { n: "10+", l: "Years" },
                ].map(({ n, l }) => (
                  <div key={l} className="text-center">
                    <p className="text-2xl font-bold text-foreground">{n}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: dashboard mockup ── */}
            <div className="relative hidden lg:block">
              {/* Main card */}
              <GlassCard
                hover={false}
                padded={false}
                className="rounded-3xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/40"
              >
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-5 py-3.5 bg-black/[0.03] dark:bg-white/[0.03] border-b border-border">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  <div className="ml-4 flex-1 bg-black/[0.05] dark:bg-white/[0.05] rounded-lg px-4 py-1 text-xs text-muted-foreground text-center">
                    bidii-primary.school
                  </div>
                </div>

                {/* Dashboard body */}
                <div className="p-5 space-y-4 bg-background/60">
                  {/* Stat row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Students", value: "500+", color: "text-foreground" },
                      { label: "Teachers", value: "20+", color: "text-emerald-600 dark:text-emerald-400" },
                      { label: "Classes", value: "8", color: "text-violet-600 dark:text-violet-400" },
                    ].map((s) => (
                      <div key={s.label} className="glass rounded-xl p-3">
                        <p className="text-xs text-muted-foreground">{s.label}</p>
                        <p className={`text-xl font-bold ${s.color}`}>{s.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Recent uploads */}
                  <div className="glass rounded-xl p-4">
                    <p className="text-sm font-semibold mb-3">School Highlights</p>
                    <div className="space-y-2">
                      {[
                        { icon: BookOpen, color: "bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-300", title: "Academic Excellence", sub: "Top KCPE Results" },
                        { icon: BarChart3, color: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300", title: "Discipline & Faith", sub: "Godly Values" },
                        { icon: Users, color: "bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-300", title: "Community Impact", sub: "Local Leaders" },
                      ].map((item) => (
                        <div key={item.title} className="flex items-center gap-3 p-2 rounded-lg bg-black/[0.02] dark:bg-white/[0.02]">
                          <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center flex-shrink-0`}>
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{item.title}</p>
                            <p className="text-xs text-muted-foreground">{item.sub}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Floating notification */}
              <div className="absolute -top-6 -right-8 glass rounded-2xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center flex-shrink-0">
                    <Bell className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">New Achievement</p>
                    <p className="text-xs text-muted-foreground">KCPE Top Performer!</p>
                  </div>
                </div>
              </div>

              {/* Floating stat */}
              <div className="absolute -bottom-6 -left-8 glass rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: "2s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">100% Pass Rate</p>
                    <p className="text-xs text-muted-foreground">National Exams</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Original Showcase Section */}
      <main className="">
        <div className="relative z-10 flex flex-col items-center w-full">
          <section className="central-story text-center mb-12 reveal">
            <h1 className="page-title text-5xl md:text-7xl font-bold tracking-tighter mb-4">
             Bidii Primary School
            </h1>
            <div className="max-w-3xl mx-auto text-lg text-sky-900 leading-relaxed">
              <p>
                Located in the heart of our community, Bidii Primary is known for
                top academic results, strong discipline, and a caring, godly
                culture. Explore each chapter to learn why visitors and leaders
                celebrate our school.
              </p>
            </div>
          </section>

          {/* Showcase Introduction */}
          <section className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Discover Our Story
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Each chapter below tells a unique part of what makes Bidii Primary exceptional.
              From our proud uniform to presidential visits, explore the moments that define us.
            </p>
          </section>

          {/* Showcase cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
            {cards.map((card, index) => (
              <Link
                key={card.href}
                href={card.href}
                className="group reveal"
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
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
