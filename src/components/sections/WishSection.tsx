import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';
import { MagicCake } from '../MagicCake';

export function WishSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black/20 p-8">
      <motion.h2 {...fadeIn} className="text-4xl font-bold mb-12">
        Make a Wish!
      </motion.h2>
      <MagicCake />
    </section>
  );
}