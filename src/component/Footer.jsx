import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
         
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Qurbani<span className="text-gray-300">Hat</span>
            </h2>
            <p className="text-gray-300 leading-relaxed">
              আপনার কুরবানির জন্য সেরা জাতের এবং সুস্থ পশুর বিশ্বস্ত অনলাইন প্ল্যাটফর্ম। আমরা সরাসরি খামারিদের কাছ থেকে যাচাইকৃত পশু আপনার দোরগোড়ায় পৌঁছে দেই।
            </p>
          </div>

          
          <div>
            <h3 className="text-lg font-bold mb-4 border-b-2 border-white/20 pb-2 w-fit">Quick Links</h3>
            <ul className="space-y-2">
              <li className="hover:text-gray-300 transition-colors">Home</li>
              <li className="hover:text-gray-300 transition-colors">All Animals</li>
              <li className="hover:text-gray-300 transition-colors">Login</li>
              <li  className="hover:text-gray-300 transition-colors">My Profile</li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-lg font-bold mb-4 border-b-2 border-white/20 pb-2 w-fit">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <FaPhoneAlt /> +880 1234 567 890
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope /> support@qurbanihat.com
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FaMapMarkerAlt /> ১২৩ খামার পাড়া, ঢাকা, বাংলাদেশ
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-bold mb-4 border-b-2 border-white/20 pb-2 w-fit">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} QurbaniHat. All Rights Reserved. Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;