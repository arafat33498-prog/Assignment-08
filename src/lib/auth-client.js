import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    // প্রজেক্টের বেস ইউআরএল
    baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    
    // সোশ্যাল প্রোভাইডার কনফিগারেশন (এটি না দিলে গুগল বাটন কাজ করবে না)
    socialProviders: {
    google: {
        clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID, // Ekhane name thik thakte hobe
    },
},
})

// আলাদাভাবে signIn, signUp এক্সপোর্ট করার দরকার নেই, 
// সরাসরি authClient.signIn ব্যবহার করা ভালো।