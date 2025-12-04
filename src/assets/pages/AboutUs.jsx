import React from "react";

const AboutUs = () => {
    return (
        <div className="w-11/12 m-auto py-12">

            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-3">About SkillSwap</h1>
                <p className="text-gray-600 text-lg">
                    A platform where people learn, teach, and grow together.
                </p>
            </div>

            {/* Who We Are */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
                <img
                    src="https://picsum.photos/id/1011/800/600"
                    className="rounded-xl shadow-lg"
                    alt="Team working"
                />

                <div>
                    <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
                    <p className="text-gray-700 leading-relaxed">
                        SkillSwap is a community-driven learning platform that connects people
                        willing to share their talents with those eager to learn. Whether it’s
                        coding, music, photography, fitness, language learning, or creative arts, 
                        SkillSwap helps learners find the perfect instructor — and helps skilled 
                        individuals share their knowledge with the world.
                    </p>
                </div>
            </div>

            {/* What We Do */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">

                <div>
                    <h2 className="text-2xl font-semibold mb-3">What We Do</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Our mission is to make learning accessible, flexible, and fun. We provide:
                    </p>

                    <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
                        <li>Affordable skill-based sessions</li>
                        <li>Verified & trustworthy instructors</li>
                        <li>User reviews and ratings for better decisions</li>
                        <li>Personalized learning categories</li>
                        <li>Secure communication between learners & instructors</li>
                    </ul>
                </div>

                <img
                    src="https://picsum.photos/id/1037/800/600"
                    className="rounded-xl shadow-lg"
                    alt="Learning"
                />
            </div>

            {/* Why Choose Us */}
            <div className="text-center mb-16">
                <h2 className="text-3xl font-semibold mb-4">Why Choose SkillSwap?</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">

                    <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-bold mb-2">🌍 Community Driven</h3>
                        <p className="text-gray-600">
                            SkillSwap brings together learners and teachers from all walks of life.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-bold mb-2">🎯 Skill-Focused Learning</h3>
                        <p className="text-gray-600">
                            No long courses—just practical sessions based on real skills.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-bold mb-2">💰 Affordable Sessions</h3>
                        <p className="text-gray-600">
                            Pay only for the learning you need, at affordable per-session rates.
                        </p>
                    </div>

                </div>
            </div>

            {/* Team Section */}
            <div className="text-center mb-20">
                <h2 className="text-3xl font-semibold mb-6">Meet Our Team</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                    <div className="shadow-lg p-6 rounded-xl">
                        <img
                            src="https://i.pravatar.cc/200?img=11"
                            className="w-28 h-28 mx-auto rounded-full mb-4"
                            alt="Team"
                        />
                        <h3 className="text-xl font-semibold">Alex Martin</h3>
                        <p className="text-gray-600">Founder & Instructor</p>
                    </div>

                    <div className="shadow-lg p-6 rounded-xl">
                        <img
                            src="https://i.pravatar.cc/200?img=31"
                            className="w-28 h-28 mx-auto rounded-full mb-4"
                            alt="Team"
                        />
                        <h3 className="text-xl font-semibold">Sara Hossain</h3>
                        <p className="text-gray-600">Learning Coordinator</p>
                    </div>

                    <div className="shadow-lg p-6 rounded-xl">
                        <img
                            src="https://i.pravatar.cc/200?img=21"
                            className="w-28 h-28 mx-auto rounded-full mb-4"
                            alt="Team"
                        />
                        <h3 className="text-xl font-semibold">Rafi Khan</h3>
                        <p className="text-gray-600">Tech Support Lead</p>
                    </div>

                </div>
            </div>

            {/* Footer Message */}
            <div className="text-center">
                <h2 className="text-2xl font-semibold">Join the SkillSwap Community Today</h2>
                <p className="text-gray-600 mt-3">
                    Learn new skills, share your talents, and grow together.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
