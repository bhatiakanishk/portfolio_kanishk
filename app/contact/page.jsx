"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope, FaLinkedinIn, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "bhatiakanishk21@gmail.com",
    },
    {
        icon: <FaLinkedinIn />,
        title: "LinkedIn",
        description: "linkedin.com/in/bhatiakanishk",
        link: "https://www.linkedin.com/in/bhatiakanishk"
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Location",
        description: "San Francisco, California",
    },
];

const Contact = () => {
    const [alertVisible, setAlertVisible] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            firstName: event.target[0].value,
            lastName: event.target[1].value,
            email: event.target[2].value,
            message: event.target[3].value,
        };

        try {
            const response = await fetch('https://<project-id>.cloudfunctions.net/sendContactForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                setAlertVisible(true);
                setTimeout(() => {
                    setAlertVisible(false);
                }, 3000);
            } else {
                console.error('Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
                            <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
                            <p className="text-white/60">
                                Drop a message and let&apos;s have a chat!
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" placeholder="First Name" required />
                                <Input type="text" placeholder="Last Name" required />
                                <Input type="email" placeholder="Email" required />
                            </div>
                            <Textarea className="h-[200px]" placeholder="Type your message here." required />
                            <Button type="submit" size="md" className="max-w-40">
                                Send message
                            </Button>
                        </form>
                        {alertVisible && (
                            <div className="mt-4 p-4 bg-[#27272c] text-accent rounded-md">
                                Message sent!
                            </div>
                        )}
                    </div>
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        {item.link ? (
                                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                <p className="text-white/60">{item.title}</p>
                                                <h3 className="text-xl">{item.description}</h3>
                                            </a>
                                        ) : (
                                            <>
                                                <p className="text-white/60">{item.title}</p>
                                                <h3 className="text-xl">{item.description}</h3>
                                            </>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;