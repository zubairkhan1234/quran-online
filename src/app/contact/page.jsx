'use client';
import React from "react";

const ContactPage = () => {
    return (
        <div className="bg-[#f5f8f3] py-24">
            <div className="container mx-auto px-6">
                {/* Page Header */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Get in <span className="text-[#3b7a57]">Touch</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Have questions about our Quran courses or need help with registration?
                        Reach out to us — we’re here to assist you with all your inquiries.
                    </p>
                </div>

                {/* Contact Info Section (Flex version) */}
                <div className="flex flex-wrap justify-center gap-8 mb-16">
                    {[
                        {
                            title: "Email Us",
                            desc: "Send your queries anytime and we’ll respond within 24 hours.",
                            icon: "✉️",
                            value: "support@alquran.com",
                        },
                        {
                            title: "Call Us",
                            desc: "Our support team is available 9 AM – 9 PM (Mon–Sat).",
                            icon: "📞",
                            value: "+92 300 1234567",
                        },
                        {
                            title: "Visit Us",
                            desc: "Come meet our scholars and explore our live classrooms.",
                            icon: "📍",
                            value: "123 Al-Quran Street, Lahore, Pakistan",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="flex-1 min-w-[260px] max-w-[320px] bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-300 text-center"
                        >
                            <div className="text-4xl mb-4">{item.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                            <p className="text-[#3b7a57] font-medium">{item.value}</p>
                        </div>
                    ))}
                </div>

                {/* Contact Form Section */}
                <div className="bg-white rounded-3xl shadow-lg p-10 max-w-3xl mx-auto border border-gray-100">
                    <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">
                        Send Us a Message
                    </h3>
                    <form className="flex flex-col gap-6">
                        <div className="flex flex-col sm:flex-row gap-6">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3b7a57] outline-none"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3b7a57] outline-none"
                                required
                            />
                        </div>

                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3b7a57] outline-none"
                            required
                        />

                        <textarea
                            placeholder="Your Message..."
                            rows="5"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3b7a57] outline-none"
                            required
                        ></textarea>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-[#3b7a57] text-white px-8 py-3 rounded-full font-medium hover:bg-[#2e6044] transition-all"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
