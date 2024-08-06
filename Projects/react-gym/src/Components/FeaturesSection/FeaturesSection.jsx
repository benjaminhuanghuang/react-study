import React from 'react'
import { motion } from 'framer-motion'
import './FeaturesSection.css'
import FeatureItems from '../../assets/FeatureItems'
import { FeatureCard } from './FeatureCard'

const FeaturesSection = () => {
    return (
        <div className="bg-black text-light py-4 py-sm-5" id='features'>
            <div className="container">
                <motion.h2 className="section-title text-center text-capitalize fw-bold mb-e mb-sm-5"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}>
                    Our <span className="text-purple">features</span>
                </motion.h2>
                <div className="row g-4">
                    {
                        FeatureItems.map(({id, itemIcon, itemTitle, itemDescription}) =>
                            <FeatureCard key={id}
                                itemIcon={itemIcon}
                                itemTitle={itemTitle}
                                itemDescription={itemDescription}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default FeaturesSection