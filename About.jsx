import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { IoMdHappy } from "react-icons/io";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { TbHours24 } from "react-icons/tb";
import { BiSolidCoffeeAlt } from "react-icons/bi";
import { TbPointFilled } from "react-icons/tb";



const About = () => {
    return (
        <>

            <section className="p-6 ml-[375px]" id="about">
                <h2 className="text-5xl font-semibold mb-4 text-blue-500">About</h2>
                <hr className="w-20 bg-blue-500 h-1 underline  mb-5" />
                <p className="mb-4 font-extralight text-gray-700">
                    Welcome to NabeelRami website, the home of my work and personal showcase
                    that summarizes my journey as a software engineer in the world of the web...
                </p>
                <div className="flex flex-col md:flex-row md:items-start space-x-0 md:space-x-8">
                    <img
                        src="Nabeel1.jpeg"
                        alt="Mr Error"
                        className=" md:w-1/3 rounded-lg mb-4 md:mb-0  h-[400px]"
                    />
                    <div className="flex-1 space-y-2">
                        <h3 className="text-lg font-semibold text-blue-500">UI/UX Designer & Web Developer</h3>
                        <p className="text-sm text-gray-700 font-extralight">
                            Passionate about blending design and development, I specialize in creating
                            visually stunning and user-friendly websites.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <p><RiArrowDropRightLine className="inline mr-2 font-bold text-4xl text-blue-500" /><span className="font-bold">Website:</span> <span>N~R~A</span></p>
                                <p><RiArrowDropRightLine className="inline mr-2 font-bold text-4xl text-blue-500" /><span className="font-bold">Phone:</span> <span>+962 85666588</span></p>
                                <p><RiArrowDropRightLine className="inline mr-2 font-bold text-4xl text-blue-500" /><span className="font-bold">City:</span> <span>Amman, Jordan</span></p>
                                <p><RiArrowDropRightLine className="inline mr-2 font-bold text-4xl text-blue-500" /><span className="font-bold">Email:</span> <span>nabeelaltamari48@gmail.com</span></p>
                            </div>
                            <div>
                                <p><RiArrowDropRightLine className="inline mr-2 font-bold text-4xl text-blue-500" /><span className="font-bold">Degree:</span> <span>Bachelor OF Software Engineer</span></p>
                                <p><RiArrowDropRightLine className="inline mr-2 font-bold text-4xl text-blue-500" /><span className="font-bold">Field:</span> <span>Full-Stack developer</span></p>
                                <p><RiArrowDropRightLine className="inline mr-2 font-bold text-4xl text-blue-500" /><span className="font-bold">Experience:</span> <span>React - NodeJs</span></p>
                                <p><RiArrowDropRightLine className="inline mr-2 font-bold text-4xl text-blue-500" /><span className="font-bold">Freelance:</span> <span>Available</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <p className="font-extralight text-gray-700">With a passion for crafting seamless digital experiences, I blend creativity with technical expertise to design and develop captivating websites and user interfaces. My goal is to create intuitive and visually appealing solutions that not only meet but exceed user expectations. From wireframing to front-end development, I strive for excellence in every aspect of the design and development process, ensuring user satisfaction and engagement. Let's collaborate to bring your ideas to life and elevate your online presence to new heights.</p>
                    <h2 className="text-5xl font-semibold mb-4 text-blue-500  mt-5">Fact</h2>
                    <hr className="w-20 bg-blue-500 h-1 underline mb-5" />

                    <p className="font-extralight text-gray-700">My website is a reflection of my creative journey and technical expertise. It serves as a dynamic canvas where innovative design intersects with seamless development, offering visitors a comprehensive insight into my capabilities. From elegant user interfaces to robust backend solutions, every aspect of my work is meticulously crafted to deliver exceptional results. Let's embark on a journey of digital excellence together, where creativity knows no bounds."</p>
                </div>
                <div className="text-4xl mt-15 mx-52">
                    <ul className="flex justify-between text-blue-700 ">
                        <li className="inline "><IoMdHappy className="text-6xl" /><span className="font-bold text-black text-xs">Happy Clients</span><br /><p className="text-xs text-gray-700 font-extralight">Our Aims</p></li>
                        <li className="inline "><LiaProjectDiagramSolid className="text-6xl" /><span className="font-bold text-black text-xs">Projects</span><br /><p className="text-xs text-gray-700 font-extralight">accomplished</p></li>
                        <li className="inline "><TbHours24 className="text-6xl" /><span className="font-bold text-black text-xs">Hours Of Support</span><br /><p className="text-xs text-gray-700 font-extralight">Help</p></li>
                        <li className="inline "><BiSolidCoffeeAlt className="text-6xl" /><span className="font-bold text-black text-xs">Coffee Cup</span><br /><p className="text-xs text-gray-700 font-extralight">Done</p></li>
                    </ul>
                </div>
                <br />
                <div className="bg-[#391ded11] p-5 mt-10 ">
                    <h2 className="text-4xl font-semibold text-blue-500 ">Skills</h2>
                    <hr className="w-20 bg-blue-500 h-1 underline  mb-5" />

                    <p className="text-sm font-light text-gray-700 mt-2">
                    My website highlights a range of skills tailored for the digital landscape. From coding proficiency to design finesse, I bring a versatile toolkit to the table. Whether it's crafting engaging user interfaces or implementing efficient backend solutions, I'm equipped to deliver excellence. Let's bring your digital vision to life with expertise and precision                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                        {/* Left Skill Bar */}
                        <div className="space-y-4">
                            {["HTML", "CSS", "JavaScript"].map(skill => (
                                <div key={skill}>
                                    <p className="text-sm text-gray-700 font-light">{skill}</p>
                                    <div className="w-full h-2 bg-gray-200 rounded">
                                        <div className="h-2 bg-blue-500 rounded w-[80%]"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Right Skill Bar */}
                        <div className="space-y-4">
                            {["Tailwind", "React", "Node.js"].map(skill => (
                                <div key={skill}>
                                    <p className="text-sm text-gray-700 font-light">{skill}</p>
                                    <div className="w-full h-2 bg-gray-200 rounded">
                                        <div className="h-2 bg-blue-500 rounded w-[75%]"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <h1 className="text-5xl font-semibold mb-4 text-blue-500 ">Resume</h1>
                                <hr className="w-20 bg-blue-500 h-1 underline  mb-5" />

                <p className="font-extralight text-gray-700">My programming journey began with curiosity about website development. Learning my first language fueled a passion for problem-solving and creativity. I see programming as the language of the future and am committed to continuous improvement in this dynamic field.</p>
                <div className="flex  justify-between flex-cols flex-wrap my-7">
                    <ul className="">
                        <h1 className="font-bold text-2xl">Summary</h1>

                        <h2 className="font-bold text-2xl mt-2">Nabeel Altamari</h2>
                        <p className="font-extralight text-gray-700 mt-0.5">I major in software engineering. I have I have developed several websites as projects <br /> in the past. Currently, I am striving to gain more experience and Knowledge in web <br /> development</p>
                        <div className=" space-x-7 my-0.5">
                            <p><TbPointFilled className="inline mr-2 text-gray-700 font-extralight" /><span className="text-gray-700 font-extralight">Amman Jordan</span></p>

                            <p><TbPointFilled className="inline mr-2 text-gray-700 font-extralight" /><span className="text-gray-700 font-extralight">+962 785666588</span></p>
                            <p><TbPointFilled className="inline mr-2 text-gray-700 font-extralight" /><span className="text-gray-700 font-extralight">nabeelaltamari48@gmail.com</span></p>

                        </div>


                    </ul>
                    <ul className="ml-50">
                        <h1 className="font-bold text-2xl">Bachelor OF Software Engineer</h1>

                        <h2 className="font-bold text-xs mt-2 w-[250px]  bg-[#391ded11]">2021-2025 </h2>
                        <p className="text-gray-700 font-extralight mt-5">As a software engineering student at Amman Arab University, I'm dedicated <br />to enhancing my web development skills. With experience in building multiple websites,<br /> I'm passionate about crafting seamless digital experiences. Through my studies, I'm <br />equipped to excel in this dynamic field.</p>
                    </ul>

                </div>
                <div className="flex  justify-between flex-cols flex-wrap my-7">
                    <ul className="">
                        <h1 className="font-bold text-2xl">Certificates                        </h1>

                        <h2 className="font-bold text-2xl mt-2">Application Developer                        </h2>
                        <p className="font-extralight text-gray-700 mt-0.5">Certificates of kotlin (Android) the hope international company</p>
                        <div className=" space-x-7 my-0.5">
                            <h2 className="font-bold text-xs mt-2 w-[250px] bg-[#391ded11] ">Feb-2025 </h2> <br />

                            <div className="my-5">
                                <h2 className="font-bold text-2xl mt-2">BBC Course</h2>
                                <p className="font-extralight text-gray-700 mt-0.5">Certificates of BBC ,BBC english center 12 level</p>
                                <h2 className="font-bold text-xs mt-2 w-[250px] bg-[#391ded11]">Apr-2021</h2> <br />
                            </div>

                            <div className="my-5">
                                <h2 className="font-bold text-2xl mt-2">Unity Gaming</h2>
                                <p className="font-extralight text-gray-700 mt-0.5">Certificates of unity , the hope international company</p>
                                <h2 className="font-bold text-xs mt-2 w-[250px] bg-[#391ded11]">May-2021</h2> <br />
                            </div>
                            <div className="my-5">
                                <h2 className="font-bold text-2xl mt-2">communication skills</h2>
                                <p className="font-extralight text-gray-700 mt-0.5">Certificates from Amman arab university for communication skills Course</p>
                                <h2 className="font-bold text-xs mt-2 w-[250px] bg-[#391ded11]">July-2022</h2> <br />
                            </div>
                        </div>

                    </ul>
                    <div className="mb-8">

                        <h1 className="font-bold text-2xl">Professional Experience</h1>

                        <h2 className="font-bold text-2xl mt-2">Full Insight Technology Solution company</h2>
                        <p className="font-extralight text-gray-700 mt-0.5">I worked at Full Insight Technology Solution for a year</p>
                        <h2 className="font-bold text-xs mt-2 w-[250px] bg-[#391ded11]">2024</h2> <br />
                        <div className="my-5">
                            <h2 className="font-bold text-2xl mt-2">University of Jordan center</h2>
                            <p className="font-extralight text-gray-700 mt-0.5">I worked at the University of Jordan Gateway tele-marketing center</p>
                            <h2 className="font-bold text-xs mt-2 w-[250px] bg-[#391ded11]">2023</h2> <br />
                        </div>
                        <div className="my-5">
                            <h2 className="font-bold text-2xl mt-2">sales representative</h2>
                            <p className="font-extralight text-gray-700 mt-0.5">I worked as a daily sales representative</p>
                            <h2 className="font-bold text-xs mt-2 w-[250px] bg-[#391ded11]">2023</h2><br /> <br />
                        </div><div className="my-5">
                            <h2 className="font-bold text-2xl mt-2">training</h2>
                            <p className="font-extralight text-gray-700 mt-0.5">I trained at Hope International Company in the field of web development</p>
                            <h2 className="font-bold text-xs mt-2 w-[250px] bg-[#391ded11]">2024</h2>
                        </div>
                    </div>
                </div>
            </section >



        </>
    )
}

export default About