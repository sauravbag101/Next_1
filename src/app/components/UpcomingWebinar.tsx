'use client'
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
import { link } from "fs";
const Webinar = [
  {
      description: 'Educational institutions are increasingly leveraging smartphones as learning tools, although challenges like digital distractions remain.',
      name:'Karen Davis', 
      title:  'Educational Technology Specialist',
      isfeatured:true,
  },{

      description: 'The future of smartphones lies in emerging technologies like augmented reality and 5G, which promise to further transform communication.',
      name:' Alex White',
      title: 'Tech Futurist',
      isfeatured:true,

  },{

      description: 'Mental health issues linked to excessive smartphone use are a growing concern, necessitating a balanced approach to technology.',
      name:' Dr. Anna Wilson',
      title: 'Clinical Psychologist',
      isfeatured:true,

  },{

      description: 'Smartphones have become essential tools in the workplace, enhancing communication but also blurring the lines between work and personal life.',
      name:'Robert Green', 
      title:  'HR Consultant',
      isfeatured:true,

  },{

      description: 'Digital etiquette is becoming increasingly important as smartphones become ubiquitous in social and professional settings.',
      name:'Laura Miller', 
      title:  'Author of "Digital Manners"',
      isfeatured:true,

  },{

      description: 'Smartphones have become essential tools in the workplace, enhancing communication but also blurring the lines between work and personal life.',
      name:'Robert Green', 
      title: ' HR Consultant',
      isfeatured:true,

  }
]

function UpcomingWebinar() {
  return (
    <div className='p-12 bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='text-center'>
          <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>Featured Webnars</h2>
          <p className='mt-2 text-3xl leading-8 font-extrabpld tracking-tight text-white sm:text-4xl'>Enhance your Coding Journey</p>
        </div>
        <div className='mt-10'>
          <HoverEffect items={Webinar.map(Webinar =>(
            {
              title: Webinar.title,
              description: Webinar.description,
              link: Webinar.name
            }
          ))}></HoverEffect>
        </div>
        <div className='mt-10 text-center'>
          <Link href={"/"} className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">View All</Link>
         
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinar
