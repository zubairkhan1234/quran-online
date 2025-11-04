export const metadata = {
    title: "About | Al Quran",
    description: "Learn more about Al Quran — our mission, instructors, and how we’re helping students worldwide connect with the Holy Quran.",
};

export default function AboutPage() {
    return (
        <main className="bg-[#f6f4f0] text-gray-800">
            {/* 🕌 Hero Section */}
            {/* <section className="bg-[#0d0f0c] text-white text-center py-20">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    About <span className="text-[#a3dc6f]">Al Quran</span>
                </h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                    Our mission is to make Quranic education accessible to everyone —
                    merging traditional learning with modern technology for all ages and skill levels.
                </p>
            </section> */}

            {/* 📖 Our Story */}
            <section className="py-16 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <img
                        src="/images/quran.webp"
                        alt="Quran Open"
                        className="rounded-2xl shadow-lg w-full object-cover"
                    />
                </div>
                <div>
                    <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        Founded with the vision to bring Quranic knowledge closer to every heart,
                        <span className="text-[#3b7a57] font-semibold"> Al Quran </span> was built as an online learning platform
                        that offers flexibility, authenticity, and expert-led guidance.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        From reading basics to advanced Tajweed, our courses empower learners
                        worldwide to deepen their connection with the Quran — anytime, anywhere.
                    </p>
                </div>
            </section>

            {/* 👨‍🏫 Instructors Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold mb-12">
                        Meet Our <span className="text-[#3b7a57]">Instructors</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Ustadh Ahmed", role: "Quran & Tajweed Expert", img: "/images/teachers/teacher1.jpeg" },
                            { name: "Ustadha Fatima", role: "Arabic Language Instructor", img: "/images/teachers/teacher2.jpeg" },
                            { name: "Ustadh Bilal", role: "Quran Recitation Coach", img: "/images/teachers/teacher3.jpeg" },
                        ].map((teacher, i) => (
                            <div key={i} className="bg-[#f6f4f0] p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                                <img
                                    src={teacher.img}
                                    alt={teacher.name}
                                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                                />
                                <h3 className="text-xl font-semibold">{teacher.name}</h3>
                                <p className="text-gray-600">{teacher.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🌙 Why Choose Us */}
            {/* <section className="bg-[#e8f0e3] py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-10">
            Why <span className="text-[#3b7a57]">Choose Us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              "Certified Quran Scholars",
              "Flexible Online Classes",
              "Interactive Learning Tools",
              "Trusted by Students Worldwide",
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
                <p className="font-medium text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}




            <section className="bg-gradient-to-b from-[#f4f8f2] to-[#e8f0e3] py-24">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">
                        Why <span className="text-[#3b7a57]">Choose Us</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-14">
                        Discover what makes <span className="text-[#3b7a57] font-medium">Al Quran</span> the most trusted
                        and effective online Quran learning platform for students across the world.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Certified Quran Scholars",
                                desc: "Learn directly from highly qualified scholars with years of teaching experience.",
                                icon: "🎓",
                            },
                            {
                                title: "Flexible Online Classes",
                                desc: "Choose class times that fit your schedule and learn at your own pace.",
                                icon: "🕒",
                            },
                            {
                                title: "Interactive Learning Tools",
                                desc: "Engage with visual aids, live quizzes, and real-time recitations for better learning.",
                                icon: "💻",
                            },
                            {
                                title: "Trusted Worldwide",
                                desc: "Thousands of students from 20+ countries trust us for their Quran education.",
                                icon: "🌍",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#3b7a57]/30 relative overflow-hidden"
                            >
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#3b7a57] to-[#97c79f] scale-x-0 hover:scale-x-100 origin-left transition-transform duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 💬 Testimonials */}
            <section className="bg-[#f6f4f0] py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold mb-12">
                        What Our <span className="text-[#3b7a57]">Students Say</span>
                    </h2>
                    <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow">
                        <p className="text-gray-600 italic mb-4">
                            “Al Quran has completely changed my learning journey. I can now read with confidence and
                            understand the meaning with guidance from qualified teachers.”
                        </p>
                        <h3 className="text-lg font-semibold text-[#3b7a57]">— Hafsa, Student</h3>
                    </div>
                </div>
            </section>

            {/* 📬 Call to Action */}
            <section className="bg-[#3b7a57] text-white py-20 text-center">
                <h2 className="text-3xl font-semibold mb-6">
                    Join thousands of students learning the Quran with us
                </h2>
                <button className="bg-white text-[#3b7a57] px-8 py-3 rounded-full font-semibold hover:bg-[#e8f0e3] transition">
                    Start Learning
                </button>
            </section>
        </main>
    );
}
