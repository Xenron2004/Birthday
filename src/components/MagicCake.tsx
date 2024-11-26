import { motion } from 'framer-motion';
import { Cake } from 'lucide-react';
import { useState } from 'react';

export function MagicCake() {
  const [blown, setBlown] = useState(false);

  return (
    <div className="text-center">
      <motion.div
        animate={{ scale: blown ? 0.8 : 1 }}
        onClick={() => setBlown(true)}
        className="inline-block cursor-pointer"
      >
        <Cake
          size={100}
          className={`${
            blown ? 'text-gray-400' : 'text-pink-500'
          } transition-colors duration-500`}
        />
      </motion.div>
      {blown && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8"
        >
          <h2 className="text-3xl font-bold text-white">
            Your day, your rules! Let's make it unforgettable!
          </h2>
        </motion.div>
      )}
    </div>
  );
}