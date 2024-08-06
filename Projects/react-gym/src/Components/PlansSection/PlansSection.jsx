import React from 'react'
import './PlansSection.css'
import { motion } from 'framer-motion';
import PlanItems from '../../assets/PlanItems';
import PlanCard from './PlanCard';

const PlansSection = () => {
    return (
        <div className='bg-black text-light py-4 py-sm-5' id='plans'>
            <div className="container">
                <motion.h2 className='section-title fw-bold text-capitalize mb-4 mb-sm-5'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }} >
                    Our <span className='text-purple'>plans</span>
                </motion.h2>
            </div>
            <div className="row d-flex align-items-center g-4">
                {
                    PlanItems.map(({ id, itemClasses, itemIcon, iconColor,
                        itemTitle, itemPrice, firstListItem, secondListItem, thirdListItem, btnClasses }) =>
                        <PlanCard key={id}
                            itemClasses={itemClasses}
                            itemIcon={itemIcon}
                            iconColor={iconColor}
                            itemTitle={itemTitle}
                            itemPrice={itemPrice}
                            firstListItem={firstListItem}
                            secondListItem={secondListItem}
                            thirdListItem={thirdListItem}
                            btnClasses={btnClasses}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default PlansSection