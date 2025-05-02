"use client";
import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Inter as font } from "next/font/google";


const inter = font({ weight: "600", subsets: ["latin"] });

gsap.registerPlugin(ScrollTrigger);

const Storyline: React.FC = () => {
    const firstRef = useRef<HTMLParagraphElement>(null);
    const secondRef = useRef<HTMLParagraphElement>(null);
    const thirdRef = useRef<HTMLParagraphElement>(null);
    const fourthRef = useRef<HTMLParagraphElement>(null);
    const circlesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const textElements = [firstRef.current, secondRef.current, thirdRef.current, fourthRef.current];
        const circlesContainer = circlesRef.current;

        textElements.forEach((element) => {
            if (element) {
                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        start: "top 50%",
                        end: "top 30%",
                        scrub: 1,
                    }
                });

                timeline
                    .to(element, { opacity: 1, color: '#6B21A8', duration: 1 })  // purple-700
                    .to(element, { opacity: 0.2, color: '#4B5563', duration: 1 });  // gray-600
            }
        });

        if (circlesContainer) {
            const circles = circlesContainer.querySelectorAll('.circle');

            circles.forEach((circle) => {
                gsap.fromTo(circle,
                    { opacity: 0, scale: 0 },
                    {
                        opacity: 1,
                        scale: 1,
                        scrollTrigger: {
                            trigger: circlesContainer,
                            start: "top 80%",
                            end: "top 30%",
                            scrub: 1,
                        }
                    }
                );
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div id='about' className={`${inter.className} relative flex flex-col items-center justify-center w-full h-screen text-center`}>  
        

            <div ref={circlesRef} className="absolute inset-0 z-0">
                {/* Scattered translucent purple shapes/dots for decorative background */}
                <div className="absolute w-40 h-40 bg-purple-300 opacity-10 rounded-full top-10 left-20"></div>
                <div className="absolute w-24 h-24 bg-purple-300 opacity-10 rounded-full top-1/4 right-16"></div>
                <div className="absolute w-32 h-32 bg-purple-300 opacity-10 rounded-full bottom-20 left-1/3"></div>
                <div className="absolute w-16 h-16 bg-purple-300 opacity-10 rounded-full bottom-10 right-24"></div>
                
            </div>

            <div className="relative z-10 flex flex-col space-y-8 md:space-y-12">
                <p ref={firstRef} style={{ opacity: 0.2 }} className='font-semibold md:text-5xl text-3xl text-gray-600'>We know your brand is already perfect</p>
                <p ref={secondRef} style={{ opacity: 0.2 }} className='font-semibold md:text-5xl text-3xl text-gray-600'>Eleven goes beyond ordinary</p>
                <p ref={thirdRef} style={{ opacity: 0.2 }} className='font-semibold md:text-5xl text-3xl text-gray-600'>Beyond perfect, to the extraordinary</p>
                <p ref={fourthRef} style={{ opacity: 0.2 }} className='font-semibold md:text-5xl text-3xl text-gray-600'>With Eleven, your story shines purple</p>
            </div>
        </div>
    );
}

export default Storyline;