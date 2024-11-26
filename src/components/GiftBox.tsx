import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

interface GiftBoxProps {
  onOpen: () => void;
}

export function GiftBox({ onOpen }: GiftBoxProps) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="cursor-pointer text-center"
      onClick={onOpen}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="inline-block p-8 bg-pink-500 rounded-lg shadow-xl"
      >
        <Gift size={100} className="text-white" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-2xl font-bold text-white"
      >
        Tap to unwrap!
      </motion.p>
    </motion.div>
  );
}