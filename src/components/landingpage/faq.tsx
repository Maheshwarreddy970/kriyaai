"use client";

import { cn } from "@/lib/utils";
import React, { useState, ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define FAQ item type
interface FaqItem {
    question: string;
    answer: string;
}

// Sample FAQ data
const faqList: FaqItem[] = [
    {
        "question": "What is Kira AI?",
        "answer": "Kira AI is an advanced tool that automates responses to comments and DMs on social media platforms like TikTok, Instagram, YouTube, and Facebook."
      },
      {
        "question": "Can I manually approve AI-generated responses?",
        "answer": "Yes, you can choose to review and manually send AI-drafted responses for added control."
      },
      {
        "question": "What platforms does Kira AI support?",
        "answer": "Kira AI supports TikTok, Instagram, YouTube, and Facebook."
      },
      {
        "question": "How does the delayed response feature work?",
        "answer": "You can set a custom delay range for responses to make them appear more human-like. The AI randomly selects a time within this range to respond."
      },
      {
        "question": "What happens during out-of-office hours?",
        "answer": "During out-of-office hours, Kira AI pauses automatic responses and resumes them the next day."
      }
];

const Faq: React.FC = () => {
    return (
        <section className="flex w-full flex-col gap-5 items-center py-10 px-5">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeIn", type: "just" }}
                className="flex flex-col items-center mb-4 gap-4 max-w-4xl">
                <p className="border  flex items-center gap-1 py-0.5 px-3 rounded-full text-sm shadow-sm dark:bg-black/5 dark:shadow-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className=" h-3.5 w-3.5 lucide lucide-message-circle-question"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
                    FAQ
                </p>
                <p className="text-3xl text-center sm:text-5xl  font-bold">
                    Got Questions? We've Got Answers!
                </p>
                <p className="text-wrap text-center text-sm sm:text-base">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem reiciendis placeat possimus error officia quis, rem nihil dolor molestias illo!
                </p>
            </motion.div>
            <Accordion className="max-w-6xl">
                {faqList.map((item, index) => (
                    <AccordionItem
                        className="border-b border-black/50 dark:border-white/50"
                        question={item.question}
                        answer={item.answer}
                        key={index}
                    />
                ))}
            </Accordion>
        </section>
    );
};

const Accordion: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    return <div className={cn("flex w-full flex-col gap-4", className)}>{children}</div>;
};

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
    question: string;
    answer: string;
    className?: string;
    rotation?: string;
    icon?: ReactElement;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
    question,
    answer,
    className,
    ...props
}) => {

    return (
        <>
            <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeIn", type: "just" }}
                className=" flex justify-end items-end gap-1">
                <p className=" p-3 bg-black border-zinc-700 text-white max-w-[70%] rounded-s-3xl  rounded-tr-3xl border shadow-md">{question}</p>
                <img src="/person/women.jpg" alt=" avatar" className=" rounded-full border shadow-md size-9 object-cover "></img>
            </motion.div>
            <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeIn", type: "just" }}
                className=" flex justify-start items-end gap-1">
                <img src="/logo.png" alt=" avatar" className="size-9 rounded-full border shadow-md  object-cover "></img>
                <p className=" p-3  shadow-md dark:bg-white text-black rounded-r-3xl rounded-tl-3xl border max-w-[70%]">{answer}</p>
            </motion.div>
        </>
    );
};

export default Faq;
