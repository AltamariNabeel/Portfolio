import React from "react";
import { TbSourceCode } from "react-icons/tb";
import { PiQuotesThin } from "react-icons/pi";
import { LuX } from "react-icons/lu";
import { IoMdPhotos } from "react-icons/io";
import { FaNode } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";


const Service = () => {
    const services = [
        {
            icon: <TbSourceCode />,
            title: "Web Development",
            description:
                "Providing customized web development solutions to achieve your digital goals with the highest quality and latest technologies",
        },
        {
            icon: <PiQuotesThin />,
            title: "Tester",
            description:
                "Ensuring seamless user experiences through rigorous testing and quality assurance protocols",
        },
        {
            icon: <LuX />,
            title: "UI/UX",
            description:
                "Creating user-friendly interfaces with captivating designs to optimize user experience",
        },
        {
            icon: <IoMdPhotos />,
            title: "Photoshop",
            description:
                "Expertly utilizing Photoshop to create captivating visual designs that bring ideas to life",
        },
        {
            icon: <FaNode />,
            title: "Backend Developer",
            description:
                "Developing robust backend solutions to power your applications, ensuring reliability and scalability",
        },
        {
            icon: <FaMobileAlt />,
            title: "Mobile Application",
            description:
                "Crafting innovative mobile applications that deliver seamless experiences and drive user engagement",
        },
    ];
    return (
        <>
            <section className="p-6 ml-[375px]">
            <div className="max-w-7xl ">
                <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-blue-500 ">Service</h1>
                <hr className="w-20 bg-blue-500 h-1 underline  mb-5" />

                <p className="mb-8 font-extralight text-gray-700">
                    Welcome to our services page! We specialize in customized web development solutions to elevate your online presence. From website redesigns to e-commerce solutions, our experienced team delivers high-quality, user-friendly websites tailored to your business needs. Let's collaborate to bring your vision to life and achieve your online goals!
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="p-4 shadow rounded-lg hover:shadow-lg transition duration-300">
                            <div className="mb-4 flex items-center text-blue-500 text-4xl">
                                <span className="border rounded-full p-2 hover:bg-blue-500 hover:text-white transition duration-500">
                                    {service.icon}
                                </span>
                                <span className="ml-3 text-2xl font-bold text-gray-800">{service.title}</span>
                            </div>
                            <p className="text-gray-700 font-extralight">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
               
            </section>
        </>
    )
}


export default Service