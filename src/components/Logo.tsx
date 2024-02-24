import Link from 'next/link';
import { motion } from "framer-motion"


const MotionLink = motion(Link);

export default function Logo() {
    return(
        <div className="flex items-center justify-center mt-2">
            <MotionLink href = "/" className='w-16 h-16 bg-dark text-light flex items-center justify-center
            rounded-full text-2xl font-bold'
            >KH</MotionLink>
        </div>
    )
  }