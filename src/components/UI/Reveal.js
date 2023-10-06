import {motion} from 'framer-motion'


const Reveal = (props) => {
    return(
        <motion.div 
        variants={{
            hidden: {opacity: 0, y:35},
            vissible: {opacity:1, y:0}
        }}
        initial='hidden'
        whileInView='vissible'
        transition={{duration:0.3}}
        >
        
            {props.children}
        </motion.div>
        
    );

}

export default Reveal