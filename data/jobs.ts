import { JobRole } from '@/lib/types';

export const jobRolesData: JobRole[] = [
    // DEFENSIVE ROLES
    {
        id: 'security-analyst',
        title: 'Security Analyst',
        family: 'defense',
        description: 'Monitor security alerts, investigate incidents, and maintain security tools',
        seniorityLevels: {
            entry: 'Junior Security Analyst',
            mid: 'Security Analyst',
            senior: 'Senior Security Analyst',
            lead: 'Lead Security Analyst'
        },
        keySkills: [
            'SIEM platforms',
            'Log analysis',
            'Incident triage',
            'Threat detection',
            'Security monitoring',
            'Vulnerability assessment'
        ],
        certifications: [
            'CompTIA Security+',
            'CEH (Certified Ethical Hacker)',
            'GCIA (GIAC Certified Intrusion Analyst)',
            'GCIH (GIAC Certified Incident Handler)'
        ],
        careerPath: {
            from: ['it-support', 'network-administrator'],
            to: ['soc-analyst', 'incident-responder', 'threat-analyst']
        },
        salaryBand: {
            min: 65000,
            max: 120000,
            currency: 'USD',
            experience: 'entry-senior'
        },
        learningPathNodes: [
            'foundations',
            'networking-basics',
            'security-principles',
            'network-security'
        ],
        typicalResponsibilities: [
            'Monitor security alerts and events',
            'Perform security log analysis',
            'Investigate security incidents',
            'Maintain security tools and systems',
            'Document security procedures',
            'Conduct vulnerability assessments'
        ],
        demandScore: 9
    },

    {
        id: 'soc-analyst',
        title: 'SOC Analyst',
        family: 'defense',
        description: 'Security Operations Center analyst monitoring and responding to security threats',
        seniorityLevels: {
            entry: 'SOC Analyst Tier 1',
            mid: 'SOC Analyst Tier 2',
            senior: 'SOC Analyst Tier 3 / Senior SOC Analyst',
            lead: 'SOC Lead / SOC Manager'
        },
        keySkills: [
            'SIEM (Splunk, QRadar, Sentinel)',
            'EDR platforms',
            'Threat hunting',
            'Incident response',
            'Network traffic analysis',
            'Malware analysis basics'
        ],
        certifications: [
            'CompTIA Security+',
            'CompTIA CySA+',
            'GIAC GCIA',
            'GCIH',
            'Blue Team Level 1'
        ],
        careerPath: {
            from: ['security-analyst'],
            to: ['incident-responder', 'threat-hunter', 'soc-manager']
        },
        salaryBand: {
            min: 70000,
            max: 140000,
            currency: 'USD',
            experience: 'entry-senior'
        },
        learningPathNodes: [
            'foundations',
            'networking-basics',
            'network-security',
            'incident-response',
            'threat-intelligence'
        ],
        typicalResponsibilities: [
            'Monitor SIEM for security alerts',
            'Perform tier 1/2/3 incident response',
            'Conduct threat hunting activities',
            'Analyze malware and IOCs',
            'Create detection rules',
            'Coordinate with other teams during incidents'
        ],
        demandScore: 10
    },

    {
        id: 'incident-responder',
        title: 'Incident Response Analyst',
        family: 'defense',
        description: 'Lead incident response activities and forensic investigations',
        seniorityLevels: {
            entry: 'Junior Incident Responder',
            mid: 'Incident Response Analyst',
            senior: 'Senior Incident Responder',
            lead: 'Incident Response Lead / Manager'
        },
        keySkills: [
            'DFIR (Digital Forensics & Incident Response)',
            'Memory forensics',
            'Malware analysis',
            'Threat hunting',
            'Volatility, Autopsy',
            'Incident response frameworks'
        ],
        certifications: [
            'GCIH',
            'GCFA (GIAC Certified Forensic Analyst)',
            'GCFE (GIAC Certified Forensic Examiner)',
            'CISA',
            'EnCE (EnCase Certified Examiner)'
        ],
        careerPath: {
            from: ['soc-analyst', 'security-analyst'],
            to: ['forensic-analyst', 'threat-hunter', 'security-architect']
        },
        salaryBand: {
            min: 90000,
            max: 165000,
            currency: 'USD',
            experience: 'mid-senior'
        },
        learningPathNodes: [
            'incident-response',
            'malware-analysis',
            'threat-intelligence',
            'network-security'
        ],
        typicalResponsibilities: [
            'Lead incident response activities',
            'Perform forensic analysis',
            'Develop incident response playbooks',
            'Coordinate with stakeholders during incidents',
            'Conduct post-incident reviews',
            'Improve detection and response capabilities'
        ],
        demandScore: 9
    },

    {
        id: 'network-security-engineer',
        title: 'Network Security Engineer',
        family: 'defense',
        description: 'Design, implement, and maintain network security infrastructure',
        seniorityLevels: {
            entry: 'Junior Network Security Engineer',
            mid: 'Network Security Engineer',
            senior: 'Senior Network Security Engineer',
            lead: 'Principal Network Security Engineer'
        },
        keySkills: [
            'Firewalls (Palo Alto, Cisco ASA, Fortinet)',
            'IDS/IPS',
            'VPN',
            'Network segmentation',
            'Zero trust networking',
            'SD-WAN security'
        ],
        certifications: [
            'CCNP Security',
            'Palo Alto PCNSE',
            'Fortinet NSE',
            'GIAC GPEN'
        ],
        careerPath: {
            from: ['network-administrator', 'security-analyst'],
            to: ['security-architect', 'network-security-manager']
        },
        salaryBand: {
            min: 85000,
            max: 155000,
            currency: 'USD',
            experience: 'entry-senior'
        },
        learningPathNodes: [
            'networking-basics',
            'network-security',
            'identity-access-management'
        ],
        typicalResponsibilities: [
            'Design and implement network security architecture',
            'Configure and maintain firewalls and IDS/IPS',
            'Monitor network traffic for threats',
            'Implement network segmentation',
            'Perform network security assessments',
            'Respond to network-based incidents'
        ],
        demandScore: 8
    },

    // OFFENSIVE ROLES
    {
        id: 'penetration-tester',
        title: 'Penetration Tester',
        family: 'offense',
        description: 'Simulate attacks to identify vulnerabilities in systems and applications',
        seniorityLevels: {
            entry: 'Junior Penetration Tester',
            mid: 'Penetration Tester',
            senior: 'Senior Penetration Tester',
            lead: 'Lead Penetration Tester / Principal Pen Tester'
        },
        keySkills: [
            'Metasploit',
            'Burp Suite',
            'Nmap',
            'Kali Linux',
            'Web application testing',
            'Network penetration testing',
            'Report writing'
        ],
        certifications: [
            'OSCP (Offensive Security Certified Professional)',
            'CEH',
            'GPEN',
            'GWAPT',
            'CRTO'
        ],
        careerPath: {
            from: ['security-analyst', 'soc-analyst'],
            to: ['red-team-operator', 'security-consultant', 'application-security-engineer']
        },
        salaryBand: {
            min: 85000,
            max: 160000,
            currency: 'USD',
            experience: 'entry-senior'
        },
        learningPathNodes: [
            'offensive-security',
            'web-exploitation',
            'privilege-escalation',
            'networking-basics'
        ],
        typicalResponsibilities: [
            'Conduct penetration tests on networks and applications',
            'Identify and exploit vulnerabilities',
            'Document findings and write reports',
            'Provide remediation recommendations',
            'Stay current on attack techniques',
            'Conduct social engineering assessments'
        ],
        demandScore: 9
    },

    {
        id: 'red-team-operator',
        title: 'Red Team Operator',
        family: 'offense',
        description: 'Emulate advanced adversaries to test organizational defenses',
        seniorityLevels: {
            entry: 'Junior Red Team Operator',
            mid: 'Red Team Operator',
            senior: 'Senior Red Team Operator',
            lead: 'Red Team Lead',
            executive: 'Red Team Manager / Director'
        },
        keySkills: [
            'Cobalt Strike',
            'C2 frameworks',
            'Advanced evasion',
            'Lateral movement',
            'Post-exploitation',
            'Social engineering',
            'Physical security'
        ],
        certifications: [
            'OSEP (Offensive Security Experienced Penetration Tester)',
            'OSEE',
            'CRTO (Certified Red Team Operator)',
            'GXPN',
            'CRTL'
        ],
        careerPath: {
            from: ['penetration-tester'],
            to: ['adversarial-engineer', 'security-researcher']
        },
        salaryBand: {
            min: 110000,
            max: 200000,
            currency: 'USD',
            experience: 'mid-lead'
        },
        learningPathNodes: [
            'red-teaming',
            'offensive-security',
            'privilege-escalation',
            'malware-analysis'
        ],
        typicalResponsibilities: [
            'Conduct red team operations',
            'Emulate advanced persistent threats',
            'Bypass security controls',
            'Perform physical security assessments',
            'Develop custom tools and exploits',
            'Report on organizational security posture'
        ],
        demandScore: 8
    },

    {
        id: 'application-security-engineer',
        title: 'Application Security Engineer',
        family: 'offense',
        description: 'Secure applications through code review, testing, and security integration',
        seniorityLevels: {
            entry: 'Junior AppSec Engineer',
            mid: 'Application Security Engineer',
            senior: 'Senior Application Security Engineer',
            lead: 'Principal AppSec Engineer / AppSec Lead'
        },
        keySkills: [
            'SAST/DAST',
            'Secure code review',
            'OWASP Top 10',
            'Burp Suite',
            'Programming (Java, Python, C#)',
            'Threat modeling'
        ],
        certifications: [
            'CSSLP',
            'GWAPT',
            'OSWE',
            'CASE Java/NET'
        ],
        careerPath: {
            from: ['penetration-tester', 'software-developer'],
            to: ['security-architect', 'devsecops-engineer']
        },
        salaryBand: {
            min: 100000,
            max: 180000,
            currency: 'USD',
            experience: 'entry-senior'
        },
        learningPathNodes: [
            'web-exploitation',
            'secure-coding',
            'devsecops'
        ],
        typicalResponsibilities: [
            'Conduct application security assessments',
            'Perform secure code reviews',
            'Implement SAST/DAST in CI/CD',
            'Develop security requirements',
            'Train developers on secure coding',
            'Manage vulnerability remediation'
        ],
        demandScore: 9
    },

    // CLOUD SECURITY ROLES
    {
        id: 'cloud-security-engineer',
        title: 'Cloud Security Engineer',
        family: 'cloud',
        description: 'Secure cloud infrastructure across AWS, Azure, and GCP',
        seniorityLevels: {
            entry: 'Junior Cloud Security Engineer',
            mid: 'Cloud Security Engineer',
            senior: 'Senior Cloud Security Engineer',
            lead: 'Principal Cloud Security Engineer'
        },
        keySkills: [
            'AWS Security',
            'Azure Security',
            'GCP Security',
            'IAM',
            'Container security',
            'Kubernetes',
            'Cloud architecture'
        ],
        certifications: [
            'AWS Certified Security Specialty',
            'Azure Security Engineer Associate',
            'GCP Professional Cloud Security Engineer',
            'CCSP'
        ],
        careerPath: {
            from: ['security-engineer', 'cloud-engineer'],
            to: ['cloud-architect', 'security-architect']
        },
        salaryBand: {
            min: 105000,
            max: 190000,
            currency: 'USD',
            experience: 'entry-senior'
        },
        learningPathNodes: [
            'cloud-security',
            'identity-access-management',
            'devsecops'
        ],
        typicalResponsibilities: [
            'Design cloud security architecture',
            'Implement cloud security controls',
            'Monitor cloud infrastructure',
            'Conduct cloud penetration testing',
            'Manage cloud IAM',
            'Ensure compliance in cloud environments'
        ],
        demandScore: 10
    },

    {
        id: 'cloud-architect',
        title: 'Cloud Security Architect',
        family: 'cloud',
        description: 'Design secure, scalable cloud architectures',
        seniorityLevels: {
            entry: 'Cloud Security Architect',
            mid: 'Senior Cloud Security Architect',
            senior: 'Principal Cloud Security Architect',
            lead: 'Distinguished Cloud Security Architect'
        },
        keySkills: [
            'Cloud architecture',
            'Zero trust',
            'Multi-cloud security',
            'Compliance',
            'Infrastructure as Code',
            'Security automation'
        ],
        certifications: [
            'AWS Solutions Architect Professional',
            'TOGAF',
            'SABSA',
            'CCSP'
        ],
        careerPath: {
            from: ['cloud-security-engineer', 'security-architect'],
            to: ['chief-architect', 'ciso']
        },
        salaryBand: {
            min: 140000,
            max: 240000,
            currency: 'USD',
            experience: 'senior-lead'
        },
        learningPathNodes: [
            'cloud-security',
            'security-architecture',
            'identity-access-management'
        ],
        typicalResponsibilities: [
            'Design enterprise cloud security architecture',
            'Lead cloud security strategy',
            'Define cloud security standards',
            'Conduct architecture reviews',
            'Mentor cloud security engineers',
            'Drive cloud security initiatives'
        ],
        demandScore: 9
    },

    // DEVSECOPS ROLES
    {
        id: 'devsecops-engineer',
        title: 'DevSecOps Engineer',
        family: 'devsecops',
        description: 'Integrate security into development and operations workflows',
        seniorityLevels: {
            entry: 'Junior DevSecOps Engineer',
            mid: 'DevSecOps Engineer',
            senior: 'Senior DevSecOps Engineer',
            lead: 'Principal DevSecOps Engineer / DevSecOps Lead'
        },
        keySkills: [
            'CI/CD security',
            'Docker/Kubernetes',
            'SAST/DAST/SCA',
            'Infrastructure as Code',
            'Terraform',
            'Security automation',
            'Python/Go scripting'
        ],
        certifications: [
            'AWS DevOps Engineer',
            'Kubernetes CKS',
            'GIAC GCPN',
            'Certified DevSecOps Professional'
        ],
        careerPath: {
            from: ['security-engineer', 'devops-engineer'],
            to: ['security-architect', 'platform-security-lead']
        },
        salaryBand: {
            min: 100000,
            max: 175000,
            currency: 'USD',
            experience: 'entry-senior'
        },
        learningPathNodes: [
            'devsecops',
            'cloud-security',
            'web-exploitation'
        ],
        typicalResponsibilities: [
            'Integrate security tools into CI/CD pipelines',
            'Automate security testing',
            'Secure container and Kubernetes environments',
            'Implement infrastructure as code security',
            'Develop security automation scripts',
            'Train development teams on security'
        ],
        demandScore: 10
    },

    // GRC ROLES
    {
        id: 'grc-analyst',
        title: 'GRC Analyst',
        family: 'grc',
        description: 'Manage governance, risk, and compliance programs',
        seniorityLevels: {
            entry: 'Junior GRC Analyst',
            mid: 'GRC Analyst',
            senior: 'Senior GRC Analyst',
            lead: 'GRC Lead / Manager'
        },
        keySkills: [
            'Risk assessment',
            'Compliance frameworks',
            'Audit management',
            'Policy development',
            'GRC tools',
            'Documentation'
        ],
        certifications: [
            'CRISC',
            'CISA',
            'CISM',
            'ISO 27001 Lead Auditor',
            'CGRC'
        ],
        careerPath: {
            from: ['security-analyst', 'auditor'],
            to: ['compliance-manager', 'risk-manager', 'ciso']
        },
        salaryBand: {
            min: 75000,
            max: 140000,
            currency: 'USD',
            experience: 'entry-senior'
        },
        learningPathNodes: [
            'grc-fundamentals',
            'security-principles'
        ],
        typicalResponsibilities: [
            'Conduct risk assessments',
            'Manage compliance programs',
            'Coordinate security audits',
            'Develop security policies',
            'Monitor regulatory changes',
            'Report on risk and compliance metrics'
        ],
        demandScore: 8
    },

    {
        id: 'compliance-officer',
        title: 'Security Compliance Officer',
        family: 'grc',
        description: 'Ensure organizational compliance with security regulations and standards',
        seniorityLevels: {
            entry: 'Compliance Analyst',
            mid: 'Compliance Officer',
            senior: 'Senior Compliance Officer',
            lead: 'Chief Compliance Officer'
        },
        keySkills: [
            'GDPR',
            'HIPAA',
            'PCI DSS',
            'SOC 2',
            'ISO 27001',
            'Audit management',
            'Regulatory knowledge'
        ],
        certifications: [
            'CISA',
            'CIPP/E',
            'ISO 27001 Lead Implementer',
            'CRISC'
        ],
        careerPath: {
            from: ['grc-analyst'],
            to: ['compliance-director', 'ciso']
        },
        salaryBand: {
            min: 90000,
            max: 165000,
            currency: 'USD',
            experience: 'mid-lead'
        },
        learningPathNodes: [
            'grc-fundamentals'
        ],
        typicalResponsibilities: [
            'Manage compliance programs',
            'Coordinate regulatory audits',
            'Develop compliance frameworks',
            'Train staff on compliance requirements',
            'Monitor compliance metrics',
            'Liaise with regulators'
        ],
        demandScore: 7
    },

    // SPECIALIZED ROLES
    {
        id: 'malware-analyst',
        title: 'Malware Analyst',
        family: 'defense',
        description: 'Analyze malware samples and develop detection signatures',
        seniorityLevels: {
            entry: 'Junior Malware Analyst',
            mid: 'Malware Analyst',
            senior: 'Senior Malware Analyst',
            lead: 'Principal Malware Analyst'
        },
        keySkills: [
            'Reverse engineering',
            'IDA Pro/Ghidra',
            'x86/x64 Assembly',
            'Debuggers',
            'Sandbox analysis',
            'YARA rules'
        ],
        certifications: [
            'GREM (GIAC Reverse Engineering Malware)',
            'GXPN',
            'OSEE'
        ],
        careerPath: {
            from: ['incident-responder', 'soc-analyst'],
            to: ['threat-researcher', 'security-researcher']
        },
        salaryBand: {
            min: 95000,
            max: 170000,
            currency: 'USD',
            experience: 'mid-senior'
        },
        learningPathNodes: [
            'malware-analysis',
            'incident-response'
        ],
        typicalResponsibilities: [
            'Analyze malware samples',
            'Develop detection signatures',
            'Reverse engineer malicious code',
            'Create threat intelligence reports',
            'Build malware analysis tools',
            'Support incident response'
        ],
        demandScore: 7
    },

    {
        id: 'threat-hunter',
        title: 'Threat Hunter',
        family: 'defense',
        description: 'Proactively hunt for advanced threats in the environment',
        seniorityLevels: {
            entry: 'Junior Threat Hunter',
            mid: 'Threat Hunter',
            senior: 'Senior Threat Hunter',
            lead: 'Lead Threat Hunter'
        },
        keySkills: [
            'Threat hunting methodologies',
            'SIEM',
            'EDR',
            'Log analysis',
            'MITRE ATT&CK',
            'Scripting (Python, PowerShell)'
        ],
        certifications: [
            'GCTI',
            'GMON',
            'BTL2',
            'Certified Threat Hunter'
        ],
        careerPath: {
            from: ['soc-analyst', 'incident-responder'],
            to: ['threat-intelligence-analyst', 'detection-engineer']
        },
        salaryBand: {
            min: 100000,
            max: 175000,
            currency: 'USD',
            experience: 'mid-senior'
        },
        learningPathNodes: [
            'threat-hunting',
            'threat-intelligence',
            'incident-response'
        ],
        typicalResponsibilities: [
            'Conduct proactive threat hunts',
            'Develop hunting hypotheses',
            'Analyze attacker TTPs',
            'Create detection rules',
            'Investigate anomalies',
            'Improve detection capabilities'
        ],
        demandScore: 9
    },

    {
        id: 'threat-intelligence-analyst',
        title: 'Threat Intelligence Analyst',
        family: 'defense',
        description: 'Collect, analyze, and disseminate cyber threat intelligence',
        seniorityLevels: {
            entry: 'Junior Threat Intelligence Analyst',
            mid: 'Threat Intelligence Analyst',
            senior: 'Senior Threat Intelligence Analyst',
            lead: 'Threat Intelligence Lead'
        },
        keySkills: [
            'OSINT',
            'MITRE ATT&CK',
            'Threat actor profiling',
            'IOC analysis',
            'STIX/TAXII',
            'Threat intel platforms'
        ],
        certifications: [
            'GIAC GCTI',
            'CTIA',
            'FOR578'
        ],
        careerPath: {
            from: ['soc-analyst', 'threat-hunter'],
            to: ['threat-intelligence-manager', 'security-researcher']
        },
        salaryBand: {
            min: 90000,
            max: 160000,
            currency: 'USD',
            experience: 'mid-senior'
        },
        learningPathNodes: [
            'threat-intelligence',
            'incident-response'
        ],
        typicalResponsibilities: [
            'Collect and analyze threat intelligence',
            'Profile threat actors',
            'Produce threat reports',
            'Manage threat intel feeds',
            'Support incident response with intel',
            'Brief stakeholders on threats'
        ],
        demandScore: 8
    },

    // LEADERSHIP ROLES
    {
        id: 'security-architect',
        title: 'Security Architect',
        family: 'leadership',
        description: 'Design and oversee enterprise security architecture',
        seniorityLevels: {
            entry: 'Security Architect',
            mid: 'Senior Security Architect',
            senior: 'Principal Security Architect',
            lead: 'Chief Security Architect'
        },
        keySkills: [
            'Security architecture frameworks',
            'Zero trust',
            'Threat modeling',
            'Enterprise architecture',
            'Cloud security',
            'Network security'
        ],
        certifications: [
            'CISSP',
            'SABSA',
            'TOGAF',
            'CCSP',
            'AWS/Azure Architect'
        ],
        careerPath: {
            from: ['security-engineer', 'cloud-security-engineer'],
            to: ['ciso', 'vp-security']
        },
        salaryBand: {
            min: 130000,
            max: 220000,
            currency: 'USD',
            experience: 'senior-lead'
        },
        learningPathNodes: [
            'security-architecture',
            'cloud-security',
            'identity-access-management'
        ],
        typicalResponsibilities: [
            'Design enterprise security architecture',
            'Define security standards and frameworks',
            'Conduct architecture reviews',
            'Lead security initiatives',
            'Mentor security engineers',
            'Align security with business objectives'
        ],
        demandScore: 9
    },

    {
        id: 'ciso',
        title: 'Chief Information Security Officer (CISO)',
        family: 'leadership',
        description: 'Executive leadership of information security strategy and programs',
        seniorityLevels: {
            entry: 'Director of Security',
            mid: 'VP of Security',
            senior: 'CISO',
            lead: 'Group CISO'
        },
        keySkills: [
            'Security strategy',
            'Risk management',
            'Leadership',
            'Budgeting',
            'Stakeholder management',
            'Business acumen',
            'Regulatory compliance'
        ],
        certifications: [
            'CISSP',
            'CISM',
            'CRISC',
            'CGEIT',
            'MBA (often preferred)'
        ],
        careerPath: {
            from: ['security-architect', 'security-manager'],
            to: ['cto', 'cio', 'board-member']
        },
        salaryBand: {
            min: 180000,
            max: 400000,
            currency: 'USD',
            experience: 'executive'
        },
        learningPathNodes: [
            'grc-fundamentals',
            'security-architecture'
        ],
        typicalResponsibilities: [
            'Define security strategy and vision',
            'Build and lead security teams',
            'Manage security budget',
            'Report to board and executives',
            'Ensure regulatory compliance',
            'Drive security culture',
            'Manage vendor relationships'
        ],
        demandScore: 10
    }
];
