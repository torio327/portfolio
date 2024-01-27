import {motion} from "framer-motion";

export const MotionScale=({children}:any)=>(
    <motion.button
    whileHover={{scale:1.1}}
    whileTap={{scale:0.9}}
    >
        {children}
    </motion.button>
)