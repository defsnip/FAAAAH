import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface QuickSettingsTileProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  isActive?: boolean;
}

export const QuickSettingsTile: React.FC<QuickSettingsTileProps> = ({ 
  icon: Icon, 
  label, 
  onClick, 
  isActive = false 
}) => {
  return (
    <motion.button
      whileTap={{ scale: 0.92 }}
      onClick={onClick}
      className={`
        flex flex-col items-center justify-center gap-2
        w-full aspect-square rounded-3xl transition-colors duration-200
        ${isActive 
          ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' 
          : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'}
      `}
      id={`tile-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className={`p-3 rounded-full ${isActive ? 'bg-white/20' : 'bg-zinc-700'}`}>
        <Icon size={24} />
      </div>
      <span className="text-xs font-medium tracking-wide uppercase">{label}</span>
    </motion.button>
  );
};
