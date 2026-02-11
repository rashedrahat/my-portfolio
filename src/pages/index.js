import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile/my-pic-1.png";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
    return (
        <>
            <Head>
                <title>Rashed Rahat | Home</title>
            </Head>
            <TransitionEffect />
            <main className="flex items-center text-dark w-full min-h-screen dark:text-light sm:items-start">
                <Layout className="pt-10 md:pt-16 sm:pt-16">
                    <div className="grid grid-cols-12 items-center gap-10 lg:gap-12">
                        <div className="col-span-6 flex flex-col items-start lg:col-span-12 lg:text-center lg:items-center">
                            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-dark/70 dark:text-light/70">
                                <span className="px-3 py-1 rounded-full bg-dark/5 dark:bg-light/10">
                                    Senior Frontend Engineer
                                </span>
                                <span className="px-3 py-1 rounded-full bg-dark/5 dark:bg-light/10">
                                    Sydney, NSW
                                </span>
                                <span className="px-3 py-1 rounded-full bg-primary/20 text-dark dark:bg-primaryDark/40 dark:text-dark">
                                    Work Rights: AU (Full-time)
                                </span>
                            </div>
                            <AnimatedText
                                text="Accessible, high-performance web platforms that feel effortless."
                                className="!text-6xl !text-left leading-[1.05] mt-6
                xl:!text-5xl lg:!text-center md:!text-4xl sm:!text-3xl
                "
                            />
                            <p className="my-6 text-lg font-medium text-dark/80 dark:text-light/80 md:text-base sm:text-sm text-justify lg:text-center">
                                Senior Frontend Engineer with 6+ years of experience building scalable, production-grade web applications across SaaS, EdTech, and enterprise platforms. I specialize in React, Next.js, and TypeScript with a focus on WCAG 2.1 AA accessibility, performance optimization, and reliable UI systems.
                            </p>
                            <div className="flex flex-wrap items-center gap-4 self-start lg:self-center">
                                <Link
                                    href="/Resume_MdRashedAhmed.pdf"
                                    target={"_blank"}
                                    className="inline-flex items-center bg-dark text-light px-4 py-2
                  rounded-full text-sm font-semibold hover:bg-primary hover:text-dark
                  border border-solid border-dark/10 shadow-soft transition-colors
                  dark:bg-light dark:text-dark hover:dark:bg-primaryDark
                  "
                                    download={true}
                                >
                                    Download Resume <LinkArrow className={"w-4 ml-2"} />
                                </Link>
                                <Link
                                    href="mailto:mdrashedahmed.work@gmail.com"
                                    target={"_blank"}
                                    className="text-base font-semibold capitalize text-dark underline decoration-primary/70 underline-offset-4 dark:text-light dark:decoration-primaryDark/70"
                                >
                                    Let’s Talk
                                </Link>
                                <Link
                                    href="/projects"
                                    className="text-base font-semibold capitalize text-dark/80 dark:text-light/80"
                                >
                                    View Projects
                                </Link>
                            </div>

                            <div className="mt-10 grid grid-cols-3 gap-4 w-full max-w-xl lg:max-w-2xl lg:mx-auto sm:grid-cols-1">
                                <div className="rounded-2xl border border-dark/10 dark:border-light/10 p-4 bg-light/80 dark:bg-dark/60 shadow-soft">
                                    <p className="text-2xl font-bold text-dark dark:text-light">2.5M+</p>
                                    <p className="text-sm text-dark/70 dark:text-light/70">Learners served</p>
                                </div>
                                <div className="rounded-2xl border border-dark/10 dark:border-light/10 p-4 bg-light/80 dark:bg-dark/60 shadow-soft">
                                    <p className="text-2xl font-bold text-dark dark:text-light">15K+</p>
                                    <p className="text-sm text-dark/70 dark:text-light/70">Concurrent sessions</p>
                                </div>
                                <div className="rounded-2xl border border-dark/10 dark:border-light/10 p-4 bg-light/80 dark:bg-dark/60 shadow-soft">
                                    <p className="text-2xl font-bold text-dark dark:text-light">WCAG 2.1</p>
                                    <p className="text-sm text-dark/70 dark:text-light/70">Accessibility focus</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-6 lg:col-span-12">
                            <div className="relative rounded-[2.5rem] p-2 glass-panel dark:bg-dark/40">
                                <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
                                <div className="absolute -bottom-8 -left-10 h-40 w-40 rounded-full bg-primaryDark/20 blur-3xl" />
                                <Image
                                    src={profilePic}
                                    alt="Rashed Rahat"
                                    className="w-full h-auto rounded-[2rem]"
                                    priority
                                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
                                />
                            </div>
                        </div>
                    </div>
                </Layout>

                <HireMe />
                <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden opacity-80">
                    <Image src={lightBulb} alt="Rashed Rahat" className="w-full h-auto" />
                </div>
            </main>
        </>
    );
}
