import React from "react";
import { motion } from "framer-motion";

const highlights = [
  "Saving and restoring operators' map layers and filters, with no flicker or lost state",
  "Live bus, train, ferry and tram tracking, plus a route-view mode showing a route's line, stops and live vehicles",
  "Road search by state road and distance marker, so operators can find a stretch of road in seconds",
  "Migration of device and public transport layers from legacy code onto the shared platform",
  "Root-cause fix for a screen-blanking bug caused by incompatible library versions across independently deployed apps",
];

const stack = ["React", "TypeScript", "Mapbox GL", "Micro-frontends", "Jest", "Kubernetes"];

const TransmaxCaseStudy = () => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full rounded-[2rem] glass-dark p-12 lg:p-8 md:p-6 sm:p-5 xs:rounded-2xl"
    >
      <span
        className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]
        text-electric border border-electric/30 rounded-full bg-electric/[0.08]"
      >
        Case study · Current role
      </span>
      <h2 className="mt-5 text-4xl font-bold text-light lg:text-3xl xs:text-2xl">
        Modernising a real-time operations map
      </h2>
      <p className="mt-2 text-sm text-light/40">Transmax · Brisbane · May 2026 to present</p>

      <div className="mt-8 grid grid-cols-12 gap-10 lg:gap-8 lg:gap-x-0">
        <div className="col-span-5 lg:col-span-12 space-y-6">
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-primary/70">Context</h3>
            <p className="mt-2 text-base text-light/55 leading-relaxed">
              STREAMS is a government-owned, award-winning intelligent transport platform used by 13+
              traffic management centres across Australia. Its operations map was built on a legacy,
              plugin-based approach and is being moved to a modern shared map platform that several
              products can reuse.
            </p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-primary/70">My role</h3>
            <p className="mt-2 text-base text-light/55 leading-relaxed">
              Part of the team delivering the migration. I own features end to end, from implementation
              and unit tests to testing on Kubernetes environments, code review and QA.
            </p>
          </div>
        </div>

        <div className="col-span-7 lg:col-span-12">
          <h3 className="text-xs uppercase tracking-[0.3em] text-primary/70">What I delivered</h3>
          <ul className="mt-3 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3 text-base text-light/55 leading-relaxed">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-electric/60" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full text-xs bg-white/[0.06] text-light/60 border border-white/[0.07]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default TransmaxCaseStudy;
