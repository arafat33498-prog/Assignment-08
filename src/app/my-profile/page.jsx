'use client'
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useEffect } from "react";

const MyProfile = () => {
    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();

   
    useEffect(() => {
        if (!isPending && !session) {
            router.push("/auth/signin");
        }
    }, [session, isPending, router]);

    if (isPending) return <div className="text-center mt-20 font-sans text-slate-600 font-bold">Loading profile...</div>;
    if (!session) return null;

    return (
        <div className="min-h-screen bg-slate-50 py-16 px-4 font-sans">
            <div className="max-w-3xl mx-auto">
             
                <h1 className="text-3xl font-extrabold text-slate-900 mb-8 text-center uppercase tracking-widest">
                    My Profile
                </h1>
                
                <div className="bg-white rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12">
                    <div className="flex flex-col items-center">
                      
                        
                        <div className="relative mb-6">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#244D3F]/10 overflow-hidden shadow-inner bg-slate-100">
                                <img 
                                    src={session.user.image || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} 
                                    alt={session.user.name} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute bottom-2 right-2 bg-[#244D3F] w-8 h-8 rounded-full border-4 border-white shadow-sm"></div>
                        </div>

                        
                        <h2 className="text-2xl font-bold text-slate-900 mb-1">{session.user.name}</h2>
                        
                      
                        <p className="text-slate-600 font-semibold mb-8 text-lg">{session.user.email}</p>

                       
                        <div className="w-full h-[1px] bg-slate-200 mb-8"></div>

                       
                        <div className="flex flex-col sm:flex-row gap-4 w-full">
                            <Link href="/my-profile/update" className="flex-1">
                                <button className="w-full py-4 bg-[#244D3F] hover:bg-[#1a3a30] text-white font-bold rounded-2xl shadow-lg shadow-[#244D3F]/20 transition-all active:scale-[0.98]">
                                    Update Information
                                </button>
                            </Link>
                            
                            <button 
                                onClick={() => authClient.signOut()}
                                className="flex-1 py-4 bg-red-50 hover:bg-red-100 text-red-600 font-bold rounded-2xl transition-all border border-red-100"
                            >
                                Logout Account
                            </button>
                        </div>
                    </div>
                </div>
                
               
                <div className="mt-8 text-center">
                    <p className="text-slate-500 text-sm font-bold italic">
                        Welcome back to QurbaniHat, {session.user.name.split(' ')[0]}!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;