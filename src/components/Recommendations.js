import React from "react";
import { motion } from "framer-motion";

const quotes = [
  {
    quote:
      "I was consistently impressed by his technical expertise, leadership mindset, and commitment to quality. Rashed played a key role in building scalable and efficient frontend systems.",
    name: "Samin Yasar",
    role: "Ecosystem Lead at Turing, former colleague at Shikho",
  },
  {
    quote:
      "I am impressed by his work ethic and communication skills. But what makes him stand out is his willingness to help others.",
    name: "Md. Mizanur Rahman",
    role: "Software Engineer, former colleague",
  },
  {
    quote:
      "He is very efficient and effective while implementing new features. He always looks for the best possible solution of the problems and never gets panicked whatever the problem is.",
    name: "Tanmai Ghosh",
    role: "PhD researcher, former colleague",
  },
];

const Recommendations = () => {
  return (
    <section className="my-24">
      <div className="grid grid-cols-12 gap-10 lg:gap-x-0 items-end mb-10">
        <div className="col-span-4 lg:col-span-12">
          <p className="text-xs uppercase tracking-[0.35em] text-electric/60">Kind words</p>
          <h2 className="font-bold text-5xl mt-4 text-light md:text-4xl">Recommendations</h2>
        </div>
        <div className="col-span-8 lg:col-span-12">
          <p className="text-base text-light/45 leading-relaxed">
            From colleagues I&apos;ve worked with, as published on LinkedIn.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 lg:grid-cols-1">
        {quotes.map((item, index) => (
          <motion.figure
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="rounded-2xl glass-dark p-6 flex flex-col justify-between gap-6"
          >
            <blockquote className="text-sm leading-relaxed text-light/60">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <figcaption>
              <p className="text-sm font-bold text-light">{item.name}</p>
              <p className="text-xs text-light/40 mt-0.5">{item.role}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
};

export default Recommendations;
