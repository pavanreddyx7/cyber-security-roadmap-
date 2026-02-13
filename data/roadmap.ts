import { RoadmapNode } from '@/lib/types';

export const roadmapData: RoadmapNode[] = [
    // FOUNDATIONS
    {
        id: 'foundations',
        title: 'Cybersecurity Foundations',
        description: 'Core concepts, terminology, and fundamental principles of cybersecurity',
        whyItMatters: 'Essential baseline knowledge for any cybersecurity career path',
        level: 'beginner',
        domain: ['entry', 'defense', 'offense', 'grc', 'cloud', 'appsec', 'iam'],
        timeline: '3-4 weeks',
        prerequisites: [],
        children: ['networking-basics', 'os-fundamentals', 'security-principles'],
        skills: ['CIA Triad', 'Threat Modeling', 'Risk Assessment', 'Security Terminology'],
        relatedJobs: ['security-analyst', 'soc-analyst'],
        checklistItems: [
            'Understand CIA Triad (Confidentiality, Integrity, Availability)',
            'Learn about threat actors and attack vectors',
            'Study common vulnerabilities (OWASP Top 10)',
            'Understand defense in depth strategy',
            'Complete intro to cybersecurity course'
        ],
        resources: [
            {
                id: 'res-1',
                title: 'CompTIA Security+ Study Guide',
                type: 'book',
                url: 'https://www.comptia.org/certifications/security',
                provider: 'CompTIA',
                cost: 'paid'
            },
            {
                id: 'res-2',
                title: 'Cybersecurity Basics',
                type: 'course',
                url: 'https://www.coursera.org/cybersecurity',
                provider: 'Coursera',
                cost: 'freemium',
                duration: '4 weeks'
            }
        ]
    },

    // NETWORKING
    {
        id: 'networking-basics',
        title: 'Network Fundamentals',
        description: 'TCP/IP, OSI model, routing, switching, and network protocols',
        whyItMatters: 'Networking is the backbone of cybersecurity - most attacks occur over networks',
        level: 'beginner',
        domain: ['entry', 'defense', 'offense', 'cloud', 'ot'],
        timeline: '4-6 weeks',
        prerequisites: ['foundations'],
        children: ['network-security', 'wireless-security'],
        skills: ['TCP/IP', 'Subnetting', 'DNS', 'HTTP/HTTPS', 'Wireshark', 'OSI Model'],
        relatedJobs: ['network-security-engineer', 'soc-analyst'],
        checklistItems: [
            'Master OSI and TCP/IP models',
            'Practice subnetting calculations',
            'Capture and analyze packets with Wireshark',
            'Understand routing and switching basics',
            'Learn network protocols (DNS, DHCP, ARP)',
            'Set up a home lab network'
        ],
        resources: [
            {
                id: 'res-3',
                title: 'Network+ Certification',
                type: 'certification',
                url: 'https://www.comptia.org/certifications/network',
                provider: 'CompTIA',
                cost: 'paid'
            }
        ]
    },

    // OPERATING SYSTEMS
    {
        id: 'os-fundamentals',
        title: 'Operating System Internals',
        description: 'Windows, Linux, and macOS architecture, file systems, processes, and permissions',
        whyItMatters: 'Deep OS knowledge is critical for both defense and exploitation',
        level: 'beginner',
        domain: ['defense', 'offense'],
        timeline: '6-8 weeks',
        prerequisites: ['foundations'],
        children: ['linux-hardening', 'windows-security', 'system-administration'],
        skills: ['Linux CLI', 'Windows PowerShell', 'File Permissions', 'Process Management', 'System Logs'],
        relatedJobs: ['system-administrator', 'security-analyst'],
        checklistItems: [
            'Master Linux command line (bash)',
            'Learn Windows PowerShell scripting',
            'Understand file system permissions',
            'Study process and service management',
            'Configure and read system logs',
            'Set up dual-boot lab environment'
        ],
        resources: [
            {
                id: 'res-4',
                title: 'Linux Command Line Basics',
                type: 'course',
                url: 'https://www.udemy.com/linux-command-line',
                provider: 'Udemy',
                cost: 'paid',
                duration: '6 weeks'
            }
        ]
    },

    // SECURITY PRINCIPLES
    {
        id: 'security-principles',
        title: 'Core Security Principles',
        description: 'Authentication, authorization, encryption, hashing, and cryptography basics',
        whyItMatters: 'These principles underpin all security controls and technologies',
        level: 'beginner',
        domain: ['defense', 'grc'],
        timeline: '3-4 weeks',
        prerequisites: ['foundations'],
        children: ['cryptography', 'identity-access-management'],
        skills: ['Encryption', 'Hashing', 'Digital Signatures', 'PKI', 'Access Control Models'],
        relatedJobs: ['security-architect', 'security-analyst'],
        checklistItems: [
            'Understand symmetric vs asymmetric encryption',
            'Learn hashing algorithms (SHA, MD5)',
            'Study PKI and certificate management',
            'Learn authentication mechanisms (MFA, SSO)',
            'Understand RBAC, MAC, DAC models'
        ],
        resources: []
    },

    // NETWORK SECURITY
    {
        id: 'network-security',
        title: 'Network Security',
        description: 'Firewalls, IDS/IPS, VPNs, network segmentation, and monitoring',
        whyItMatters: 'Protect the perimeter and internal network infrastructure',
        level: 'intermediate',
        domain: ['defense'],
        timeline: '6-8 weeks',
        prerequisites: ['networking-basics'],
        children: ['firewall-management', 'intrusion-detection'],
        skills: ['Firewall Configuration', 'IDS/IPS', 'VPN', 'Network Segmentation', 'SIEM'],
        relatedJobs: ['network-security-engineer', 'soc-analyst'],
        checklistItems: [
            'Configure firewall rules (iptables, pfSense)',
            'Deploy and tune Snort/Suricata IDS',
            'Set up VPN (OpenVPN, WireGuard)',
            'Implement network segmentation (VLANs)',
            'Practice SIEM log analysis'
        ],
        resources: []
    },

    // OFFENSIVE SECURITY PATH
    {
        id: 'offensive-security',
        title: 'Offensive Security Fundamentals',
        description: 'Ethical hacking, penetration testing methodologies, and attack techniques',
        whyItMatters: 'Understanding attacker techniques is essential for effective defense',
        level: 'intermediate',
        domain: ['offense'],
        timeline: '8-12 weeks',
        prerequisites: ['networking-basics', 'os-fundamentals'],
        children: ['web-exploitation', 'network-exploitation', 'privilege-escalation'],
        skills: ['Metasploit', 'Nmap', 'Burp Suite', 'OWASP Testing Guide', 'Exploit Development'],
        relatedJobs: ['penetration-tester', 'red-team-operator'],
        checklistItems: [
            'Master reconnaissance techniques',
            'Learn vulnerability scanning (Nmap, Nessus)',
            'Practice exploitation with Metasploit',
            'Complete HackTheBox or TryHackMe boxes',
            'Study OWASP Top 10 vulnerabilities',
            'Understand ethical hacking frameworks (PTES, OWASP)'
        ],
        resources: [
            {
                id: 'res-5',
                title: 'Penetration Testing with Kali Linux',
                type: 'course',
                url: 'https://www.offensive-security.com/pwk-oscp/',
                provider: 'Offensive Security',
                cost: 'paid',
                duration: '90 days'
            }
        ]
    },

    // WEB APPLICATION SECURITY
    {
        id: 'web-exploitation',
        title: 'Web Application Security',
        description: 'SQL injection, XSS, CSRF, authentication bypass, OWASP Top 10',
        whyItMatters: 'Web apps are the #1 attack vector for most organizations',
        level: 'intermediate',
        domain: ['offense', 'defense'],
        timeline: '8-10 weeks',
        prerequisites: ['offensive-security'],
        children: ['api-security', 'secure-coding'],
        skills: ['Burp Suite', 'OWASP ZAP', 'SQLMap', 'XSS', 'SQL Injection', 'CSRF'],
        relatedJobs: ['application-security-engineer', 'penetration-tester'],
        checklistItems: [
            'Master Burp Suite for web testing',
            'Exploit SQL injection vulnerabilities',
            'Practice XSS (reflected, stored, DOM)',
            'Bypass authentication mechanisms',
            'Test for CSRF and SSRF',
            'Complete OWASP WebGoat training'
        ],
        resources: [
            {
                id: 'res-6',
                title: 'Web Application Penetration Testing',
                type: 'course',
                url: 'https://portswigger.net/web-security',
                provider: 'PortSwigger',
                cost: 'free',
                duration: '10 weeks'
            }
        ]
    },

    // CLOUD SECURITY
    {
        id: 'cloud-security',
        title: 'Cloud Security',
        description: 'AWS, Azure, GCP security, IAM, cloud architecture, container security',
        whyItMatters: 'Cloud infrastructure is now the primary target for attackers',
        level: 'intermediate',
        domain: ['cloud', 'defense'],
        timeline: '10-12 weeks',
        prerequisites: ['networking-basics', 'security-principles'],
        children: ['aws-security', 'kubernetes-security', 'serverless-security'],
        skills: ['AWS IAM', 'Azure Security', 'GCP Security', 'CloudTrail', 'Container Security'],
        relatedJobs: ['cloud-security-engineer', 'cloud-architect'],
        checklistItems: [
            'Learn AWS security services (IAM, GuardDuty, Security Hub)',
            'Understand Azure security controls',
            'Study GCP security architecture',
            'Practice cloud penetration testing',
            'Secure Kubernetes and Docker',
            'Implement cloud security monitoring'
        ],
        resources: [
            {
                id: 'res-7',
                title: 'AWS Certified Security Specialty',
                type: 'certification',
                url: 'https://aws.amazon.com/certification/certified-security-specialty/',
                provider: 'AWS',
                cost: 'paid'
            }
        ]
    },

    // CRYPTOGRAPHY
    {
        id: 'cryptography',
        title: 'Applied Cryptography',
        description: 'Encryption algorithms, key management, TLS/SSL, cryptographic attacks',
        whyItMatters: 'Cryptography protects data at rest and in transit',
        level: 'advanced',
        domain: ['defense', 'offense'],
        timeline: '6-8 weeks',
        prerequisites: ['security-principles'],
        children: ['blockchain-security', 'quantum-cryptography'],
        skills: ['RSA', 'AES', 'ECC', 'TLS/SSL', 'Key Management', 'Cryptanalysis'],
        relatedJobs: ['cryptographer', 'security-architect'],
        checklistItems: [
            'Implement encryption algorithms',
            'Break weak cryptographic implementations',
            'Configure TLS/SSL properly',
            'Study key management best practices',
            'Understand quantum-resistant cryptography'
        ],
        resources: []
    },

    // MALWARE ANALYSIS
    {
        id: 'malware-analysis',
        title: 'Malware Analysis & Reverse Engineering',
        description: 'Static and dynamic analysis, debuggers, disassemblers, sandbox analysis',
        whyItMatters: 'Understand how malware works to detect and prevent infections',
        level: 'advanced',
        domain: ['defense', 'offense'],
        timeline: '12-16 weeks',
        prerequisites: ['os-fundamentals'],
        children: ['advanced-malware', 'threat-hunting'],
        skills: ['IDA Pro', 'Ghidra', 'x64dbg', 'Assembly', 'Python Scripting', 'Sandbox Analysis'],
        relatedJobs: ['malware-analyst', 'threat-researcher'],
        checklistItems: [
            'Learn x86/x64 assembly',
            'Master Ghidra or IDA Pro',
            'Analyze malware samples safely',
            'Understand packing and obfuscation',
            'Develop YARA rules',
            'Build a malware analysis lab'
        ],
        resources: [
            {
                id: 'res-8',
                title: 'Practical Malware Analysis',
                type: 'book',
                url: 'https://practicalmalwareanalysis.com/',
                provider: 'No Starch Press',
                cost: 'paid'
            }
        ]
    },

    // INCIDENT RESPONSE
    {
        id: 'incident-response',
        title: 'Incident Response & Forensics',
        description: 'IR methodology, forensic analysis, evidence collection, threat hunting',
        whyItMatters: 'Respond to and recover from security incidents effectively',
        level: 'advanced',
        domain: ['defense'],
        timeline: '8-10 weeks',
        prerequisites: ['malware-analysis', 'network-security'],
        children: ['threat-hunting', 'forensics'],
        skills: ['DFIR', 'Memory Forensics', 'Disk Forensics', 'Network Forensics', 'Volatility', 'Autopsy'],
        relatedJobs: ['incident-responder', 'forensic-analyst'],
        checklistItems: [
            'Learn NIST incident response framework',
            'Practice memory forensics with Volatility',
            'Perform disk forensics with Autopsy',
            'Analyze network traffic for IOCs',
            'Develop incident response playbooks',
            'Study SANS DFIR framework'
        ],
        resources: []
    },

    // DEVSECOPS
    {
        id: 'devsecops',
        title: 'DevSecOps',
        description: 'Secure SDLC, CI/CD security, infrastructure as code, security automation',
        whyItMatters: 'Shift security left and integrate it into development pipelines',
        level: 'intermediate',
        domain: ['appsec', 'cloud'],
        timeline: '8-12 weeks',
        prerequisites: ['security-principles'],
        children: ['sast-dast', 'container-security', 'pipeline-security'],
        skills: ['Git', 'Docker', 'Kubernetes', 'Jenkins', 'SAST/DAST', 'IaC Security'],
        relatedJobs: ['devsecops-engineer', 'security-engineer'],
        checklistItems: [
            'Integrate security scanning in CI/CD',
            'Implement SAST/DAST tools',
            'Secure Docker containers',
            'Practice infrastructure as code (Terraform)',
            'Automate security testing',
            'Study OWASP DevSecOps guidelines'
        ],
        resources: []
    },

    // GRC
    {
        id: 'grc-fundamentals',
        title: 'Governance, Risk & Compliance',
        description: 'Compliance frameworks, risk management, security policies, audit',
        whyItMatters: 'Ensure organizational security aligns with business and regulatory requirements',
        level: 'intermediate',
        domain: ['grc'],
        timeline: '6-8 weeks',
        prerequisites: ['security-principles'],
        children: ['compliance-frameworks', 'risk-management', 'security-audit'],
        skills: ['ISO 27001', 'NIST CSF', 'GDPR', 'SOC 2', 'Risk Assessment', 'Policy Development'],
        relatedJobs: ['grc-analyst', 'compliance-officer'],
        checklistItems: [
            'Study major compliance frameworks',
            'Learn risk assessment methodologies',
            'Develop security policies and procedures',
            'Understand audit processes',
            'Practice vendor risk assessment',
            'Study NIST Cybersecurity Framework'
        ],
        resources: []
    },

    // THREAT INTELLIGENCE
    {
        id: 'threat-intelligence',
        title: 'Cyber Threat Intelligence',
        description: 'Threat actor profiling, IOC analysis, threat feeds, MITRE ATT&CK',
        whyItMatters: 'Proactively identify and defend against emerging threats',
        level: 'advanced',
        domain: ['defense'],
        timeline: '6-8 weeks',
        prerequisites: ['incident-response'],
        children: ['threat-hunting', 'attribution-analysis'],
        skills: ['MITRE ATT&CK', 'STIX/TAXII', 'Threat Feeds', 'OSINT', 'IOC Analysis'],
        relatedJobs: ['threat-intelligence-analyst', 'threat-hunter'],
        checklistItems: [
            'Master MITRE ATT&CK framework',
            'Set up threat intelligence platform',
            'Analyze threat actor TTPs',
            'Develop threat reports',
            'Practice OSINT techniques',
            'Integrate threat feeds with SIEM'
        ],
        resources: []
    },

    // RED TEAMING
    {
        id: 'red-teaming',
        title: 'Advanced Red Teaming',
        description: 'Advanced persistent threats, evasion techniques, C2 frameworks, physical security',
        whyItMatters: 'Simulate real-world adversaries to test organizational defenses',
        level: 'professional',
        domain: ['offense'],
        timeline: '12-16 weeks',
        prerequisites: ['offensive-security', 'privilege-escalation'],
        children: [],
        skills: ['Cobalt Strike', 'Empire', 'Lateral Movement', 'Evasion', 'Social Engineering'],
        relatedJobs: ['red-team-operator', 'adversarial-engineer'],
        checklistItems: [
            'Master C2 frameworks (Cobalt Strike, Empire)',
            'Learn advanced evasion techniques',
            'Practice lateral movement',
            'Study adversary emulation',
            'Perform social engineering attacks',
            'Complete professional red team certification'
        ],
        resources: [
            {
                id: 'res-9',
                title: 'OSEP - Offensive Security Experienced Penetration Tester',
                type: 'certification',
                url: 'https://www.offensive-security.com/pen300-osep/',
                provider: 'Offensive Security',
                cost: 'paid'
            }
        ]
    },

    // PRIVILEGE ESCALATION
    {
        id: 'privilege-escalation',
        title: 'Privilege Escalation',
        description: 'Windows and Linux privilege escalation techniques and methodologies',
        whyItMatters: 'Critical skill for penetration testing and red teaming',
        level: 'advanced',
        domain: ['offense'],
        timeline: '6-8 weeks',
        prerequisites: ['offensive-security'],
        children: ['red-teaming'],
        skills: ['Windows Privilege Escalation', 'Linux Privilege Escalation', 'Kernel Exploits', 'Token Manipulation'],
        relatedJobs: ['penetration-tester', 'red-team-operator'],
        checklistItems: [
            'Master Windows privilege escalation',
            'Learn Linux privilege escalation',
            'Exploit kernel vulnerabilities',
            'Understand token manipulation',
            'Practice in CTF environments'
        ],
        resources: []
    },

    // IDENTITY AND ACCESS MANAGEMENT
    {
        id: 'identity-access-management',
        title: 'Identity & Access Management',
        description: 'Active Directory, Azure AD, LDAP, SSO, MFA, PAM',
        whyItMatters: 'IAM is the foundation of zero trust and modern security architecture',
        level: 'intermediate',
        domain: ['defense'],
        timeline: '6-8 weeks',
        prerequisites: ['security-principles'],
        children: ['zero-trust-architecture'],
        skills: ['Active Directory', 'Azure AD', 'LDAP', 'SSO', 'MFA', 'PAM'],
        relatedJobs: ['iam-specialist', 'security-architect'],
        checklistItems: [
            'Configure Active Directory security',
            'Implement Azure AD security controls',
            'Deploy MFA solutions',
            'Set up privileged access management',
            'Understand federated identity (SAML, OAuth)'
        ],
        resources: []
    },

    // SECURITY ARCHITECTURE
    {
        id: 'security-architecture',
        title: 'Security Architecture & Design',
        description: 'Zero trust, secure architecture patterns, threat modeling, secure design',
        whyItMatters: 'Design security into systems from the ground up',
        level: 'professional',
        domain: ['defense', 'cloud'],
        timeline: '10-12 weeks',
        prerequisites: ['identity-access-management', 'cloud-security'],
        children: [],
        skills: ['Zero Trust', 'Threat Modeling', 'Secure Design Patterns', 'Architecture Frameworks'],
        relatedJobs: ['security-architect', 'chief-security-architect'],
        checklistItems: [
            'Design zero trust architectures',
            'Conduct threat modeling exercises',
            'Apply security design patterns',
            'Understand SABSA or TOGAF',
            'Create security reference architectures'
        ],
        resources: []
    }
];
