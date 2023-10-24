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
                        position="Sr. Software Engineer, Front-end (ReactJS)"
                        company="Shikho"
                        companyLink="https://shikho.com"
                        time="Aug 2023 - Present"
                        type="Full-time"
                        address="Banani, Dhaka"
                        work='Guiding junior developers in design, development, deployment, and maintenance.'
                    />

                    <Details
                        position="Software Engineer, Front-end (ReactJS)"
                        company="Shikho"
                        companyLink="https://shikho.com"
                        time="Dec 2021 - Jul 2022"
                        type="Full-time"
                        address="Banani, Dhaka"
                        work="Highly accomplished professional with a track record of saving $1M annually through third-party tool integration, improved in-house product functionality by 15-25%, stayed up-to-date with new release versions."
                    />

                    <Details
                        position="Software Engineer"
                        company="Valkyrie"
                        companyLink="https://valkyrie-it.com"
                        time="Oct 2021 - Mar 2022"
                        type="Part-time (Remote)"
                        work="Designed and developed MVPs or minimum viable products that offer the core benefits of the company's clients to its target users."
                    />

                    <Details
                        position="Software Engineer, Front-end (ReactJS)"
                        company="Misfit"
                        companyLink="https://misfit.tech"
                        time="Mar 2021 - Nov 2021"
                        type="Full-time"
                        address="Banani, Dhaka"
                        work="Implemented React expertise to improve component lifecycle procedures, achieving a 24% faster turnaround, 100% deadline adherence, and implemented a responsive, mobile-first approach that increased mobile traffic by 20%."
                    />

                    <Details
                        position="Full Stack Developer"
                        company="Domatic"
                        companyLink="https://domatictechnologies.com"
                        time="Mar 2020 - Jun 2021"
                        type="Part-time (Remote)"
                        work="Utilized React principles to design customer-facing responsive UIs, implemented Node.js for back-end services, and demonstrated strong troubleshooting and debugging skills in interface software and application codes."
                    />

                    <Details
                        position="Laravel Developer"
                        company="DoorSoft"
                        companyLink="https://doorsoft.co"
                        time="Apr 2020 - Apr 2021"
                        type="Part-time (Remote)"
                        work="Designed and implemented Laravel-based web applications, implemented server-side logic for front-end inputs, and adeptly identified and fixed code bugs."
                    />

                    <Details
                        position="Junior Software Engineer"
                        company="Workspace"
                        companyLink="https://www.workspaceit.com"
                        time="Jun 2019 - Mar 2021"
                        type="Full-time"
                        address="Nikunja 2, Dhaka"
                        work="Accomplished training projects utilizing Node.js and React to develop industry-standard web applications, demonstrated expertise in software testing, installation, configuration, and troubleshooting, and showcased proficiency in developing a wide range of SQL queries in MySQL and MongoDB."
                    />
                </ul>
            </div>
        </div>
    );
};

export default Experience;
