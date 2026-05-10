'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface VisitorIdentificationProps {
  onComplete: (name: string) => void;
}

export default function VisitorIdentification({ onComplete }: VisitorIdentificationProps) {
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResponse, setShowResponse] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setShowResponse(true);
      setTimeout(() => {
        onComplete(name);
      }, 1500);
    }, 800);
  };

  return (
    <div className="w-full h-screen bg-spacecraft-darker flex items-center justify-center overflow-hidden relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-spacecraft-purple/10 to-spacecraft-cyan/10"></div>

      {/* Grid effect */}
      <div className="absolute inset-0 grid-bg opacity-5"></div>

      {/* Floating circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 rounded-full border border-spacecraft-cyan/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ top: '-10%', right: '-10%' }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full border border-spacecraft-purple/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          style={{ bottom: '-5%', left: '-5%' }}
        />
      </div>

      {/* Main content */}
      <motion.div
        className="w-full max-w-md px-8 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="hologram border-glow p-12 rounded-lg space-y-8">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-2xl md:text-3xl font-orbitron text-spacecraft-cyan text-glow-cyan mb-2">
              IDENTIFY YOURSELF
            </h1>
            <p className="text-sm font-rajdhani text-spacecraft-green">TRAVELER</p>
          </motion.div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="space-y-2"
            >
              <label className="block text-xs font-rajdhani text-spacecraft-cyan uppercase tracking-widest">
                &gt; Enter Name Protocol
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isSubmitting || showResponse}
                  placeholder="_ "
                  className="w-full px-4 py-3 font-rajdhani text-base placeholder-spacecraft-cyan/30 disabled:opacity-50 rounded-sm"
                  autoFocus
                />
                {name && (
                  <motion.div
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-spacecraft-green rounded-full"
                    animate={{ opacity: [1, 0.3] }}
                    transition={{ duration: 0.7, repeat: Infinity }}
                  />
                )}
              </div>
            </motion.div>

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={name.trim().length < 2 || isSubmitting || showResponse}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="w-full py-3 px-4 bg-gradient-to-r from-spacecraft-cyan/20 to-spacecraft-purple/20 border border-spacecraft-cyan/50 rounded-sm font-rajdhani uppercase text-sm tracking-widest hover:border-spacecraft-cyan hover:shadow-lg hover:shadow-spacecraft-cyan/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? '⟳ PROCESSING...' : 'GRANT ACCESS'}
            </motion.button>
          </form>

          {/* Response message */}
          {showResponse && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-2"
            >
              <p className="text-spacecraft-green font-rajdhani text-sm text-glow-green">
                ✓ WELCOME ABOARD, {name.toUpperCase()}
              </p>
              <p className="text-spacecraft-cyan font-rajdhani text-xs">
                ACCESS LEVEL: RECRUITER
              </p>
              <p className="text-spacecraft-purple font-rajdhani text-xs">
                MISSION STATUS: ACTIVE
              </p>
            </motion.div>
          )}
        </div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-8 font-rajdhani text-xs text-spacecraft-cyan/50"
        >
          STARSHIP // SUBRAHMANYA | COMMAND INTERFACE v1.0
        </motion.div>
      </motion.div>

      {/* Scan lines */}
      <div className="scan-lines"></div>
    </div>
  );
}
