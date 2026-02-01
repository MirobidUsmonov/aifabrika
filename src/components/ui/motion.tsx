"use client"

import { motion } from "framer-motion"

export const FadeIn = ({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
        className={className}
    >
        {children}
    </motion.div>
)

export const ScaleUp = ({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
        className={className}
    >
        {children}
    </motion.div>
)

export const Marquee = ({ children, className, reverse = false }: { children: React.ReactNode, className?: string, reverse?: boolean }) => {
    return (
        <div className={`flex overflow-hidden w-full ${className}`}>
            <motion.div
                initial={{ x: reverse ? "-100%" : "0%" }}
                animate={{ x: reverse ? "0%" : "-100%" }}
                transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                className="flex flex-shrink-0 gap-4 pr-4"
            >
                {children}
                {children}
                {children}
                {children}
            </motion.div>
            <motion.div
                initial={{ x: reverse ? "-100%" : "0%" }}
                animate={{ x: reverse ? "0%" : "-100%" }}
                transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                className="flex flex-shrink-0 gap-4 pr-4"
            >
                {children}
                {children}
                {children}
                {children}
            </motion.div>
        </div>
    )
}
