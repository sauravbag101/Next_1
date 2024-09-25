'use client'
import React from 'react';
import courseData from '../data/music_course.json';
import { BackgroundGradient } from './ui/background-gradient';

interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  isFeatured: boolean;
  brand: string;
  category: string;
}

function FeaturedSection() {
  const FeaturedCourses = courseData.courses.filter((course: Course) => course.isFeatured);

  return (
    <div className='py-12 bg-gray-900'>
      <div className="text-center">
        <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED PHONES</h2>
        <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn with the best</p>
      </div>

      <div className="mt-10">
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
          {FeaturedCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                  <p className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>{course.title}</p>
                  <p className='text-sm text-neutral-600 dark:text-neutral-400 flex-grow'>{course.description}</p>
                  <a href={`/courses/${course.id}`} className='text-teal-600 pt-5 '>See More</a>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button className="mt-10 text-center relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-orange backdrop-blur-3xl">
            Learn More
          </span>
        </button>
      </div>
    </div>
  );
}

export default FeaturedSection;
