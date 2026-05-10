'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface SpacecraftEntryProps {
  visitorName: string;
  onComplete: () => void;
}

export default function SpacecraftEntry({ visitorName, onComplete }: SpacecraftEntryProps) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timings = [500, 1500, 2500, 4000];

    const timers = timings.map((timing, index) =>
      setTimeout(() => {
        setStage(index + 1);
      }, timing)
    );

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4500);

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="w-full h-screen bg-spacecraft-darker flex items-center justify-center overflow-hidden relative">
      {/* Stars background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Hyperspace tunnel */}
      {stage >= 1 && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* Tunnel rings */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-spacecraft-cyan/30 rounded-full"
              style={{
                width: 100 + i * 150,
                height: 100 + i * 150,
              }}
              animate={{ scale: [1, 1.5], opacity: [1, 0] }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Flight path particles */}
      {stage >= 2 && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-spacecraft-cyan rounded-full"
              initial={{
                x: 0,
                y: 0,
                opacity: 1,
              }}
              animate={{
                x: (Math.random() - 0.5) * 600,
                y: (Math.random() - 0.5) * 600,
                opacity: 0,
              }}
              transition={{
                duration: 2 + Math.random(),
                ease: 'easeOut',
              }}
              style={{
                left: '50%',
                top: '50%',
              }}
            />
          ))}
        </div>
      )}

      {/* Text messages */}
      <div className="relative z-10 text-center space-y-6">
        {stage >= 1 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="font-rajdhani text-sm text-spacecraft-green text-glow-green"
          >
            ENGAGING HYPERSPACE DRIVE...
          </motion.div>
        )}

        {stage >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-rajdhani text-sm text-spacecraft-purple"
          >
            ENTERING DIMENSIONAL CORRIDOR
          </motion.div>
        )}

        {stage >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-orbitron text-3xl md:text-4xl text-spacecraft-cyan text-glow-cyan"
          >
            COMMAND CENTER
          </motion.div>
        )}

        {stage >= 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-rajdhani text-xs text-spacecraft-green text-glow-green"
          >
            DOCKING SEQUENCE INITIATED
          </motion.div>
        )}
      </div>

      {/* Scan lines */}
      <div className="scan-lines"></div>
    </div>
  );
}
