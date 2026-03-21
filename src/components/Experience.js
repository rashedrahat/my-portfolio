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
      <div className="grid grid-cols-12 gap-10 items-end mb-10">
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
            6+ years building scalable frontend systems across SaaS, EdTech, and enterprise platforms, with a focus on performance, accessibility, and reusable UI architecture.
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
            position="Senior Frontend Engineer (Contract)"
            company="Hapana"
            companyLink="https://www.hapana.com"
            time="Oct 2025 - Dec 2025"
            type="Contract"
            address="Sydney, Australia"
            work="Built and scaled reusable frontend architecture for a large SaaS gym management platform used across multiple business workflows. Delivered modular React/TypeScript components, integrated GraphQL dashboards, and improved accessibility using semantic patterns and ARIA."
          />

          <Details
            position="Senior Software Engineer (Frontend)"
            company="Shikho"
            companyLink="https://shikho.com"
            time="Dec 2021 - Jun 2025"
            type="Full-time"
            address="Remote (Dhaka → Sydney)"
            work="Led frontend development for a mobile-first learning platform serving 2.5M+ users. Built a real-time exam system supporting 15K+ concurrent users, shipped AI-powered interfaces, and improved UI performance by ~25% through optimisation and scalable component design."
          />

          <Details
            position="Software Engineer (Frontend, Contract)"
            company="VipaHelda"
            companyLink="https://vipahelda.com"
            time="Jan 2023 - Oct 2024"
            type="Contract"
            address="Remote (Netherlands-based)"
            work="Worked with a Netherlands-based client on a contract engagement, building and maintaining React and Next.js applications. Delivered reusable UI components, integrated REST APIs, and supported QA and release workflows across distributed teams."
          />

          <Details
            position="Software Engineer (Frontend)"
            company="Misfit"
            companyLink="https://misfit.tech"
            time="Mar 2021 - Nov 2021"
            type="Full-time"
            address="Banani, Dhaka"
            work="Built responsive, mobile-first interfaces using React and Tailwind CSS. Integrated REST APIs, improved usability and performance, and collaborated in Agile development with code reviews and CI/CD workflows."
          />

          <Details
            position="Junior Software Engineer"
            company="Workspace"
            companyLink="https://workspaceit.com"
            time="Jun 2019 - Mar 2021"
            type="Full-time"
            address="Nikunja 2, Dhaka"
            work="Developed and maintained 20+ web applications using HTML, CSS, and JavaScript. Contributed to backend modules with Python/Django and Node.js, worked with SQL and MongoDB, and resolved cross-browser compatibility issues."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;