import { SalaryData, SalaryMethodology } from '@/lib/types';

export const salaryMethodology: SalaryMethodology = {
    sources: [
        {
            name: 'Glassdoor Salaries',
            url: 'https://www.glassdoor.com/Salaries',
            type: 'survey',
            lastAccessed: '2026-02-01'
        },
        {
            name: 'LinkedIn Salary Insights',
            url: 'https://www.linkedin.com/salary',
            type: 'survey',
            lastAccessed: '2026-02-01'
        },
        {
            name: 'Payscale',
            url: 'https://www.payscale.com',
            type: 'survey',
            lastAccessed: '2026-02-01'
        },
        {
            name: 'Indeed Salary Data',
            url: 'https://www.indeed.com/salaries',
            type: 'scraping',
            lastAccessed: '2026-01-28'
        },
        {
            name: 'U.S. Bureau of Labor Statistics',
            url: 'https://www.bls.gov',
            type: 'government',
            lastAccessed: '2026-01-15'
        },
        {
            name: 'Robert Half Technology Salary Guide 2026',
            url: 'https://www.roberthalf.com/salary-guide',
            type: 'survey',
            lastAccessed: '2026-01-10'
        }
    ],
    collectionMethod: `
    Data is collected through a combination of:
    1. Direct API integration with salary platforms where available
    2. Web scraping from public job postings (no PII collected)
    3. Survey data from recruitment agencies
    4. Government labor statistics
    5. Community-contributed anonymous salary reports
    
    All data points are timestamped and traceable to source.
  `,
    normalizationApproach: `
    Salaries are normalized as follows:
    - Currency conversion to USD using ECB or Open Exchange Rates (30-day average)
    - Adjustments for cost of living when comparing regions (using Numbeo index)
    - Experience buckets: Entry (0-2 years), Mid (3-6 years), Senior (7-12 years), Lead (12+ years)
    - Geographic segmentation: Country > Region/State > Metro vs Non-metro
    - Employment type separated: Full-time, Contract, Freelance
    - Total compensation includes: Base + Bonus + Equity (where reported)
  `,
    updateFrequency: 'Quarterly (every 3 months)',
    minSampleSize: 50
};

// Sample salary data - In production, this would come from a database
export const salaryData: SalaryData[] = [
    // Security Analyst - USA
    {
        roleId: 'security-analyst',
        country: 'USA',
        region: 'National',
        experienceLevel: 'entry',
        year: 2026,
        quarter: 1,
        median: 72000,
        percentile25: 62000,
        percentile75: 85000,
        currency: 'USD',
        sampleSize: 1247,
        confidenceScore: 0.95,
        employmentType: 'fulltime',
        sources: ['Glassdoor', 'LinkedIn', 'Indeed'],
        lastUpdated: '2026-02-01'
    },
    {
        roleId: 'security-analyst',
        country: 'USA',
        region: 'National',
        experienceLevel: 'mid',
        year: 2026,
        quarter: 1,
        median: 95000,
        percentile25: 82000,
        percentile75: 112000,
        currency: 'USD',
        sampleSize: 1589,
        confidenceScore: 0.96,
        employmentType: 'fulltime',
        sources: ['Glassdoor', 'LinkedIn', 'Payscale', 'Indeed'],
        lastUpdated: '2026-02-01'
    },
    {
        roleId: 'security-analyst',
        country: 'USA',
        region: 'National',
        experienceLevel: 'senior',
        year: 2026,
        quarter: 1,
        median: 118000,
        percentile25: 102000,
        percentile75: 138000,
        currency: 'USD',
        sampleSize: 892,
        confidenceScore: 0.93,
        employmentType: 'fulltime',
        sources: ['Glassdoor', 'LinkedIn', 'Robert Half'],
        lastUpdated: '2026-02-01'
    },

    // Penetration Tester - USA
    {
        roleId: 'penetration-tester',
        country: 'USA',
        region: 'National',
        experienceLevel: 'entry',
        year: 2026,
        quarter: 1,
        median: 88000,
        percentile25: 75000,
        percentile75: 102000,
        currency: 'USD',
        sampleSize: 567,
        confidenceScore: 0.89,
        employmentType: 'fulltime',
        sources: ['Glassdoor', 'LinkedIn'],
        lastUpdated: '2026-02-01'
    },
    {
        roleId: 'penetration-tester',
        country: 'USA',
        region: 'National',
        experienceLevel: 'mid',
        year: 2026,
        quarter: 1,
        median: 115000,
        percentile25: 98000,
        percentile75: 135000,
        currency: 'USD',
        sampleSize: 734,
        confidenceScore: 0.91,
        employmentType: 'fulltime',
        sources: ['Glassdoor', 'LinkedIn', 'Indeed'],
        lastUpdated: '2026-02-01'
    },
    {
        roleId: 'penetration-tester',
        country: 'USA',
        region: 'National',
        experienceLevel: 'senior',
        year: 2026,
        quarter: 1,
        median: 145000,
        percentile25: 125000,
        percentile75: 170000,
        currency: 'USD',
        sampleSize: 423,
        confidenceScore: 0.87,
        employmentType: 'fulltime',
        sources: ['Glassdoor', 'Robert Half'],
        lastUpdated: '2026-02-01'
    },

    // Cloud Security Engineer - USA
    {
        roleId: 'cloud-security-engineer',
        country: 'USA',
        region: 'National',
        experienceLevel: 'entry',
        year: 2026,
        quarter: 1,
        median: 102000,
        percentile25: 88000,
        percentile75: 118000,
        currency: 'USD',
        sampleSize: 892,
        confidenceScore: 0.93,
        employmentType: 'fulltime',
        sources: ['Glassdoor', 'LinkedIn', 'Indeed'],
        lastUpdated: '2026-02-01'
    },
    {
        roleId: 'cloud-security-engineer',
        country: 'USA',
        region: 'National',
        experienceLevel: 'mid',
        year: 2026,
        quarter: 1,
        median: 135000,
        percentile25: 118000,
        percentile75: 158000,
        currency: 'USD',
        sampleSize: 1134,
        confidenceScore: 0.95,
        employmentType: 'fulltime',
        sources: ['Glassdoor', 'LinkedIn', 'Payscale', 'Indeed'],
        lastUpdated: '2026-02-01'
    },
    {
        roleId: 'cloud-security-engineer',
        country: 'USA',
        region: 'National',
        experienceLevel: 'senior',
        year: 2026,
        quarter: 1,
        median: 168000,
        percentile25: 145000,
        percentile75: 195000,
        currency: 'USD',
        sampleSize: 678,
        confidenceScore: 0.91,
        employmentType: 'fulltime',
        sources: ['Glassdoor', 'LinkedIn', 'Robert Half'],
        lastUpdated: '2026-02-01'
    },

    // SOC Analyst - USA
    {
        roleId: 'soc-analyst',
        country: 'USA',
        region: 'National',
        experienceLevel: 'entry',
        year: 2026,
        quarter: 1,
        median: 68000,
        percentile25: 58000,
        percentile75: 78000,
        currency: 'USD',
        sampleSize: 1456,
        confidenceScore: 0.96,
        employmentType: 'fulltime',
        sources: ['Glassdoor', 'LinkedIn', 'Indeed'],
        lastUpdated: '2026-02-01'
    },
    {
        roleId: 'soc-analyst',
        country: 'USA',
        region: 'National',
        experienceLevel: 'mid',
        year: 2026,
        quarter: 1,
        median: 92000,
        percentile25: 78000,
        percentile75: 108000,
        currency: 'USD',
        sampleSize: 1823,
        confidenceScore: 0.97,
        employmentType: 'fulltime',
        sources: ['Glassdoor', 'LinkedIn', 'Payscale', 'Indeed'],
        lastUpdated: '2026-02-01'
    },
    {
        roleId: 'soc-analyst',
        country: 'USA',
        region: 'National',
        experienceLevel: 'senior',
        year: 2026,
        quarter: 1,
        median: 125000,
        percentile25: 108000,
        percentile75: 145000,
        currency: 'USD',
        sampleSize: 987,
        confidenceScore: 0.94,
        employmentType: 'fulltime',
        sources: ['Glassdoor', 'LinkedIn', 'Robert Half'],
        lastUpdated: '2026-02-01'
    },

    // DevSecOps Engineer - USA
    {
        roleId: 'devsecops-engineer',
        country: 'USA',
        region: 'National',
        experienceLevel: 'mid',
        year: 2026,
        quarter: 1,
        median: 128000,
        percentile25: 110000,
        percentile75: 148000,
        currency: 'USD',
        sampleSize: 645,
        confidenceScore: 0.90,
        employmentType: 'fulltime',
        sources: ['Glassdoor', 'LinkedIn', 'Indeed'],
        lastUpdated: '2026-02-01'
    },
    {
        roleId: 'devsecops-engineer',
        country: 'USA',
        region: 'National',
        experienceLevel: 'senior',
        year: 2026,
        quarter: 1,
        median: 162000,
        percentile25: 142000,
        percentile75: 185000,
        currency: 'USD',
        sampleSize: 423,
        confidenceScore: 0.87,
        employmentType: 'fulltime',
        sources: ['Glassdoor', 'LinkedIn'],
        lastUpdated: '2026-02-01'
    },

    // International Data - India
    {
        roleId: 'security-analyst',
        country: 'India',
        region: 'Bangalore',
        experienceLevel: 'entry',
        year: 2026,
        quarter: 1,
        median: 650000,
        percentile25: 520000,
        percentile75: 780000,
        currency: 'INR',
        sampleSize: 342,
        confidenceScore: 0.85,
        employmentType: 'fulltime',
        sources: ['Glassdoor', 'Naukri'],
        lastUpdated: '2026-02-01'
    },
    {
        roleId: 'cloud-security-engineer',
        country: 'India',
        region: 'Bangalore',
        experienceLevel: 'mid',
        year: 2026,
        quarter: 1,
        median: 1850000,
        percentile25: 1500000,
        percentile75: 2200000,
        currency: 'INR',
        sampleSize: 287,
        confidenceScore: 0.83,
        employmentType: 'fulltime',
        sources: ['Glassdoor', 'Naukri'],
        lastUpdated: '2026-02-01'
    },

    // UK Data
    {
        roleId: 'penetration-tester',
        country: 'UK',
        region: 'London',
        experienceLevel: 'mid',
        year: 2026,
        quarter: 1,
        median: 55000,
        percentile25: 48000,
        percentile75: 65000,
        currency: 'GBP',
        sampleSize: 178,
        confidenceScore: 0.79,
        employmentType: 'fulltime',
        sources: ['Glassdoor', 'Indeed UK'],
        lastUpdated: '2026-02-01'
    },
    {
        roleId: 'security-architect',
        country: 'UK',
        region: 'London',
        experienceLevel: 'senior',
        year: 2026,
        quarter: 1,
        median: 95000,
        percentile25: 82000,
        percentile75: 115000,
        currency: 'GBP',
        sampleSize: 134,
        confidenceScore: 0.76,
        employmentType: 'fulltime',
        sources: ['Glassdoor', 'Hays'],
        lastUpdated: '2026-02-01'
    }
];

// Helper function to get salary data for a specific role
export function getSalaryByRole(roleId: string, country?: string, experienceLevel?: string) {
    return salaryData.filter(data => {
        let match = data.roleId === roleId;
        if (country) match = match && data.country === country;
        if (experienceLevel) match = match && data.experienceLevel === experienceLevel;
        return match;
    });
}

// Helper function to get all countries with data
export function getAvailableCountries(): string[] {
    return Array.from(new Set(salaryData.map(d => d.country)));
}

// Helper function to format salary
export function formatSalary(amount: number, currency: string): string {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    return formatter.format(amount);
}
