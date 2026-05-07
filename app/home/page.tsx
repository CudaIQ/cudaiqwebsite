import { FC } from 'react';
import Header from '../component/layout/header';
import Image from 'next/image';
import HeroVisual from './Hero Visual (Data as Art).png';

// 'use client';


interface HomeProps { }

const Home: FC<HomeProps> = () => {
    return (
        <main className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-1 flex flex-row items-center justify-center px-4 w-1/2 mx-auto">
                <div>
                    <h1 className="text-4xl font-bold mb-4">Modular AI, IoT &
                        cloud for India’s
                        next growth
                        regions.</h1>
                    <p className="text-lg text-gray-600">
                        Empowering SMBs, Infra-Tech/Defense teams, and
                        Platform Builders with future-ready modular
                        technology ecosystems.
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        TALK TO A SOLUTION EXPERT
                    </button>
                    <br />
                    <a href="" className="text-blue-500 hover:text-blue-700">
                        EXPLORE USE CASES
                    </a>
                </div>
                <div className='w-1/2'>
                    <Image src={HeroVisual} alt="" width={500} height={300} loading='eager'/>
                </div>
            </div>
            <div className="section modules">
                <h2 className="text-2xl font-bold mb-4">Our Modules</h2>
                <div className="grid grid-cols-4 gap-4">
                    <div className="module-card bg-white p-4 rounded shadow">
                        <h3 className="text-xl font-bold mb-2">AI Module</h3>
                        <p className="text-gray-600">Cutting-edge AI solutions for SMBs, Infra-Tech/Defense teams, and Platform Builders.</p>
                    </div>
                    <div className="module-card bg-white p-4 rounded shadow">
                        <h3 className="text-xl font-bold mb-2">IoT Module</h3>
                        <p className="text-gray-600">Advanced IoT technologies to connect and optimize your operations.</p>
                    </div>
                    <div className="module-card bg-white p-4 rounded shadow">
                        <h3 className="text-xl font-bold mb-2">Cloud Module</h3>
                        <p className="text-gray-600">Scalable cloud solutions to support your growth and innovation.</p>
                    </div>
                    <div className="module-card bg-white p-4 rounded shadow">
                        <h3 className="text-xl font-bold mb-2">Data Analytics Module</h3>
                        <p className="text-gray-600">Powerful data analytics tools to drive informed decision-making.</p>
                    </div>
                </div>
            </div>
            <div className="section deploymentsectors">
                <h2 className="text-2xl font-bold mb-4">Deployment Sectors</h2>
                <div className="grid grid-cols-3 gap-4">
                    <div className="sector-card bg-white p-4 rounded shadow">
                        <h3 className="text-xl font-bold mb-2">SMBs</h3>
                        <p className="text-gray-600">Empowering small and medium businesses with modular technology solutions.</p>
                    </div>
                    <div className="sector-card bg-white p-4 rounded shadow">
                        <h3 className="text-xl font-bold mb-2">Infra-Tech/Defense</h3>
                        <p className="text-gray-600">Innovative solutions for infrastructure technology and defense sectors.</p>
                    </div>
                    <div className="sector-card bg-white p-4 rounded shadow">
                        <h3 className="text-xl font-bold mb-2">Platform Builders</h3>
                        <p className="text-gray-600">Supporting platform builders with future-ready modular technology ecosystems.</p>
                    </div>
                </div>
            </div>
            <div className="cudaiq">
                <h2 className="text-2xl font-bold mb-4">Cudaiq</h2>
                <div className="grid grid-cols-6 gap-4">
                    <div className="flex flex-col items-center justify-center letter block">
                        <span>C</span>
                        <span>cloud</span>
                    </div>
                    <div className="flex flex-col items-center justify-center letter block">
                        <span>u</span>
                        <span>universal ai</span>
                    </div>
                    <div className="flex flex-col items-center justify-center letter block">
                        <span>d</span>
                        <span>digital</span>
                    </div>
                    <div className="flex flex-col items-center justify-center letter block">
                        <span>a</span>
                        <span>augmented</span>
                    </div>
                    <div className="flex flex-col items-center justify-center letter block">
                        <span>i</span>
                        <span>innovative</span>
                    </div>
                    <div className="flex flex-col items-center justify-center letter block">
                        <span>q</span>
                        <span>quality</span>
                    </div>
                </div>
            </div>
            <div className="section contact">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-gray-600 mb-4">Ready to transform your business with modular AI, IoT, and cloud solutions? Contact us today!</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    CONTACT US
                </button>
            </div>
        </main>
    );
};

export default Home;