import React from 'react';
import { motion } from 'framer-motion';

function Skeleton() {
  const skeletonLines: string[] = [];
  const skeletonVariants = {
    start: {},
    end: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const skeletonChildVariants = {
    start: { opacity: 0.5 },
    end: { opacity: 1 },
  };
  return (
    <motion.div
      variants={skeletonVariants}
      initial='start'
      animate='end'
    >
      {skeletonLines.map((item, index) => (
        <motion.div
          key={item}
          className='skeleton'
          variants={skeletonChildVariants}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 0.5,
          }}
        ></motion.div>
      ))}
    </motion.div>
  );
}

export default Skeleton;
