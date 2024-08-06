import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { motion } from 'framer-motion';
//
import './JoinSection.css';
import PurpleBtn from '../PurpleBtn/PurpleBtn';

const JoinSection = () => {
    return (
        <div className="join-section py-5 text-light">
            <Container>
                <div className="h-100 d-flex flex-column align-item-center justify-content-center">
                    <motion.h2 className="section-title text-capitalize fw-bold"
                        initial={{ opacity: 0, x: -300 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}>
                        <span className="text-purple">Shape</span> your body
                    </motion.h2>
                    <motion.p className="text-center w-75"
                        initial={{ opacity: 0, x: 300 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fugit laborum illo culpa error

                    </motion.p>
                    <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}>
                        <PurpleBtn btnTitle='Join now' />
                    </motion.div>
                </div>
            </Container>
        </div>
    )
}

export default JoinSection