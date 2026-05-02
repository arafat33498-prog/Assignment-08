import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
            
            <span className="px-3 py-1 text-sm font-medium text-[#244D3F] bg-indigo-50 rounded-full">
                404
            </span>

            
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Oops! Page not found.
            </h1>

           
            <p className="mt-6 text-base leading-7 text-gray-600 text-center max-w-lg">
                We couldn’t find the page you’re looking for. It might have been moved or doesn’t exist anymore.
            </p>

            
            <div className="mt-10 flex items-center gap-x-6">
                <Link
                    href="/"
                    className="flex items-center gap-2 rounded-md bg-[#244D3F] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#244D3F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
                >
                    Back to homepage
                    <span>→</span>
                </Link>
                
                <Link href="/" className="text-sm font-semibold text-gray-900 hover:underline underline-offset-4">
                   
                </Link>
            </div>
        </div>
    );
}