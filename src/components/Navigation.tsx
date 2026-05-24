/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TabType } from '../types';
import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Home, Compass, Layers, Archive } from 'lucide-react';

interface NavigationProps {
  currentTab: TabType;
  onChangeTab: (tab: TabType) => void;
}

export default function Navigation({ currentTab, onChangeTab }: NavigationProps) {
  const navItems: { label: string; value: TabType; icon: ReactNode }[] = [
    { label: 'SELECTED', value: 'commercial', icon: <Layers className="w-3.5 h-3.5" /> },
    { label: 'AIGC LAB', value: 'lab', icon: <Compass className="w-3.5 h-3.5" /> },
    { label: 'INFO', value: 'archives', icon: <Archive className="w-3.5 h-3.5" /> }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-10 py-5 flex justify-between items-center bg-transparent backdrop-blur-sm">
      {/* Brand Logo or Custom Monogram */}
      <div 
        onClick={() => onChangeTab('home')} 
        className="cursor-pointer flex items-center gap-3 active:scale-95 transition-transform"
        id="nav-logo"
      >
        < img 
          src="https://raw.githubusercontent.com/niuniu-456000/niuniu/main/logo.svg" 
          alt="Logo" 
          className="h-3.5 tracking-tight"
          style={{ filter: 'brightness(0)' }}
          onError={(e) => {
            // Fallback: If logo.svg fails to load, draw a minimalist typographic branding
            e.currentTarget.style.display = 'none';
            const f = document.getElementById('nav-fallback-logo');
            if (f) f.style.display = 'flex';
          }}
        />
        <div id="nav-fallback-logo" className="hidden items-center gap-2">
          <span className="font-vogue italic font-bold text-sm md:text-base tracking-wider text-[#000000]">niuniu.</span>
          <span className="text-[8px] font-mono tracking-widest text-[#666666] px-1.5 py-0.5 border border-[#000000]/10 rounded-[4px]">AI</span>
        </div>
      </div>

      {/* Navigation items */}
      <div className="flex gap-10 font-sans text-[13px] uppercase tracking-[0.1em] text-[#000000]">
        {navItems.map((item) => {
          const isActive = currentTab === item.value;
          return (
            <button
              key={item.value}
              onClick={() => onChangeTab(item.value)}
              className={`py-1 cursor-pointer transition-colors duration-300 relative ${
                isActive ? 'text-[#000000] font-medium opacity-100' : 'text-[#000000]/70 hover:text-[#000000]'
              }`}
              id={`nav-item-${item.value}`}
            >
              <span>{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#000000]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}