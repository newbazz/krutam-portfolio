'use client'
import React from 'react'
import Link from 'next/link';
import Logo from './Logo';

function NavBar() {
    return (
      <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
        <nav>
          <Link href="/" title="Home" className='mr-4'>Home</Link>
          <Link href="/about" className='mx-4' >About</Link>
          <Link href="/projects" className='mx-4'>Projects</Link>
          <Link href="/articles" className='mx-2'>Articles</Link>
        </nav>
      
        <nav>
          <Link href = "/" target = {"_blank"}>T</Link>
          <Link href = "/" target = {"_blank"}>T</Link>
          <Link href = "/" target = {"_blank"}>T</Link>
          <Link href = "/" target = {"_blank"}>T</Link>
          <Link href = "/" target = {"_blank"}>T</Link>
          <Link href = "/" target = {"_blank"}>T</Link>
        </nav>

        <div className='absolute left-[50%] top-2 translate-x-[-50%]' >
          <Logo/>
        </div>

      </header>
    );
  }
  export default NavBar;
  