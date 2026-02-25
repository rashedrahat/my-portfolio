import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  GithubIcon,
  LinkedInIcon,
  StackOverflowIcon,
} from "./Icons";
import Logo from "./Logo";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link
      href={href}
      className={`${className} relative group text-sm font-medium transition-colors
        ${isActive ? "text-light" : "text-light/50 hover:text-light/90"}`}
    >
      {title}
      <span
        className={`
          h-[2px] inline-block bg-primary rounded-full
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${isActive ? "w-full" : "w-0"}
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={`${className} relative group my-2 text-sm font-medium transition-colors
        ${isActive ? "text-light" : "text-light/60 hover:text-light"}`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`
          h-[2px] inline-block bg-primary rounded-full
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${isActive ? "w-full" : "w-0"}
        `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="sticky top-0 w-full font-medium text-light z-40
      bg-dark/70 backdrop-blur-2xl border-b border-electric/[0.12]"
    >
      <div className="max-w-[1680px] mx-auto px-32 py-5 flex items-center justify-between
        lg:px-16 md:px-12 sm:px-8">

      {/* Mobile hamburger */}
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
        aria-label="Toggle menu"
      >
        <span
          className={`bg-light/80 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        />
        <span
          className={`bg-light/80 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`bg-light/80 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        />
      </button>

      {/* Desktop nav */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex items-center justify-center gap-10">
          <CustomLink href="/"        title="Home"     />
          <CustomLink href="/about"   title="About"    />
          <CustomLink href="/projects" title="Projects" />
        </nav>

        <nav className="flex items-center justify-center gap-1">
          <motion.a
            href="https://stackoverflow.com/users/10427807/rashed-rahat"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-5 mx-2 text-light/40 hover:text-light/80 transition-colors"
            aria-label="StackOverflow"
          >
            <StackOverflowIcon />
          </motion.a>
          <motion.a
            href="https://github.com/rashedrahat"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-5 mx-2 text-light/40 hover:text-light/80 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/rashedrahat"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-5 mx-2 text-light/40 hover:text-light/80 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </motion.a>

        </nav>
      </div>

      {/* Mobile menu overlay — rendered via portal so backdrop-filter on header doesn't trap it */}
      {isOpen && mounted && createPortal(
        <>
          {/* Backdrop */}
          <div
            className="fixed top-0 left-0 w-screen h-screen z-40 bg-dark/60 backdrop-blur-sm"
            onClick={handleClick}
          />

          {/* Centering wrapper */}
          <div className="fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="min-w-[70vw] sm:min-w-[90vw] flex flex-col justify-center items-center
              pointer-events-auto
              glass-dark rounded-2xl py-12 shadow-glow-electric"
          >
            {/* Close button */}
            <button
              onClick={handleClick}
              className="absolute top-4 right-4 text-light/50 hover:text-light transition-colors text-xl leading-none"
              aria-label="Close menu"
            >
              ✕
            </button>

            <nav className="flex items-center flex-col justify-center gap-1">
              <CustomMobileLink href="/"         title="Home"     toggle={handleClick} />
              <CustomMobileLink href="/about"    title="About"    toggle={handleClick} />
              <CustomMobileLink href="/projects" title="Projects" toggle={handleClick} />
            </nav>

            <nav className="flex items-center justify-center gap-4 mt-8">
              <motion.a
                href="https://stackoverflow.com/users/10427807/rashed-rahat"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-5 text-light/60 hover:text-light transition-colors"
              >
                <StackOverflowIcon />
              </motion.a>
              <motion.a
                href="https://github.com/rashedrahat"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-5 text-light/60 hover:text-light transition-colors"
              >
                <GithubIcon />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/rashedrahat"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-5 text-light/60 hover:text-light transition-colors"
              >
                <LinkedInIcon />
              </motion.a>
            </nav>
          </motion.div>
          </div>
        </>,
        document.body
      )}

      {/* Centered Logo */}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>

      </div>
    </header>
  );
};

export default NavBar;
