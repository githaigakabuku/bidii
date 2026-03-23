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

const curriculumItems = [
	{
		title: "CBE Curriculum",
		desc: "Competency-based learning that builds practical skills and confidence.",
	},
];

const clubItems = [
	{ title: "Chess Club", desc: "Strategy, patience, and sharp thinking." },
	{ title: "Debate", desc: "Confidence, public speaking, and critical thinking." },
	{ title: "Red Cross", desc: "Service, first aid, and community care." },
	{ title: "Scout", desc: "Leadership, teamwork, and outdoor skills." },
];

const staffMembers = [
	{
		name: "Headteacher",
		title: "Headteacher",
		image: "/images/hd.jpeg",
		desc: "A visionary leader praised for discipline, excellence, and a caring school culture.",
		videoSrc:
			"https://www.youtube.com/embed/HEADTEACHER_ID?autoplay=1&rel=0&modestbranding=1",
	},
	{
		name: "Deputy",
		title: "Deputy Headteacher",
		image: "/images/food.jpeg",
		desc: "Focused on learner success, mentorship, and day-to-day academic progress.",
		videoSrc:
			"https://www.youtube.com/embed/DEPUTY_ID?autoplay=1&rel=0&modestbranding=1",
	},
	{
		name: "Supreme Staff",
		title: "Supreme Staff",
		image: "/images/dance.jpeg",
		desc: "A dedicated team shaping character, talent, and community impact.",
		videoSrc:
			"https://www.youtube.com/embed/STAFF_ID?autoplay=1&rel=0&modestbranding=1",
	},
];

const bestShowcaseLeaders = [
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
		note: "Celebrated the leadership and growth of our learners and staff.",
	},
	{
		name: "Moses Wetang'ula",
		title: "Member of Parliament",
		image: "/images/food.jpeg",
		quote:
			"You have power over your mind - not outside events. Realize this, and you will find strength.",
		author: "Marcus Aurelius",
		note: "Encouraged resilience, focus, and continued success for Bidii learners.",
	},
];

export default function Home() {
	const [isVideoOpen, setIsVideoOpen] = useState(false);
	const [activeVideoSrc, setActiveVideoSrc] = useState<string | null>(null);
	const storyVideoId = "Et9QCpGIIoA";
	const storyVideoSrc = `https://www.youtube.com/embed/${storyVideoId}?autoplay=1&rel=0&modestbranding=1`;
	const storyVideoThumb = `https://img.youtube.com/vi/${storyVideoId}/hqdefault.jpg`;
	const openVideo = useCallback((src: string) => {
		setActiveVideoSrc(src);
		setIsVideoOpen(true);
		if (typeof window !== "undefined") {
			window.sessionStorage.setItem("bidiiVideoAutoOpen", "1");
		}
	}, []);
	const closeVideo = useCallback(() => {
		setIsVideoOpen(false);
		setActiveVideoSrc(null);
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
				closeVideo();
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [closeVideo, isVideoOpen]);

	useEffect(() => {
		if (isVideoOpen) return;
		if (typeof window === "undefined") return;

		if (window.sessionStorage.getItem("bidiiVideoAutoOpen") === "1") {
			return;
		}

		const delayMs = 30000;
		let timerId = window.setTimeout(() => openVideo(storyVideoSrc), delayMs);
		const resetTimer = () => {
			window.clearTimeout(timerId);
			timerId = window.setTimeout(() => openVideo(storyVideoSrc), delayMs);
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
	}, [isVideoOpen, openVideo, storyVideoSrc]);

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
							<h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-3">
								<span className="text-foreground">Empowering</span>
								<br />
								<span className="gradient-text">Young Minds</span>
								<br />
								<span className="text-foreground">Through</span>
								<br />
								<span className="gradient-text">Excellence</span>
							</h1>

							<p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0 mb-6">
								Located in the heart of our community, Bidii Primary is known for
								top academic results, strong discipline, and a caring, godly
								culture. Explore each chapter to learn why visitors and leaders
								celebrate our school.
							</p>

							<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
								<Link
									href="/stories"
									className="px-8 py-4 rounded-2xl text-base font-semibold text-white gradient-brand shadow-lg shadow-violet-500/20 hover:shadow-violet-500/35 hover:scale-[1.02] transition-all duration-250"
								>
									Explore Our Story
								</Link>
								<a
									href="#contact"
									className="px-8 py-4 rounded-2xl text-base font-semibold glass hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200 border border-border"
								>
									Contact Us
								</a>
							</div>

							{/* Stats */}
							<div className="mt-8 pt-8 border-t border-border flex items-center justify-center lg:justify-start gap-10">
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
								<div className="relative aspect-video">
									<img
										src={storyVideoThumb}
										alt="Bidii Primary story video thumbnail"
										className="h-full w-full object-cover"
										loading="lazy"
									/>
								</div>
								<div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-emerald-300/20" />
								<div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6">
									<p className="text-xs uppercase tracking-[0.35em] text-white/70">
										Watch
									</p>
									<h3 className="text-2xl sm:text-3xl font-bold text-white">
										Our Story
									</h3>
									<button
										type="button"
										onClick={() => openVideo(storyVideoSrc)}
										className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/90 text-slate-900 font-semibold shadow-lg hover:scale-[1.03] transition-transform"
									>
										<span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white">
											<svg
												viewBox="0 0 24 24"
												className="h-5 w-5"
												fill="currentColor"
												aria-hidden="true"
											>
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
							Each chapter below tells a unique part of what makes Bidii Primary
							exceptional. From our proud uniform to presidential visits, explore
							the moments that define us.
						</p>
					</section>

					<section className="w-full px-2 sm:px-4 lg:px-6 mb-20 reveal">
						<div className="mx-auto grid max-w-7xl gap-4 lg:gap-6 lg:grid-cols-[0.95fr_1.05fr] items-start">
							<GlassCard className="overflow-hidden" padded={false}>
								<div className="relative h-80 sm:h-[420px]">
									<Image
										src="/images/headteacher.svg"
										alt="Headteacher of Bidii Comprehensive School"
										fill
										className="object-cover"
									/>
								</div>
							</GlassCard>
							<div className="text-left lg:pr-2">
								<p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-3">
									Headteacher Highlight
								</p>
								<h3 className="text-3xl sm:text-4xl font-bold mb-4">
									The Leader Behind Bidii's Excellence
								</h3>
								<p className="text-lg font-semibold text-foreground mb-4">
									“A bold, capable leader who brings out the best in every learner and staff member.”
								</p>
								<p className="text-lg text-muted-foreground leading-relaxed mb-6">
									The headteacher of Bidii Comprehensive School has guided the construction of the
									Passaris Foundation block, lifted learner results, and welcomed national leaders to
									our school grounds. From staff to students, her steady leadership and care continue
									to shape a culture of discipline, faith, and excellence.
								</p>
								<div className="grid gap-3 sm:grid-cols-2 mb-6">
									{[
										"New Passaris block",
										"Top CBE results",
										"40+ students admitted to C1 schools",
										"Smooth governorship and school steering",
										"Hosted the President",
										"Hosted Esther Passaris (Women Rep, Nairobi)",
										"Hosted Wetangula (Member of Parliament)",
									].map((item) => (
										<div key={item} className="flex items-start gap-2">
											<span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
											<p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
										</div>
									))}
								</div>
								<p className="text-xs text-muted-foreground mb-6">
									Add more achievements here as new milestones are reached.
								</p>
								<Link
									href="/headteacher-achievements"
									className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-base font-semibold text-white gradient-brand shadow-lg shadow-violet-500/20 hover:shadow-violet-500/35 hover:scale-[1.02] transition-all duration-250"
								>
									Read the full story
									<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
									</svg>
								</Link>
							</div>
						</div>
					</section>

					{/* Curriculum & Clubs */}
					<section className="w-full max-w-6xl mb-20 reveal">
						<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
							<div className="text-left">
								<p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-3">
									Learning Path
								</p>
								<h3 className="text-3xl sm:text-4xl font-bold mb-4">
									Curriculum & Clubs
								</h3>
								<p className="text-lg text-muted-foreground leading-relaxed">
									A strong academic foundation plus vibrant clubs that build
									confidence, leadership, and creativity.
								</p>
							</div>

							<div className="grid gap-4 sm:grid-cols-2">
								{curriculumItems.map((item) => (
									<GlassCard key={item.title} hover={true} className="p-5">
										<p className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-2">
											Curriculum
										</p>
										<h4 className="text-lg font-semibold mb-2">{item.title}</h4>
										<p className="text-sm text-muted-foreground leading-relaxed">
											{item.desc}
										</p>
									</GlassCard>
								))}
								{clubItems.map((item) => (
									<GlassCard key={item.title} hover={true} className="p-5">
										<p className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-2">
											Club
										</p>
										<h4 className="text-lg font-semibold mb-2">{item.title}</h4>
										<p className="text-sm text-muted-foreground leading-relaxed">
											{item.desc}
										</p>
									</GlassCard>
								))}
							</div>
						</div>
					</section>

					{/* Staff spotlight */}
					<section className="w-full max-w-6xl mb-20 reveal">
						<div className="text-center mb-10">
							<p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-3">
								Staff Spotlight
							</p>
							<h3 className="text-3xl sm:text-4xl font-bold mb-3">
								Leaders Who Shape Our Culture
							</h3>
							<p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
								Meet the team guiding our learners with excellence, faith, and
								discipline.
							</p>
						</div>

						<div className="grid gap-6 md:grid-cols-3">
							{staffMembers.map((staff) => (
								<GlassCard
									key={staff.name}
									hover={true}
									padded={false}
									className="overflow-hidden"
								>
									<div className="relative h-56">
										<Image
											src={staff.image}
											alt={staff.name}
											fill
											className="object-cover"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
										<div className="absolute bottom-4 left-4 text-white">
											<p className="text-sm uppercase tracking-[0.28em] text-white/70">
												{staff.title}
											</p>
											<h4 className="text-xl font-semibold">{staff.name}</h4>
										</div>
									</div>
									<div className="p-5">
										<p className="text-sm text-muted-foreground leading-relaxed mb-4">
											{staff.desc}
										</p>
										<button
											type="button"
											onClick={() => openVideo(staff.videoSrc)}
											className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold"
										>
											Watch Message
											<svg
												viewBox="0 0 24 24"
												className="h-4 w-4"
												fill="none"
												stroke="currentColor"
												strokeWidth={2}
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M9 5l7 7-7 7"
												/>
											</svg>
										</button>
									</div>
								</GlassCard>
							))}
						</div>
					</section>

					{/* Admissions CTA */}
					<section className="w-full max-w-6xl mb-20 reveal">
						<div className="glass rounded-3xl p-8 md:p-10 border border-white/10 shadow-xl">
							<div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] items-center">
								<div>
									<p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-3">
										Admissions
									</p>
									<h3 className="text-3xl sm:text-4xl font-bold mb-4">
										Ready to Join Bidii Primary?
									</h3>
									<p className="text-lg text-muted-foreground leading-relaxed">
										Admissions are open for the new term. Share your details and we
										will guide you through the next steps.
									</p>
								</div>
								<div className="flex flex-col gap-4 md:items-end">
									<button
										type="button"
										className="px-8 py-4 rounded-2xl text-base font-semibold text-white gradient-brand shadow-lg shadow-violet-500/20 hover:shadow-violet-500/35 hover:scale-[1.02] transition-all duration-250"
									>
										Start Admission
									</button>
									<p className="text-sm text-muted-foreground">
										We will contact you with the full application details.
									</p>
								</div>
							</div>
						</div>
						<div className="glass rounded-2xl p-5 mt-6 border border-white/10">
							<p className="text-sm text-muted-foreground text-center leading-relaxed">
								We welcome new learners throughout the term. Reach out today and our
								team will guide you with a warm, personal response.
							</p>
						</div>
						<div className="mt-6 text-center">
							<p className="text-xl sm:text-2xl font-bold mb-4">
								Dear king, queens and princes, click this and see our marvelous
								archive of achievement, so godly and outstanding.
							</p>
							<Link
								href="/stories"
								className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-semibold text-white gradient-brand shadow-lg shadow-violet-500/20 hover:shadow-violet-500/35 hover:scale-[1.02] transition-all duration-250"
							>
								Visit our archive of achievements
								<svg
									className="w-4 h-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</Link>
						</div>
					</section>

					<section className="w-full px-2 sm:px-4 lg:px-6 mb-20 reveal">
						<div className="mx-auto max-w-7xl">
							<div className="text-center mb-10">
								<p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-3">
									Best Showcase
								</p>
								<h3 className="text-3xl sm:text-4xl font-bold mb-3">
									Leaders Who Inspire Bidii
								</h3>
								<p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
									A tribute to the distinguished leaders who have visited Bidii and affirmed our
									commitment to discipline, excellence, and growth.
								</p>
							</div>
							<div className="grid gap-10">
								{bestShowcaseLeaders.map((leader) => (
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
											<h4 className="text-3xl sm:text-4xl font-bold mb-4">{leader.name}</h4>
											<p className="text-lg font-semibold text-foreground mb-4">
												"{leader.quote}"
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
						</div>
					</section>
				</div>
			</main>

			{isVideoOpen && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
					onClick={closeVideo}
				>
					<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
					<div
						className="relative w-full max-w-5xl"
						onClick={(event) => event.stopPropagation()}
					>
						<button
							type="button"
							onClick={closeVideo}
							className="absolute -top-4 -right-4 z-10 h-10 w-10 rounded-full bg-white text-slate-900 shadow-lg hover:scale-105 transition-transform"
							aria-label="Close video"
						>
							<span className="block text-xl leading-none">x</span>
						</button>
						<div className="overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl">
							<div className="aspect-video w-full">
								<iframe
									className="h-full w-full"
									src={activeVideoSrc ?? storyVideoSrc}
									title="Bidii Primary video"
									allow="autoplay; encrypted-media; picture-in-picture"
									allowFullScreen
								/>
							</div>
						</div>
						<p className="mt-3 text-xs text-white/60 text-center">
						these is the best video you will ever see in your life, so watch it and be blessed, and share it to your friends and family, so that they can also be blessed.
						</p>
					</div>
				</div>
			)}
		</div>
	);
}
