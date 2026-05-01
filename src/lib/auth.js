import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.AUTH_DB_URL);
const db = client.db("better-auth-db");

export const auth = betterAuth({
    
    baseURL: process.env.BETTER_AUTH_URL, 
    secret: process.env.BETTER_AUTH_SECRET,

    emailAndPassword: {
        enabled: true,
    },
    
    socialProviders: {
        google: {
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },
    
    database: mongodbAdapter(db, {
        client
    }),

    
    user: {
        changeEmail: {
            enabled: true,
        }
    }
});