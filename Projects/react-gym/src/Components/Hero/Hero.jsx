import React from 'react'
import { motion } from 'framer-motion';
import './Hero.css';


const Hero = () => {
    return (
        <header className='h-100 min-vh-100 d-flex align-items-center'>
            <div className="container">
                <div className="row">
                    <motion.div className='col-ad-6 d-flex flex-column justify-content-start align-items-center align-items-sa-start'
                        initial={{ opacity: 0, x: -300 }}
                        whileInview={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}>
                        <h2 className='hero-subtitle text-light text-center text-sa-start text-uppercase'>Build your body</h2>
                        <h1 className='hero-title text-light text-center text-sa-start fw-bold text-uppercase 1h-1'>
                            Be <span className='text-purple'>fit</span> &
                            < span className='text-purple'>healthy</span>
                        </h1>
                        <p className='text-center text-sa-start text-light'>Loren ipsun dolor sit anet consectetur
                            adipisicing elit. Ad fugit laborun illo culpa error
                            quod nisi delectus voluptatum, debitis voluptatem.</p>
                        <div>
                            <button className='btn btn-light btn-lg rounded-0 text-capitalize me-3'>Get started</button>
                            <button className='btn btn-light btn-lg rounded-0 text-capitalize me-3'>Learn more</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </header>
    )
}

export default Hero