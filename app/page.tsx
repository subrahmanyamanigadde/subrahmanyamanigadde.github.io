'use client';

import { useState, useEffect } from 'react';
import BootSequence from '@/components/BootSequence';
import VisitorIdentification from '@/components/VisitorIdentification';
import SpacecraftEntry from '@/components/SpacecraftEntry';

type Stage = 'boot' | 'identification' | 'entry' | 'dashboard';

export default function Home() {
  const [stage, setStage] = useState<Stage>('boot');
  const [visitorName, setVisitorName] = useState<string>('');
  const [sessionId, setSessionId] = useState<string>('');

  useEffect(() => {
    // Generate session ID
    const id = `SESSION_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    setSessionId(id);
  }, []);

  const handleBootComplete = () => {
    setStage('identification');
  };

  const handleIdentificationComplete = (name: string) => {
    setVisitorName(name);
    setStage('entry');
  };

  const handleEntryComplete = () => {
    setStage('dashboard');
  };

  return (
    <main className="w-full h-screen bg-spacecraft-darker overflow-hidden">
      {stage === 'boot' && <BootSequence onComplete={handleBootComplete} />}
      {stage === 'identification' && <VisitorIdentification onComplete={handleIdentificationComplete} />}
      {stage === 'entry' && <SpacecraftEntry visitorName={visitorName} onComplete={handleEntryComplete} />}
      {stage === 'dashboard' && (
        <div className="w-full h-full flex items-center justify-center bg-spacecraft-darker">
          <div className="text-center">
            <h1 className="text-4xl font-orbitron text-spacecraft-cyan mb-4 animate-pulse-glow">WELCOME ABOARD, {visitorName.toUpperCase()}</h1>
            <p className="text-spacecraft-green font-rajdhani text-lg">COMMAND CENTER INITIALIZING...</p>
            <p className="text-spacecraft-purple font-rajdhani text-sm mt-4">Session ID: {sessionId}</p>
          </div>
        </div>
      )}
    </main>
  );
}
