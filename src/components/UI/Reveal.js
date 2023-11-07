import {motion, useAnimation, useInView} from 'framer-motion'
import { useEffect, useRef } from 'react';


const Reveal = (props) => {
    const ref =useRef();
    const isInView = useInView(ref, {once: true});

    const animacion = useAnimation();

    useEffect(() => {
        if (isInView){
            animacion.start('vissible')
        }
    },[isInView, animacion])

    return(
        <motion.div
        ref={ref}
        variants={{
            hidden: {opacity: 0, y:10},
            vissible: {opacity:1, y:0}
        }}
        initial='hidden'
        animate = {animacion}
        transition={{duration:0.3}}
        >
        
            {props.children}
        </motion.div>
        
    );

}

export default Reveal