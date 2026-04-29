"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import Image from "next/image"; 

export default function HeroSection() {
  const animalImages = [
    "/cow1.jpg",
    "/cow2.jpg",
    "/cow3.jpg",
    "/cow4.jpg",
  ];

  return (
    <section className="bg-white pt-20 pb-10 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-[#2D231D] mb-6 tracking-tight leading-[1.1]">
          Every Animal Deserves <br /> a Loving Home
        </h1>
        <p className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl mb-12 leading-relaxed font-medium">
          We rescue, rehabilitate, and rehome animals in need. Join our mission to <br className="hidden md:block" /> 
          give every furry friend the second chance they deserve.
        </p>

        {/* বাটনসমূহ */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/animals" 
            className="btn btn-lg bg-[#B68C59] border-none text-white rounded-full px-10 h-16 text-lg hover:bg-[#a07b4e] shadow-md flex items-center gap-2 group"
          >
            MEET OUR PETS 
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </div>
          </Link>
          <Link 
            href="/donate" 
            className="btn btn-lg btn-outline border-gray-300 text-gray-800 rounded-full px-10 h-16 text-lg hover:bg-gray-50 flex items-center gap-2 group"
          >
            DONATE 
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </div>
          </Link>
        </div>
      </div>

     
      <div className="w-full">
        <Marquee speed={45} gradient={false} pauseOnHover={true}>
          {animalImages.map((img, index) => (
            <div 
              key={index} 
              className="mx-3 w-[450px] md:w-[500px] aspect-[16/10] relative rounded-[10px] md:rounded-[20px] overflow-hidden shadow-sm border-2 border-transparent hover:border-gray-100 transition-all"
            >
              <Image 
                src={img} 
                alt={`animal-${index}`}
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 450px, 750px"
                priority={index === 0} 
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}