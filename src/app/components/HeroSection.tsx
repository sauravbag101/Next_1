import Link from 'next/link'
import React from 'react'
import { Spotlight } from "../components/ui/Spotlight";
import { Button } from "./ui/moving-border";

function heroSection() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>

        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        
        <div className='p-4 relative z-10 w-full text-center h-[50rem] w-full dark:bg-black bg-black  dark:bg-dot-black/[0.2] bg-dot-black/[0.2] pt-60'>
            <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Master of the art of music</h1>
            <p className='mt-4 font-normal text-base md:text-xxlg text-neutral-400 max-w-lg mx-auto'>Mobile phone art is a kind of art that is a digital art that makes use of the modern technology.
                 It can also be called a technology art because the traditional art use traditional paint 
                 and brush to in order to draw and create any kinds of art.</p>

                 <div className="mt-4 "> <Link href={"/course"}><Button>Explore phone</Button> </Link></div>
            </div>
            </div>
  )
}

export default heroSection
