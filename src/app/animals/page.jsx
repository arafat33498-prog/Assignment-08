// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const FeaturedAnimals = () => {
//   // রিকয়ারমেন্ট অনুযায়ী ৪টি এনিম্যাল ডাটা
//   const featuredPets = [
//     { id: 1, name: "Deshi Shahi Cow", price: "120,000", img: "/cow1.jpg", breed: "Local Deshi" },
//     { id: 2, name: "Australian Breed", price: "250,000", img: "/cow2.jpg", breed: "Holstein" },
//     { id: 3, name: "Black Bengal Goat", price: "25,000", img: "/cow3.jpg", breed: "Local" },
//     { id: 4, name: "Premium Bull", price: "180,000", img: "/cow4.jpg", breed: "Shahiwal" },
//   ];

//   return (
//     <section className="py-20 bg-white font-[family-name:var(--font-geist-sans)]">
//       <div className="max-w-7xl mx-auto px-4">
        
//         {/* সেকশন হেডার এবং ভিউ অল বাটন */}
//         <div className="flex justify-between items-end mb-12">
//           <div>
//             <p className="text-[#B68C59] font-bold tracking-widest text-sm mb-2 uppercase">
//               Our Shop
//             </p>
//             <h2 className="text-4xl md:text-5xl font-bold text-[#2D231D]">
//               Meet Our Pets
//             </h2>
//           </div>
          
//           <Link 
//             href="/animals" 
//             className="hidden md:flex items-center gap-2 bg-[#B68C59] text-white px-6 py-3 rounded-full font-bold hover:bg-[#a07b4e] transition-all group"
//           >
//             VIEW ALL
//             <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/30">
//                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
//             </div>
//           </Link>
//         </div>

//         {/* এনিম্যাল কার্ড গ্রিড */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {featuredPets.map((pet) => (
//             <div key={pet.id} className="group cursor-pointer">
//               {/* ইমেজ কন্টেইনার - আপনার স্ক্রিনশটের মতো অনেক গোল্ডেন রাউন্ডেড */}
//               <div className="relative aspect-[10/12] overflow-hidden rounded-[40px] mb-4">
//                 <Image
//                   src={pet.img}
//                   alt={pet.name}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 {/* প্রাইস ট্যাগ (অ্যাডিশনাল ডিজাইন) */}
//                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-[#2D231D] font-bold text-sm shadow-sm">
//                   ৳ {pet.price}
//                 </div>
//               </div>

//               {/* টেক্সট কন্টেন্ট */}
//               <div className="text-left px-2">
//                 <h3 className="text-xl font-bold text-[#2D231D] group-hover:text-[#B68C59] transition-colors">
//                   {pet.name}
//                 </h3>
//                 <p className="text-gray-500 text-sm font-medium">
//                   Breed: {pet.breed}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* মোবাইলের জন্য নিচে ভিউ অল বাটন */}
//         <div className="mt-12 md:hidden flex justify-center">
//           <Link 
//             href="/animals" 
//             className="bg-[#B68C59] text-white px-8 py-4 rounded-full font-bold text-lg"
//           >
//             VIEW ALL
//           </Link>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default FeaturedAnimals;