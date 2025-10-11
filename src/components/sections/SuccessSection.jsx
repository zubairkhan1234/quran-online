"use client";
import React from "react";
import { FaBook, FaCalendarAlt, FaUsers, FaGamepad } from "react-icons/fa";


export default function SuccessSection() {
  return (
    <section className="bg-[#f6f4f0] py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Creating student <span className="text-green-600">success</span>{" "}
            with our <span className="text-green-600">Al Quran</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We understand that everyone’s schedule is different. That’s why we
            offer flexible learning options.
          </p>
        </div>

        {/* Green Feature Bar */}
        <div className="bg-green-700 text-white rounded-2xl py-8 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <FaBook size={28} />,
              title: "Online Learning Platform",
              text: "Following a structured course plan, your teacher will guide and help you learn faster & correctly.",
            },
            {
              icon: <FaCalendarAlt size={28} />,
              title: "Flexible Schedule",
              text: "Schedule your Arabic and Quran classes when it works for you. We have teachers available 24/7.",
            },
            {
              icon: <FaUsers size={28} />,
              title: "Live Teachers",
              text: "Follow a structured plan with live guidance so you can learn effectively.",
            },
            {
              icon: <FaGamepad size={28} />,
              title: "Games & Activities",
              text: "Our online Activity Center has games, downloads, and worksheets with learning material.",
            },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center px-4">
              <div className="mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-100">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
