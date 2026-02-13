// Core types for CyberSecurity Universe

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'professional';
export type Domain = 'offense' | 'defense' | 'cloud' | 'devsecops' | 'grc' | 'ot' | 'leadership';

export interface Resource {
    id: string;
    title: string;
    type: 'book' | 'course' | 'lab' | 'video' | 'article' | 'certification';
    url: string;
    provider?: string;
    cost?: 'free' | 'paid' | 'freemium';
    duration?: string;
}

export interface RoadmapNode {
    id: string;
    title: string;
    description: string;
    whyItMatters: string;
    level: SkillLevel;
    domain: Domain[];
    timeline: string; // e.g., "2-4 weeks"
    prerequisites: string[]; // IDs of prerequisite nodes
    children: string[]; // IDs of child nodes
    resources: Resource[];
    relatedJobs: string[]; // IDs of related job roles
    skills: string[];
    checklistItems: string[];
    x?: number; // Position for visualization
    y?: number;
}

export interface JobRole {
    id: string;
    title: string;
    family: Domain;
    description: string;
    seniorityLevels: {
        entry: string;
        mid: string;
        senior: string;
        lead: string;
        executive?: string;
    };
    keySkills: string[];
    certifications: string[];
    careerPath: {
        from: string[];
        to: string[];
    };
    salaryBand: {
        min: number;
        max: number;
        currency: string;
        experience: string;
    };
    learningPathNodes: string[]; // IDs of roadmap nodes
    typicalResponsibilities: string[];
    demandScore?: number; // 1-10
}

export interface SalaryData {
    roleId: string;
    country: string;
    region?: string;
    experienceLevel: 'entry' | 'mid' | 'senior' | 'lead';
    year: number;
    quarter: number;
    median: number;
    percentile25: number;
    percentile75: number;
    currency: string;
    sampleSize: number;
    confidenceScore: number; // 0-1
    employmentType: 'fulltime' | 'contract' | 'freelance';
    sources: string[];
    lastUpdated: string;
}

export interface SalaryMethodology {
    sources: {
        name: string;
        url: string;
        type: 'api' | 'survey' | 'scraping' | 'government';
        lastAccessed: string;
    }[];
    collectionMethod: string;
    normalizationApproach: string;
    updateFrequency: string;
    minSampleSize: number;
}

export interface ChecklistItem {
    id: string;
    text: string;
    completed: boolean;
    optional: boolean;
}

export interface LearningPath {
    id: string;
    title: string;
    description: string;
    targetRole: string;
    nodes: string[];
    estimatedDuration: string;
    difficulty: SkillLevel;
}

export interface UserProgress {
    userId?: string;
    completedNodes: string[];
    completedChecklists: { [nodeId: string]: string[] };
    bookmarkedRoles: string[];
    lastUpdated: string;
}
