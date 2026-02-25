import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";
import NavBar from "@/components/NavBar";
import Preloader from "@/components/Preloader";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isHome = router.asPath === "/";
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Skip preloader if already shown this session
    if (sessionStorage.getItem("preloader_done")) {
      setShowPreloader(false);
    }
  }, []);

  useEffect(() => {
    const apply = () => {
      const isMobile = window.innerWidth <= 767;
      document.body.style.overflowY = (isHome && !isMobile) ? "hidden" : "";
    };
    apply();
    window.addEventListener("resize", apply);
    return () => {
      window.removeEventListener("resize", apply);
      document.body.style.overflowY = "";
    };
  }, [isHome]);

  const handlePreloaderDone = () => {
    setShowPreloader(false);
    sessionStorage.setItem("preloader_done", "1");
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>

      {showPreloader && <Preloader onComplete={handlePreloaderDone} />}

      <main
        className={`${fraunces.variable} ${jakarta.variable} font-body bg-dark text-light w-full ${isHome ? "overflow-hidden md:overflow-auto" : "min-h-screen"}`}
      >
        <NavBar />
        <AnimatePresence initial={false} mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        {!isHome && <Footer />}
        <MusicPlayer />
      </main>

      <CustomCursor />
    </>
  );
}
