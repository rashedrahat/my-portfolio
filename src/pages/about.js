import AnimatedText from "@/components/AnimatedText";
import Awards from "@/components/Awards";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/my-pic-2.jpg";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
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
  return (
      <>
        <Head>
          <title>Rashed Rahat | About</title>
        </Head>
        <TransitionEffect />
        <main className="flex w-full flex-col items-center justify-center dark:text-light">
          <Layout className="pt-16">
            <AnimatedText
                text="A frontend practice rooted in clarity, craft, and scale."
                className="mb-12 !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl"
            />
            <div className="grid w-full grid-cols-12 gap-6 lg:gap-8">
              <div className="col-span-7 flex flex-col items-start justify-start xl:col-span-12">
                <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-dark/70 dark:text-light/70">
                  Biography
                </h2>
                <p className="font-semibold text-lg">
                  Hi, I’m MD Rashed Ahmed (Rahat) — Senior Frontend Engineer.
                </p>
                <p className="mt-4 font-medium text-justify text-dark/80 dark:text-light/80 max-w-2xl">
                  Senior Frontend Engineer with 6+ years of experience building production-grade web platforms across SaaS, EdTech, and enterprise teams. I specialize in React, Next.js, and TypeScript with a deep focus on WCAG 2.1 AA accessibility, performance tuning, and reliable UI systems.
                </p>
                <p className="mt-4 font-medium text-justify text-dark/80 dark:text-light/80 max-w-2xl">
                  My recent work spans SaaS, EdTech, and enterprise environments, including large monorepos, GraphQL and REST integrations, and test-driven UI delivery. I care about clean, dependable components that help teams ship with confidence.
                </p>
                <p className="mt-4 font-medium text-justify text-dark/80 dark:text-light/80 max-w-2xl">
                  Based in Sydney, I’m open to full-time roles in Australia, especially where performance, accessibility, and AI-powered product experiences intersect.
                </p>
              </div>

              <div className="col-span-5 relative h-max rounded-[2rem] border border-solid border-dark/10
bg-light/80 p-5 dark:bg-dark/60 dark:border-light/10 xl:col-span-12 xl:mt-6
"
              >
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark/10 dark:bg-light/10" />
                <Image
                    src={profilePic}
                    alt="Rashed Rahat"
                    className="w-full h-auto rounded-[1.5rem]"
                    priority
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                />
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-dark/10 dark:border-light/10 p-4 bg-light/70 dark:bg-dark/60">
                    <p className="text-xs uppercase tracking-[0.2em] text-dark/60 dark:text-light/60">Focus</p>
                    <p className="text-sm font-semibold">WCAG 2.1 AA, design systems</p>
                  </div>
                  <div className="rounded-2xl border border-dark/10 dark:border-light/10 p-4 bg-light/70 dark:bg-dark/60">
                    <p className="text-xs uppercase tracking-[0.2em] text-dark/60 dark:text-light/60">Stack</p>
                    <p className="text-sm font-semibold">React, Next.js, TypeScript</p>
                  </div>
                  <div className="rounded-2xl border border-dark/10 dark:border-light/10 p-4 bg-light/70 dark:bg-dark/60">
                    <p className="text-xs uppercase tracking-[0.2em] text-dark/60 dark:text-light/60">Impact</p>
                    <p className="text-sm font-semibold">2.5M+ learners served</p>
                  </div>
                  <div className="rounded-2xl border border-dark/10 dark:border-light/10 p-4 bg-light/70 dark:bg-dark/60">
                    <p className="text-xs uppercase tracking-[0.2em] text-dark/60 dark:text-light/60">Scale</p>
                    <p className="text-sm font-semibold">15K+ concurrent users</p>
                  </div>
                </div>
              </div>
            </div>

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
