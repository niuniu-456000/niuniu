/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Volume2, VolumeX, X, Layers, Film, Eye } from 'lucide-react';

interface LabProject {
  id: string;
  title: string;
  caption: string;
  tech: string[];
  src: string;
  imageSrc?: string;
  additionalImages?: string[];
  additionalVideos?: string[];
  type: 'video' | 'image' | 'combined';
}

const VIDEO_PROJECTS: LabProject[] = [
  {
    id: 'v-keep',
    title: 'KEEP服饰宣发TVC',
    caption: 'midjourney + seedance LIBtv platform production',
    tech: ['seedance', 'AE', 'Lottie'],
    src: 'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/video%20project1-%20keep.mp4',
    type: 'video'
  },
  {
    id: 'v-robot',
    title: '他山科技机器人线上宣传视频',
    caption: 'image +seedance LIBtv platform production',
    tech: ['seedance', 'Redshift', 'AIGC'],
    src: 'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/video%20project2-robot%20.mp4',
    type: 'video'
  },
  {
    id: 'v-cosmic1',
    title: '12星座游戏设计 「 宇宙仲裁者 」',
    caption: 'Midjourney +image +seedance LIBtv platform production',
    tech: ['seedance', 'After Effects'],
    src: 'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/video%20project3-cosmic%20%20.mp4',
    type: 'video'
  },
  {
    id: 'v-cosmic2',
    title: '宇宙仲裁者游戏- 天蝎座关卡',
    caption: 'image +seedance LIBtv platform production',
    tech: ['seedance', 'Premiere Pro'],
    src: 'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/video%20project4-cosmic%20%20.mp4',
    type: 'video'
  },
  {
    id: 'v-cosmic3',
    title: '宇宙仲裁者游戏- 天蝎座关卡',
    caption: 'image +seedance LIBtv platform production',
    tech: ['seedance', 'Resolve'],
    src: 'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/video%20project5-cosmic%20%20.mp4',
    type: 'video'
  },
  {
    id: 'v-coffee',
    title: '瑞幸TVC概念广告',
    caption: 'image +Kling+ LIBtv platform production',
    tech: ['keling', 'AE Motion'],
    src: 'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/video%20project6-%20coffee.mp4',
    type: 'video'
  },
  {
    id: 'v-art1',
    title: '2024｜ AI平台参赛作品 「万物生」',
    caption: 'midjourney + hailuo',
    tech: ['hailuo', 'AE Fluid Dynamics'],
    src: 'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/video%20project7-%20art1.mp4',
    type: 'video'
  },
  {
    id: 'v-tvc',
    title: '味因美TVC商业广告',
    caption: 'image + nano +seedance LIBtv platform production',
    tech: ['seedance', 'Colour Grading'],
    src: 'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/video%20project8-%20TVC.jpg',
    type: 'image'
  },
  {
    id: 'v-jewelry',
    title: '珍珠奢品TVC广告demo',
    caption: 'midjourney + hailuo',
    tech: ['hailuo', 'After Effects'],
    src: 'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/Jewelry.mp4',
    type: 'video'
  }
];

const VISUAL_PROJECTS: LabProject[] = [
  {
    id: 'co-kuigang',
    title: '国潮IP角色「魁罡兽」与视频推广',
    caption: 'Traditional Chinese Mythological Creature "Kui Gang Beast" IP Design & Cinematic Teaser',
    tech: ['Midjourney Art', 'ComfyUI', 'Kling AI'],
    imageSrc: 'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/%E9%AD%81%E5%88%9A01.png',
    additionalImages: [
      'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/%E9%AD%81%E5%88%9A01.png',
      'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/%E9%AD%81%E5%88%9A03.png'
    ],
    src: 'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/%E9%AD%81%E7%BD%A1480.mp4',
    type: 'combined'
  },
  {
    id: 'co-dandelion',
    title: '「蒲公英 - 牛小蒲」IP潮玩｜盲盒｜推广视频',
    caption: '"Dandelion - Niu Xiao Pu" Designer Toy IP & Blind Box Cinematic Showcase',
    tech: ['Character IP', 'Toy Design', 'Kling AI'],
    imageSrc: 'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/%E5%B0%8F%E8%92%B2%E8%8B%B1%E6%96%87%E6%B5%B7%E6%8A%A5.png',
    additionalImages: [
      'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/%E5%B0%8F%E8%92%B2%E8%8B%B1%E6%96%87%E6%B5%B7%E6%8A%A5.png',
      'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/%E7%89%9B%E5%B0%8F%E8%92%B2%E6%B5%B7%E6%8A%A5%E4%B8%AD%E6%96%87.png'
    ],
    src: 'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/%E5%B0%8F%E8%92%B2%E5%AE%A3%E4%BC%A0.mp4',
    additionalVideos: [
      'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/%E5%B0%8F%E8%92%B2%E5%AE%A3%E4%BC%A0.mp4',
      'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/%E5%B0%8F%E8%92%B2.mp4'
    ],
    type: 'combined'
  },
  {
    id: 'co-libtv-award',
    title: '获得LIBTV先锋设计师称号',
    caption: 'Recipient of the LIBTV Pioneer Designer Honor & Award Showcase Video',
    tech: ['Pioneer Designer', 'Certificate of Honor', 'Event Video'],
    imageSrc: 'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/%E5%85%88%E9%94%8B.png',
    src: 'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/%E8%8E%B7%E5%A5%961.mp4',
    type: 'combined'
  }
];

interface LabCombinedProjectRowProps {
  key?: string;
  project: LabProject;
  index: number;
  onOpenLightbox: (project: LabProject) => void;
}

function LabCombinedProjectRow({ project, index, onOpenLightbox }: LabCombinedProjectRowProps) {
  const [hovered, setHovered] = useState(false);
  const [imageIdx, setImageIdx] = useState(0);
  const [videoIdx, setVideoIdx] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const hasAdditionalVideos = project.additionalVideos && project.additionalVideos.length > 0;
  const currentVideo = hasAdditionalVideos ? project.additionalVideos![videoIdx] : project.src;

  useEffect(() => {
    const el = videoRef.current;
    if (el) {
      el.load();
      if (hovered) {
        el.play().catch(err => console.warn('Hover play blocked:', err));
      } else {
        el.pause();
        el.currentTime = 0;
      }
    }
  }, [hovered, currentVideo]);

  const hasAdditionalImages = project.additionalImages && project.additionalImages.length > 0;
  const currentImage = hasAdditionalImages ? project.additionalImages![imageIdx] : project.imageSrc;
  const isKuigang = currentImage && (currentImage.includes('%E9%AD%81%E5%88%9A') || currentImage.includes('kuigang'));
  const isAwardProject = project.id === 'co-libtv-award';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
      className="flex flex-col gap-6 border-b border-black/10 pb-16 last:border-0 group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpenLightbox(project)}
    >
      {/* Label and tech indicators row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 text-left">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[10px] md:text-[11px] tracking-widest text-[#999999] hover:text-black transition-colors duration-200 font-bold uppercase shrink-0">
            CASE STUDY {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="font-sans text-lg md:text-xl font-medium text-[#111111] group-hover:text-black transition-colors duration-200 tracking-tight leading-snug">
            {project.title}
          </h3>
        </div>
        
        {/* Style tags on right */}
        <div className="flex flex-wrap gap-1.5 self-start md:self-center">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[8px] md:text-[9px] text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-[4px] uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Side-by-Side Split Visual-Motion Panels (ONE per row) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left pane: Static concept frame */}
        <div className={`w-full aspect-video rounded-[6px] overflow-hidden relative shadow-sm group/pane-left ${
          isAwardProject ? 'bg-[#0c0d10]' : 'bg-[#ECEEF2]'
        }`}>
          <img
            referrerPolicy="no-referrer"
            src={currentImage}
            alt={`${project.title} Styleframe`}
            className={`w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isAwardProject 
                ? 'object-contain scale-[0.9] group-hover/pane-left:scale-[0.93]' 
                : isKuigang 
                  ? 'object-cover scale-[1.10] -translate-x-[4.5%] group-hover/pane-left:scale-[1.13]' 
                  : 'object-cover group-hover/pane-left:scale-[1.025]'
            }`}
          />
          {/* Label Tag removed to keep the styleframe image clean */}

          {/* Additional Images pagination indicators inside the image panel */}
          {hasAdditionalImages && (
            <div 
              className="absolute bottom-3 right-3 z-30 flex gap-1.5 bg-black/65 backdrop-blur-md px-2 py-1 rounded-[4px] border border-white/10 pointer-events-auto"
              onClick={(e) => e.stopPropagation()} // Prevent lightbox trigger
            >
              {project.additionalImages!.map((_, imgUrlIdx) => (
                <button
                  key={imgUrlIdx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setImageIdx(imgUrlIdx);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    imageIdx === imgUrlIdx ? 'bg-emerald-400 scale-125' : 'bg-white/40 hover:bg-white/90'
                  }`}
                  aria-label={`View styleframe ${imgUrlIdx + 1}`}
                />
              ))}
            </div>
          )}
          
          {/* Subtle zoom indicator on overlay */}
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>

        {/* Right pane: Pre-vis motion file */}
        <div className="w-full aspect-video rounded-[6px] overflow-hidden relative bg-black shadow-sm group/pane-right">
          <video
            ref={videoRef}
            src={currentVideo}
            playsInline
            muted
            loop
            preload="metadata"
            className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/pane-right:scale-[1.025]"
          />
          {/* Label Tag top-left with dark style matching Hover to play tag on the right */}
          <div className="absolute top-3 left-3 z-10 bg-black/50 backdrop-blur-md text-white/90 text-[8px] font-mono uppercase tracking-[0.18em] px-2.5 py-1 rounded-[3px] shadow-sm">
            {isAwardProject ? 'LIBTV艺术类别获奖作品' : 'AI 动态演绎 / AI MOTION'} {hasAdditionalVideos && `(${videoIdx + 1}/${project.additionalVideos!.length})`}
          </div>

          {/* Multiple Videos pagination indicators inside the video panel */}
          {hasAdditionalVideos && (
            <div 
              className="absolute bottom-3 right-3 z-30 flex gap-1.5 bg-black/65 backdrop-blur-md px-2 py-1 rounded-[4px] border border-white/10 pointer-events-auto"
              onClick={(e) => e.stopPropagation()} // Prevent lightbox trigger
            >
              {project.additionalVideos!.map((_, vUrlIdx) => (
                <button
                  key={vUrlIdx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setVideoIdx(vUrlIdx);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    videoIdx === vUrlIdx ? 'bg-emerald-400 scale-125' : 'bg-white/40 hover:bg-white/90'
                  }`}
                  aria-label={`View video version ${vUrlIdx + 1}`}
                />
              ))}
            </div>
          )}
          
          {/* Status overlay when mouse not hovered */}
          {!hasAdditionalVideos && (
            <div className="absolute top-3 right-3 z-10 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-[3px] text-[8px] font-mono text-white/90 uppercase tracking-widest transition-all duration-300 opacity-100 group-hover:opacity-0">
              Hover to Play / 静音预演
            </div>
          )}
        </div>
      </div>

      {/* Dynamic bottom details container */}
      <div className="flex justify-between items-center text-neutral-400 font-mono text-[10px] md:text-xs">
        <span className="tracking-wider uppercase text-left truncate max-w-[70%]">
          {project.caption}
        </span>
        <button
          className="flex items-center gap-1.5 text-black hover:text-emerald-500 font-sans text-[11px] font-semibold tracking-widest uppercase transition-colors duration-200 cursor-pointer"
        >
          <Play className="w-3.5 h-3.5 text-black fill-black hover:fill-emerald-500" />
          全屏预览 / BROADCAST VIEW
        </button>
      </div>
    </motion.div>
  );
}

export default function LabView() {
  const [activeTab, setActiveTab] = useState<'video' | 'visual'>('video');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Lightbox States
  const [lightboxProject, setLightboxProject] = useState<LabProject | null>(null);
  const [lightboxImageIdx, setLightboxImageIdx] = useState<number>(0);
  const [lightboxVideoIdx, setLightboxVideoIdx] = useState<number>(0);
  const [lightboxPlaying, setLightboxPlaying] = useState<boolean>(true);
  const [lightboxMuted, setLightboxMuted] = useState<boolean>(false);
  const lightboxVideoRef = useRef<HTMLVideoElement>(null);

  const getProjects = () => {
    return activeTab === 'video' ? VIDEO_PROJECTS : VISUAL_PROJECTS;
  };

  const handleOpenLightbox = (project: LabProject) => {
    setLightboxProject(project);
    setLightboxPlaying(true);
    setLightboxMuted(false);
    setLightboxImageIdx(0);
    setLightboxVideoIdx(0);
  };

  const handleCloseLightbox = () => {
    setLightboxProject(null);
  };

  const toggleLightboxPlay = () => {
    const video = lightboxVideoRef.current;
    if (!video) return;
    if (lightboxPlaying) {
      video.pause();
      setLightboxPlaying(false);
    } else {
      video.play().catch((err) => console.warn(err));
      setLightboxPlaying(true);
    }
  };

  const toggleLightboxMute = () => {
    const video = lightboxVideoRef.current;
    if (!video) return;
    video.muted = !lightboxMuted;
    setLightboxMuted(!lightboxMuted);
  };

  // Keyboard escape handle
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto py-24 px-6 min-h-[95vh] flex flex-col justify-start">
      {/* 1. Header Portion */}
      <div className="mb-14 text-left">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-mono text-xs tracking-[0.2em] text-[#666666] uppercase">EXPERIMENTAL LAB</span>
        </div>
        <h2 className="font-vogue text-4xl md:text-5xl font-light text-black leading-tight">
          AIGC Video & <br />
          <span className="italic">Cinematic Art Lab</span>
        </h2>
        <p className="text-neutral-500 text-xs md:text-sm max-w-xl mt-4 uppercase tracking-[0.16em] font-mono leading-relaxed">
          这里记录了AI视频生成、概念游戏美术、商业广告TVC以及多模态AI影像的最前沿设计演练
        </p>
      </div>

      {/* 2. Sleek Interactive Tab Switcher */}
      <div className="flex border-b border-black/10 gap-8 mb-12 overflow-x-auto scroller-hidden">
        {[
          { key: 'video', label: '视频 / MOTION & VIDEO', icon: Film },
          { key: 'visual', label: '视觉与视频 / VISUAL & VIDEO', icon: Layers }
        ].map((tab) => {
          const isActive = activeTab === tab.key;
          const Icon = tab.icon;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as 'video' | 'visual')}
              className={`flex items-center gap-2 pb-4 border-b-2 font-mono text-xs tracking-wider transition-all duration-300 whitespace-nowrap outline-none cursor-pointer ${
                isActive 
                  ? 'border-black text-black font-semibold' 
                  : 'border-transparent text-neutral-400 hover:text-black/70'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-black' : 'text-neutral-400'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 3. Conditional Content Layout */}
      <div>
        <AnimatePresence mode="popLayout">
          {activeTab === 'video' ? (
            /* Standard Grid for Video-Only category */
            <motion.div
              key="video-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {getProjects().map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col group cursor-pointer"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => handleOpenLightbox(project)}
                >
                  {/* Aspect Ratio Box 16:9 */}
                  <div className="w-full aspect-video rounded-[6px] overflow-hidden relative bg-[#ECEEF2] flex items-center justify-center shadow-sm">
                    {project.type === 'video' ? (
                      <div className="w-full h-full relative">
                        <video
                          src={project.src}
                          playsInline
                          muted
                          loop
                          preload="metadata"
                          className="w-full h-full object-cover transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                          ref={(el) => {
                            if (el) {
                              if (hoveredId === project.id) {
                                el.play().catch(err => console.warn('Hover play blocked:', err));
                              } else {
                                el.pause();
                                el.currentTime = 0;
                              }
                            }
                          }}
                        />
                        {/* Hover Muted Indicator overlay */}
                        <div className="absolute top-2.5 right-2.5 z-10 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-[3px] text-[8px] font-mono text-white/90 uppercase tracking-widest pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Hover To Play
                        </div>
                      </div>
                    ) : (
                      <img
                        referrerPolicy="no-referrer"
                        src={project.src}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                      />
                    )}

                    {/* Ambient Dynamic Play/View Button Overlay */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-11 h-11 rounded-full bg-white/95 shadow-md flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        {project.type === 'video' ? (
                          <Play className="w-4.5 h-4.5 text-black fill-black ml-0.5" />
                        ) : (
                          <Eye className="w-4.5 h-4.5 text-black" />
                        )}
                      </div>
                    </div>

                    {/* Discipline Tag bottom left */}
                    <div className="absolute bottom-3 left-3 z-10 bg-white/90 backdrop-blur-md border border-black/5 px-2.5 py-0.5 rounded-[4px] text-[8px] font-mono text-black font-semibold uppercase tracking-wider shadow-sm pointer-events-none">
                      {project.tech[0]}
                    </div>
                  </div>

                  {/* Description Labels */}
                  <div className="pt-3 pb-1 flex flex-col gap-1 text-left items-start">
                    <h4 className="text-[#333333] text-[14px] font-normal tracking-tight leading-snug text-left truncate w-full group-hover:text-black transition-colors duration-200">
                      {project.title}
                    </h4>
                    <p className="text-[#888888] text-[11px] font-light font-mono leading-relaxed text-left truncate w-full">
                      {project.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Premium 1-per-row combined video-image layout category */
            <motion.div
              key="visual-rows"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-16 md:gap-24"
            >
              {getProjects().map((project, index) => (
                <LabCombinedProjectRow
                  key={project.id}
                  project={project}
                  index={index}
                  onOpenLightbox={handleOpenLightbox}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 4. Elegant Fullscreen Media Lightbox Grid */}
      <AnimatePresence>
        {lightboxProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-8"
            onClick={handleCloseLightbox}
          >
            {/* Main Interactive Modal Box */}
            <motion.div
              initial={{ scale: 0.95, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 12 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className={`w-full ${lightboxProject.type === 'combined' ? 'max-w-5xl' : 'max-w-4xl'} bg-[#09090B] border border-white/5 shadow-2x rounded-[12px] overflow-hidden flex flex-col relative`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Media Body */}
              <div className="w-full relative bg-black flex items-center justify-center">
                {lightboxProject.type === 'combined' ? (
                  /* Dual Screen side-by-side presentation mode */
                  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-6 bg-[#09090B]">
                    {/* Left Screen: Concept Art */}
                    <div className={`relative aspect-video w-full rounded-[6px] overflow-hidden flex items-center justify-center ${
                      lightboxProject.id === 'co-libtv-award' ? 'bg-[#0c0d10]' : 'bg-neutral-950'
                    }`}>
                      <img
                        src={lightboxProject.additionalImages ? lightboxProject.additionalImages[lightboxImageIdx] : lightboxProject.imageSrc}
                        alt={`${lightboxProject.title} Styleframe`}
                        className={`w-full h-full select-none transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          lightboxProject.id === 'co-libtv-award'
                            ? 'object-contain scale-[0.9]'
                            : (() => {
                                const imgUrl = lightboxProject.additionalImages ? lightboxProject.additionalImages[lightboxImageIdx] : lightboxProject.imageSrc;
                                return imgUrl && (imgUrl.includes('%E9%AD%81%E5%88%9A') || imgUrl.includes('kuigang'));
                              })() ? 'object-cover scale-[1.10] -translate-x-[4.5%]' : 'object-cover'
                        }`}
                        referrerPolicy="no-referrer"
                      />
                      {/* Styleframe label removed inside lightbox for cleaner image view */}

                      {/* Pagination dot toggles inside lightbox Left Screen */}
                      {lightboxProject.additionalImages && lightboxProject.additionalImages.length > 0 && (
                        <div 
                          className="absolute bottom-2.5 right-2.5 z-30 flex gap-1.5 bg-black/65 backdrop-blur-md px-2.5 py-1.5 rounded-[4px] border border-white/10 pointer-events-auto"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {lightboxProject.additionalImages.map((_, imgUrlIdx) => (
                            <button
                              key={imgUrlIdx}
                              onClick={(e) => {
                                e.stopPropagation();
                                setLightboxImageIdx(imgUrlIdx);
                              }}
                              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                                lightboxImageIdx === imgUrlIdx ? 'bg-emerald-400 scale-125' : 'bg-white/40 hover:bg-white/90'
                              }`}
                              aria-label={`View styleframe ${imgUrlIdx + 1}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Right Screen: AI Motion pre-vis loop */}
                    <div className="relative aspect-video w-full rounded-[6px] overflow-hidden bg-neutral-950 flex flex-col justify-end group/broad">
                      <video
                        ref={lightboxVideoRef}
                        src={lightboxProject.additionalVideos ? lightboxProject.additionalVideos[lightboxVideoIdx] : lightboxProject.src}
                        autoPlay
                        playsInline
                        loop
                        muted={lightboxMuted}
                        className="w-full h-full object-cover"
                        onPlay={() => setLightboxPlaying(true)}
                        onPause={() => setLightboxPlaying(false)}
                      />
                      <div className="absolute top-2.5 left-2.5 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-[3px] text-[8px] font-mono uppercase tracking-widest text-white/90">
                        {lightboxProject.id === 'co-libtv-award' ? 'LIBTV艺术类别获奖作品' : 'AI 动态演绎 / MOTION'} {lightboxProject.additionalVideos && `(${lightboxVideoIdx + 1}/${lightboxProject.additionalVideos.length})`}
                      </div>

                      {/* Pagination dot toggles inside lightbox Right Screen */}
                      {lightboxProject.additionalVideos && lightboxProject.additionalVideos.length > 0 && (
                        <div 
                          className="absolute bottom-2.5 left-2.5 z-30 flex gap-1.5 bg-black/65 backdrop-blur-md px-2.5 py-1.5 rounded-[4px] border border-white/10 pointer-events-auto"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {lightboxProject.additionalVideos.map((_, vUrlIdx) => (
                            <button
                              key={vUrlIdx}
                              onClick={(e) => {
                                e.stopPropagation();
                                setLightboxVideoIdx(vUrlIdx);
                                // After changing, reload and play
                                setTimeout(() => {
                                  if (lightboxVideoRef.current) {
                                    lightboxVideoRef.current.load();
                                    lightboxVideoRef.current.play().catch(err => console.warn(err));
                                  }
                                }, 50);
                              }}
                              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                                lightboxVideoIdx === vUrlIdx ? 'bg-emerald-400 scale-[1.2] shadow-sm shadow-[#00C17C]/50' : 'bg-white/40 hover:bg-white/90'
                              }`}
                              aria-label={`View video version ${vUrlIdx + 1}`}
                            />
                          ))}
                        </div>
                      )}

                      {/* Video playback buttons overlay */}
                      <div className="absolute bottom-2.5 right-2.5 flex items-center gap-2 bg-black/80 backdrop-blur-md border border-white/10 px-2.5 py-1.5 rounded-[4px] z-20">
                        <button
                          onClick={(e) => { e.stopPropagation(); toggleLightboxPlay(); }}
                          className="text-white hover:text-emerald-400 p-0.5 transition-colors cursor-pointer"
                        >
                          {lightboxPlaying ? <Pause className="w-3.5 h-3.5 text-white" /> : <Play className="w-3.5 h-3.5 text-white fill-white" />}
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); toggleLightboxMute(); }}
                          className="text-white hover:text-emerald-400 p-0.5 transition-colors cursor-pointer"
                        >
                          {lightboxMuted ? <VolumeX className="w-3.5 h-3.5 text-white" /> : <Volume2 className="w-3.5 h-3.5 text-white" />}
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Standard Media Presentation Model */
                  <div className="w-full aspect-video relative flex items-center justify-center">
                    {lightboxProject.type === 'video' ? (
                      <>
                        <video
                          ref={lightboxVideoRef}
                          src={lightboxProject.src}
                          autoPlay
                          playsInline
                          loop
                          muted={lightboxMuted}
                          className="w-full h-full object-contain"
                          onPlay={() => setLightboxPlaying(true)}
                          onPause={() => setLightboxPlaying(false)}
                        />
                        {/* Dark Controls Bar */}
                        <div className="absolute bottom-0 inset-x-0 h-14 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between px-6 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
                          <div className="flex items-center gap-4">
                            <button onClick={toggleLightboxPlay} className="text-white hover:text-emerald-400 transition-colors cursor-pointer">
                              {lightboxPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white fill-white" />}
                            </button>
                            <button onClick={toggleLightboxMute} className="text-white hover:text-emerald-400 transition-colors cursor-pointer">
                              {lightboxMuted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
                            </button>
                          </div>
                          <div className="text-[10px] font-mono text-neutral-400 whitespace-nowrap hidden sm:block">
                            16:9 CINEMATIC RENDER
                          </div>
                        </div>
                      </>
                    ) : (
                      <img
                        referrerPolicy="no-referrer"
                        src={lightboxProject.src}
                        alt={lightboxProject.title}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                )}

                {/* Close Dialog Button */}
                <button
                  onClick={handleCloseLightbox}
                  className="absolute top-4 right-4 z-[101] w-8 h-8 rounded-full bg-black/60 border border-white/10 hover:bg-black/90 flex items-center justify-center text-white/80 hover:text-white transition-all duration-200 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom detail row */}
              <div className="p-6 text-left border-t border-white/5 bg-[#0C0C0E]">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-[#888888] uppercase block mb-1">
                      {lightboxProject.caption}
                    </span>
                    <h3 className="text-white text-lg font-normal tracking-tight">
                      {lightboxProject.title}
                    </h3>
                  </div>
                  {/* Visual specs tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {lightboxProject.tech.map((tag, tIdx) => (
                      <span key={tIdx} className="bg-white/5 border border-white/10 font-mono text-[9px] text-[#CCCCCC] px-2 py-0.5 rounded-[4px] uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
