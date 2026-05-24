/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, GraduationCap, Award, Sparkles, Orbit } from 'lucide-react';
import { TabType } from '../types';

interface HeroViewProps {
  onExplore: (tab: TabType) => void;
}

export default function HeroView({ onExplore }: HeroViewProps) {
  const [hoveredButton, setHoveredButton] = useState<'commercial' | 'lab' | null>(null);

  // Left button is selected by default; right is selected only when specifically hovered.
  // This guarantees there is always exactly one selected button and no two selected concurrently.
  const isLeftSelected = hoveredButton !== 'lab';
  const isRightSelected = hoveredButton === 'lab';

  const selectedClass = "bg-black text-white border-transparent shadow-lg scale-100";
  const unselectedClass = "bg-transparent text-black border-black/25 shadow-none";

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col justify-center min-h-[90vh] xl:min-h-[1080px] pt-32 pb-24 px-12">
      {/* Left Column Text Wrapper (constrains width to roughly 45%-50% on large views) */}
      <div className="max-w-md md:max-w-lg lg:max-w-[50%] xl:max-w-[45%] flex flex-col justify-center">
        {/* Main Large Display Typography */}
        <h1 className="font-vogue italic text-[10vw] md:text-[8vw] lg:text-[6.8vw] xl:text-[6.4rem] leading-[0.85] mb-8 select-none text-black">
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            AI Full-Chain
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            Designer
          </motion.span>
        </h1>

        {/* Narrative Subtext in Chinese with high contrast typography and layout */}
        <div className="mb-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-black text-[14px] tracking-[0.16em] opacity-90 leading-[1.8] text-justify font-sans"
          >
            毕业于清华美院，深耕设计十余载。跨界金融、科技与教育，以 AI 驱动全链路设计价值。专注品牌构建、UI/UX 体验、IP 创意与空间视觉叙事，定义智能时代的创作边界。
          </motion.p>
        </div>

        {/* Button deck to trigger other views */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={() => onExplore('commercial')}
            onMouseEnter={() => setHoveredButton('commercial')}
            onMouseLeave={() => setHoveredButton(null)}
            className={`group flex items-center justify-center border font-semibold text-xs py-3.5 px-6 rounded-[4px] transition-all duration-300 active:scale-95 cursor-pointer tracking-wider uppercase ${
              isLeftSelected ? selectedClass : unselectedClass
            }`}
            id="hero-explore-commercial"
          >
            Explore Selected
          </button>

          <button
            onClick={() => onExplore('lab')}
            onMouseEnter={() => setHoveredButton('lab')}
            onMouseLeave={() => setHoveredButton(null)}
            className={`group flex items-center justify-center border font-semibold text-xs py-3.5 px-6 rounded-[4px] transition-all duration-300 active:scale-95 cursor-pointer tracking-wider uppercase backdrop-blur-sm ${
              isRightSelected ? selectedClass : unselectedClass
            }`}
            id="hero-explore-lab"
          >
            Enter AIGC Lab
          </button>
        </motion.div>
      </div>
    </div>
  );
}