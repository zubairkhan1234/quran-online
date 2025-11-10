'use client';
import React, { useState } from "react";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState(null);

    // ✅ Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // ✅ Handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        console.log(formData)

        try {
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                setStatus("✅ Message sent successfully!");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus("❌ Failed to send message. Try again later.");
            }
        } catch (err) {
            console.error(err);
            setStatus("⚠️ Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-[#f5f8f3] py-24">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Get in <span className="text-[#3b7a57]">Touch</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Have questions about our Quran courses or need help with registration?
                        Reach out to us — we’re here to assist you with all your inquiries.
                    </p>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-3xl shadow-lg p-10 max-w-3xl mx-auto border border-gray-100">
                    <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">
                        Send Us a Message
                    </h3>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="flex flex-col sm:flex-row gap-6">
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                type="text"
                                placeholder="Full Name"
                                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3b7a57] outline-none"
                                required
                            />
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                type="email"
                                placeholder="Email Address"
                                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3b7a57] outline-none"
                                required
                            />
                        </div>

                        <input
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            type="text"
                            placeholder="Subject"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3b7a57] outline-none"
                            required
                        />

                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            placeholder="Your Message..."
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3b7a57] outline-none"
                            required
                        ></textarea>

                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="bg-[#3b7a57] text-white px-8 py-3 rounded-full font-medium hover:bg-[#2e6044] transition-all disabled:opacity-50"
                            >
                                {status === "loading" ? "Sending..." : "Send Message"}
                            </button>

                            {status === "success" && (
                                <p className="text-green-600 mt-4">✅ Message sent successfully!</p>
                            )}
                            {status === "error" && (
                                <p className="text-red-600 mt-4">❌ Something went wrong. Try again.</p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
