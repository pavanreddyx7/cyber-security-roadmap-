'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    Shield, Sparkles, Zap, Target, TrendingUp,
    BookOpen, Briefcase, DollarSign, ArrowRight,
    Lock, Code2, Network
} from 'lucide-react';

const stats = [
    { label: 'Learning Paths', value: '25+', icon: BookOpen, color: 'from-purple-400 to-blue-500' },
    { label: 'Career Roles', value: '15+', icon: Briefcase, color: 'from-cyan-400 to-blue-500' },
    { label: 'Countries', value: '10+', icon: TrendingUp, color: 'from-pink-400 to-purple-500' },
];

const features = [
    {
        icon: Shield,
        title: 'Interactive Roadmaps',
        description: 'Visual learning paths from beginner to professional',
        gradient: 'from-purple-500 to-blue-500',
    },
    {
        icon: Target,
        title: 'Career Explorer',
        description: 'Explore roles, skills, certifications & career paths',
        gradient: 'from-cyan-500 to-blue-500',
    },
    {
        icon: DollarSign,
        title: 'Salary Insights',
        description: 'Real-world compensation data by role & location',
        gradient: 'from-pink-500 to-purple-500',
    },
];

const floatingIcons = [
    { Icon: Lock, delay: 0, duration: 6, position: 'top-20 left-10' },
    { Icon: Code2, delay: 1, duration: 7, position: 'top-40 right-20' },
    { Icon: Network, delay: 2, duration: 8, position: 'bottom-40 left-20' },
    { Icon: Shield, delay: 1.5, duration: 6.5, position: 'bottom-20 right-10' },
];

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
            {/* Animated Background */}
            <div className="absolute inset-0 grid-bg opacity-50" />

            {/* Gradient Orbs */}
            <motion.div
                className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse-glow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse-glow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
            />
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Floating Icons */}
            {floatingIcons.map(({ Icon, delay, duration, position }, index) => (
                <motion.div
                    key={index}
                    className={`absolute ${position} opacity-10`}
                    initial={{ y: 0, rotate: 0 }}
                    animate={{
                        y: [-20, 20, -20],
                        rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                        duration,
                        delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    <Icon className="w-16 h-16 text-purple-400" />
                </motion.div>
            ))}

            {/* Main Content */}
            <div className="relative z-10 section-container">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8"
                    >
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span className="text-sm font-semibold text-slate-300">
                            Your Complete Cybersecurity Career Hub
                        </span>
                        <Zap className="w-4 h-4 text-cyan-400" />
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight"
                    >
                        Master Your
                        <br />
                        <span className="text-gradient">Cybersecurity</span>{' '}
                        <span className="text-gradient-success">Journey</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                    >
                        Navigate from novice to expert with{' '}
                        <span className="text-purple-400 font-semibold">interactive roadmaps</span>,{' '}
                        <span className="text-cyan-400 font-semibold">comprehensive career insights</span>, and{' '}
                        <span className="text-pink-400 font-semibold">real-world salary data</span>
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                    >
                        <Link href="/roadmap">
                            <motion.button
                                className="btn-cyber group flex items-center gap-2 justify-center min-w-[200px]"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <BookOpen className="w-5 h-5" />
                                View Roadmap
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </Link>
                        <Link href="/jobs">
                            <motion.button
                                className="glass-card px-6 py-3 font-semibold rounded-xl hover:bg-slate-800/80 transition-all duration-300 flex items-center gap-2 justify-center min-w-[200px] hover:shadow-lg hover:scale-105 active:scale-95"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Briefcase className="w-5 h-5" />
                                Explore Careers
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.05 }}
                                className="glass-card p-6 text-center relative overflow-hidden group"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                                <div className="relative z-10">
                                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                                    <div className={`text-3xl font-black mb-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                                whileHover={{ y: -8 }}
                                className="glass-card-hover p-8 text-left group cursor-pointer"
                            >
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                                    <feature.icon className="w-full h-full text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-gradient transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    opacity: { delay: 1.5, duration: 0.5 },
                    y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                }}
            >
                <span className="text-xs text-slate-500 font-medium tracking-wider uppercase">Scroll</span>
                <div className="w-6 h-10 rounded-full border-2 border-purple-500/40 flex items-start justify-center p-1.5">
                    <motion.div
                        className="w-1.5 h-1.5 bg-purple-500 rounded-full"
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
