// CONVERTED REACT VERSION - Navbar.tsx
// Changes from Next.js:
// - next/link → react-router-dom Link
// - next/navigation usePathname → react-router-dom useLocation

import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Shield, Menu, X } from 'lucide-react';
import { useTheme } from '../ThemeProvider';
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
    const location = useLocation();
    const pathname = location.pathname;
    const { theme, toggleTheme } = useTheme();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 glass border-b border-border/50">
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <Shield className="w-9 h-9 text-primary" />
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-md pulse-glow" />
                        </motion.div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold gradient-text">
                                CyberSec Universe
                            </span>
                            <span className="text-[10px] text-muted-foreground tracking-wider">
                                CAREER PLATFORM
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-2">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    to={item.href}
                                    className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all"
                                >
                                    <span className={isActive ? 'text-primary' : 'text-foreground/70 hover:text-foreground'}>
                                        {item.label}
                                    </span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20"
                                            initial={false}
                                            transition={{
                                                type: 'spring',
                                                stiffness: 350,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-3">
                        {/* Theme Toggle */}
                        <motion.button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-lg hover:bg-muted/50 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <Sun className="w-5 h-5 text-primary" />
                            ) : (
                                <Moon className="w-5 h-5 text-primary" />
                            )}
                        </motion.button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2.5 rounded-lg hover:bg-muted/50 transition-colors"
                            aria-label="Toggle mobile menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
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
                            className="lg:hidden overflow-hidden border-t border-border/50"
                        >
                            <div className="py-4 space-y-1">
                                {navItems.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <Link
                                            key={item.href}
                                            to={item.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive
                                                    ? 'bg-primary/10 text-primary border border-primary/20'
                                                    : 'text-foreground/70 hover:bg-muted/50 hover:text-foreground'
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
