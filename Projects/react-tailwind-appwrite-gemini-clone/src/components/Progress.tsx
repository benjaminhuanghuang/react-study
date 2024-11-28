// Node modules
import { motion } from 'framer-motion';

interface CircleProgressProps {
  classes?: string;
  size?: string;
}
const CircleProgress = ({ classes = '', size = '' }: CircleProgressProps) => {
  return (
    <div
      role='progressbar'
      className={`circular-progress ${size} ${classes}`}
    ></div>
  );
};

interface LinearProgressProps {
  classes?: string;
}

const LinearProgress = ({ classes = '' }: LinearProgressProps) => {
  // Defines Framer Motion variants for a snackbar animation
  const progressbarVariants = {
    start: { screenY: 0 },
    end: {
      screenY: 1,
      transition: {
        when: 'beforeChildren',
        duration: 0.2,
        ease: 'easeOut',
        delay: 0.5,
      },
    },
    exit: {
      screenY: 0,
      transition: {
        duration: 0.1,
        ease: 'easeOut',
      },
    },
  };

  const activeIndicatorVariants = {
    start: { translateX: '-100%' },
    end: { translateX: '100%' },
  };

  return (
    <motion.div
      role='progressbar'
      variants={progressbarVariants}
      initial='start'
      animate='end'
      exit='exit'
      className={`linear-progress ${classes}`}
    >
      <motion.div
        variants={activeIndicatorVariants}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: [0.2, 0, 0, 1],
        }}
        className='active-indicator'
      ></motion.div>
    </motion.div>
  );
};

export { CircleProgress, LinearProgress };
