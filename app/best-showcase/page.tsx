import Link from "next/link";
import Image from "next/image";
import { GlassCard } from "@/components/GlassCard";

export default function BestShowcase() {
  const leaders = [
    {
      name: "President",
      title: "Honored Guest",
      image: "/images/ruto.jpeg",
      quote:
        "Patience, persistence and perspiration make an unbeatable combination for success.",
      author: "Napoleon Hill",
      note:
        "A historic visit that affirmed Bidii's reputation for discipline and excellence.",
    },
    {
      name: "Esther Passaris",
      title: "Women Rep, Nairobi",
      image: "/images/hd.jpeg",
      quote: "Start with what is right rather than what is acceptable.",
      author: "Franz Kafka",
      note:
        "Celebrated the leadership and growth of our learners and staff.",
    },
    {
      name: "Moses Wetang’ula",
      title: "Member of Parliament",
      image: "/images/food.jpeg",
      quote:
        "You have power over your mind — not outside events. Realize this, and you will find strength.",
      author: "Marcus Aurelius",
      note:
        "Encouraged resilience, focus, and continued success for Bidii learners.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-zinc-50 dark:bg-black">
      <section className="relative px-4 sm:px-6 lg:px-10 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-4">
            Best Showcase
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Leaders Who Inspire Bidii
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A tribute to the distinguished leaders who have visited Bidii and affirmed our
            commitment to discipline, excellence, and growth.
          </p>
        </div>
      </section>

      <section className="px-2 sm:px-4 lg:px-6 pb-16">
        <div className="mx-auto max-w-7xl grid gap-10">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="grid gap-4 lg:gap-6 lg:grid-cols-[0.95fr_1.05fr] items-start"
            >
              <GlassCard className="overflow-hidden" padded={false}>
                <div className="relative h-72 sm:h-[380px]">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </GlassCard>
              <div className="text-left lg:pr-2">
                <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-3">
                  {leader.title}
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">{leader.name}</h2>
                <p className="text-lg font-semibold text-foreground mb-4">
                  “{leader.quote}”
                </p>
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
                  {leader.author}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {leader.note}
                </p>
                <div className="h-px w-24 bg-emerald-500/60" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="pb-16 text-center">
        <Link href="/" className="text-emerald-600 dark:text-emerald-400 font-semibold">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
