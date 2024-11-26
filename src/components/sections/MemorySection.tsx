import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';
import { MemoryCarousel } from '../MemoryCarousel';

export function MemorySection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black/20 p-8">
      <motion.h2 {...fadeIn} className="text-4xl font-bold mb-12">
        Your Special Moments
      </motion.h2>
      <MemoryCarousel />
    </section>
  );
}