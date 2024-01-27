import {motion} from "framer-motion";

export default function MotionX({children}:any){
    return(
        <>
            <motion.div
                initial={'positionOne'}
                whileInView={'finish'}
                viewport={{once:true}}
                transition={{duration:1}}
                variants={{
                    finish:{x:1/2},
                    positionOne:{x:-1200}
                }}
            >
                {children}
            </motion.div>
        </>
    )
}