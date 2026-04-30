"use client";
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
       
        <div className="navbar-start">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-[#244D3F] flex items-center justify-center shadow-lg shadow-[#244D3F]/20">
              <span className="text-white font-bold text-xl">Q</span>
            </div>
            <span className="font-bold text-2xl tracking-tighter text-gray-800">
              Qurbani<span className="text-[#244D3F]">Hat</span>
            </span>
          </Link>
        </div>

      
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8">
            <li>
              <Link href="/home" className="text-gray-600 font-semibold hover:text-[#244D3F] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/animals" className="text-gray-600 font-semibold hover:text-[#244D3F] transition-colors">
                All Animals
              </Link>
            </li>
          </ul>
        </div>

      
        <div className="navbar-end gap-2">
          <div className="hidden md:flex">
            <Link href="/auth/signin" className="btn btn-ghost text-gray-600 font-bold hover:bg-gray-50 px-6">
              Login
            </Link>
          </div>
          <Link 
            href="/auth/signup" 
            className="btn border-none text-white font-bold px-8 rounded-full shadow-lg hover:shadow-[#244D3F]/30 transition-all"
            style={{ backgroundColor: "#244D3F" }}
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}