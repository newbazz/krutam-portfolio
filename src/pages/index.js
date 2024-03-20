import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-1.png" 
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Krutam's Portfolio</title>
        <meta name="description" content = "Personal Website of Krutam Hathi" />
      </Head>

      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0'>
          <div className="flex items-center justify-center w-full">
              <div className='w-1/2'>
                <Image src={profilePic} priority alt="Krutam" className='w-full h-auto'/>
              </div>
              <div className='w-1/2 flex flex-col items-center self-center'>
                <AnimatedText text="creating deep impact across the world. " className='!text-6xl !text-left' />
                <p className='my-4 text-base font-medium'>
                Software Engineer by Profession and a Finance Enthusiast. 
                I am curious to learn and collaborate with other people.
                I am a firm believer of <b>You Only Regret Things You Don't Do</b>.
                </p>
                <div className='flex items-center self-start mt-2'>
                  <Link href="/Resume.pdf" target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 dorder-solid border-transparent hover:border-dark
                  
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light
                  "
                  download={true}
                  >Resume <LinkArrow className={"w-6 ml-1"}/>
                  
                  </Link>

                  <Link href="malto:krutamhathi14@gmail.com"
                  className="ml-4 text-lg font-medium capitalize text-dark underline  dark:text-light"
                  >Contact</Link>
                </div>
              </div>
          </div>
        </Layout>

        <HireMe />
        <div className='absolute right-8 bottom-8 w-24'>
          <Image src={lightBulb} alt="Krutam Hathi" className='w-full h-auto'/>
        </div>
      </main>
    </>
  )
}
