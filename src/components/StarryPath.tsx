import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { BIRTHDAY_WISHES } from '../utils/constants';
import { slideUp } from '../utils/animations';

export function StarryPath() {
  return (
    <div className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-pink-900/20" />
      <div className="max-w-4xl mx-auto">
        {BIRTHDAY_WISHES.map((wish, index) => (
          <motion.div
            key={index}
            {...slideUp}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <Star className="text-yellow-400 animate-pulse" />
            <p className="text-white text-xl">{wish}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}