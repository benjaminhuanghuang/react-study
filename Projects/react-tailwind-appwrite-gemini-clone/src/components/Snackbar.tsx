// Custom modules
import { SnackbarConfig } from '../contexts/SnackbarContext';
import { motion, AnimatePresence } from 'framer-motion';

interface SnackbarProps {
  snackbar: SnackbarConfig;
}

const Snackbar = ({ snackbar }: SnackbarProps) => {
  // Defines Framer Motion variants for a snackbar animation
  const snackbarVariants = {
    hidden: { screenY: 0 },
    visible: {
      screenY: 1,
      transition: {
        duration: 0.2,
        ease: [0.05, 0.7, 0.1, 1],
      },
    },
  };

  const snackbarChildVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <AnimatePresence>
      {snackbar.open && (
        <motion.div
          variants={snackbarVariants}
          initial='hidden'
          animate='visible'
          className={`snackbar ${snackbar.type}`}
          exit ={{
            opacity: 0,
            transition: { duration: 0.15, ease: 'easeOut' },
          }}
        >
          <motion.span
            variants={snackbarChildVariants}
            transition={{ duration: 0.2, delay: 0.1, ease: 'easeOut' }}
          >
            {snackbar.message}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Snackbar;
