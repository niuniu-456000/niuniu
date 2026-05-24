/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type TabType = 'home' | 'commercial' | 'lab' | 'archives';

export interface CommercialProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  coverImage: string;
  description: string;
  details: {
    client: string;
    services: string[];
    aiTech: string[];
    concept: string;
    highlights: string[];
  };
  gallery: {
    title: string;
    description: string;
    colorScale: string[];
  }[];
}

export interface LabExperiment {
  id: string;
  title: string;
  subtitle: string;
  discipline: string;
  tech: string[];
  description: string;
  demoType: 'theme-harmonizer' | 'brand-spec' | 'prompt-visualizer';
}

export interface ArchiveItem {
  id: string;
  date: string;
  title: string;
  type: 'Exhibition' | 'Lecture' | 'Research' | 'Award';
  venue: string;
  description: string;
  extraInfo?: string;
}