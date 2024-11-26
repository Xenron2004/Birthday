import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Confetti } from './components/Confetti';
import { GiftBox } from './components/GiftBox';
import { StarryPath } from './components/StarryPath';
import { HeroSection } from './components/sections/HeroSection';
import { MemorySection } from './components/sections/MemorySection';
import { WishSection } from './components/sections/WishSection';
import { fadeIn } from './utils/animations';

function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-rose-900 text-white">
      {!isOpened ? (
        <div className="min-h-screen flex items-center justify-center">
          <GiftBox onOpen={() => setIsOpened(true)} />
        </div>
      ) : (
        <>
          <Confetti />
          <motion.div {...fadeIn}>
            <HeroSection />
            <MemorySection />
            <section className="min-h-screen">
              <StarryPath />
            </section>
            <WishSection />
            <footer className="text-center py-8 bg-black/30">
              <p className="text-lg">
                Thank you for celebrating Kanchan with us. Share the joy! ✨
              </p>
            </footer>
          </motion.div>
        </>
      )}
    </div>
  );
}

export default App;