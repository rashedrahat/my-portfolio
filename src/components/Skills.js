import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend Engineering",
      items: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
    },
    {
      title: "Accessibility & UI Standards",
      items: ["WCAG 2.1 AA", "ARIA roles", "Semantic HTML", "Keyboard navigation", "Screen readers"],
    },
    {
      title: "State & APIs",
      items: ["GraphQL", "REST APIs", "Axios", "WebSockets", "Context API", "Redux"],
    },
    {
      title: "Testing & Quality",
      items: ["Jest", "React Testing Library", "Unit testing", "Integration testing", "CI quality gates"],
    },
    {
      title: "UI Systems & Design",
      items: ["MUI", "Tailwind CSS", "Styled Components", "Storybook", "Design systems"],
    },
    {
      title: "Performance & Delivery",
      items: ["Code splitting", "Lazy loading", "Memoization", "Web Vitals", "CI/CD workflows"],
    },
  ];

  return (
    <section className="mt-32">
      <h2 className="font-bold text-6xl mb-12 w-full text-center md:text-4xl">Skills</h2>
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-1">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-dark/10 dark:border-light/10 bg-light/80 dark:bg-dark/60 p-6 shadow-soft"
          >
            <h3 className="text-lg font-bold">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full text-sm bg-dark/5 dark:bg-light/10 text-dark/80 dark:text-light/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
