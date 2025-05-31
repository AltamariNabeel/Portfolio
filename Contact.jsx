import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import Map from "./Map";


const Contact = () => {
    return (
        <>
            <section className="p-6 ml-[375px] bg-[#391ded11]">
                <div className="max-w-7xl">
                    <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-blue-500 ">Contact</h1>
                    <hr className="w-20 bg-blue-500 h-1 underline  mb-5" />

                    <p className="mb-8 font-extralight text-gray-700">
                        Get in touch with us! Whether you have questions, feedback, or want to discuss a potential project, we're here to help. Fill out the form below, and we'll get back to you as soon as possible. Your satisfaction is our priority!
                    </p>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Contact Info Box */}
                        <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-md p-6 space-y-6">
                            <div>
                                <p className="flex items-center text-2xl text-blue-500 space-x-2">
                                    <CiLocationOn className="bg-blue-500 text-white p-1 rounded-full text-3xl" />
                                    <span className="text-black font-semibold">Location:</span>
                                </p>
                                <p className="text-gray-700 font-extralight ml-9">Amman, Jordan</p>
                            </div>

                            <div>
                                <p className="flex items-center text-2xl text-blue-500 space-x-2">
                                    <MdEmail className="bg-blue-500 text-white p-1 rounded-full text-3xl" />
                                    <span className="text-black font-semibold">Email:</span>
                                </p>
                                <p className="text-gray-700 font-extralight ml-9">nabeelaltamari48@gmail.com</p>
                            </div>

                            <div>
                                <p className="flex items-center text-2xl text-blue-500 space-x-2">
                                    <IoCall className="bg-blue-500 text-white p-1 rounded-full text-3xl" />
                                    <span className="text-black font-semibold">Call:</span>
                                </p>
                                <p className="text-gray-700 font-extralight ml-9">+962 85666588</p>
                            </div>

                            {/* Embedded Map */}
                            <div className="mt-4">
                                <Map />
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="w-full lg:w-2/3 bg-white rounded-lg shadow-md p-6 space-y-6">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1">
                                    <label className="block mb-1 text-gray-700 font-extralight">Your Name:</label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block mb-1 text-gray-700 font-extralight">Email:</label>
                                    <input
                                        type="email"
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block mb-1 text-gray-700 font-extralight">Subject:</label>
                                <textarea
                                    rows={6}
                                    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-36 py-2 px-4 border-2 border-blue-500 text-blue-500 font-semibold rounded hover:bg-blue-500 hover:text-white transition-all duration-500"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>

            </section >
        </>
    )
}
export default Contact 