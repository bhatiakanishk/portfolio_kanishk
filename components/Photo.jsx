"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";

const Photo = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [audio, setAudio] = useState(null);

    useEffect(() => {
        if (typeof Audio !== "undefined") {
            const newAudio = new Audio("/assets/PEDRO.mp3");
            newAudio.loop = true; // Enable looping for the audio
            newAudio.preload = "auto"; // Preload the audio
            setAudio(newAudio);
        }
    }, []);

    useEffect(() => {
        if (audio) {
            if (isHovered) {
                audio.play().catch((error) => {
                    console.error("Audio play failed:", error);
                });
            } else {
                audio.pause();
                audio.currentTime = 0; // Reset the audio to the start
            }
        }

        return () => {
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        };
    }, [isHovered, audio]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleTouchStart = () => {
        setIsHovered((prevState) => !prevState);
    };

    return (
        <div 
            className="w-full h-full flex flex-col justify-center items-center relative xl:ml-10"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
        >
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: 'easeIn' }}}
                className="relative"
            >
                <motion.svg 
                    className="absolute inset-0 w-[300px] h-[300px] xl:w-[506px] xl:h-[506px] m-auto z-20" 
                    fill="transparent" 
                    viewBox="0 0 506 506" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle 
                        cx="253" 
                        cy="253" 
                        r="250" 
                        stroke="#00ff99" 
                        strokeWidth="4" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        initial={{ strokeDasharray: "24 10 0 0" }} 
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"], 
                            rotate: [120, 360]
                        }}
                        transition={{
                            duration: 20, 
                            repeat: Infinity, 
                            repeatType: "reverse",
                        }}
                    />
                </motion.svg>
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' }}}
                    className="relative z-10 w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] overflow-hidden rounded-full"
                >
                    <motion.div
                        animate={{
                            rotate: isHovered ? [0, 360] : 0
                        }}
                        transition={{
                            duration: isHovered ? 5 : 0, // Control the speed and stop immediately when not hovered
                            repeat: isHovered ? Infinity : 0,
                            ease: 'linear'
                        }}
                        className="w-full h-full"
                    >
                        <Image
                            src="/assets/photo.png"
                            priority
                            quality={90}
                            fill
                            alt="Portrait of Kanishk Bhatia"
                            className="object-cover"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
            <div className="mt-4 flex items-center space-x-2 text-gray-600">
                <FaArrowUp />
                <span>Try tapping the image</span>
            </div>
        </div>
    );
}

export default Photo;
