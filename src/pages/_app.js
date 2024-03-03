import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Head from 'next/head';
import NavBar from "@/components/NavBar";
 
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
 
export default function MyApp({ Component, pageProps }) {
  return (
    <>
    
    <Head>
      <meta name = "viewport" content="width=device-width, initial-scale=1" />
      <link rel = "icon" href = "/favicon.png"/>
    </Head>

    <main className={`${inter.variable} font-sans bg-light w-full min-h-screen`}>
      < NavBar />
      <Component {...pageProps} />
    </main>
    </>
  )
}
