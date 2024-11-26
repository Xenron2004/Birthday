import { motion } from 'framer-motion';
import { fadeIn, scaleIn } from '../../utils/animations';

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <motion.h1
        {...scaleIn}
        className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-300"
      >
        Happy Birthday, Kanchan Di / BEHEN!
      </motion.h1>
      <motion.p {...fadeIn} className="text-2xl mb-8">
        Today we celebrate you!
      </motion.p>
    </section>
  );
}
