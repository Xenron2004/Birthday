import { motion } from 'framer-motion';
import { CONFETTI_COLORS, CONFETTI_COUNT } from '../utils/constants';

export function Confetti() {
  const pieces = Array.from({ length: CONFETTI_COUNT });

  return (
    <div className="fixed inset-0 pointer-events-none">
      {pieces.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * window.innerWidth,
            y: -20,
            rotate: 0,
          }}
          animate={{
            y: window.innerHeight + 20,
            rotate: 360,
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute w-3 h-3"
          style={{
            backgroundColor: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
            borderRadius: Math.random() > 0.5 ? '50%' : '0',
          }}
        />
      ))}
    </div>
  );
}