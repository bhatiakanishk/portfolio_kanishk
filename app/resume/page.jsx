"use client";

import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython, FaSwift, FaJava, FaUikit, FaAngular, FaSass, FaLinux, FaUbuntu, FaApple, FaJira, FaWindows, FaRobot } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiMysql, SiPostgresql, SiFirebase, SiMongodb, SiSanity, SiAmazon, SiGooglecloud, SiGit, SiGitlab, SiTerraform, SiPacker, SiKubernetes, SiDocker, SiAnsible, SiJenkins, SiGraphql, SiPostman, SiJson, SiYaml, SiXcode, SiGnubash, SiOpenai, SiExpo } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from 'framer-motion'; 

const about = {
    title: "About Me",
    description: `
        I'm a software engineer with a Master's in Information Systems from Northeastern University and a Bachelor's in Computer Engineering from the University of Mumbai. I love building web and mobile apps using cool technologies like JavaScript, Swift, React, and Node.js. I'm all about learning new things and working on projects that make a real impact.

        When I'm not coding, you'll probably find me watching Formula 1, gaming, or getting lost in sim racing. These hobbies keep me energized and always looking for new ways to push the limits of technology.`,
    info: [
        {
            fieldName: "Name",
            fieldValue: "Kanishk Bhatia"
        },
        {
            fieldName: "Email",
            fieldValue: "bhatiakanishk21@gmail.com"
        },
        {
            fieldName: "GitHub",
            fieldValue: "bhatiakanishk"
        },
        {
            fieldName: "Experience",
            fieldValue: "3+ Years"
        },
    ]
};

const experience = {
    icon: '/assets/resume/badge.svg',
    title: "Experience",
    description: "Professional Experience in the tech world",
    items: [
        {
            company: "Akoya LLC",
            position: "Full Stack Engineer",
            duration: "Jun 2025 - Sep 2025",
        },
        {
            company: "WorkOrderWizard LLC",
            position: "Founding Engineer",
            duration: "Oct 2023 - Jun 2025",
        },
        {
            company: "Ultimate Computech Pvt Ltd.",
            position: "Full Stack Engineer",
            duration: "Apr 2020 - Jul 2021",
        }
    ]
}

const education = {
    icon: '/assets/resume/cap.svg',
    title: "Education",
    items: [
        {
            institution: "Northeastern University",
            degree: "Masters in Information Systems",
            duration: "Sep 2021 - May 2023",
        },
        {
            institution: "Mumbai University",
            degree: "Bachelor's of Computer Engineering",
            duration: "Aug 2016 - May 2020",
        }
    ]
}

const skills = {
    title: "Skills",
    description: "Learning new skills everyday",
    skillList: [
        {
            icon: <FaPython />,
            name: "Python 3",
        },
        {
            icon: <FaSwift />,
            name: "swift",
        },
        {
            icon: <FaHtml5 />,
            name: "HTML 5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS 3",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <FaReact />,
            name: "React.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind.CSS",
        },
        {
            icon: <FaNodeJs />,
            name: "Node.js",
        },
        {
            icon: <SiOpenai />,
            name: "OpenAI",
        },
        {
            icon: <FaJava />,
            name: "Java",
        },
        {
            icon: <SiTypescript />,
            name: "TypeScript",
        },
        {
            icon: <FaAngular />,
            name: "Angular",
        },
        {
            icon: <SiExpo />,
            name: "Expo Go",
        },
        {
            icon: <SiXcode />,
            name: "Xcode",
        },
        {
            icon: <SiMysql />,
            name: "MySQL",
        },
        {
            icon: <SiPostgresql />,
            name: "PostgreSQL",
        },
        {
            icon: <SiFirebase />,
            name: "Firebase",
        },
        {
            icon: <SiMongodb />,
            name: "MongoDB",
        },
        {
            icon: <SiSanity />,
            name: "Sanity",
        },
        {
            icon: <SiAmazon />,
            name: "AWS",
        },
        {
            icon: <SiGooglecloud />,
            name: "Google Cloud",
        },
        {
            icon: <SiGit />,
            name: "Git",
        },
        {
            icon: <SiGnubash />,
            name: "Bash Script",
        },
        {
            icon: <SiGitlab />,
            name: "Gitlab",
        },
        {
            icon: <SiTerraform />,
            name: "Terraform",
        },
        {
            icon: <SiPacker />,
            name: "Packer",
        },
        {
            icon: <SiKubernetes />,
            name: "Kubernetes",
        },
        {
            icon: <SiDocker />,
            name: "Docker",
        },
        {
            icon: <SiAnsible />,
            name: "Ansible",
        },
        {
            icon: <SiJenkins />,
            name: "Jenkins",
        },
        {
            icon: <SiYaml />,
            name: "Yaml",
        },
        {
            icon: <SiGraphql />,
            name: "GraphQL",
        },
        {
            icon: <SiPostman />,
            name: "Postman",
        },
        {
            icon: <SiJson />,
            name: "JSON",
        },
        {
            icon: <FaLinux />,
            name: "Linux",
        },
        {
            icon: <FaUbuntu />,
            name: "Ubuntu",
        },
        {
            icon: <FaApple />,
            name: "macOS",
        },
        {
            icon: <FaWindows />,
            name: "Windows",
        },
        {
            icon: <FaJira />,
            name: "Jira",
        },
    ]
}

const Resume = () => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="about">About Me</TabsTrigger>
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                    </TabsList>
                    
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.institution}</p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx:auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return <li key={index} className="flex item-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
};

export default Resume;
