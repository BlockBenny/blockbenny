import React, { Component, useRef, useEffect } from "react";
import Head from 'next/head'
import { CiTwitter, CiLinkedin } from 'react-icons/ci';
import { AiFillGithub  } from 'react-icons/ai';
import Image from 'next/image';
import logo from '../public/BB.png';
import Home from './home';
import Resume from './resume';
import About from './About';
import dynamic from 'next/dynamic'
import enUS from '../locales/en-US.json'

export default function Index() {
  const TechStack = dynamic(
    () => import('./techstack'),
    { ssr: false }
  )

  console.log(enUS.home);

  return (
    <>
    <div>
      <Head>
        <title>BlockBenny</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-play min-h-screen bg-gradient-to-br from-bgTL via-bgVIA to-bgBR">
          <nav sticky="top" className="z-10 px-32 fixed min-w-full top-0 py-10 flex justify-between pr-48">
            <div className="flex">
              <Image className="mr-10" src={ logo }/>
              <h1 className="self-center text-3xl text-white font-playB">BlockBenny</h1>
            </div>
            <ul className="flex items-center pr-10">
              <li><a className="text-white px-4 py-2 ml-8 text-xl" href='#'>Tech Stack</a></li>
              <li><a className="text-white px-4 py-2 ml-8 text-xl" href='#'>Resume</a></li>
              <li><a className="text-white px-4 py-2 ml-8 text-xl" href='#'>About Me</a></li>
              <li><CiTwitter className="h-10 w-10 ml-8" /></li>
              <li><CiLinkedin className="h-10 w-10 ml-8" /></li>
              <li><AiFillGithub className="h-10 w-10 ml-8" /></li>
            </ul>
          </nav>
          <Home />
          <TechStack />
          <Resume />
          <About />
      </main>
      </div>
    </>
  )
}
