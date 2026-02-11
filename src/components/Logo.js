import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href="/"
        className='w-14 h-14 bg-dark text-light flex items-center justify-center
        rounded-full text-xl font-bold border border-solid border-dark/10 dark:border-light/20
        shadow-soft font-display tracking-tight
        '
        whileHover={{
            backgroundColor:["#0E1116", "#FF6B4A", "#5FE3C0", "#0E1116"],
            transition:{duration:1, repeat: Infinity}
        }}
        >RR</MotionLink>
    </div>
  )
}

export default Logo
