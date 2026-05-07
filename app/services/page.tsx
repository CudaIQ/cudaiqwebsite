import React from 'react'
import Header from '../component/layout/header'
import Image from 'next/image'
import HeroVisual1 from './Hero Visual (Data as Art).png';

type Props = {}

const service = (props: Props) => {
  return (
    <main className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 flex flex-row px-4 w-1/2 mx-auto">
        </div>
        <div className="section modules">
             <div className="flex flex-row items-center justify-center px-4 w-1/2 mx-auto">
                 <div className='w-1/2'>
                        <h2 className="text-2xl font-bold mb-4">Architecting the Future of Enterprise Systems.</h2>
                        <p className="text-gray-700 mb-4">We design, build, and deploy high-performance infrastructure and
advanced software solutions. Our precision-engineered services
accelerate digital transformation and ensure operational resilience.</p>
                        <div className="flex space-x-4">
                        <a href="#" className="text-blue-500 hover:underline">Explore Services</a>
                        <a href="#" className="text-gray-700 hover:underline">View Case Studies</a>
                        </div>
                 </div>
                    <div className='w-1/2'>
                    <Image src={HeroVisual1} alt="" width={500} height={300} loading='eager'/>
                    </div>
                </div>
        </div>
        <div className="section modules">
             <div className="flex flex-row items-center justify-center px-4 w-1/2 mx-auto">
                 <div className='w-1/2'>
                        <h2 className="text-2xl font-bold mb-4">Architecting the Future of Enterprise Systems.</h2>
                        <p className="text-gray-700 mb-4">We design, build, and deploy high-performance infrastructure and
advanced software solutions. Our precision-engineered services
accelerate digital transformation and ensure operational resilience.</p>
                        <div className="flex space-x-4">
                        <a href="#" className="text-blue-500 hover:underline">Explore Services</a>
                        <a href="#" className="text-gray-700 hover:underline">View Case Studies</a>
                        </div>
                 </div>
                    <div className='w-1/2'>
                    <Image src={HeroVisual1} alt="" width={500} height={300} loading='eager'/>
                    </div>
                </div>
                </div>
                        
    </main>
  )
}

export default service;