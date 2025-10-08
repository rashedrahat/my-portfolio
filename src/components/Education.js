import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
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
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm text-justify">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Education</h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
              type="BS, Software Engineering"
              time="2015-2021"
              place="American International University - Bangladesh"
              info="Graduated in 2021 with a B.Sc. in Software Engineering from AIUB (CGPA 3.55).
Focused on full-stack web development using React, Node.js, and MongoDB, gaining hands-on experience through internship projects with software firms.
Key areas of study included Software Architecture, Agile Development, Web Engineering, and HCI."
            />

          <Details
            type="Higher School Certificate"
            time="2011-2013"
            place="Noakhali Govt. College"
            info="Completed relevant courses in Mathematics, Science, Electives, and Practical Skills with a GPA of 4.70."
          />

          <Details
            type="Secondary School Certificate"
            time="2009-2011"
            place="Noakhali Zilla School"
            info="Completed relevant courses in Mathematics, Science, Physical Education, Electives, and Life Skills with a GPA of 4.94."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
