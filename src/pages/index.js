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
                <Layout className="pt-0 md:pt-16 sm:pt-16">
                    <div className="flex items-center justify-between w-full lg:flex-col">
                        <div className="w-1/2 md:w-full">
                            <Image
                                src={profilePic}
                                alt="Rashed Rahat"
                                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                                priority
                                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
                            />
                        </div>
                        <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
                            <AnimatedText
                                text="Front-End Software Engineer – Building Scalable, Performant, and Human-Centered Web Applications"
                                className="!text-3xl !text-left
                xl:!text-2xl lg:!text-center lg:!text=3xl md:!text-2xl sm:!text-lg
                "
                            />
                            <p className="my-4 text-base font-medium md:text-sm sm:text-xs text-justify">
                                I specialize in crafting accessible, high-performance front-end apps using React, Next.js, and TypeScript.
                                With 6+ years of experience, I bring ideas to life through clean code, responsive design, and attention to detail.
                            </p>
                            <div className="flex items-center self-start mt-2 lg:self-center">
                                <Link
                                    href="/Md_Rashed_Ahmed_Resume.pdf"
                                    target={"_blank"}
                                    className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark

                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base
                  "
                                    download={true}
                                >
                                    Resume <LinkArrow className={"w-6 ml-1"} />
                                </Link>
                                <Link
                                    href="mailto:imrashedrahat@gmail.com"
                                    target={"_blank"}
                                    className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </Layout>

                <HireMe />
                <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
                    <Image src={lightBulb} alt="Rashed Rahat" className="w-full h-auto" />
                </div>
            </main>
        </>
    );
}
