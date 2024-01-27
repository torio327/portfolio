import {motion} from "framer-motion";

export default function MotionxTwo({children}:any){
    return(
        <>
            <motion.div
                initial={'positionOne'}
                whileInView={'finish'}
                viewport={{once:true}}
                transition={{duration:1}}
                variants={{
                    finish:{opacity:1,y:1/2},
                    positionOne:{opacity:0,y:100}
                }}
            >
                {children}
            </motion.div>
        </>
    )
}