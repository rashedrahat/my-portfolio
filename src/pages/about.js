import AnimatedText from "@/components/AnimatedText";
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
                text="Passion Fuels Purpose!"
                className="mb-16 !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
            />
            <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
              <div
                  className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                  Biography
                </h2>
                <p className="font-bold">
                  Hi, I’m Rashed — Front-End Engineer & Problem Solver.
                </p>
                <p className="mt-4 font-medium text-justify">
                  I’m MD Rashed Ahmed (Rahat) — a Front-End Software Engineer with over 6 years of experience building fast, scalable, and user-centric web applications using React, Next.js, and TypeScript.
                </p>
                <p className="mt-4 font-medium text-justify">
                  I love crafting interfaces that don’t just work — they feel right. My focus is on building high-performance, accessible, and elegant experiences that make complex systems effortless for users.
                </p>

                <p className="mt-4 font-medium text-justify">
                  For me, front-end engineering is where logic meets creativity — the bridge between human experience and technical precision.
                  I’m passionate about turning complex problems into simple, beautiful solutions, writing clean code, and experimenting with design systems that bring products to life.
                </p>

                <p className="mt-4 font-medium text-justify">
                  Currently based in Sydney, I’m exploring opportunities with teams that value innovation, performance, and meaningful digital experiences — especially where AI and front-end engineering intersect.
                </p>
              </div>

              <div
                  className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8
"
              >
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                <Image
                    src={profilePic}
                    alt="Rashed Rahat"
                    className="w-full h-auto rounded-2xl"
                    priority
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                />
              </div>

              <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={50} />+
                </span>
                  <h2
                      className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm"
                  >
                    satisfied clients
                  </h2>
                </div>

                <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={30} />+
                </span>
                  <h2
                      className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm"
                  >
                    projects completed
                  </h2>
                </div>

                <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={6} />+
                </span>
                  <h2
                      className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm"
                  >
                    years of experience
                  </h2>
                </div>
              </div>
            </div>

            <Skills />
            <Experience />
            <Education />
          </Layout>
        </main>
      </>
  );
};

export default about;
