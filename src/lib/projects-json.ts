import type { Language } from './translations';

export interface ProjectMetadata {
  title: string;
  subtitle: string;
  description: string;
}

export interface ProjectContent {
  overview: string;
  challenge: string;
  solution: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectImages {
  hero: string;
  gallery: string[];
}

export interface ProjectLinks {
  website?: string | null;
  github?: string | null;
  demo?: string | null;
}

export interface ProjectMeta {
  id: string;
  slug: string;
  year: string;
  status: 'completed' | 'in-progress' | 'planned';
  category: string;
  techStack: string[];
  images: ProjectImages;
  links: ProjectLinks;
}

export interface ProjectData {
  id: string;
  slug: string;
  year: string;
  status: 'completed' | 'in-progress' | 'planned';
  category: string;
  techStack: string[];
  images: ProjectImages;
  links: ProjectLinks;
  metadata: ProjectMetadata;
  content: ProjectContent;
  features: ProjectFeature[];
}

// Import project meta files
import foundrypulseMeta from '../locales/projects/foundrypulse/meta.json';
import analyticsMeta from '../locales/projects/analytics/meta.json';
import infrastructureMeta from '../locales/projects/infrastructure/meta.json';

// Import project content files
import foundrypulseEn from '../locales/projects/foundrypulse/en.json';
import foundrypulseHu from '../locales/projects/foundrypulse/hu.json';
import analyticsEn from '../locales/projects/analytics/en.json';
import analyticsHu from '../locales/projects/analytics/hu.json';
import infrastructureEn from '../locales/projects/infrastructure/en.json';
import infrastructureHu from '../locales/projects/infrastructure/hu.json';

const projectContentMap = {
  foundrypulse: {
    en: foundrypulseEn,
    hu: foundrypulseHu
  },
  analytics: {
    en: analyticsEn,
    hu: analyticsHu
  },
  infrastructure: {
    en: infrastructureEn,
    hu: infrastructureHu
  }
};

const projectMetaMap = new Map<string, ProjectMeta>([
  ['foundrypulse', foundrypulseMeta as ProjectMeta],
  ['analytics', analyticsMeta as ProjectMeta],
  ['infrastructure', infrastructureMeta as ProjectMeta],
]);

export function getProject(id: string, language: Language): ProjectData | undefined {
  const meta = projectMetaMap.get(id);
  const content = projectContentMap[id as keyof typeof projectContentMap]?.[language];
  
  if (!meta || !content) {
    return undefined;
  }

  return {
    ...meta,
    metadata: {
      title: content.title,
      subtitle: content.subtitle,
      description: content.description
    },
    content: content.content,
    features: content.features
  };
}

export function getAllProjects(language: Language): ProjectData[] {
  const projectIds = Array.from(projectMetaMap.keys());
  return projectIds
    .map(id => getProject(id, language))
    .filter((project): project is ProjectData => project !== undefined);
}

export function getProjectSlugs(): string[] {
  return Array.from(projectMetaMap.keys());
}