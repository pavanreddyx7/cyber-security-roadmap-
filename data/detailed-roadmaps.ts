
import { RoadmapNode } from '@/lib/types';

// Helper to create simple nodes for the detailed view
const createNode = (id: string, title: string, level: 'beginner' | 'intermediate' | 'advanced' | 'professional', description: string): RoadmapNode => ({
    id,
    title,
    description,
    level,
    whyItMatters: 'Essential knowledge for this path',
    domain: ['offense'], // Default, will be overridden or ignored in specific views
    timeline: '1-2 weeks',
    prerequisites: [],
    children: [],
    skills: [],
    relatedJobs: [],
    checklistItems: [],
    resources: []
});

// Detailed curriculum for "Offensive Security" / "Junior Pentester" path
export const offensiveRoadmapData: RoadmapNode[] = [
    // 1. COMPUTER & CS FOUNDATION
    createNode('cs-basics', 'Computer Basics', 'beginner', 'Hardware, Architecture, Memory management, Basics of computing'),
    createNode('os-concepts', 'Operating Systems', 'beginner', 'Kernel vs User mode, Process management, File systems'),
    createNode('linux-basics', 'Linux Fundamentals', 'beginner', 'CLI, Permissions, File system hierarchy, Bash scripting'),
    createNode('windows-basics', 'Windows Fundamentals', 'beginner', 'Registry, Services, PowerShell, Active Directory basics'),
    createNode('networking-fund', 'Networking', 'beginner', 'OSI Model, TCP/IP, DNS, HTTP, Subnetting'),
    createNode('programming-basics', 'Programming', 'beginner', 'Python for scripting, Basics of C/C++, Reading code'),

    // 2. CYBER SECURITY FUNDAMENTALS
    createNode('cia-triad', 'CIA Triad', 'beginner', 'Confidentiality, Integrity, Availability principles'),
    createNode('threats-vulns', 'Threats & Vulnerabilities', 'beginner', 'Understanding risk, CVSS scores, Common attack vectors'),
    createNode('mitre-attck', 'MITRE ATT&CK', 'intermediate', 'Tactics, Techniques, and Procedures (TTPs) of adversaries'),
    createNode('access-controls', 'Security Controls', 'beginner', 'Authentication, Authorization, Accounting (AAA)'),

    // 3. CORE PENTESTING - Recon
    createNode('recon-osint', 'OSINT', 'intermediate', 'Google Dorking, Shodan, Whois, Social Media intelligence'),
    createNode('surface-mapping', 'Attack Surface Mapping', 'intermediate', 'Subdomain enumeration, Asset discovery, Tech stack analysis'),

    // Enumeration
    createNode('web-enum', 'Web Enumeration', 'intermediate', 'Fuzzing directories, identifying headers, WAF detection'),
    createNode('net-enum', 'Network Enumeration', 'intermediate', 'Nmap scanning, Port enumeration, Service versioning'),
    createNode('ad-enum', 'Active Directory Enum', 'advanced', 'Bloodhound, LDAP queries, User enumeration'),

    // Exploitation
    createNode('owasp-top10', 'Web Exploitation', 'intermediate', 'SQLi, XSS, CSRF, IDOR, and OWASP Top 10 vulnerabilities'),
    createNode('network-exploit', 'Network Exploits', 'advanced', 'Metasploit, Buffer Overflows, Service exploitation'),
    createNode('password-attacks', 'Credential Attacks', 'intermediate', 'Hydra, Hashcat, John the Ripper, Brute forcing'),

    // Privilege Escalation
    createNode('privesc-linux', 'Linux PrivEsc', 'advanced', 'Kernel exploits, Sudo rights, Cron jobs, Suid binaries'),
    createNode('privesc-windows', 'Windows PrivEsc', 'advanced', 'Token manipulation, Unquoted service paths, Kernel exploits'),

    // Post-Exploitation
    createNode('persistence', 'Persistence', 'advanced', 'Creating backdoors, Scheduled tasks, Registry keys'),
    createNode('reporting', 'Reporting', 'professional', 'Writing professional reports, CVSS scoring, Executive summaries')
];

// Map main roadmap IDs to their detailed data
export const detailedRoadmaps: Record<string, RoadmapNode[]> = {
    'junior-pentester': offensiveRoadmapData,
    'offensive-security': offensiveRoadmapData,
    'red-teaming': offensiveRoadmapData,
    // Add mappings for other nodes as created
};
