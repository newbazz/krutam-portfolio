import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import profilePic from "../../public/images/profile/developer-pic-2.jpg";

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
                <div className='col-span-3 flex flex-col items-start jistify-start'>
                   <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>About Me</h2>
                   
                   <p className='font-medium' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Aperiam, earum? Ad harum repellat,
                    voluptate qui obcaecati tenetur. Quia aliquid magni tempora possimus?
                    Neque corporis iure odit quam dolore consequuntur suscipit.
                    </p> 

                    <p className='my-4 font-medium' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Aperiam, earum? Ad harum repellat,
                    voluptate qui obcaecati tenetur. Quia aliquid magni tempora possimus?
                    Neque corporis iure odit quam dolore consequuntur suscipit.
                    </p> 

                    <p className='font-medium' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Aperiam, earum? Ad harum repellat,
                    voluptate qui obcaecati tenetur. Quia aliquid magni tempora possimus?
                    Neque corporis iure odit quam dolore consequuntur suscipit.
                    </p> 
                </div>
<div className='col-span-3 relative h-max rounded-2xl border-2
 border-solid border-dark bg-light p-8
 '>
    <Image src={profilePic} alt="Krutam Hathi" className="w-full h-auto rounded-2xl"/>
</div>
            </div>
           </Layout>
        </main>
    
    </>
  )
}

export default about