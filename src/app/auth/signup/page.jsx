'use client'
import { authClient } from "@/lib/auth-client";

const SignUpPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        
        const { data, error } = await authClient.signUp.email({
            name: userData.name,
            email: userData.email,
            password: userData.password,
            callbackURL: '/home'
        });

        if (error) {
            alert("Error: " + error.message);
        }
        if (data) {
            alert("Sign up successful!");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 font-sans text-slate-900">
            <div className="w-full max-w-[450px] bg-white rounded-3xl shadow-2xl border border-slate-100 p-8">
                <div className="flex flex-col gap-2 items-center pb-8 text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-800">
                        Create Account
                    </h2>
                    <p className="text-slate-500 text-sm">Join our platform today</p>
                </div>
                
                <form className="flex flex-col gap-6" onSubmit={onSubmit}>
                    {/* Name Field */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                        <input
                            required
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder:text-slate-400"
                        />
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                        <input
                            required
                            name="email"
                            type="email"
                            placeholder="name@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder:text-slate-400"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-700 ml-1">Password</label>
                        <input
                            required
                            name="password"
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder:text-slate-400"
                        />
                        <p className="text-[11px] text-slate-400 ml-1">Use at least 8 characters</p>
                    </div>

                    <div className="flex flex-col gap-3 mt-4">
                        <button 
                            type="submit" 
                            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98]"
                        >
                            Sign Up
                        </button>
                        
                        <button 
                            type="reset" 
                            className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold rounded-xl transition-all"
                        >
                            Reset Form
                        </button>
                    </div>
                </form>

                <div className="mt-8 flex items-center gap-4">
                    <div className="h-[1px] flex-1 bg-slate-100"></div>
                    <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Or</span>
                    <div className="h-[1px] flex-1 bg-slate-100"></div>
                </div>

                <p className="text-center mt-6 text-slate-500 text-sm">
                    Already have an account? <a href="/login" className="text-blue-600 font-bold hover:underline">Log in</a>
                </p>
            </div>
        </div>
    );
};

export default SignUpPage;