'use client'
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const UpdateProfile = () => {
    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!isPending && !session) {
            router.push("/auth/signin");
        }
    }, [session, isPending, router]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        const formData = new FormData(e.currentTarget);
        const newName = formData.get("name");
        const newImage = formData.get("image");

        try {
            const { error } = await authClient.updateUser({
                name: newName,
                image: newImage,
            });

            if (error) {
                alert("Update failed: " + error.message);
            } else {
                alert("Success! Your information has been updated.");
                router.push("/my-profile"); 
                router.refresh(); 
            }
        } catch (err) {
            console.error("Update Error:", err);
            alert("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    if (isPending) return <div className="text-center mt-20 font-bold text-slate-600">Loading...</div>;

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
            <div className="w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100 p-10">
                <div className="text-center mb-8">
                  
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight">Update Information</h2>
                    <p className="text-slate-600 mt-2 font-medium">Change your profile details below</p>
                </div>
                
                <form onSubmit={handleUpdate} className="flex flex-col gap-6">
                    
                    <div className="flex flex-col gap-2">
                       
                        <label className="text-sm font-black text-slate-700 ml-1 uppercase tracking-wider">Full Name</label>
                        <input 
                            name="name"
                            required
                            type="text" 
                            defaultValue={session?.user?.name}
                            placeholder="Enter your new name"
                          
                            className="w-full p-4 bg-white border-2 border-slate-400 rounded-2xl outline-none focus:border-[#244D3F] focus:ring-4 focus:ring-[#244D3F]/10 transition-all font-bold text-slate-900 placeholder:text-slate-400"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-black text-slate-700 ml-1 uppercase tracking-wider">New Photo URL</label>
                        <input 
                            name="image"
                            required
                            type="url" 
                            defaultValue={session?.user?.image}
                            placeholder="https://example.com/photo.jpg"
                           
                            className="w-full p-4 bg-white border-2 border-slate-400 rounded-2xl outline-none focus:border-[#244D3F] focus:ring-4 focus:ring-[#244D3F]/10 transition-all font-bold text-slate-900 placeholder:text-slate-400"
                        />
                    </div>

                    <div className="flex flex-col gap-4 mt-4">
                        <button 
                            disabled={loading}
                            type="submit"
                            className={`w-full py-5 bg-[#244D3F] text-white font-black rounded-2xl shadow-xl shadow-[#244D3F]/20 transition-all active:scale-[0.98] uppercase tracking-widest ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}`}
                        >
                            {loading ? "Updating..." : "Update Information"}
                        </button>
                        
                        <button 
                            type="button"
                            onClick={() => router.back()}
                            
                            className="w-full py-4 text-slate-600 font-black hover:text-slate-900 transition-colors uppercase text-sm tracking-tighter"
                        >
                            Cancel & Go Back
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;