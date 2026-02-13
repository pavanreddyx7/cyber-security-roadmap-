'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield, Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/roadmap', label: 'Roadmap' },
    { href: '/jobs', label: 'Careers' },
    { href: '/salary', label: 'Salaries' },
    { href: '/resources', label: 'Resources' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 glass-card border-b border-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo - Simplified for desktop */}
                    <Link href="/" className="flex items-center gap-2 md:gap-3 group">
                        <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                                <Shield className="w-5 h-5 md:w-6 md:h-6 text-white" />
                            </div>
                            <div className="absolute inset-0 bg-purple-500/30 rounded-lg md:rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                        </motion.div>
                        <div className="flex flex-col">
                            <span className="text-base md:text-lg font-black text-gradient leading-tight">
                                CyberSec Universe
                            </span>
                            <span className="hidden md:block text-[9px] text-slate-500 tracking-wider font-medium uppercase">
                                Career Platform
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation - Cleaner spacing */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="relative px-4 py-2 rounded-lg text-sm font-semibold transition-all group"
                                >
                                    <span className={`relative z-10 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
                                        {item.label}
                                    </span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg"
                                            initial={false}
                                            transition={{
                                                type: 'spring',
                                                stiffness: 350,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                    {!isActive && (
                                        <div className="absolute inset-0 bg-slate-800/0 group-hover:bg-slate-800/50 rounded-lg transition-colors duration-200" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-3">
                        {/* CTA Button (Desktop) - More compact */}
                        <Link href="/roadmap" className="hidden lg:block">
                            <motion.button
                                className="btn-cyber flex items-center gap-2 text-sm px-4 py-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Sparkles className="w-4 h-4" />
                                Get Started
                            </motion.button>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
                            aria-label="Toggle mobile menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6 text-slate-300" />
                            ) : (
                                <Menu className="w-6 h-6 text-slate-300" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden overflow-hidden border-t border-slate-800/50"
                        >
                            <div className="py-4 space-y-1">
                                {navItems.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${isActive
                                                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                                                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    );
                                })}

                                {/* Mobile CTA */}
                                <Link href="/roadmap" onClick={() => setMobileMenuOpen(false)}>
                                    <button className="w-full btn-cyber flex items-center justify-center gap-2 text-sm mt-3">
                                        <Sparkles className="w-4 h-4" />
                                        Get Started
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
