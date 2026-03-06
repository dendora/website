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
  heroHtml?: string;
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
  sortOrder?: number;
  cardBackground?: string;
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
  sortOrder?: number;
  cardBackground?: string;
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
import dataPlatformMeta from '../locales/projects/data-platform/meta.json';
import andihealthMeta from '../locales/projects/andihealth/meta.json';
import arielPilismarotMeta from '../locales/projects/ariel-pilismarot/meta.json';

// Import project content files
import foundrypulseEn from '../locales/projects/foundrypulse/en.json';
import foundrypulseHu from '../locales/projects/foundrypulse/hu.json';
import dataPlatformEn from '../locales/projects/data-platform/en.json';
import dataPlatformHu from '../locales/projects/data-platform/hu.json';
import andihealthEn from '../locales/projects/andihealth/en.json';
import andihealthHu from '../locales/projects/andihealth/hu.json';
import arielPilismarotEn from '../locales/projects/ariel-pilismarot/en.json';
import arielPilismarotHu from '../locales/projects/ariel-pilismarot/hu.json';

const projectContentMap = {
  foundrypulse: {
    en: foundrypulseEn,
    hu: foundrypulseHu
  },
  'data-platform': {
    en: dataPlatformEn,
    hu: dataPlatformHu
  },
  andihealth: {
    en: andihealthEn,
    hu: andihealthHu
  },
  'ariel-pilismarot': {
    en: arielPilismarotEn,
    hu: arielPilismarotHu
  }
};

const projectMetaMap = new Map<string, ProjectMeta>([
  ['foundrypulse', foundrypulseMeta as ProjectMeta],
  ['andihealth', andihealthMeta as ProjectMeta],
  ['data-platform', dataPlatformMeta as ProjectMeta],
  ['ariel-pilismarot', arielPilismarotMeta as ProjectMeta],
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
    .filter((project): project is ProjectData => project !== undefined)
    .sort((a, b) => (a.sortOrder ?? 99) - (b.sortOrder ?? 99));
}

export function getProjectSlugs(): string[] {
  return Array.from(projectMetaMap.keys());
}