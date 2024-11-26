import { motion } from 'framer-motion';
import { useState } from 'react';
import { MEMORIES } from '../utils/constants';
import type { Memory } from '../utils/types';

export function MemoryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderMemory = (memory: Memory, index: number) => (
    <motion.div
      key={index}
      initial={false}
      animate={{
        scale: index === activeIndex ? 1 : 0.8,
        x: `${(index - activeIndex) * 100}%`,
        zIndex: index === activeIndex ? 1 : 0,
        opacity: index === activeIndex ? 1 : 0.5,
      }}
      whileHover={{ scale: index === activeIndex ? 1.05 : 0.8 }}
      className="absolute w-64 h-64 cursor-pointer"
      onClick={() => setActiveIndex(index)}
    >
      <img
        src={memory.image}
        alt={`Memory ${index + 1}`}
        className="w-full h-full object-cover rounded-lg shadow-xl"
      />
      {index === activeIndex && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg"
        >
          <p className="text-white text-center">{memory.note}</p>
        </motion.div>
      )}
    </motion.div>
  );

  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {MEMORIES.map(renderMemory)}
      </div>
    </div>
  );
}