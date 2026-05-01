// src/component/FeaturedAnimals.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import animalsData from "../app/data.json"; 

const FeaturedAnimals = () => {
 
  const featuredPets = animalsData.slice(0, 4);

  return (
    <section className="py-20 bg-white font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-7xl mx-auto px-4">
        
        
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-[#244D3F] font-bold tracking-widest text-sm mb-2 uppercase">
              Our Selection
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#244D3F]">
              Featured Animals
            </h2>
          </div>
          
          <Link 
            href="/animals" 
            className="hidden md:flex items-center gap-2 bg-[#244D3F] text-white px-6 py-3 rounded-full font-bold hover:bg-[#244D3F] transition-all group"
          >
            VIEW ALL
            <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/30">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </div>
          </Link>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredPets.map((pet) => (
            <div key={pet.id} className="group">
              <div className="relative aspect-[10/12] overflow-hidden rounded-[40px] mb-4 shadow-md transition-shadow hover:shadow-xl">
                <Image
                  src={pet.image}
                  alt={pet.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-[#2D231D] font-bold text-sm">
                  ৳ {pet.price.toLocaleString()}
                </div>
              </div>

              <div className="text-left px-2">
                <h3 className="text-xl font-bold text-[#244D3F] group-hover:text-[#244D3F transition-colors">
                  {pet.name}
                </h3>
                <div className="flex justify-between items-center mt-2">
                   <p className="text-gray-500 text-sm font-medium">Breed: {pet.breed}</p>
                 
                   <Link href={`/animals/${pet.id}`} className="text-[#244D3F] font-bold text-sm underline decoration-2 underline-offset-4">
                      Details
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedAnimals;