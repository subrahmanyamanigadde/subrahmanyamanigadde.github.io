'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface BootSequenceProps {
  onComplete: () => void;
}

const bootMessages = [
  'INITIALIZING COMMAND INTERFACE...',
  'LOADING MISSION ARCHIVES...',
  'CONNECTING TO FIVETRAN NODE...',
  'SCANNING SYSTEMS: SAP • INCIDENT MANAGEMENT • ETL',
  'VERIFYING ENTERPRISE CREDENTIALS...',
  'ACTIVATING SPACECRAFT NAVIGATION...',
  'SYNCHRONIZING TEMPORAL COORDINATES...',
  'BOOT SEQUENCE COMPLETE',
];

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [displayedMessages, setDisplayedMessages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < bootMessages.length) {
      const timer = setTimeout(() => {
        setDisplayedMessages([...displayedMessages, bootMessages[currentIndex]]);
        setCurrentIndex(currentIndex + 1);
      }, 600 + Math.random() * 400);

      return () => clearTimeout(timer);
    } else {
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 1500);
      return () => clearTimeout(completeTimer);
    }
  }, [currentIndex, displayedMessages, onComplete]);

  return (
    <div className="w-full h-screen bg-spacecraft-darker flex items-center justify-center overflow-hidden relative">
      {/* Background grid effect */}
      <div className="absolute inset-0 grid-bg opacity-10"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-spacecraft-cyan rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [0, -window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Boot terminal */}
      <motion.div
        className="w-full max-w-2xl px-8 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="border-glow hologram p-8 rounded-lg">
          <div className="space-y-2 font-rajdhani text-sm md:text-base">
            {displayedMessages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`${
                  message === 'BOOT SEQUENCE COMPLETE'
                    ? 'text-spacecraft-green text-glow-green font-bold'
                    : 'text-spacecraft-cyan text-glow-cyan'
                } animate-flicker`}
              >
                &gt; {message}
              </motion.div>
            ))}
            {currentIndex < bootMessages.length && (
              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.7, repeat: Infinity }}
                className="text-spacecraft-cyan"
              >
                &gt; _
              </motion.div>
            )}
          </div>
        </div>

        {/* Loading bar */}
        {currentIndex < bootMessages.length && (
          <motion.div className="mt-8 h-1 bg-spacecraft-darker border border-spacecraft-cyan rounded">
            <motion.div
              className="h-full bg-gradient-to-r from-spacecraft-cyan to-spacecraft-purple"
              initial={{ width: '0%' }}
              animate={{ width: `${(currentIndex / bootMessages.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        )}
      </motion.div>

      {/* Scan lines overlay */}
      <div className="scan-lines"></div>
    </div>
  );
}
