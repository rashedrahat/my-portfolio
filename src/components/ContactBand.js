import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const links = [
  { label: "LinkedIn", href: "https://linkedin.com/in/rashedrahat" },
  { label: "GitHub", href: "https://github.com/rashedrahat" },
  { label: "Stack Overflow", href: "https://stackoverflow.com/users/10427807/rashed-rahat" },
];

const ContactBand = () => {
  return (
    <section className="w-full aurora-bg">
      <Layout className="!py-20 md:!py-12">
        <div className="rounded-[2rem] glass-dark p-12 md:p-8 sm:p-6 flex items-center justify-between gap-10 lg:flex-col lg:items-start">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.35em] text-electric/60">Get in touch</p>
            <h2 className="mt-4 font-bold text-4xl text-light md:text-3xl sm:text-2xl">
              Open to permanent and contract roles across Australia.
            </h2>
            <p className="mt-3 text-base text-light/50 leading-relaxed">
              Based in Brisbane. Happy to talk about frontend, maps and real-time products.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-start shrink-0">
            <Link
              href="mailto:mdrashedahmed.work@gmail.com"
              className="bg-primary text-dark px-6 py-2.5 rounded-lg text-sm font-bold
                hover:bg-primary/90 btn-glow transition-all whitespace-nowrap"
            >
              Email me
            </Link>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {links.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  className="text-sm font-semibold text-electric hover:text-primaryDark transition-colors
                    underline underline-offset-4 decoration-electric/40"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default ContactBand;
