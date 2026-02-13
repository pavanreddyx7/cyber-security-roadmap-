'use client';

import { motion } from 'framer-motion';
import { BookOpen, Video, Award, Code, ExternalLink } from 'lucide-react';

const resourceCategories = [
    {
        title: 'Learning Platforms',
        icon: BookOpen,
        resources: [
            { name: 'TryHackMe', url: 'https://tryhackme.com', description: 'Hands-on cybersecurity training', type: 'Platform' },
            { name: 'HackTheBox', url: 'https://www.hackthebox.com', description: 'Penetration testing labs', type: 'Platform' },
            { name: 'Cybrary', url: 'https://www.cybrary.it', description: 'Free cybersecurity courses', type: 'Platform' },
            { name: 'Coursera', url: 'https://www.coursera.org', description: 'University-level courses', type: 'Platform' },
        ],
    },
    {
        title: 'Certifications',
        icon: Award,
        resources: [
            { name: 'CompTIA Security+', url: 'https://www.comptia.org/certifications/security', description: 'Foundation certification', type: 'Cert' },
            { name: 'OSCP', url: 'https://www.offensive-security.com/pwk-oscp/', description: 'Penetration testing certification', type: 'Cert' },
            { name: 'CISSP', url: 'https://www.isc2.org/Certifications/CISSP', description: 'Security professional certification', type: 'Cert' },
            { name: 'CEH', url: 'https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/', description: 'Ethical hacking certification', type: 'Cert' },
        ],
    },
    {
        title: 'Video Channels',
        icon: Video,
        resources: [
            { name: 'LiveOverflow', url: 'https://www.youtube.com/@LiveOverflow', description: 'Binary exploitation & CTFs', type: 'YouTube' },
            { name: 'IppSec', url: 'https://www.youtube.com/@ippsec', description: 'HackTheBox walkthroughs', type: 'YouTube' },
            { name: 'John Hammond', url: 'https://www.youtube.com/@_JohnHammond', description: 'Security tutorials', type: 'YouTube' },
            { name: 'NetworkChuck', url: 'https://www.youtube.com/@NetworkChuck', description: 'IT & security tutorials', type: 'YouTube' },
        ],
    },
    {
        title: 'Practice Labs',
        icon: Code,
        resources: [
            { name: 'PortSwigger Web Security Academy', url: 'https://portswigger.net/web-security', description: 'Free web security training', type: 'Lab' },
            { name: 'OverTheWire', url: 'https://overthewire.org', description: 'War games for learning', type: 'Lab' },
            { name: 'PentesterLab', url: 'https://pentesterlab.com', description: 'Hands-on penetration testing', type: 'Lab' },
            { name: 'VulnHub', url: 'https://www.vulnhub.com', description: 'Vulnerable VMs for practice', type: 'Lab' },
        ],
    },
];

export default function ResourcesPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <section className="section bg-gradient-to-b from-accent/10 to-background">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h1 className="mb-4">
                            <span className="gradient-text">Learning Resources</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Curated collection of platforms, certifications, videos, and practice
                            labs to accelerate your cybersecurity journey.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Resources */}
            <section className="section">
                <div className="container-custom space-y-12">
                    {resourceCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <category.icon className="w-8 h-8 text-primary" />
                                <h2 className="text-3xl font-bold">{category.title}</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                                {category.resources.map((resource, resourceIndex) => (
                                    <motion.a
                                        key={resource.name}
                                        href={resource.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: categoryIndex * 0.1 + resourceIndex * 0.05 }}
                                        className="glass rounded-lg p-6 card-hover group"
                                    >
                                        <div className="flex items-start justify-between mb-3">
                                            <div>
                                                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                                                    {resource.name}
                                                </h3>
                                                <span className="text-xs px-2 py-1 rounded-full bg-secondary/20 text-secondary-foreground">
                                                    {resource.type}
                                                </span>
                                            </div>
                                            <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                        </div>
                                        <p className="text-muted-foreground">{resource.description}</p>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    ))}

                    {/* Additional Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="glass rounded-lg p-8 text-center"
                    >
                        <h3 className="text-2xl font-bold mb-4">More Resources Coming Soon</h3>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            We're continuously curating and adding new resources to help you on your
                            cybersecurity journey. Check back regularly for updates, or explore our
                            roadmap to find specific learning materials for each topic.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
