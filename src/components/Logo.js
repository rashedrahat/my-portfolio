import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href="/"
        className='w-12 h-12 bg-surface text-light flex items-center justify-center
        rounded-full text-base font-bold border border-white/[0.12]
        shadow-glow-electric font-display tracking-tight
        '
        whileHover={{
            backgroundColor:["#070B14", "#F97316", "#6366F1", "#06B6D4", "#070B14"],
            transition:{duration:1.2, repeat: Infinity}
        }}
        >RR</MotionLink>
    </div>
  )
}

export default Logo
