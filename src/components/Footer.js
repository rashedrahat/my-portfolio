import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-t border-solid border-dark/15
    font-medium text-base dark:text-light dark:border-light/15
    "
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:gap-4 lg:py-6">
        <span className="text-dark/70 dark:text-light/70">
          {new Date().getFullYear()} &copy; All Rights Reserved.
        </span>
        <div className="flex items-center">
          Built with <span className="text-primary dark:text-primaryDark text-xl px-1">&#9825;</span>
          by&nbsp;
          <Link
            href="/"
            className="underline underline-offset-4 decoration-primary/70 dark:decoration-primaryDark/70"
            target={"_blank"}
          >
            Rashed Rahat
          </Link>
        </div>
        <Link
          href="mailto:mdrashedahmed.work@gmail.com"
          target={"_blank"}
          className="underline underline-offset-4 decoration-primary/70 dark:decoration-primaryDark/70"
        >
          Contact
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
