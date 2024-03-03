import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-1.png" 
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'

export default function Home() {
  return (
    <>
      <Head>
        <title>Krutam's Portfolio</title>
        <meta name="description" content = "Personal Website of Krutam Hathi" />
      </Head>

      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className="flex items-center justify-center w-full">
              <div className='w-1/2'>
                <Image src={profilePic} priority alt="Krutam" className='w-full h-auto'/>
              </div>
              <div className='w-1/2 flex flex-col items-center self-center'>
                <AnimatedText text="Lorem ipsum dolor, sit amet consectetur. " className='!text-6xl !text-left' />
                <p className='my-4 text-base font-medium'>
                  Accusantium, in consectetur ad qui eius nam tempore, ipsam reprehenderit necessitatibus 
                  deleniti commodi odio cupiditate recusandae nesciunt iusto fuga saepe. Obcaecati, laboriosam?
                </p>
                <div className='flex items-center self-start mt-2'>
                  <Link href="/dummy.pdf" target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 dorder-solid border-transparent hover:border-dark
                  "
                  download={true}
                  >Resume <LinkArrow className={"w-6 ml-1"}/>
                  
                  </Link>

                  <Link href="malto:abcd@gmail.com" target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline"
                  >Contact</Link>
                </div>
              </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
