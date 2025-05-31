import {
    IoIosHome,
    IoIosContact
} from "react-icons/io";
import { RiExportFill } from "react-icons/ri";
import { FcAbout } from "react-icons/fc";
import {
    FaTwitter,
    FaInstagramSquare,
    FaFacebook,
    FaGithub
} from "react-icons/fa";
import { FaServicestack } from "react-icons/fa6";
import { FaPortrait } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import React from "react";

const Header = () => {
    return (
        <section className="min-h-screen flex flex-col lg:flex-row">
            {/* Sidebar / Topbar */}
            <div className="fixed lg:w-[350px] bg-black text-white p-6 flex flex-col items-center h-full top-0 z-50">
                <img
                    src="Nabeel.jpeg"
                    alt="Nabeel"
                    className="rounded-full w-32 h-32 mt-4"
                />
                <span className="text-2xl font-extrabold mt-4">NabeelRami</span>

                {/* Social Links */}
                <div className="flex flex-wrap justify-center md:justify-start mt-4 gap-3">
                    {/* Twitter */}
                    <a
                        href="https://www.linkedin.com/in/nabeel-altamari-32abb429b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white hover:bg-blue-500 transition-all duration-500 ease-linear"
                    >
                        <FaLinkedin className="text-black text-xl" />
                    </a>

                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/nabeelramialtamari/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white hover:bg-blue-500 transition-all duration-500 ease-linear"
                    >
                        <FaInstagramSquare className="text-black text-xl" />
                    </a>

                    {/* Facebook */}
                    <a
                        href="https://www.facebook.com/nabeel.rami.79"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white hover:bg-blue-500 transition-all duration-500 ease-linear"
                    >
                        <FaFacebook className="text-black text-xl" />
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/AltamariNabeel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white hover:bg-blue-500 transition-all duration-500 ease-linear"
                    >
                        <FaGithub className="text-black text-xl" />
                    </a>
                </div>

                {/* Navigation */}
                <nav className="mt-6 space-y-4 w-full">
                    {[
                        { icon: <IoIosHome />, text: "Home" },
                        { icon: <FcAbout />, text: "About" },
                        { icon: <FaPortrait />, text: "Portfolio" },
                        { icon: <FaServicestack />, text: "Service" },
                        { icon: <IoIosContact />, text: "Contact" },
                    ].map((item, idx) => (
                        <a
                            key={idx}
                            href="#"
                            className="flex items-center gap-3 text-lg hover:text-blue-500 transition-all duration-500 ease-linear"
                        >
                            <span className="text-blue-500">{item.icon}</span>
                            {item.text}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Main Image Section */}
            <div className="relative w-full h-[70vh] lg:h-screen">
                <img
                    src="img1.jpeg"
                    alt="Banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center">
                        I'm <span className="text-blue-500">N~R~A</span>
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Header;
