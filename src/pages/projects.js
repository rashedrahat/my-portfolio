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
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full flex items-center justify-between relative rounded-[2rem]
        glass-dark overflow-hidden
        lg:flex-col xs:rounded-2xl"
    >
      {/* Image half */}
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden lg:w-full group"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      {/* Content half */}
      <div className="w-1/2 flex flex-col items-start justify-between p-10 lg:w-full lg:p-8 md:p-6 sm:p-5">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]
          text-electric border border-electric/30 rounded-full bg-electric/[0.08] mb-4">
          {type}
        </span>
        <Link href={link} target="_blank" className="group">
          <h2 className="text-4xl font-bold text-light group-hover:text-primary transition-colors
            lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-4 text-base text-light/50 text-justify leading-relaxed sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center gap-4">
          {github && (
            <Link href={github} target="_blank"
              className="w-9 h-9 flex items-center justify-center rounded-full
                border border-white/[0.08] bg-white/[0.04] text-light/40 hover:text-light
                transition-colors"
              aria-label="GitHub">
              <GithubIcon className="w-5 h-5" />
            </Link>
          )}
          <Link
            href={link}
            target="_blank"
            className="rounded-full bg-primary text-dark px-6 py-2.5 text-sm font-bold
              hover:bg-primary/90 btn-glow transition-all sm:px-4"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

const Project = ({ title, type, img, link, github, summary, index }) => {
  const num = String(index + 1).padStart(2, "0");
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="w-full flex flex-col items-center justify-center rounded-2xl glass-dark overflow-hidden group"
    >
      <Link href={link} target="_blank" className="w-full overflow-hidden">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between p-6 xs:p-4">
        <div className="flex items-center justify-between w-full mb-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-electric/60">
            {type}
          </span>
          <span className="text-3xl font-display font-bold text-white/[0.06]">{num}</span>
        </div>
        <Link href={link} target="_blank" className="group/title">
          <h2 className="text-2xl font-bold text-light group-hover/title:text-primary transition-colors lg:text-xl">
            {title}
          </h2>
        </Link>
        <p className="mt-3 mb-4 text-sm text-light/45 text-justify leading-relaxed">{summary}</p>

        <div className="w-full flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-sm font-semibold text-electric hover:text-primaryDark transition-colors
              underline underline-offset-4 decoration-electric/40"
          >
            Visit Project →
          </Link>
          {github && (
            <Link href={github} target="_blank"
              className="w-8 h-8 flex items-center justify-center rounded-full
                border border-white/[0.08] bg-white/[0.04] text-light/40 hover:text-light transition-colors"
              aria-label="GitHub">
              <GithubIcon className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Rashed Rahat | Projects</title>
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center text-light">
        <Layout className="pt-16 aurora-bg">

          {/* Page header */}
          <div className="grid grid-cols-12 gap-10 items-end mb-16">
            <div className="col-span-6 lg:col-span-12">
              <p className="text-xs uppercase tracking-[0.35em] text-electric/60 mb-4">
                Selected Work
              </p>
              <h1 className="text-7xl font-display font-bold leading-tight text-light
                lg:text-5xl sm:text-4xl xs:text-3xl">
                Products shipped with{" "}
                <span className="gradient-text">precision</span>.
              </h1>
            </div>
            <div className="col-span-6 lg:col-span-12">
              <p className="text-base text-light/45 leading-relaxed">
                Large-scale front-end engineering, AI integration, and performance-driven product delivery
                across education, fintech, and commerce.
              </p>
            </div>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-12 gap-16 gap-y-20 xl:gap-x-10 lg:gap-x-8 md:gap-y-16 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Online Learning Platform"
                title="Shikho"
                summary="Built and maintained the core front-end using React, Next.js, and TypeScript for Bangladesh's largest digital learning platform. Served 2.5M+ users and led front-end architecture for exam delivery, cross-platform UI, and 25% performance improvement."
                img={project1}
                link="https://shikho.com"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                index={0}
                type="Real-Time Exam System"
                title="Shikho Exam Portal"
                summary="Architected and implemented a real-time exam platform supporting MCQ + CQ sessions for 15K+ concurrent users. Designed an optimized React/Next.js UI with live timing, auto-submit, and validation."
                img={project2}
                link="https://app.shikho.com"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                index={1}
                type="AI Learning Assistant"
                img={project5}
                title="Shikho AI"
                summary="Led front-end development for Shikho AI, an NLP-powered assistant generating curriculum-aligned answers in Bangla. Built chat UX, math rendering (Markdown/LaTeX), and guardrails with React and TypeScript."
                link="https://ai.shikho.com"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                index={2}
                type="eCommerce"
                title="Shikho E-Shop"
                summary="Developed a responsive storefront for courses, T-shirts, PDFs, and books using React and Tailwind CSS. Implemented filters, cart logic, and secure checkout with optimized mobile performance."
                img={project4}
                link="https://shop.shikho.com"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                index={3}
                type="Career Skills Platform"
                title="Bohubrihi"
                img={project3}
                summary="Contributed to UI redesign and front-end optimization for a self-learning platform offering career and technical courses. Improved page load speed and component consistency across modules."
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
