import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/[0.06] font-medium text-base text-light/60">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:gap-4 lg:py-6">
        <span className="text-light/40 text-sm">
          {new Date().getFullYear()} &copy; All Rights Reserved.
        </span>
        <div className="flex items-center text-sm">
          Built with{" "}
          <span className="text-primary text-lg px-1 animate-pulse-glow">&#9825;</span>
          by&nbsp;
          <Link
            href="/"
            className="text-light/70 hover:text-light transition-colors underline underline-offset-4 decoration-electric/50"
            target={"_blank"}
          >
            Rashed Rahat
          </Link>
        </div>
        <Link
          href="mailto:mdrashedahmed.work@gmail.com"
          target={"_blank"}
          className="text-sm text-light/50 hover:text-electric transition-colors underline underline-offset-4 decoration-electric/40"
        >
          Contact
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
