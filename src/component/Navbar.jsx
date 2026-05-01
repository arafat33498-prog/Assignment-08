"use client";
import React from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client"; 
import { useRouter, usePathname } from "next/navigation"; // usePathname add kora hoyeche

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const pathname = usePathname(); // Current URL track korbe

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/auth/signin");
        },
      },
    });
  };

  // Active link-er style logic
  const getLinkStyle = (path) => {
    return pathname === path 
      ? "text-[#244D3F] font-bold border-b-2 border-[#244D3F] pb-1" // Active thakle ei style
      : "text-gray-600 font-semibold hover:text-[#244D3F] transition-all"; // Normal style
  };

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
              <Link href="/home" className={getLinkStyle("/home")}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/animals" className={getLinkStyle("/animals")}>
                All Animals
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-3">
          {isPending ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : session ? (
            <div className="flex items-center gap-4">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border-2 border-[#244D3F]/20">
                  <div className="w-10 rounded-full">
                    <img 
                      alt="User Avatar" 
                      src={session.user.image || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} 
                    />
                  </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow-xl menu menu-sm dropdown-content bg-white rounded-2xl w-52 border border-gray-100">
                  <li className="px-4 py-2 font-bold text-gray-800 border-b border-gray-50 mb-1">
                    {session.user.name}
                  </li>
                  <li>
                    <Link href="/my-profile" className={pathname === "/my-profile" ? "text-[#244D3F] font-bold" : ""}>
                      My Profile
                    </Link>
                  </li>
                  <li className="text-red-500">
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}