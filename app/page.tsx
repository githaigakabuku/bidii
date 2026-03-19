"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
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

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoSrc =
    "https://www.youtube.com/embed/VIDEO_ID?autoplay=1&rel=0&modestbranding=1";
  const openVideo = useCallback(() => {
    setIsVideoOpen(true);
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("bidiiVideoAutoOpen", "1");
    }
  }, []);

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

  useEffect(() => {
    if (!isVideoOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsVideoOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isVideoOpen]);

  useEffect(() => {
    if (isVideoOpen) return;
    if (typeof window === "undefined") return;

    if (window.sessionStorage.getItem("bidiiVideoAutoOpen") === "1") {
      return;
    }

    const delayMs = 30000;
    let timerId = window.setTimeout(openVideo, delayMs);
    const resetTimer = () => {
      window.clearTimeout(timerId);
      timerId = window.setTimeout(openVideo, delayMs);
    };

    const activityEvents = ["scroll", "mousemove", "keydown", "touchstart"];
    activityEvents.forEach((eventName) => {
      window.addEventListener(eventName, resetTimer);
    });

    return () => {
      window.clearTimeout(timerId);
      activityEvents.forEach((eventName) => {
        window.removeEventListener(eventName, resetTimer);
      });
    };
  }, [isVideoOpen, openVideo]);

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
              <p className="font-bold uppercase text-muted-foreground text-center lg:text-left mb-6 leading-tight text-2xl sm:text-3xl lg:text-7xl tracking-[0.18em] sm:tracking-[0.22em] lg:tracking-[0.25em] lg:whitespace-nowrap">
                Bidii Comprehensive School
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

            {/* ── Right: story video preview ── */}
            <div className="relative w-full max-w-xl mx-auto lg:mx-0">
              <div className="relative rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-emerald-300/20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/70">Watch</p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Our Story</h3>
                  <button
                    type="button"
                    onClick={openVideo}
                    className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/90 text-slate-900 font-semibold shadow-lg hover:scale-[1.03] transition-transform"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                        <path d="M8 5v14l11-7-11-7z" />
                      </svg>
                    </span>
                    Play Video
                  </button>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground text-center lg:text-left">
                A quick look at Bidii Primary highlights, values, and student life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Original Showcase Section */}
      <main className="">
        <div className="relative z-10 flex flex-col items-center w-full">
          <section className="central-story text-center mb-12 reveal">
            <h1 className="page-title text-5xl md:text-2xl font-bold tracking-tighter mb-4">
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

      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setIsVideoOpen(false)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-4 -right-4 z-10 h-10 w-10 rounded-full bg-white text-slate-900 shadow-lg hover:scale-105 transition-transform"
              aria-label="Close video"
            >
              <span className="block text-xl leading-none">x</span>
            </button>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={videoSrc}
                  title="Bidii Primary video"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <p className="mt-3 text-xs text-white/60 text-center">
              Replace VIDEO_ID in the URL with your YouTube video ID.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
