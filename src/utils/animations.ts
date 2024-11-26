import { MotionProps } from 'framer-motion';

export const fadeIn: MotionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1 }
};

export const scaleIn: MotionProps = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: { duration: 0.5 }
};

export const slideUp: MotionProps = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};