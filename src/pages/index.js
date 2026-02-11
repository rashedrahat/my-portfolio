import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import profilePic from "../../public/images/profile/my-pic-1.png";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

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
                const formatted = latest.toFixed(decimals);
                ref.current.textContent = `${prefix}${formatted}${suffix}`;
            }
        });
        return () => unsubscribe();
    }, [springValue, suffix, prefix, decimals]);

    return (
        <div className="rounded-2xl border border-dark/10 dark:border-light/10 p-3 bg-light/80 dark:bg-dark/60 shadow-soft">
            <p ref={ref} className="text-xl font-bold text-dark dark:text-light"></p>
            <p className="text-xs text-dark/70 dark:text-light/70">{label}</p>
        </div>
    );
};

export default function Home() {

    const rotatingWords = ["beautifully", "accessibly", "reliably", "fast"];
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
            <main className="flex items-center text-dark w-full min-h-screen dark:text-light sm:items-start">
                <Layout className="pt-10 md:pt-16 sm:pt-16">
                    <section className="relative rounded-[2.5rem] border border-dark/10 dark:border-light/10 bg-light/70 dark:bg-dark/50 overflow-hidden hero-grid dark:hero-grid-dark min-h-[calc(100vh-150px)] xl:min-h-[calc(100vh-170px)] lg:min-h-0">
                        <div className="absolute inset-0 page-surface dark:page-surface-dark opacity-60" />
                        <div className="relative grid grid-cols-12 gap-6 px-10 py-10 lg:px-8 lg:py-8 md:px-6 md:py-6 sm:px-4 sm:py-5 pb-20">
                            <div className="col-span-7 flex flex-col items-start lg:col-span-12">
                                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em] text-dark/70 dark:text-light/70">
                                    <span className="px-3 py-1 rounded-full bg-dark/5 dark:bg-light/10">
                                        Senior Frontend Engineer
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-dark/5 dark:bg-light/10">
                                        Sydney, Australia
                                    </span>
                                </div>

                                <div className="mt-6">
                                    <AnimatedText
                                        text="Design-led engineering for products that scale"
                                        className="!text-5xl !text-left leading-[1.02]
                xl:!text-4xl lg:!text-left md:!text-3xl sm:!text-3xl
                "
                                    />
                                    <div className="relative mt-2 h-[2.8rem] md:h-[2.4rem] sm:h-[2.2rem] overflow-hidden">
                                        <AnimatePresence mode="wait">
                                            <motion.span
                                                key={rotatingWords[wordIndex]}
                                                initial={{ y: 24, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: -24, opacity: 0 }}
                                                transition={{ duration: 0.5, ease: "easeOut" }}
                                                className="absolute left-0 text-3xl md:text-2xl sm:text-2xl font-display font-semibold text-primary"
                                            >
                                                {rotatingWords[wordIndex]}.
                                            </motion.span>
                                        </AnimatePresence>
                                    </div>
                                </div>

                                <p className="mt-4 text-base font-semibold text-dark/80 dark:text-light/80 md:text-sm">
                                    Accessible, high-performance interfaces that scale globally.
                                </p>

                                <div className="mt-6 flex flex-wrap items-center gap-3">
                                    <Link
                                        href="/Resume_MdRashedAhmed.pdf"
                                        target={"_blank"}
                                        className="inline-flex items-center bg-dark text-light px-3.5 py-1.5
                  rounded-full text-[13px] font-semibold hover:bg-primary hover:text-dark leading-none
                  border border-solid border-dark/10 shadow-soft transition-colors
                  dark:bg-light dark:text-dark hover:dark:bg-primaryDark
                  "
                                        download={true}
                                    >
                                        Download Resume <LinkArrow className={"w-3.5 ml-2"} />
                                    </Link>
                                    <Link
                                        href="mailto:mdrashedahmed.work@gmail.com"
                                        target={"_blank"}
                                        className="text-base font-semibold capitalize text-dark underline decoration-primary/70 underline-offset-4 dark:text-light dark:decoration-primaryDark/70"
                                    >
                                        Let’s Talk
                                    </Link>
                                    <Link
                                        href="/projects"
                                        className="text-base font-semibold capitalize text-dark/80 dark:text-light/80"
                                    >
                                        View Projects
                                    </Link>
                                </div>

                                <div className="mt-6 grid grid-cols-3 gap-3 w-full max-w-xl sm:grid-cols-1">
                                    <AnimatedStat value={2.5} decimals={1} suffix="M+" label="Learners reached" />
                                    <AnimatedStat value={15} decimals={0} suffix="K+" label="Concurrent learners" />
                                    <AnimatedStat value={2.1} decimals={1} prefix="WCAG " label="Accessibility standard" />
                                </div>
                            </div>

                            <div className="col-span-5 lg:col-span-12">
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="relative rounded-[2.5rem] p-3 bg-light/80 dark:bg-dark/60 border border-dark/10 dark:border-light/10 shadow-3xl overflow-hidden max-w-[420px] ml-auto"
                                >
                                    <div className="absolute -top-6 -right-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
                                    <div className="absolute -bottom-8 -left-12 h-40 w-40 rounded-full bg-primaryDark/20 blur-3xl" />
                                    <Image
                                        src={profilePic}
                                        alt="Rashed Rahat"
                                        className="w-full h-auto rounded-[2rem]"
                                        priority
                                        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
                                    />
                                    <div className="absolute bottom-6 left-6 rounded-full bg-light/90 dark:bg-dark/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-dark/70 dark:text-light/70 border border-dark/10 dark:border-light/10">
                                        Portfolio 2026
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        <div className="absolute left-8 right-8 bottom-8 sm:static sm:mt-4 sm:px-4">
                            <div className="rounded-full border border-dark/10 dark:border-light/10 bg-light/60 dark:bg-dark/40 px-5 py-2 overflow-hidden marquee sm:px-4">
                                <div className="flex items-center gap-8 whitespace-nowrap marquee-track text-[11px] uppercase tracking-[0.35em] text-dark/60 dark:text-light/60 sm:text-[10px] sm:tracking-[0.2em]">
                                    <span>React</span>
                                    <span>Next.js</span>
                                    <span>TypeScript</span>
                                    <span>Accessibility</span>
                                    <span>Design Systems</span>
                                    <span>Performance</span>
                                    <span>GraphQL</span>
                                    <span>Testing</span>
                                    <span>React</span>
                                    <span>Next.js</span>
                                    <span>TypeScript</span>
                                    <span>Accessibility</span>
                                    <span>Design Systems</span>
                                    <span>Performance</span>
                                    <span>GraphQL</span>
                                    <span>Testing</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </Layout>

                <HireMe />
                <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden opacity-80">
                    <Image src={lightBulb} alt="Rashed Rahat" className="w-full h-auto" />
                </div>
            </main>
        </>
    );
}
