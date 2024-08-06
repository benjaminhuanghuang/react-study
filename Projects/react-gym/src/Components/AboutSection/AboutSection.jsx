import React from 'react'
import { motion } from 'framer-motion';
import AboutImg from '../../assets/Images/about.jpg';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <div className='bg-black text-light py-4 py-sm-5' id='about'>
            <div className="container">
                <motion.div className="col-lg-6 d-flex justify-content-center"
                    initial={{ opacity: 0, x: -300 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}>
                    <img className='img-fluid w-75 mt-4 mt-lg-0' src={AboutImg} alt='About us' />
                </motion.div>
                <motion.div className="col-lg-6 d-flex flex-column justify-content-center
                align-items-start"
                    initial={{ opacity: 0, x: 350 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2>About <span className="text-purple">us</span></h2>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutSection