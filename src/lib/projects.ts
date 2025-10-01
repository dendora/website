import { type Language } from './translations';

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface TechStackItem {
  category: string;
  tech: string;
}

export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  logo?: {
    src: string;
    alt: string;
    background: string;
  };
  features: ProjectFeature[];
  techStack: TechStackItem[];
  conclusion: string;
  gallery?: {
    src: string;
    alt: string;
  }[];
  liveUrl?: string;
  githubUrl?: string;
}

// Project data organized by language
export const projectsData: Record<Language, Record<string, ProjectData>> = {
  hu: {
    foundrypulse: {
      id: 'foundrypulse',
      slug: 'foundrypulse',
      title: 'FoundryPulse',
      subtitle: 'Öntőipari termeléskövetés és minőségbiztosítás',
      description: 'A FoundryPulse egy átfogó megoldás az öntőipari gyártási folyamatok valós idejű monitorozására és optimalizálására. A platform egyesíti a termeléskövetést, minőségbiztosítást és prediktív karbantartást egy intuitív, modern felületen.',
      logo: {
        src: '/foundrypulse-wordmark.png',
        alt: 'FoundryPulse logó öntőkanállal és pulzus ikonnal',
        background: 'bg-[#0B0D10]'
      },
      features: [
        {
          title: 'Valós idejű termeléskövetés',
          description: 'Folyamatos monitoring és automatikus adatgyűjtés'
        },
        {
          title: 'Minőségbiztosítási rendszer',
          description: 'Integrált minőségkontroll és hibaelemzés'
        },
        {
          title: 'Prediktív karbantartás',
          description: 'AI-alapú előrejelzések a karbantartási igényekről'
        },
        {
          title: 'Testreszabható dashboard',
          description: 'Személyre szabható felület és riportok'
        }
      ],
      techStack: [
        {
          category: 'Frontend',
          tech: 'React, TypeScript, Tailwind CSS, Framer Motion'
        },
        {
          category: 'Backend',
          tech: 'Go, PostgreSQL, Redis, MQTT protokoll'
        },
        {
          category: 'Architektúra',
          tech: 'Kubernetes, Docker, mikroszolgáltatások'
        },
        {
          category: 'UI/UX',
          tech: 'Figma design rendszer, responzív design'
        },
        {
          category: 'Tesztelés',
          tech: 'Jest, Cypress, Go testing, automatizált CI/CD'
        }
      ],
      conclusion: 'A FoundryPulse projekt demonstrálja modern, skálázható ipari IoT megoldás fejlesztését. A mikroszolgáltatás architektúra és valós idejű adatfeldolgozás kombinációja megbízható és hatékony rendszert eredményez.'
    },
    analytics: {
      id: 'analytics',
      slug: 'analytics',
      title: 'Analytics Platform',
      subtitle: 'Fejlett adatelemzési és jelentési platform',
      description: 'Egy átfogó analytics platform, amely komplex adatforrásokat egyesít és valós idejű insights-ot biztosít üzleti döntéshozatalhoz.',
      features: [
        {
          title: 'Többforrású adatintegráció',
          description: 'Különböző adatbázisok és API-k összekötése'
        },
        {
          title: 'Valós idejű dashboardok',
          description: 'Interaktív vizualizációk és riportok'
        },
        {
          title: 'ML-alapú előrejelzések',
          description: 'Gépi tanulás algoritmusok üzleti prognosztikákhoz'
        }
      ],
      techStack: [
        {
          category: 'Frontend',
          tech: 'React, D3.js, Chart.js, TypeScript'
        },
        {
          category: 'Backend',
          tech: 'Python, FastAPI, Pandas, NumPy'
        },
        {
          category: 'Adatbázis',
          tech: 'PostgreSQL, ClickHouse, Redis'
        }
      ],
      conclusion: 'A platform demonstrálja a modern adattudomány és full-stack fejlesztés egyesítését skálázható enterprise megoldásban.'
    }
  },
  en: {
    foundrypulse: {
      id: 'foundrypulse',
      slug: 'foundrypulse',
      title: 'FoundryPulse',
      subtitle: 'Foundry production tracking and quality assurance',
      description: 'FoundryPulse is a comprehensive solution for real-time monitoring and optimization of foundry manufacturing processes. The platform combines production tracking, quality assurance, and predictive maintenance in an intuitive, modern interface.',
      logo: {
        src: '/foundrypulse-wordmark.png',
        alt: 'FoundryPulse wordmark with pouring ladle and pulse icon',
        background: 'bg-[#0B0D10]'
      },
      features: [
        {
          title: 'Real-time production tracking',
          description: 'Continuous monitoring and automatic data collection'
        },
        {
          title: 'Quality assurance system',
          description: 'Integrated quality control and defect analysis'
        },
        {
          title: 'Predictive maintenance',
          description: 'AI-powered predictions for maintenance needs'
        },
        {
          title: 'Customizable dashboard',
          description: 'Personalized interface and reporting'
        }
      ],
      techStack: [
        {
          category: 'Frontend',
          tech: 'React, TypeScript, Tailwind CSS, Framer Motion'
        },
        {
          category: 'Backend',
          tech: 'Go, PostgreSQL, Redis, MQTT protocol'
        },
        {
          category: 'Architecture',
          tech: 'Kubernetes, Docker, microservices'
        },
        {
          category: 'UI/UX',
          tech: 'Figma design system, responsive design'
        },
        {
          category: 'Testing',
          tech: 'Jest, Cypress, Go testing, automated CI/CD'
        }
      ],
      conclusion: 'The FoundryPulse project demonstrates the development of a modern, scalable industrial IoT solution. The combination of microservice architecture and real-time data processing results in a reliable and efficient system.'
    },
    analytics: {
      id: 'analytics',
      slug: 'analytics',
      title: 'Analytics Platform',
      subtitle: 'Advanced data analytics and reporting platform',
      description: 'A comprehensive analytics platform that unifies complex data sources and provides real-time insights for business decision making.',
      features: [
        {
          title: 'Multi-source data integration',
          description: 'Connect various databases and APIs seamlessly'
        },
        {
          title: 'Real-time dashboards',
          description: 'Interactive visualizations and reports'
        },
        {
          title: 'ML-powered predictions',
          description: 'Machine learning algorithms for business forecasting'
        }
      ],
      techStack: [
        {
          category: 'Frontend',
          tech: 'React, D3.js, Chart.js, TypeScript'
        },
        {
          category: 'Backend',
          tech: 'Python, FastAPI, Pandas, NumPy'
        },
        {
          category: 'Database',
          tech: 'PostgreSQL, ClickHouse, Redis'
        }
      ],
      conclusion: 'The platform demonstrates the unification of modern data science and full-stack development in a scalable enterprise solution.'
    }
  }
};

// Helper function to get project by slug and language
export function getProject(slug: string, language: Language): ProjectData | null {
  return projectsData[language][slug] || null;
}

// Helper function to get all project slugs
export function getAllProjectSlugs(): string[] {
  return Object.keys(projectsData.en);
}