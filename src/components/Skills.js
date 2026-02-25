import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend Engineering",
      accent: "text-electric",
      items: ["React", "Next.js", "TypeScript", "React Query", "Framer Motion"],
    },
    {
      title: "Accessibility & UI Standards",
      accent: "text-cyan",
      items: ["WCAG 2.1 AA", "ARIA roles", "Semantic HTML", "Keyboard navigation", "Screen readers"],
    },
    {
      title: "State & APIs",
      accent: "text-primary",
      items: ["GraphQL", "REST APIs", "Axios", "WebSockets", "Context API", "Redux"],
    },
    {
      title: "Testing & Quality",
      accent: "text-primaryDark",
      items: ["Jest", "React Testing Library", "Unit testing", "Integration testing", "CI quality gates"],
    },
    {
      title: "UI Systems & Design",
      accent: "text-electric",
      items: ["MUI", "Tailwind CSS", "Styled Components", "Storybook", "Design systems"],
    },
    {
      title: "Performance & Delivery",
      accent: "text-cyan",
      items: ["Code splitting", "Lazy loading", "Memoization", "Web Vitals", "CI/CD workflows"],
    },
  ];

  return (
    <section className="mt-24">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-4 lg:col-span-12 sticky top-24 self-start lg:static">
          <p className="text-xs uppercase tracking-[0.35em] text-electric/60">
            Capabilities
          </p>
          <h2 className="font-bold text-5xl mt-4 text-light md:text-4xl">Skills</h2>
          <p className="mt-4 text-base text-light/45 leading-relaxed">
            A balanced toolkit across product UI, accessibility, performance, and delivery in modern frontend stacks.
          </p>
          <div className="mt-8 space-y-3 lg:hidden">
            {["React · Next.js · TypeScript", "WCAG 2.1 AA", "Design systems", "GraphQL & REST", "Test-driven UI"].map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <span className="w-1 h-1 rounded-full bg-electric/50 shrink-0" />
                <span className="text-sm text-light/35 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-8 lg:col-span-12 grid grid-cols-2 gap-5 md:grid-cols-1">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              viewport={{ once: true }}
              className="rounded-2xl glass-dark p-6"
            >
              <h3 className={`text-base font-bold ${group.accent}`}>{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-xs bg-white/[0.06] text-light/60 border border-white/[0.07]
                      transition-colors duration-200 hover:bg-white/[0.10] hover:text-light/80 hover:border-white/[0.14] cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
