'use client'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
const MovingCardData = [
    {
        quote: 'The constant connectivity offered by smartphones can enhance productivity but also lead to significant distractions.',
        name:'John Doe', 
        title:  'CEO of Tech Innovations Inc.',
    },{

        quote: 'Youth culture today is deeply intertwined with smartphone use, influencing everything from social interactions to educational methods.',
        name:' Dr. Emily Johnson',
        title: 'Sociologist',
    },{

        quote: 'Mobile commerce is rapidly expanding, with more consumers opting for the convenience of shopping via their smartphones.',
        name:'Sarah Lee',
        title: ' Marketing Analyst at Retail Insights',
    },{

        quote: 'The integration of smartphones into daily life has raised important privacy concerns that need to be addressed by both users and policymakers.',
        name:'Michael Brown', 
        title:  'Cybersecurity Expert',
    },{

        quote: 'Digital etiquette is becoming increasingly important as smartphones become ubiquitous in social and professional settings.',
        name:'Laura Miller', 
        title:  'Author of "Digital Manners"',
    },{

        quote: 'Smartphones have become essential tools in the workplace, enhancing communication but also blurring the lines between work and personal life.',
        name:'Robert Green', 
        title: ' HR Consultant',
    }
]


function MovingCard() {
  return (
    <div className='h-[40rem] w-full dark:bg-block dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden'>
      <h2 className='text-3xl font-bold text-center mb-8 z-10'>Hear our Harmony: Voices of Success</h2>
      <div className='flex justify-center w-full overflow-hidden px-4 sm:px-4 lg:px-8'>
      <div className='w-full max-w-6xl'>
      <InfiniteMovingCards
        items = {MovingCardData}
        direction='right'
        speed='slow'
      />
      </div>
      </div>
    </div>
  )
}

export default MovingCard
