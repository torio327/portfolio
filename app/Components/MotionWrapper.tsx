'use client'
import React from "react";
import {usePathname} from "next/navigation";
import {AnimatePresence} from "framer-motion";
import {motion} from "framer-motion";

export default function MotionWrapper({
    children,}:{
    children:React.ReactNode
}){
    const pathName=usePathname()
    return(
        <>
        <AnimatePresence mode={"wait"}>
            <motion.div
                key={pathName}
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                transition={{duration:2}}
                >
                {children}
            </motion.div>
        </AnimatePresence>
        </>
    )
}