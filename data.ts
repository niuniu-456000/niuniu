/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommercialProject, LabExperiment, ArchiveItem } from './types';

export const COMMERCIAL_PROJECTS: CommercialProject[] = [
  {
    id: 'zephyr-hmi',
    title: 'Zephyr Autonomous HMI',
    subtitle: 'Next-Generation Autonomous Vehicle Spatial UI System',
    category: 'UI/UX & Spatial HMI',
    year: '2025',
    coverImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200&auto=format&fit=crop',
    description: 'A revolutionary, multi-dimensional human-machine interface for next-gen electric vehicles, featuring real-time AI-assisted spatial rendering, predictive routing, and responsive ambient lighting.',
    details: {
      client: 'Zephyr Mobility Corp',
      services: ['HMI/UX Strategy', '3D UI Engineering', 'Motion Graphics', 'Generative Acoustics'],
      aiTech: ['Gemini Spatial Vision API', 'Three.js Native Render', 'Neural Asset Sizer'],
      concept: 'To merge the digital workspace and relaxed mobility into an unified, zero-cognitive-load dashboard that adaptively updates based on the driver’s vitals and environment.',
      highlights: [
        '94% reduction in driver visual search time via dynamic bento widget allocation',
        'Immersive spatial audio cues synchronizing with fluid ambient light bursts',
        'Zero-latency vector rendering of multi-lane perception grids'
      ]
    },
    gallery: [
      {
        title: 'Cinematic HUD Interface',
        description: 'Heads-up display adapting to changing sunlight through real-time contrast auto-calibration.',
        colorScale: ['#0A0A0A', '#1F1F1F', '#10B981', '#34D399']
      },
      {
        title: 'Bento Spatial System Control',
        description: 'Modular widget arrangement responsive to tactile proximity and gaze-tracking gestures.',
        colorScale: ['#000000', '#262626', '#3B82F6', '#60A5FA']
      }
    ]
  },
  {
    id: 'tsinghua-metaverse',
    title: 'Tsinghua Heritage Metaverse',
    subtitle: 'Immersive Spatial Narrative of Tang Dynasty Craftsmanship',
    category: 'Spatial Visuals & Exhibition',
    year: '2024',
    coverImage: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1200&auto=format&fit=crop',
    description: 'An interactive virtual archive showcasing centuries-old Tang lacquerware and porcelain, developed and hosted inside a real-time responsive Web3 canvas driven by spatial semantic prompts.',
    details: {
      client: 'Tsinghua Academy Research Group',
      services: ['Spatial Layout Design', '3D Asset Sculpting', 'Generative Storyboards', 'Lighting Direction'],
      aiTech: ['Midjourney Custom Models', 'Polycam 3D Meshing', 'Stable Diffusion ControlNet'],
      concept: 'Bridging the classical physical wisdom of Tsinghua’s design philosophies with the unbounded scale of generative spatial virtual reality.',
      highlights: [
        'Over 120 historic artifacts meticulously reconstructed using custom neural meshes',
        'Winner of the Academic Innovation Specimen Award, Tsinghua University, 2024',
        'Integrated multi-user synchronous audio chat with ambient noise filters'
      ]
    },
    gallery: [
      {
        title: 'Luminous Lacquer Pavilion',
        description: 'Vibrant vermilion and gold gradients simulating physical micro-refraction patterns under simulated sunlight.',
        colorScale: ['#1A0505', '#B91C1C', '#F59E0B', '#FFFBEB']
      },
      {
        title: 'Porcelain Spatial Echoes',
        description: 'Virtual showroom using minimalist porcelain blues contrasted with heavy structural slate architecture.',
        colorScale: ['#040D1A', '#1E3A8A', '#3B82F6', '#EFF6FF']
      }
    ]
  },
  {
    id: 'aura-packaging',
    title: 'Aura Premium GenAI Identity',
    subtitle: 'Dynamic Brand Ecosystem and Packaging Design System',
    category: 'GenAI Brand Identity',
    year: '2025',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    description: 'An eco-luxury skincare brand identity where every piece of digital and physical packaging contains unique generative artwork reflecting local soil pH and precipitation levels on harvest day.',
    details: {
      client: 'Aura Skincare Ltd',
      services: ['Generative Identity Strategy', 'Sustainable Ink Specs', 'Dynamic Web App', 'Asset Pipelines'],
      aiTech: ['SVG Parameter Synthesis Modulo', 'Dynamic Web Canvas API', 'Gemini Color Matcher'],
      concept: 'Replacing static, monolithic corporate logos with fluid, living brand signatures that celebrate natural fluctuation and ecological authenticity.',
      highlights: [
        '100% unique algorithmic design for each production batch cataloged on-chain',
        'Custom packaging template printed with water-based soy inks on organic hemp fibers',
        'Interactive client dashboard revealing the sensory parameters of their specific formula'
      ]
    },
    gallery: [
      {
        title: 'Dynamic Logo Typology',
        description: 'Variable weight sans-serif adjusting to weather metrics.',
        colorScale: ['#1C1917', '#44403C', '#F5F5F4', '#E7E5E4']
      },
      {
        title: 'Generative Texture Maps',
        description: 'Fine organic grain patterns computed at runtime representing rain-intervals.',
        colorScale: ['#2E2528', '#8F8F8F', '#DECBB7', '#F6F3F1']
      }
    ]
  }
];

export const LAB_EXPERIMENTS: LabExperiment[] = [
  {
    id: 'brand-spec',
    title: 'Brand Identity Synthesizer',
    subtitle: 'Infinite Visual Core Guidelines and Grid Specs',
    discipline: 'Generative Brand Ecosystem',
    tech: ['Tailwind v4 Variables', 'SVG Math Matrix', 'TypeScript Geometry'],
    description: 'An interactive algorithm demonstrating how a brand concept translates step-by-step into structural geometry, professional grid baselines, and bespoke typography constraints. Select a stylistic attitude to generate a live brand kit below.',
    demoType: 'brand-spec'
  },
  {
    id: 'theme-harmonizer',
    title: 'UI Theme Palette Harmonizer',
    subtitle: 'High-Contrast Semantic Color Systems & Type Scales',
    discipline: 'UI/UX Architecture Research',
    tech: ['WCAG APCA Contrast Calculators', 'Dynamic OKLCH Modulators', 'Fluid Typography Engine'],
    description: 'A playground illustrating the delicate math behind responsive visual hierarchies. Tweak luminance, key accent hue, and typography line density to preview a structural page design instantly.',
    demoType: 'theme-harmonizer'
  },
  {
    id: 'prompt-visualizer',
    title: 'Visual Core Prompt Visualizer',
    subtitle: 'Transform Design Briefs to UI Layout Wireframes',
    discipline: 'AI Creative Automation',
    tech: ['Semantic Mapping', 'CSS Layout Grid Generators', 'Generative Decorative Accents'],
    description: 'Write or choose key brand design adjectives to see how advanced design constraints instantly manifest physical bento structures, margins, and hierarchy configurations on the viewport.',
    demoType: 'prompt-visualizer'
  }
];

export const ARCHIVE_ITEMS: ArchiveItem[] = [
  {
    id: 'arch-1',
    date: '2025.11',
    title: 'Winner of Red Dot Award: Design Concept 2025',
    type: 'Award',
    venue: 'Singapore Red Dot Museum',
    description: 'Awarded to "Aura Generative Packaging Ecosystem" for pioneering zero-waste physical graphics backed by responsive generative design pipelines.',
    extraInfo: 'International design jury selected Aura from over 4,200 worldwide submissions across 48 countries.'
  },
  {
    id: 'arch-2',
    date: '2025.04',
    title: 'Keynote: "Design Logic & Large Language Models"',
    type: 'Lecture',
    venue: 'Tsinghua Academy of Fine Arts (Academy Hall)',
    description: 'Delivered an academic presentation on structuring multimodal design tokens to control generative fidelity on web interfaces.',
    extraInfo: 'Attended by 600+ students, researchers, and tech executives, outlining the next decade of AI-native creative leadership.'
  },
  {
    id: 'arch-3',
    date: '2024.10',
    title: '"Fluid Boundaries" Solo Exhibition',
    type: 'Exhibition',
    venue: 'Today Art Museum, Beijing',
    description: 'A multi-sensory physical-digital landscape installation using real-time generative visual streams responding to ambient sound waves and human movement.',
    extraInfo: 'Curated by Prof. Wang of Tsinghua Design. The exhibition ran for 30 days and received over 15,000 visitors.'
  },
  {
    id: 'arch-4',
    date: '2024.03',
    title: 'Research Paper Proposal: Semantic UI Skeletons',
    type: 'Research',
    venue: 'Fine Arts and Technology Journal (Vol 12)',
    description: 'Authored article discussing the integration of constraint-based layout engines with generative spatial models for adaptive vehicle interfaces.',
    extraInfo: 'Peer-reviewed research detailing mathematical frameworks to maintain brand compliance inside dynamic runtime layouts.'
  }
];