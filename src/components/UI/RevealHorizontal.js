import {motion, useAnimation, useInView} from 'framer-motion'
import { useEffect, useRef } from 'react';


const RevealHorizontal = (props) => {
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
            hidden: {opacity: 0, x:10},
            vissible: {opacity:1, x:0}
        }}
        initial='hidden'
        animate = {animacion}
        transition={{duration:0.3}}
        >
        
            {props.children}
        </motion.div>
        
    );

}

export default RevealHorizontal;
