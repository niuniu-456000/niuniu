/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Play, Pause, Volume2, VolumeX, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';

interface RightVolumeControlProps {
  isPlaying: boolean;
  isMuted: boolean;
  onPlayToggle: (play: boolean) => void;
  onMuteToggle: (mute: boolean) => void;
  onRestart: () => void;
}

export default function RightVolumeControl({
  isPlaying,
  isMuted,
  onPlayToggle,
  onMuteToggle,
  onRestart
}: RightVolumeControlProps) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6 bg-black/5 border border-black/5 p-4 rounded-[4px] backdrop-blur-md">
      {/* Play Button */}
      <button
        onClick={() => onPlayToggle(true)}
        className="group relative flex items-center justify-center cursor-pointer transition-all duration-300"
        title="Play Media"
        id="control-play"
      >
        <span className="sr-only">Play</span>
        <Play className="w-4.5 h-4.5 text-[#555555] hover:text-black transition-colors duration-300 group-hover:scale-110" />
        <span className="absolute right-12 scale-0 group-hover:scale-100 bg-black text-white text-[10px] uppercase font-mono px-2 py-1 rounded-[4px] tracking-wider transition-all duration-200 pointer-events-none whitespace-nowrap">
          Play
        </span>
      </button>

      {/* Pause Button */}
      <button
        onClick={() => onPlayToggle(false)}
        className="group relative flex items-center justify-center cursor-pointer transition-all duration-300"
        title="Pause Media"
        id="control-pause"
      >
        <span className="sr-only">Pause</span>
        <Pause className="w-4.5 h-4.5 text-[#555555] hover:text-black transition-colors duration-300 group-hover:scale-110" />
        <span className="absolute right-12 scale-0 group-hover:scale-100 bg-black text-white text-[10px] uppercase font-mono px-2 py-1 rounded-[4px] tracking-wider transition-all duration-200 pointer-events-none whitespace-nowrap">
          Pause
        </span>
      </button>

      {/* Mute Toggle */}
      <button
        onClick={() => onMuteToggle(!isMuted)}
        className="group relative flex items-center justify-center cursor-pointer transition-all duration-300"
        title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
        id="control-mute"
      >
        <span className="sr-only">{isMuted ? 'Unmute' : 'Mute'}</span>
        {isMuted ? (
          <VolumeX className="w-4.5 h-4.5 text-[#555555] hover:text-black transition-colors duration-300 group-hover:scale-110" />
        ) : (
          <Volume2 className="w-4.5 h-4.5 text-[#555555] hover:text-black transition-colors duration-300 group-hover:scale-110" />
        )}
        <span className="absolute right-12 scale-0 group-hover:scale-100 bg-black text-white text-[10px] uppercase font-mono px-2 py-1 rounded-[4px] tracking-wider transition-all duration-200 pointer-events-none whitespace-nowrap">
          {isMuted ? 'Unmute Voice' : 'Silent Mode'}
        </span>
      </button>

      {/* Restart Button */}
      <button
        onClick={onRestart}
        className="group relative flex items-center justify-center w-10 h-10 rounded-[4px] text-neutral-500 hover:text-black transition-all duration-300"
        title="Restart Intro Video"
        id="control-restart"
      >
        <span className="sr-only">Restart Video</span>
        <RefreshCw className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
        <span className="absolute right-12 scale-0 group-hover:scale-100 bg-black text-white text-[10px] uppercase font-mono px-2 py-1 rounded-[4px] tracking-wider transition-all duration-200 pointer-events-none whitespace-nowrap">
          Replay Intro
        </span>
      </button>

      {/* Small soundwave animation when audio is active */}
      {!isMuted && isPlaying && (
        <div className="flex gap-0.5 justify-center items-end h-5 px-2 mt-1">
          {[1, 2, 3, 4].map((bar) => (
            <motion.div
              key={bar}
              className="w-0.75 bg-neutral-900 rounded-[1px]"
              animate={{
                height: ['4px', `${bar * 5 + 4}px`, '4px']
              }}
              transition={{
                duration: 0.6 + bar * 0.1,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}