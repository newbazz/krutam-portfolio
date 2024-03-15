'use client'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import {useInView, useMotionValue, useSpring, } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import Skills from '@/components/Skills'
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import Experience from '@/components/Experience'
import Education from '@/components/Education'

const AnimatedNumbers = ({value}) =>{
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {duration:3000})
  const isInView = useInView(ref, {once:true});

  useEffect(() => {
    if(isInView){
      motionValue.set(value);
    }

  },[isInView, value, motionValue])

  useEffect(() => {
      springValue.on("change", (latest)=> {
            if(ref.current && latest.toFixed(0) <= value ){
              ref.current.textContent = latest.toFixed(0);
            }
      })
  
  }, [springValue, value])
  
    return <span ref = {ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title>Krutam Hathi | About Page</title>
            <meta name = "description" content="any description" />
        </Head>

        <main className='flex w-full flex-col items-center justify-center'>
           <Layout className='pt-16'>
           <AnimatedText text="Lorem Ipsum Dolor !" className='mb-16'/>

            <div className='grid w-full grid-cols-8 gap-16' >
                <div className='col-span-3 flex flex-col items-start justify-start'>
                   <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>About Me</h2>
                   
                   <p className='font-medium text-justify' >
                   I work as a Software Engineer at Microsoft, where I've gained nearly three years of experience.
                    </p> 

                    <p className='my-4 font-medium text-justify' >
                    I'm fascinated by the inner workings of software and driven by my passion to understand how large-scale systems are constructed.
                    </p> 

                    <p className='font-medium text-justify' >
                    Additionally, I'm enthusiastic about machine learning and eager to collaborate with others in any way I can.
                    </p> 

                    <p className='my-4 font-medium text-justify' >
                    In my free time, I enjoy playing and reading, which form the foundation of my learning and values. 
                    </p> 

                    <p className='font-medium text-justify' >
                    I strive to learn from anyone and anywhere to lead a fulfilling life.
                    </p> 

                    <p className='my-4 font-medium text-justify' >
                    I'm also deeply captivated by the teachings of the holy book Bhagwat Geeta.
                    </p> 

                   

                </div>

                
<div className='col-span-3 relative h-max rounded-2xl border-2
 border-solid border-dark bg-light p-8
 '>

    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'  />
    <Image src={profilePic} alt="Krutam Hathi" className="w-full h-auto rounded-2xl"/>
</div>

<div className='col-span-2 flex flex-col items-end justify-between'>
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
</div>
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