/* eslint-disable prettier/prettier */
'use client';
import {Button} from '@heroui/react';

const Hero = () => {
    return (
        <section className="min-h-[calc(100vh-64px)] flex items-center justify-center text-white px-4">
            <div className="text-center max-w-2xl">
                <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
                    Creative Splutions For <br /> Modern <span className="text-blue-500">Businesses</span>
                </h1>
                <p className="mt-6 text-base sm:text-xl leading-tight">
                We increase revenue and ensure sustainable long-term growth for your business through powerful Webflow websites.
                </p>
                <Button color="primary" variant="flat" className='mt-6'>
                Get Started
                </Button>

                {/* Slogan */}
                <div className='flex items-center justify-center mt-8'>
                    <div className='h-px w-10 bg-blue-500 mr-4' />
                    <span className='text-white text-sm tracking-widest font-semibold uppercase'>
                        SVELUE | PARTNER DIGITAL BISNIS ANDA
                    </span>
                    <div className='h-px w-10 bg-blue-500 ml-4' />
                </div>
            </div>
        </section>
    );
};
export default Hero;