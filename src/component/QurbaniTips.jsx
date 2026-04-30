"use client";
import React from "react";


const tips = [
    {
        id: 1,
        title: "সঠিক দাঁত দেখা",
        desc: "সুস্থ এবং প্রাপ্তবয়স্ক পশু চেনার প্রধান উপায় হলো দাঁত পরীক্ষা করা। কমপক্ষে দুটি স্থায়ী দাঁত থাকা জরুরি।",
        icon: "🦷",
    },
    {
        id: 2,
        title: "প্রাকৃতিক খাবার",
        desc: "পশুকে স্টেরয়েড মুক্ত রাখতে প্রাকৃতিক ঘাস, খৈল এবং ভুষি খাওয়ানোর গুরুত্ব অপরিসীম।",
        icon: "🌿",
    },
    {
        id: 3,
        title: "পশুর বিশ্রাম",
        desc: "কোরবানির অন্তত ১২-২৪ ঘণ্টা আগে পশুকে পর্যাপ্ত বিশ্রাম দিন এবং শুধু পানি ও হালকা খাবার খাওয়ান।",
        icon: "🏠",
    },
];

const QurbaniTips = () => {
    return (
        <section className="py-20 bg-[#F9F6F2] font-[family-name:var(--font-geist-sans)]">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-[#2D231D] mb-4">Qurbani Preparation Tips</h2>
                <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                    সঠিক নিয়মে পশু নির্বাচন এবং যত্নের মাধ্যমে আপনার কোরবানিকে করুন আরও আনন্দময়।
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tips.map((tip) => (
                        <div
                            key={tip.id}
                            className="bg-white p-8 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                        >
                            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                {tip.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-[#2D231D] mb-4 group-hover:text-[#B68C59]">
                                {tip.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {tip.desc}
                            </p>
                        </div>
                    ))}
                </div>

               
            </div>
        </section>
    );
};

export default QurbaniTips;