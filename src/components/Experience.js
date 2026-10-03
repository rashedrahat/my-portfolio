import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
  type,
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-10 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col items-center justify-between md:w-[90%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="w-full rounded-2xl glass-dark p-6"
      >
        <h3 className="font-bold text-2xl text-light sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary hover:text-electric transition-colors"
          >
            @{company}
          </a>
        </h3>
        <span className="font-medium text-light/40 xs:text-sm">
          {time} | {type} {address && `| ${address}`}
        </span>
        <p className="mt-3 font-medium w-full md:text-sm text-justify text-light/55">
          {work}
        </p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-24">
      <div className="grid grid-cols-12 gap-10 lg:gap-x-0 items-end mb-10">
        <div className="col-span-4 lg:col-span-12">
          <p className="text-xs uppercase tracking-[0.35em] text-electric/60">
            Timeline
          </p>
          <h2 className="font-bold text-5xl mt-4 text-light md:text-4xl">
            Experience
          </h2>
        </div>

        <div className="col-span-8 lg:col-span-12">
          <p className="text-base text-light/45 leading-relaxed">
            7 years building scalable frontend systems across SaaS, EdTech, and transport platforms, with a focus on map-driven interfaces, performance, and reusable UI architecture.
          </p>
        </div>
      </div>

      <div ref={ref} className="w-[82%] mx-auto relative lg:w-[95%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[2px] h-full bg-electric/30 origin-top md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          
          <Details
            position="Frontend Developer"
            company="Transmax"
            companyLink="https://www.transmax.com.au"
            time="May 2026 - Present"
            type="Full-time"
            address="Brisbane, Australia"
            work="Part of the team migrating the core operations map of a government-owned intelligent transport platform (STREAMS) to a modern shared map platform. Delivered saved map layouts, live public transport tracking with a route-view mode, and road search by state road and distance marker. Migrated device and public transport layers off legacy code, and diagnosed a screen-blanking bug caused by incompatible library versions across independently deployed apps."
          />

          <Details
            position="Frontend Engineer"
            company="VipaHelda"
            companyLink="https://vipahelda.com"
            time="Jan 2023 - Mar 2026"
            type="Part-time (casual, hourly)"
            address="Remote (Rotterdam, Netherlands)"
            work="Casual hourly remote engagement alongside other roles. Built and maintained React and Next.js applications for European fintech and operations teams, developing reusable components with React, TypeScript, and Tailwind CSS."
          />

          <Details
            position="Senior React Developer (via Aviato Consulting)"
            company="Hapana"
            companyLink="https://www.hapana.com"
            time="Oct 2025 - Dec 2025"
            type="Contract"
            address="Sydney, Australia"
            work="Designed a reusable client alert system and centralised alert UI architecture for a large gym management SaaS platform, removing duplication across product workflows. Documented components in Storybook, integrated GraphQL APIs for real-time client data, and improved performance through component refactoring and render optimisation in a large monorepo."
          />

          <Details
            position="Senior Software Engineer (Frontend)"
            company="Shikho"
            companyLink="https://shikho.com"
            time="Aug 2023 - Jun 2025"
            type="Full-time"
            address="Dhaka, Bangladesh (Remote)"
            work="Architected a real-time online exam experience for 15,000+ concurrent students using React and WebSocket, optimised website load times by 20-25%, and delivered accessible interfaces for AI-powered learning features. Built shared UI component libraries and mentored junior developers."
          />

          <Details
            position="Software Engineer (Frontend)"
            company="Shikho"
            companyLink="https://shikho.com"
            time="Dec 2021 - Jul 2023"
            type="Full-time"
            address="Dhaka, Bangladesh (Hybrid)"
            work="Built and maintained high-traffic web applications with over 3M quarterly unique users, worked with UX designers to improve engagement and conversion, and integrated third-party APIs and analytics tools, reducing operational costs by about AUD 100,000 per year."
          />

          <Details
            position="Software Engineer (Frontend)"
            company="Misfit Technologies"
            companyLink="https://misfit.tech"
            time="Mar 2021 - Nov 2021"
            type="Full-time"
            address="Dhaka, Bangladesh"
            work="Introduced a mobile-first approach with React and Tailwind CSS, increasing mobile traffic by 25%. Enforced web standards, reducing code-review discrepancies by 20%, and worked with backend developers to resolve frontend issues."
          />

          <Details
            position="Junior Software Engineer"
            company="Workspace InfoTech"
            companyLink="https://workspaceit.com"
            time="Jun 2019 - Mar 2021"
            type="Full-time"
            address="Dhaka, Bangladesh"
            work="Contributed to 20+ websites and their backend modules (Node.js/Express.js, Django), wrote 200+ SQL queries (MySQL, MongoDB), and handled testing and troubleshooting to ensure software reliability."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;