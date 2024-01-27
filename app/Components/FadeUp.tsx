import {motion} from "framer-motion";

export default function FadeUp({children}:any){
    return(
        <>
        <motion.div
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{once:true}}
        transition={{duration:1}}
        variants={{
            visible:{opacity:1,scale:1},
            hidden:{opacity: 0,scale: 0}
        }}
        >
            {children}
        </motion.div>
        </>
    )
}