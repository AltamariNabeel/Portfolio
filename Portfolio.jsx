import React from "react";

const Portfolio = () => {
    return (
        <>
            <section className="p-6 ml-[375px] bg-[#391ded11]">
                <div className="max-w-7xl">
                    <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-blue-500 ">Portfolio</h2>
                    <p className="mb-8 font-extralight text-gray-700">
                        Welcome to my portfolio website! Here, you'll find a collection of my web development projects, ranging from experimental designs to practical applications. I'm committed to delivering engaging designs and seamless user experiences in every project I undertake. Explore my work and feel free to reach out with any inquiries or suggestions. Thank you for visiting, and I look forward to potential collaborations in the future!
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[ // map over these later if needed
                            { img: "footer-bg.jpg", link: "https://gleeful-hotteok-078c9f.netlify.app/" },
                            { img: "background.jpg", link: "https://gleeful-hotteok-078c9f.netlify.app/" },
                            { img: "background1.jpeg", link: "https://gleeful-hotteok-078c9f.netlify.app/" }
                        ].map((item, index) => (
                            <div key={index} className="group overflow-hidden rounded shadow-lg">
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={item.img}
                                        alt={`Project ${index + 1}`}
                                        className="w-full h-[200px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                                    />
                                </a>
                                <div className="p-4 text-center">
                                    <button className="hover:cursor-pointer text-xl hover:bg-[#391ded11] hover:text-blue-500 text-blue-500 transition duration-500 w-full py-2">
                                        Click To Photo
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio