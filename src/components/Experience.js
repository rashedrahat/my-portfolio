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
                        work='Successfully designed and optimized seamless exam platforms handling 10,000+ concurrent users, achieving a 20-25% improvement in website load times for enhanced user retention. Mentored junior developers to elevate team productivity and ensure high-quality code delivery.'
                    />

                    <Details
                        position="Software Engineer, Front-end"
                        company="Shikho"
                        companyLink="https://shikho.com"
                        time="Dec 2021 - Jul 2022"
                        type="Full-time"
                        address="Banani, Dhaka"
                        work="Effectively developed and maintained high-traffic websites serving over 1M quarterly unique users. Collaborated with UX designers to enhance engagement and conversion rates, while integrating third-party tools to streamline operations and save BDT 1 million annually."
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
                        work="Optimized front-end performance with a mobile-first approach, boosting mobile traffic by 25%. Reduced code review discrepancies by 20% through adherence to web standards and collaborated with back-end developers to resolve issues effectively."
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
                        work="Developed over 200 SQL queries in MySQL and MongoDB, contributing to the creation of 20+ websites using modern frameworks. Ensured software reliability through thorough testing and troubleshooting."
                    />
                </ul>
            </div>
        </div>
    );
};

export default Experience;
