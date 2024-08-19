"use client";

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";
import {motion} from "framer-motion";

const abouts = [
    {
        num: '01',
        title: 'iOS Developer',
        description: 'Design and develop mobile applications for Apple devices such as iPhones and iPads. Specialize in creating intuitive and visually appealing interfaces using iOS-specific technologies such as Swift.',
    },
    {
        num: '02',
        title: 'Software Engineer',
        description: 'Develop, test, and maintain software applications and systems across a variety of platforms. Utilize programming languages such as Java and Python to create efficient and scalable software solutions. Work collaboratively with cross-functional teams to design, implement, and improve software architecture.',
    },
    {
        num: '03',
        title: 'Full-Stack Engineer',
        description: 'Proficient in both front-end and back-end development, capable of building and deploying a complete web application from scratch. Expertise in multiple programming languages, databases, and frameworks, and skilled in handling the entire web development process.',
    },
    {
        num: '04',
        title: 'Cloud Engineer',
        description: 'Designing, building, and maintaining the infrastructure and architecture of cloud-based systems. Deploying and managing cloud-based applications and services, utilizing cloud platforms such as AWS.',
    },
]

const About = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}} className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
                    {abouts.map((about, index) => {
                        return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{about.num}</div>
                                <Link href={about.href || "#"} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                    <BsArrowDownRight className="text-primary text-3xl"/>
                                </Link>
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{about.title}</h2>
                            <p className="text-white/60">{about.description}</p>
                            <div className="border-b border-white/20 w-full"></div>
                        </div>
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default About;