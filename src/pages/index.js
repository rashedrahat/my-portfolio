import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import profilePic from "../../public/images/profile/my-pic.jpg";

const AnimatedStat = ({ value, suffix = "", prefix = "", decimals = 0, label }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 2000 });
    const isInView = useInView(ref, { once: true });
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (isInView && !hasAnimated.current) {
            motionValue.set(value);
            hasAnimated.current = true;
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = `${prefix}${latest.toFixed(decimals)}${suffix}`;
            }
        });
        return () => unsubscribe();
    }, [springValue, suffix, prefix, decimals]);

    return (
        <div className="glass-dark rounded-xl px-4 py-3 md:px-2.5 md:py-2.5 flex flex-col gap-0.5">
            <p ref={ref} className="text-lg md:text-base font-bold text-light font-display leading-none"></p>
            <p className="text-[10px] text-light/35 uppercase tracking-[0.2em] md:tracking-[0.1em] mt-1">{label}</p>
        </div>
    );
};

const rotatingWords = ["beautifully", "accessibly", "reliably", "fast"];

export default function Home() {
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        }, 2600);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Head>
                <title>Rashed Rahat | Home</title>
            </Head>
            <TransitionEffect />

            <main className="text-light w-full max-w-[1680px] mx-auto h-[calc(100vh-72px)] bg-dark px-12 py-5
                xl:px-8 lg:px-6 md:px-4 sm:px-3 overflow-hidden">

                <section className="relative h-full dot-grid rounded-[2rem] overflow-hidden flex flex-col
                    md:rounded-2xl">

                    {/* Aurora blobs */}
                    <div className="absolute inset-0 aurora-bg pointer-events-none" />
                    <div className="absolute top-0 left-0 w-80 h-80 bg-electric/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-72 h-72 bg-primary/15 rounded-full blur-[90px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                    <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-cyan/10 rounded-full blur-[90px] translate-y-1/2 pointer-events-none" />

                    {/* Main grid */}
                    <div className="relative z-10 flex-1 grid grid-cols-12 items-center
                        px-10 py-8 gap-6
                        lg:px-8 lg:py-6 md:px-6 md:py-4 sm:px-5 sm:py-3
                        md:grid-cols-1 pb-16 md:pb-10">

                        {/* Left — text content */}
                        <div className="col-span-7 flex flex-col items-start justify-center lg:col-span-7 md:col-span-1">

                            {/* Badges */}
                            <div className="flex flex-wrap items-center gap-2 mb-5 md:mb-3">
                                <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.3em] text-light/45
                                    border border-white/[0.08] bg-white/[0.04]">
                                    Frontend Engineer
                                </span>
                                <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.3em] text-electric/70
                                    border border-electric/20 bg-electric/[0.07]">
                                    Sydney, Australia
                                </span>
                            </div>

                            {/* Headline */}
                            <h1 className="text-5xl 2xl:text-6xl xl:text-[2.75rem] lg:text-4xl md:text-[2rem] sm:text-[1.75rem]
                                font-display font-bold leading-[1.05] text-light">
                                Design-led engineering
                                <br />
                                for products that{" "}
                                <motion.span
                                    className="gradient-text inline-block"
                                    animate={{ scale: [1, 1.07, 1] }}
                                    transition={{
                                        duration: 2.8,
                                        repeat: Infinity,
                                        repeatDelay: 0.6,
                                        ease: "easeInOut",
                                    }}
                                    whileHover={{ scale: 1.12, transition: { type: "spring", stiffness: 400, damping: 12 } }}
                                >
                                    scale
                                </motion.span>
                            </h1>

                            {/* Rotating word */}
                            <div className="relative mt-2.5 md:mt-1.5 h-8 overflow-hidden">
                                <span className="absolute left-0 text-xl font-display font-semibold gradient-text leading-none">
                                    {rotatingWords[wordIndex]}.
                                </span>
                            </div>

                            {/* CTAs */}
                            <div className="mt-5 md:mt-3 flex flex-wrap items-center gap-4">
                                <Link
                                    href="/Resume_MdRashedAhmed.pdf"
                                    target="_blank"
                                    download
                                    className="bg-primary text-dark px-5 py-1.5 rounded-lg text-xs font-bold
                                        hover:bg-primary/90 btn-glow transition-all whitespace-nowrap"
                                >
                                    Resume
                                </Link>
                                <Link
                                    href="mailto:mdrashedahmed.work@gmail.com"
                                    target="_blank"
                                    className="text-xs font-semibold text-electric hover:text-primaryDark transition-colors
                                        underline underline-offset-4 decoration-electric/40"
                                >
                                    Let's Talk
                                </Link>
                                <Link
                                    href="/projects"
                                    className="text-xs font-semibold text-light/35 hover:text-light/65 transition-colors"
                                >
                                    View Projects
                                </Link>
                            </div>

                            {/* Stats */}
                            <div className="mt-5 md:mt-3 grid grid-cols-3 gap-2 w-full max-w-md">
                                <AnimatedStat value={2.5} decimals={1} suffix="M+" label="Learners" />
                                <AnimatedStat value={15}  decimals={0} suffix="K+" label="Concurrent" />
                                <AnimatedStat value={6}   decimals={0} suffix="+"  label="Yrs exp." />
                            </div>

                            {/* Availability */}
                            <div className="mt-5 md:mt-3 flex items-center gap-2.5">
                                <span className="relative flex h-2 w-2 flex-shrink-0">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                                </span>
                                <span className="text-[10px] uppercase tracking-[0.25em] md:tracking-[0.1em] text-light/30">
                                    Open to roles · React · TypeScript · Next.js
                                </span>
                            </div>
                        </div>

                        {/* Right — profile image */}
                        <div className="col-span-5 lg:col-span-5 md:col-span-1 md:hidden flex items-center justify-end md:justify-center">

                            {/* Full card — desktop only */}
                            <div className="relative rounded-[2rem] p-2.5
                                bg-surface/50 border border-white/[0.08]
                                shadow-glow-electric backdrop-blur-xl
                                w-full max-w-[340px] 2xl:max-w-[400px] xl:max-w-[300px] lg:max-w-[260px] ml-auto md:ml-0">

                                <div className="absolute -top-6 -right-6 h-36 w-36 rounded-full bg-electric/25 blur-3xl pointer-events-none" />
                                <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
                                <div className="absolute inset-0 rounded-[2rem] ring-1 ring-electric/15 pointer-events-none" />

                                <Image
                                    src={profilePic}
                                    alt="Rashed Rahat"
                                    className="w-full h-auto rounded-[1.6rem] relative z-10"
                                    priority
                                    sizes="(max-width: 768px) 80vw, 30vw"
                                />

                                <div className="absolute bottom-5 left-5 rounded-full glass-dark px-3 py-1
                                    text-[10px] uppercase tracking-[0.25em] text-light/45 z-20">
                                    Portfolio 2026
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Marquee — pinned to bottom */}
                    <div className="absolute bottom-0 left-0 right-0">
                        <div className="border-t border-white/[0.05] bg-dark/20 backdrop-blur-sm px-5 py-2.5 overflow-hidden marquee">
                            <div className="flex items-center gap-8 whitespace-nowrap marquee-track
                                text-[10px] uppercase tracking-[0.35em] text-light/25">
                                {["React", "Next.js", "TypeScript", "Accessibility", "Design Systems",
                                  "Performance", "GraphQL", "Testing",
                                  "React", "Next.js", "TypeScript", "Accessibility", "Design Systems",
                                  "Performance", "GraphQL", "Testing"].map((skill, i) => (
                                    <span key={i} className="flex items-center gap-8">
                                        <span className="text-electric/30">·</span>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
