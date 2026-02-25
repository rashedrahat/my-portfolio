import Awards from "@/components/Awards";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/my-pic.jpg";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  const infoCards = [
    { label: "Focus", value: "WCAG 2.1 AA, design systems", accent: "text-cyan border-cyan/20 bg-cyan/[0.06]" },
    { label: "Domains", value: "SaaS · EdTech · Enterprise",  accent: "text-electric border-electric/20 bg-electric/[0.06]" },
    { label: "Impact", value: "2.5M+ learners served",      accent: "text-primary border-primary/20 bg-primary/[0.06]" },
    { label: "Scale", value: "15K+ concurrent users",       accent: "text-primaryDark border-primaryDark/20 bg-primaryDark/[0.06]" },
  ];

  return (
    <>
      <Head>
        <title>Rashed Rahat | About</title>
      </Head>
      <TransitionEffect />

      <main className="flex w-full flex-col text-light">

        {/* ── HERO — exact viewport height, equal top/bottom gap ──── */}
        <section className="relative w-full h-[calc(100vh-72px)] aurora-bg overflow-hidden
          px-32 xl:px-24 lg:px-16 md:px-12 sm:px-8
          md:h-auto md:py-12">

          <div className="relative z-10 h-full grid grid-cols-12 gap-10 items-start
            py-14 xl:py-12 lg:py-10
            xl:gap-8 md:grid-cols-1 md:h-auto md:py-0 md:gap-8">

            {/* Left — label + heading + intro + info cards */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="col-span-7 flex flex-col md:col-span-1"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-electric/60 mb-5">
                About
              </span>

              <h1 className="text-5xl 2xl:text-6xl lg:text-4xl sm:text-3xl xs:text-2xl
                font-display font-bold leading-tight text-light mb-8">
                A frontend practice rooted in{" "}
                <span className="gradient-text">clarity</span>, craft, and scale.
              </h1>

              {/* Info cards */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
                {infoCards.map((card) => (
                  <div key={card.label} className="rounded-2xl glass-dark p-4">
                    <p className={`text-xs font-semibold uppercase tracking-[0.2em] mb-1 px-2 py-0.5 rounded-full
                      inline-block border ${card.accent}`}>
                      {card.label}
                    </p>
                    <p className="text-sm font-semibold text-light/80 mt-1">{card.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — photo fills full column height */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="col-span-5 self-stretch relative md:col-span-1 md:h-[480px] md:self-auto"
            >
              {/* Glow blobs outside overflow */}
              <div className="absolute -top-8 -right-8 h-48 w-48 rounded-full bg-electric/20 blur-3xl pointer-events-none z-0" />
              <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-primary/15 blur-3xl pointer-events-none z-0" />

              {/* Card fills h-full of self-stretch column */}
              <div className="relative rounded-[2rem] overflow-hidden h-full
                bg-surface/50 border border-white/[0.08]
                shadow-glow-electric backdrop-blur-xl z-10">
                <div className="absolute inset-0 ring-1 ring-electric/15 pointer-events-none z-20" />
                <Image
                  src={profilePic}
                  alt="Rashed Rahat"
                  className="w-full h-full object-cover object-center relative z-10"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-5 left-5 rounded-full glass-dark px-3 py-1
                  text-[10px] uppercase tracking-[0.25em] text-light/45 z-20">
                  Portfolio 2026
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator — desktop only */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:hidden z-20"
          >
            <span className="text-[9px] uppercase tracking-[0.35em] text-light/25 font-semibold">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-10 bg-gradient-to-b from-light/25 to-transparent"
            />
          </motion.div>

        </section>

        {/* ── BIOGRAPHY + REST ────────────────────────────────────── */}
        <Layout className="pt-16 aurora-bg">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-24 grid grid-cols-12 gap-10 xl:gap-8 lg:grid-cols-1 lg:gap-8"
          >
            {/* Left — bio text */}
            <div className="col-span-7 lg:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-electric/60 mb-6">
                Biography
              </p>
              <div className="pl-6 border-l-2 border-electric/25 space-y-4 mb-6">
                <p className="font-bold text-xl text-light leading-snug">
                  I'm Rashed — Frontend Engineer.
                </p>
                <p className="font-medium text-light/55 leading-relaxed">
                  Building production-grade platforms across SaaS, EdTech, and enterprise.
                  I work in{" "}
                  <span className="text-light/85 font-semibold">React, Next.js, and TypeScript</span>{" "}
                  with deep focus on{" "}
                  <span className="text-light/85 font-semibold">WCAG 2.1 AA accessibility</span>,
                  design systems, and performance engineering.
                </p>
                <p className="font-medium text-light/55 leading-relaxed">
                  I've shipped across large monorepos, GraphQL and REST integrations,
                  and test-driven UI delivery — at scale.
                </p>
              </div>
              <div className="flex items-center gap-2 flex-wrap pl-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] px-3 py-1
                  rounded-full border border-cyan/20 bg-cyan/[0.06] text-cyan">
                  Sydney, AU
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] px-3 py-1
                  rounded-full border border-electric/20 bg-electric/[0.06] text-electric">
                  Open to full-time
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] px-3 py-1
                  rounded-full border border-primary/20 bg-primary/[0.06] text-primary">
                  AI-powered products
                </span>
              </div>
            </div>

            {/* Right — stat cards */}
            <div className="col-span-5 lg:col-span-1 flex flex-col gap-3 justify-center">
              {[
                { value: "6+",    label: "Years of experience",  accent: "text-electric", border: "border-electric/15", bg: "bg-electric/[0.04]" },
                { value: "2.5M+", label: "Learners served",      accent: "text-cyan",     border: "border-cyan/15",     bg: "bg-cyan/[0.04]"     },
                { value: "15K+",  label: "Concurrent users",     accent: "text-primary",  border: "border-primary/15", bg: "bg-primary/[0.04]"  },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`rounded-2xl ${stat.bg} border ${stat.border} p-5 flex items-center gap-5`}
                >
                  <span className={`text-4xl font-display font-bold tabular-nums ${stat.accent}`}>
                    {stat.value}
                  </span>
                  <span className="text-sm text-light/50 font-medium leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <Skills />
          <Experience />
          <Awards />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
