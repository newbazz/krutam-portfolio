'use client'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
// import {useInView, useMotionValue, useSpring, } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
// import React, { useEffect, useRef } from 'react'
import Skills from '@/components/Skills'
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import Experience from '@/components/Experience'
import Education from '@/components/Education'

// const AnimatedNumbers = ({value}) =>{
//   const ref = useRef(null);

//   const motionValue = useMotionValue(0);
//   const springValue = useSpring(motionValue, {duration:3000})
//   const isInView = useInView(ref, {once:true});

//   useEffect(() => {
//     if(isInView){
//       motionValue.set(value);
//     }

//   },[isInView, value, motionValue])

//   useEffect(() => {
//       springValue.on("change", (latest)=> {
//             if(ref.current && latest.toFixed(0) <= value ){
//               ref.current.textContent = latest.toFixed(0);
//             }
//       })
  
//   }, [springValue, value])
  
//     return <span ref = {ref}></span>
// }

const about = () => {
  return (
    <>
        <Head>
            <title>Krutam Hathi | About Page</title>
            <meta name="description" content="about section" />
        </Head>

        <main className=' flex w-full flex-col items-center justify-center dark:text-light'>
           <Layout className='pt-16'>
              <AnimatedText text="Design Craft Create!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>

              <div className='grid w-full grid-cols-7 gap-16 sm:gap-8' >
                <div className='col-span-4 flex flex-col items-start justify-start'>
                   <h2 className='pt-10 mb-4 text-lg font-bold uppercase text-dark/80 dark:text-light/80'>About Me</h2>
                   
                   <p className='font-medium ' >
                   I work as a Software Engineer at Microsoft, where I've gained nearly three years of experience.
                    </p> 

                    <p className='my-4 font-medium ' >
                    I'm fascinated by the inner workings of software and driven by my passion to understand how large-scale systems are constructed.
                    </p> 

                    <p className='font-medium' >
                    Additionally, I'm enthusiastic about machine learning and eager to collaborate with others in any way I can.
                    </p> 

                    <p className='my-4 font-medium' >
                    In my free time, I enjoy playing and reading, which form the foundation of my learning and values. 
                    </p> 

                    <p className='font-medium' >
                    I strive to learn from anyone and anywhere to lead a fulfilling life.
                    </p> 

                    <p className='my-4 font-medium' >
                    I'm also deeply captivated by the teachings of the holy book Bhagwat Geeta.
                    </p>
                </div>

                    {/* Image Frame */}
                  <div className='col-span-3 relative h-auto rounded-2xl border-2
                    border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light
                    '>
                        {/* div for border outline */}
                  <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[102.6%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light'/>
                      <Image src={profilePic} alt="Krutam Hathi"  className="`w-[80%]` h-auto rounded-2xl"
                       priority
                       sizes="(max-width:768px) 100vw,
                       (max-width:1200px) 50vw,
                       40vw"/>
                    </div>


 {/* <div className='col-span-2 flex flex-col items-end justify-between'>
    <div className='flex flex-col items-end justify-center'>
      <span className='inline-block text-7xl font-bold'>
      <AnimatedNumbers value={50}/>+
      </span>
      <h2 className='text-xl font-medium capitalize text-dark/75'>Satisfied Clients</h2>
    </div>

    <div className='flex flex-col items-end justify-center'>
      <span className='inline-block text-7xl font-bold'>
      <AnimatedNumbers value={40}/>+
      </span>
      <h2 className='text-xl font-medium capitalize text-dark/75'>projects completed</h2>
    </div>

    <div className='flex flex-col items-end justify-center'>
      <span className='inline-block text-7xl font-bold'>
      <AnimatedNumbers value={5}/>+
      </span>
      <h2 className='text-xl font-medium capitalize text-dark/75'>years of experience</h2>
    </div>
</div>  */}
              </div>
              <Skills />
               <Experience />
             <Education />
           </Layout>
        </main>
    
    </>
  )
}

export default about