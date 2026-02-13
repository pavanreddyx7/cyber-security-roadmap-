'use client';

import Link from 'next/link';
import { Shield, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const footerLinks = {
    platform: [
        { name: 'Roadmap', href: '/roadmap' },
        { name: 'Careers', href: '/jobs' },
        { name: 'Salaries', href: '/salary' },
        { name: 'Resources', href: '/resources' },
    ],
    company: [
        { name: 'About', href: '/about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ],
    legal: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
    ],
};

const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
];

export default function Footer() {
    return (
        <footer className="relative border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-sm mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-8 md:mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2.5 mb-4">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                                <Shield className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-black text-gradient">
                                CyberSec Universe
                            </span>
                        </Link>
                        <p className="text-base text-slate-400 mb-6 max-w-sm leading-relaxed">
                            Your comprehensive platform for navigating the cybersecurity career landscape
                            with interactive roadmaps, role insights, and global salary data.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-lg bg-slate-800/50 hover:bg-purple-500/20 hover:text-purple-400 text-slate-400 transition-all duration-200"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Platform Links */}
                    <div>
                        <h3 className="font-bold text-base md:text-lg mb-4 text-slate-200">Platform</h3>
                        <ul className="space-y-3">
                            {footerLinks.platform.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm md:text-base text-slate-400 hover:text-purple-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-bold text-base md:text-lg mb-4 text-slate-200">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm md:text-base text-slate-400 hover:text-purple-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="font-bold text-base md:text-lg mb-4 text-slate-200">Legal</h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm md:text-base text-slate-400 hover:text-purple-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="text-sm md:text-base text-slate-400">
                        © {new Date().getFullYear()} CyberSec Universe. All rights reserved.
                    </p>
                    <p className="text-xs md:text-sm text-slate-500">
                        Built with Next.js • Designed for Cybersecurity Professionals
                    </p>
                </div>
            </div>
        </footer>
    );
}
