"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: '01',
        category: 'iOS',
        title: 'Workable',
        description: 'Developed a referral and professional assistance iOS application using Swift, featuring a dashboard that enhanced post-management efficiency through user-friendly interfaces and streamlined data management. Engineered seamless transitions across 10 screens using Storyboard and managed over 500 posts with Firebase Firestore, ensuring a scalable and organized database solution.',
        stack: [{name: "iOS"}, {name: "Swift"}, {name: "Firebase"}],
        image: '/assets/workable.jpg',
        live: "",
        github: "https://github.com/bhatiakanishk/Workable",
    },
    {
        num: '02',
        category: 'React',
        title: 'Expense Tracker',
        description: 'Built an Expense Tracker app using React and MongoDB Cloud, achieving a 90% reduction in security breaches with JWT and OAuth authentication. Deployed a scalable database handling over 1 million records and optimized the user experience with React and Redux for 2-second load times.',
        stack: [{name: "React"}, {name: "MongoDB"}, {name: "HTML 5"}, {name: "Sass"}, {name: "JavaScript"}],
        image: '/assets/money.png',
        live: "",
        github: "https://github.com/bhatiakanishk/Expense-Tracker",
    },
    {
        num: '03',
        category: 'AWS',
        title: 'AWS enabled E-Commerce Platform',
        description: 'Created an automated deployment pipeline on AWS, boosting efficiency by 50% with Terraform. Designed RESTful APIs using Node.js and reduced deployment time by 80% through GitHub Actions and CodeDeploy. Integrated CloudWatch and Auto Scaling Groups for enhanced monitoring and scalability.',
        stack: [{name: "AWS"}, {name: "JavaScript"}, {name: "Shell"}, {name: "Terraform"}],
        image: '/assets/AWS.png',
        live: "",
        github: "https://github.com/orgs/kanishkbhatia/repositories",
    },
    {
        num: '04',
        category: 'Python',
        title: 'Menace Machine',
        description: 'Created a Python-based Tic-Tac-Toe game simulation with a command-line interface, applying reinforcement learning to improve winning accuracy by 61%. Trained the model with the Human Optimal Strategy, increasing the win rate from 72% to 93%, and recorded over 10,000 training sets in JSON format for adaptive learning.',
        stack: [{name: "Python"}, {name: "Reinforcement Learning"}],
        image: '/assets/tic-tac-toe.png',
        live: "",
        github: "https://github.com/bhatiakanishk/INFO6205_FinalProject",
    },
    {
        num: '05',
        category: 'Machine Learning',
        title: 'Doodle Recognition',
        description: 'Doodle Recognition System with Interactive Visualization',
        stack: [{name: "Machine Learning"}, {name: "Python"}, {name: "HTML 5"}, {name: "CSS 3"}],
        image: '/assets/doodle.png',
        live: "",
        github: "https://github.com/bhatiakanishk/Doodle_recognition_project",
    }
]

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    }

    return (
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease:'easeIn'},
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
                <div className="container mx-auto">
                    <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                            <div className="flex flex-col gap-[30px] h-[50%]">
                                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                    {project.num}
                                </div>
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                                    {project.category}
                                </h2>
                                <p className="text-white/80 text-[30px]">{project.title}</p>
                                <p className="text-white/60">{project.description}</p>
                                <ul className="flex gap-4 flex-wrap">
                                    {project.stack.map((item, index) => {
                                        return (
                                            <li key={index} className="text-xl text-accent">
                                                {item.name}
                                                {index !== project.stack.length - 1 && ","}
                                            </li>
                                        )
                                    })}
                                </ul>
                                <div className="border border-white/20"></div>
                                <div className="flex items-center gap-4">
                                    <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>GitHub Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper 
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}>
                                {projects.map((project, index) => {
                                    return (
                                        <SwiperSlide key={index} className="w-full">
                                            <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                            <div className="relative w-full h-full">
                                                <Image src = {project.image} fill className="object-cover" alt=""/>
                                            </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                                <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Work
