import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/shikho.png";
import project2 from "../../public/images/projects/shikho-exam.png";
import project3 from "../../public/images/projects/bohubrihi.jpg";
import project4 from "../../public/images/projects/shikho-e-shop.png";
import project5 from "../../public/images/projects/shikho-ai.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
      <article
          className="w-full flex items-center justify-between relative rounded-[2rem]
        border border-solid border-dark/10 bg-light/80 shadow-soft p-10 dark:bg-dark/60 dark:border-light/10
        lg:flex-col lg:p-8 xs:rounded-2xl xs:p-4"
      >
        <Link
            href={link}
            target="_blank"
            className="w-1/2 cursor-pointer overflow-hidden rounded-2xl lg:w-full"
        >
          <FramerImage
              src={img}
              alt={title}
              className="w-full h-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
          />
        </Link>

        <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em] dark:text-primaryDark xs:text-xs">
          {type}
        </span>
          <Link
              href={link}
              target="_blank"
              className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-3xl xs:text-2xl">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark/80 dark:text-light/80 sm:text-sm text-justify">
            {summary}
          </p>
          <div className="mt-2 flex items-center">
            {github && (
                <Link href={github} target="_blank" className="w-10 mr-4">
                  {" "}
                  <GithubIcon />
                </Link>
            )}
            <Link
                href={link}
                target="_blank"
                className="rounded-full bg-dark text-light px-6 py-2 text-base font-semibold
            dark:bg-light dark:text-dark hover:bg-primary hover:text-dark dark:hover:bg-primaryDark transition-colors
            sm:px-4 sm:text-sm
            "
            >
              Visit Project
            </Link>
          </div>
        </div>
      </article>
  );
};

const Project = ({ title, type, img, link, github, summary }) => {
  return (
      <article
          className="w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark/10 bg-light/80 p-6 relative dark:bg-dark/60 dark:border-light/10 xs:p-4 shadow-soft
    "
      >
        <Link
            href={link}
            target="_blank"
            className="w-full cursor-pointer overflow-hidden rounded-2xl"
        >
          <FramerImage
              src={img}
              alt={title}
              className="w-full h-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
          />
        </Link>

        <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em] dark:text-primaryDark lg:text-xs">
          {type}
        </span>
          <Link
              href={link}
              target="_blank"
              className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark/80 dark:text-light/80 sm:text-sm text-justify">
            {summary}
          </p>

          <div className="w-full flex items-center justify-between">
            <Link
                href={link}
                target="_blank"
                className="text-base font-semibold underline decoration-primary/70 underline-offset-4 md:text-sm"
            >
              Visit
            </Link>
            {github && (
                <Link href={github} target="_blank" className="w-8 md:w-6">
                  <GithubIcon />
                </Link>
            )}
          </div>
        </div>
      </article>
  );
};

const projects = () => {
  return (
      <>
        <Head>
          <title>Rashed Rahat | Projects</title>
        </Head>
        <TransitionEffect />
        <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
          <Layout className="pt-16">
            <div className="grid grid-cols-12 gap-10 items-end mb-12">
              <div className="col-span-6 lg:col-span-12">
                <p className="text-xs uppercase tracking-[0.35em] text-dark/60 dark:text-light/60">
                  Selected Work
                </p>
                <AnimatedText
                    text="Products shipped with focus on scale, speed, and clarity."
                    className="mt-4 !text-6xl !text-left lg:!text-5xl sm:!text-4xl xs:!text-3xl"
                />
              </div>
              <div className="col-span-6 lg:col-span-12">
                <p className="text-base text-dark/70 dark:text-light/70">
                  Large-scale front-end engineering, AI integration, and performance-driven product delivery across education, fintech, and commerce.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
              <div className="col-span-12">
                <FeaturedProject
                    type="Online Learning Platform"
                    title="Shikho"
                    summary="Built and maintained the core front-end using React, Next.js, and TypeScript for Bangladesh’s largest digital learning platform. Served 2.5M+ users and led front-end architecture for exam delivery, cross-platform UI, and 25% performance improvement."
                    img={project1}
                    link="https://shikho.com"
                />
              </div>
              <div className="col-span-6 sm:col-span-12">
                <Project
                    type="Real-Time Exam System"
                    title="Shikho Exam Portal"
                    summary="Architected and implemented a real-time exam platform supporting MCQ + CQ sessions for 15K+ concurrent users. Designed an optimized React/Next.js UI with live timing, auto-submit, and validation — delivering a low-latency, mobile-first experience nationwide."
                    img={project2}
                    link="https://app.shikho.com"
                />
              </div>
              <div className="col-span-6 sm:col-span-12">
                <Project
                    type="AI Learning Assistant"
                    img={project5}
                    title="Shikho AI"
                    summary="Led front-end development for Shikho AI, an NLP-powered assistant that generates curriculum-aligned answers in Bangla. Built chat UX, math rendering (Markdown/LaTeX), and guardrails with React and TypeScript; collaborated with AI and backend teams to enhance response speed and reliability."
                    link="https://ai.shikho.com"
                />
              </div>

              <div className="col-span-6 sm:col-span-12">
                <Project
                    type="eCommerce"
                    title="Shikho E-Shop"
                    summary="Developed a responsive storefront for courses, T-shirts, PDFs, and books using React and Tailwind CSS. Implemented filters, cart logic, and secure checkout; optimized media and bundle sizes to improve mobile performance and UX"
                    img={project4}
                    link="https://shop.shikho.com"
                />
              </div>
              <div className="col-span-6 sm:col-span-12">
                <Project
                    type="Career Skills Platform"
                    title="Bohubrihi"
                    img={project3}
                    summary="Contributed to UI redesign and front-end optimization for a self-learning platform offering career and technical courses. Improved page load speed and component consistency across modules in React and Next.js."
                    link="https://bohubrihi.com"
                />
              </div>
            </div>
          </Layout>
        </main>
      </>
  );
};

export default projects;
