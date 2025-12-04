import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="w-11/12 mx-auto py-12">

            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="text-gray-600 mt-2">
                    Have questions? We're here to help!
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Contact Form */}
                <div className="bg-white shadow-lg rounded-2xl p-8">
                    <h2 className="text-2xl font-semibold mb-5">Send a Message</h2>

                    <form className="space-y-5">
                        <div>
                            <label className="block font-medium mb-2">Your Name</label>
                            <input
                                type="text"
                                className="w-full border-gray-300 border rounded-lg px-4 py-2 focus:ring focus:ring-blue-200"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-2">Email Address</label>
                            <input
                                type="email"
                                className="w-full border-gray-300 border rounded-lg px-4 py-2 focus:ring focus:ring-blue-200"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-2">Message</label>
                            <textarea
                                rows="4"
                                className="w-full border-gray-300 border rounded-lg px-4 py-2 focus:ring focus:ring-blue-200"
                                placeholder="Write your message..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-8">

                    <div className="bg-white shadow-lg p-6 rounded-xl flex items-start gap-4">
                        <FaPhone className="text-blue-600 text-2xl" />
                        <div>
                            <h3 className="text-xl font-semibold">Phone</h3>
                            <p className="text-gray-600">+1 123 456 7890</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg p-6 rounded-xl flex items-start gap-4">
                        <FaEnvelope className="text-blue-600 text-2xl" />
                        <div>
                            <h3 className="text-xl font-semibold">Email</h3>
                            <p className="text-gray-600">contact@skillswap.com</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg p-6 rounded-xl flex items-start gap-4">
                        <FaMapMarkerAlt className="text-blue-600 text-2xl" />
                        <div>
                            <h3 className="text-xl font-semibold">Location</h3>
                            <p className="text-gray-600">Dhaka, Bangladesh</p>
                        </div>
                    </div>

                    <iframe
                        title="map"
                        className="w-full h-64 rounded-xl shadow-lg"
                        src="https://maps.google.com/maps?q=dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
