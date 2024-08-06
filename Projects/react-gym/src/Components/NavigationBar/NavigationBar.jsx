import React from 'react'
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

import './NavigationBar.css'
import PurpleBtn from '../PurpleBtn/PurpleBtn';

const NavigationBar = () => {
    return (
        <Navbar expand='lg' className='position-absolute w-100 z-2' >
            <Container>
                <motion.a className='navbar-brand text-light' href='./'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}>
                    <FontAwesomeIcon icon={faDumbbell}
                        className='me-2' size='xl'
                        style={{ color: '##B197FC' }} />
                    Power <span className='text-uppercase fw-bold text-purple'>gym</span>
                </motion.a>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav' className='p-3 p-lg mt-2 mt-lg-0'>
                    <motion.ul className='navbar-nav me-auto justify-content-end w-100'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}>
                        <Nav.Link className='text-light text-uppercase' href='./'>Home</Nav.Link>
                        <Nav.Link className='text-light text-uppercase' href='./'>About</Nav.Link>
                        <Nav.Link className='text-light text-uppercase' href='./'>Features</Nav.Link>
                        <Nav.Link className='text-light text-uppercase' href='./'>Plans</Nav.Link>
                        <Nav.Link className='text-light text-uppercase' href='./'>Contact</Nav.Link>
                    </motion.ul>
                    <motion.div className='ms-0 ms-lg-2 mt-2 mt-lg-0'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <PurpleBtn btnTitle='join now' />
                    </motion.div>
                </Navbar.Collapse>

            </Container>

        </Navbar>
    )
}

export default NavigationBar