import React from 'react'
import ParallaxTilt from 'react-parallax-tilt'
import {motion} from  'framer-motion'

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';
import { StarsCanvas } from './canvas';


const ServiceCard = ({index, title, icon}) => {
    return (
      
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      >
      <ParallaxTilt
        
        tiltMaxAngleX={-15}
        tiltMaxAngleY={-15}
        scale={1.05}
        transitionSpeed={450}
        //glareEnable = {true}
        //glareColor = {'#FFFFFF'}
        //glareMaxOpacity = {0.3}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full min-h-[220px] flex justift-evenly items-center flex-col blue-purp-gradient"
      >
        <img
          src={icon}
          alt='web-development'
          className='w-24 h-24 object-contain z-[20px]'
          
        />

      < h3 className='text-white text-[20px] font-bold text-center z-[20px]'>
          {title}
        </h3>
      
      </ParallaxTilt>
    </motion.div>
    )

}
 

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className = {styles.sectionSubText}> Introduction</p>
    <h2 className = {styles.sectionHeadText}>Overview.</h2>

    </motion.div>
    <motion.p 
    variants={fadeIn("","",0.1,1)}
    className = "mt-4 text-white text-[17px] max-w-3xl leading-[30px]"
    >
      I am a 3rd year computer science student at the University of Florida seeking internships and career opportunities. I have experience developing both business proprietary software and fun personal projects. I enjoy working in team enviornmnets to overcome and solve seemingly impossible problems.

    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      
    </>
  )  
}

export default SectionWrapper(About,"about")