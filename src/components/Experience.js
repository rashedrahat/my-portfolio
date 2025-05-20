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
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
        >
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                    {position}&nbsp;
                    <a
                        href={companyLink}
                        target="_blank"
                        className="text-primary dark:text-primaryDark capitalize"
                    >
                        @{company}
                    </a>
                </h3>
                <span className="font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {type} {address && `| ${address}`}
        </span>
                <p className="font-medium w-full md:text-sm text-justify">{work}</p>
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
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
                Experience
            </h2>

            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
  md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl
  "
                />

                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <Details
                        position="Senior Software Engineer, Front-end"
                        company="Shikho"
                        companyLink="https://shikho.com"
                        time="Aug 2023 - Present"
                        type="Full-time"
                        address="Remote"
                        work='At Shikho, I’ve led front-end development for a mobile-first platform used by over 2.5 million students, focusing on scalable solutions built with React, Next.js, and TypeScript. I architected exam delivery modules supporting 15,000+ concurrent users, reduced load times by 20–25%, and integrated analytics tools that helped cut costs by over BDT 1 million annually. I also mentored junior developers and standardized our code review process. For these efforts, I was honored with the Learner First Award for advancing platform accessibility and UX quality.'
                    />

                    <Details
                        position="Software Engineer, Front-end"
                        company="Shikho"
                        companyLink="https://shikho.com"
                        time="Dec 2021 - Jul 2022"
                        type="Full-time"
                        address="Banani, Dhaka (On-site)"
                        work="As a mid-level front-end engineer at Shikho, I worked on the early development of the platform, building responsive interfaces and optimizing site performance for 1M+ unique quarterly users. I collaborated closely with designers to improve engagement and contributed to integrating third-party APIs for payments and analytics. This role helped sharpen my technical execution, cross-functional communication, and product understanding — setting the stage for my promotion to Senior Engineer."
                    />

                    <Details
                        position="Software Engineer, Front-end"
                        company="VipaHelda"
                        companyLink="https://vipahelda.com"
                        time="Jan 2023 - Oct 2024"
                        type="Contract"
                        address="Remote"
                        work="Developed and maintained web applications tailored to client-specific requirements, collaborating remotely with teams to deliver high-quality, scalable solutions."
                    />

                    <Details
                        position="Software Engineer"
                        company="Valkyrie"
                        companyLink="https://valkyrie-it.com"
                        time="Oct 2021 - Mar 2022"
                        type="Part-time"
                        address="Remote"
                        work="Designed and developed MVPs or minimum viable products that offer the core benefits of the company's clients to its target users."
                    />

                    <Details
                        position="Software Engineer, Front-end"
                        company="Misfit"
                        companyLink="https://misfit.tech"
                        time="Mar 2021 - Nov 2021"
                        type="Full-time"
                        address="Banani, Dhaka"
                        work="At Misfit, I contributed to the development of responsive, mobile-first user interfaces using React and Tailwind CSS, which resulted in a 25% increase in mobile traffic. I helped establish standardized, reusable design patterns and improved code maintainability, leading to a 20% reduction in code review feedback. I also collaborated with back-end engineers to integrate RESTful APIs, contributed to Agile sprint planning, and worked across distributed teams to maintain continuous delivery workflows."
                    />

                    <Details
                        position="Full Stack Developer"
                        company="Domatic"
                        companyLink="https://domatictechnologies.com"
                        time="Mar 2020 - Jun 2021"
                        type="Part-time"
                        address="Remote"
                        work="Developed highly responsive customer-facing UIs using React and built efficient back-end services with Node.js to support diverse business processes. Identified and resolved interface issues by troubleshooting and debugging application code."
                    />

                    <Details
                        position="Laravel Developer"
                        company="DoorSoft"
                        companyLink="https://doorsoft.co"
                        time="Apr 2020 - Apr 2021"
                        type="Part-time"
                        address="Remote"
                        work="Designed and implemented web applications using the Laravel framework, developing server-side logic to process front-end inputs and ensure smooth functionality. Proactively identified and resolved code bugs to maintain application reliability."
                    />

                    <Details
                        position="Junior Software Engineer"
                        company="Workspace"
                        companyLink="https://workspaceit.com"
                        time="Jun 2019 - Mar 2021"
                        type="Full-time"
                        address="Nikunja 2, Dhaka"
                        work="As a junior developer, I worked on over 20 client websites using HTML, CSS, JavaScript, and PHP-based frameworks. I also wrote and optimized 200+ SQL and MongoDB queries for dashboards and reporting. My responsibilities included developing full-stack features, resolving cross-browser issues through functional testing, and working closely with QA and design teams to deliver production-ready software under Agile delivery models, using Git for version control."
                    />
                </ul>
            </div>
        </div>
    );
};

export default Experience;
