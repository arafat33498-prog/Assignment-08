'use client'
import { authClient } from "@/lib/auth-client";

const SignInPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        
        console.log("Attempting sign in with:", userData.email);

        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            rememberMe: true, 
            callbackURL: '/home'
        }); 

        if (error) {
            alert("Login Failed: " + error.message);
        }
        if (data) {
            console.log("Sign in successful!");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] p-4 font-sans text-slate-900">
            {/* Main Card */}
            <div className="w-full max-w-[420px] bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 p-10">
                
                {/* Header */}
                <div className="flex flex-col gap-2 items-center pb-8 text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-2 shadow-lg shadow-blue-200">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-800">
                        Welcome Back
                    </h2>
                    <p className="text-slate-400 text-sm font-medium">Please enter your details</p>
                </div>
                
                {/* Sign In Form */}
                <form className="flex flex-col gap-5" onSubmit={onSubmit}>
                    
                    {/* Email Field */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[13px] font-bold text-slate-700 ml-1 uppercase tracking-wider">Email Address</label>
                        <input
                            required
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            className="w-full px-5 py-3.5 rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 outline-none transition-all duration-200 placeholder:text-slate-300 bg-slate-50/30 font-medium"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="flex flex-col gap-1.5">
                        <div className="flex justify-between items-center px-1">
                            <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wider">Password</label>
                            <a href="#" className="text-[12px] font-bold text-blue-600 hover:text-blue-700 transition-colors">Forgot?</a>
                        </div>
                        <input
                            required
                            name="password"
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-5 py-3.5 rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 outline-none transition-all duration-200 placeholder:text-slate-300 bg-slate-50/30 font-medium"
                        />
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex flex-col gap-3 mt-4">
                        <button 
                            type="submit" 
                            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-200 transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2"
                        >
                            <span>Sign In</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                        
                        <button 
                            type="reset" 
                            className="w-full py-3 text-slate-400 font-bold text-sm hover:text-slate-600 transition-colors"
                        >
                            Clear Form
                        </button>
                    </div>
                </form>

                {/* Footer Section */}
                <div className="mt-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-[1px] flex-1 bg-slate-100"></div>
                        <span className="text-slate-300 text-[10px] uppercase font-bold tracking-[0.2em]">New Here?</span>
                        <div className="h-[1px] flex-1 bg-slate-100"></div>
                    </div>

                    <p className="text-center text-slate-500 text-sm font-medium">
                        Don't have an account? <a href="/auth/signup" className="text-blue-600 font-bold hover:underline underline-offset-4 decoration-2">Create Account</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;