import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2 } from 'lucide-react';

export default function App() {
  const [isFaaahing, setIsFaaahing] = useState(false);

  const triggerFaaah = useCallback(() => {
    setIsFaaahing(true);
    const audio = new Audio('/fah.wav');
audio.play()
  .then(() => console.log('Playback started'))
  .catch(err => console.error('Playback failed:', err));   
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Background Atmosphere */}
      <AnimatePresence>
        {isFaaahing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-red-600 pointer-events-none z-0 blur-[120px]"
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-center gap-12 w-full max-w-md">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <h1 className="text-6xl font-black tracking-tighter italic text-red-500 mb-2">FAAAAAH</h1>
          <p className="text-zinc-500 text-xs uppercase tracking-[0.3em]">Sound Button</p>
        </motion.div>

        {/* Main Interaction Area */}
        <div className="relative w-64 h-64">
          <motion.button
            whileTap={{ scale: 0.9 }}
            animate={isFaaahing ? { 
              scale: [1, 1.1, 1],
              rotate: [0, -3, 3, -3, 0]
            } : {}}
            onClick={triggerFaaah}
            className={`
              absolute inset-0 rounded-full flex flex-col items-center justify-center gap-4 transition-all duration-300
              ${isFaaahing 
                ? 'bg-red-500 shadow-[0_0_80px_rgba(239,68,68,0.6)]' 
                : 'bg-zinc-900 border-4 border-zinc-800 hover:bg-zinc-800'}
            `}
          >
            <Volume2 size={80} className={isFaaahing ? 'animate-pulse' : ''} />
            <span className="font-black text-2xl tracking-widest">REPLAY</span>
          </motion.button>
        </div>

        {/* Instructions for PWA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12 p-4 bg-zinc-900/50 rounded-2xl border border-white/5 text-center backdrop-blur-sm"
        >
          <p className="text-zinc-400 text-[10px] leading-relaxed uppercase tracking-wider">
            To install as an app:<br/>
            Tap <span className="text-white font-bold">Menu</span> then <span className="text-white font-bold">"Add to Home Screen"</span>
          </p>
        </motion.div>
      </div>

      {/* Visual Feedback Ring */}
      <AnimatePresence>
        {isFaaahing && (
          <motion.div
            initial={{ scale: 0.5, opacity: 1 }}
            animate={{ scale: 2.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed w-64 h-64 border-4 border-red-500 rounded-full pointer-events-none"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
