'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { roadmapData } from '@/data/roadmap';
import {
    BookOpen, Clock, CheckCircle2, X, Target, TrendingUp, Zap, Award, ExternalLink, ChevronRight,
    Shield, Lock, Globe, Server, Database, Code, Cpu
} from 'lucide-react';
import type { SkillLevel, Domain } from '@/lib/types';

// Configuration for levels (Colors & Order)
const levelOrder: SkillLevel[] = ['beginner', 'intermediate', 'advanced', 'professional'];

const levelConfig: Record<SkillLevel, { color: string; gradient: string; glow: string; icon: any }> = {
    beginner: {
        color: 'text-emerald-400',
        gradient: 'from-emerald-500 to-green-500',
        glow: 'shadow-[0_0_30px_rgba(16,185,129,0.4)]',
        icon: Target,
    },
    intermediate: {
        color: 'text-blue-400',
        gradient: 'from-blue-500 to-cyan-500',
        glow: 'shadow-[0_0_30px_rgba(59,130,246,0.4)]',
        icon: TrendingUp,
    },
    advanced: {
        color: 'text-purple-400',
        gradient: 'from-purple-500 to-pink-500',
        glow: 'shadow-[0_0_30px_rgba(168,85,247,0.4)]',
        icon: Zap,
    },
    professional: {
        color: 'text-amber-400',
        gradient: 'from-amber-500 to-orange-500',
        glow: 'shadow-[0_0_30px_rgba(245,158,11,0.4)]',
        icon: Award,
    },
};

const domainColors: Record<Domain, string> = {
    entry: 'badge-green',
    defense: 'badge-blue',
    offense: 'badge-pink',
    appsec: 'badge-purple',
    cloud: 'badge-cyan',
    iam: 'badge-orange',
    grc: 'badge-purple',
    ot: 'badge-orange',
    specialized: 'badge-pink',
    architect: 'badge-cyan',
    leadership: 'badge-orange',
    executive: 'badge-pink',
};

export default function RoadmapPage() {
    const [selectedDomain, setSelectedDomain] = useState<Domain | 'all'>('all');
    const [selectedNode, setSelectedNode] = useState<string | null>(null);
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    // Handle resize for responsive layout calculations
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Filter and SORT nodes by level to create a logical path
    const sortedNodes = useMemo(() => {
        const filtered = roadmapData.filter((node) => {
            if (selectedDomain === 'all') return true;
            return node.domain.includes(selectedDomain);
        });

        return filtered.sort((a, b) => {
            const indexA = levelOrder.indexOf(a.level);
            const indexB = levelOrder.indexOf(b.level);
            return indexA - indexB; // Lower levels first
        });
    }, [selectedDomain]);

    const selectedNodeData = selectedNode
        ? roadmapData.find((n) => n.id === selectedNode)
        : null;

    // --- SVG Path Calculation ---
    const nodeHeight = 180; // Vertical spacing between nodes
    const containerWidth = isMobile ? 300 : 800;
    const centerX = containerWidth / 2;
    const curveWidth = isMobile ? 0 : 250; // How wide the S-curve swings

    // Function to get X, Y coordinates for a node index
    const getNodePosition = (index: number) => {
        const y = index * nodeHeight + 100; // Start with some padding top
        let x = centerX;

        if (!isMobile) {
            // Create S-curve: Alternate Left (-1) and Right (+1)
            // We use Math.sin or simple alternation. Let's use simple zigzag for clarity.
            // Even index: Right, Odd index: Left (or vice versa)
            const direction = index % 2 === 0 ? 1 : -1;
            x = centerX + (direction * curveWidth);
        }

        return { x, y };
    };

    // Generate the SVG path data string
    const pathData = useMemo(() => {
        if (sortedNodes.length < 2) return '';

        return sortedNodes.map((_, i) => {
            if (i === sortedNodes.length - 1) return ''; // No path from last node

            const current = getNodePosition(i);
            const next = getNodePosition(i + 1);

            // Bezier curve logic
            const cp1y = current.y + (nodeHeight / 2);
            const cp2y = next.y - (nodeHeight / 2);

            return `M ${current.x} ${current.y} C ${current.x} ${cp1y}, ${next.x} ${cp2y}, ${next.x} ${next.y}`;
        }).join(' ');
    }, [sortedNodes, isMobile]);


    return (
        <div className="min-h-screen py-20 overflow-hidden">
            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse-glow" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse-glow" />
            </div>

            <section className="section-container relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 border-purple-500/30">
                        <Shield className="w-4 h-4 text-purple-400" />
                        <span className="text-sm font-bold text-slate-300 tracking-wide uppercase">Interactive Journey</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                        <span className="text-white">Cyber</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Roadmap</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Follow the path from novice to expert. Select a domain to customize your journey.
                    </p>
                </motion.div>

                {/* Domain Filter Pills */}
                <motion.div
                    className="flex flex-wrap justify-center gap-3 mb-24 max-w-4xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <button
                        onClick={() => setSelectedDomain('all')}
                        className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${selectedDomain === 'all'
                                ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105'
                                : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-700'
                            }`}
                    >
                        All Tracks
                    </button>

                    {Object.keys(domainColors).map((domain) => (
                        <button
                            key={domain}
                            onClick={() => setSelectedDomain(domain as Domain)}
                            className={`px-5 py-2.5 rounded-full text-sm font-bold capitalize transition-all duration-300 ${selectedDomain === domain
                                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg scale-105 border-transparent'
                                    : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-700'
                                }`}
                        >
                            {domain.replace('-', ' ')}
                        </button>
                    ))}
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">

                    {/* Main Roadmap Area (SVG + Nodes) */}
                    <div className="lg:col-span-2 relative min-h-[800px] flex justify-center">

                        {/* SVG Container */}
                        <svg
                            className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible"
                            viewBox={`0 0 ${containerWidth} ${sortedNodes.length * nodeHeight + 200}`}
                            style={{ width: '100%', height: '100%' }}
                            preserveAspectRatio="xMidYMin slice"
                        >
                            <defs>
                                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#A855F7" />
                                    <stop offset="50%" stopColor="#3B82F6" />
                                    <stop offset="100%" stopColor="#06B6D4" />
                                </linearGradient>
                                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>

                            {/* Animated Path */}
                            <motion.path
                                d={pathData}
                                fill="none"
                                stroke="url(#pathGradient)"
                                strokeWidth="6"
                                strokeLinecap="round"
                                filter="url(#glow)"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2.5, ease: "easeInOut" }}
                            />
                        </svg>

                        {/* Nodes Container */}
                        <div className="relative w-full max-w-[800px]">
                            {sortedNodes.map((node, index) => {
                                const pos = getNodePosition(index);
                                const isLeft = pos.x < centerX; // Is the node on the left side of center?
                                const isSelected = selectedNode === node.id;
                                const levelInfo = levelConfig[node.level];
                                const Icon = levelInfo.icon;

                                // Adjustment for HTML positioning relative to the centered container
                                // pos.x is relative to container logic width. We need to map it to %.
                                // Or simply use absolute positioning based on the calculations.
                                // Since SVG and Div share the same container logic, we can map pixels mostly directly if we center the container.

                                // Let's use `left` calculated as percentage to be responsive inside the container div
                                // The container is `max-w-[800px]`. 
                                // x=400 is center.

                                return (
                                    <motion.div
                                        key={node.id}
                                        className="absolute"
                                        style={{
                                            top: pos.y - 40, // Offset to center vertically on the point
                                            left: isMobile ? '50%' : `${(pos.x / containerWidth) * 100}%`,
                                            transform: 'translateX(-50%)',
                                            zIndex: 10
                                        }}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.2 + 0.5, type: "spring", bounce: 0.4 }}
                                    >
                                        {/* The Circular Node */}
                                        <div className="relative group cursor-pointer" onClick={() => setSelectedNode(node.id)}>

                                            {/* Outer Glow Ring */}
                                            <div className={`absolute inset-0 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-md ${isSelected ? 'bg-white' : levelInfo.gradient.replace('from-', 'bg-')}`} />

                                            {/* Main Circle */}
                                            <div className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-slate-900 border-4 ${isSelected ? 'border-white scale-110' : `border-transparent group-hover:border-white/20`} shadow-2xl flex items-center justify-center transition-all duration-300 z-10 overflow-hidden`}>

                                                {/* Gradient Background inside circle */}
                                                <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${levelInfo.gradient}`} />

                                                {/* Icon */}
                                                <Icon className={`w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300`} />
                                            </div>

                                            {/* Label - Positioned relative to node based on Side */}
                                            <div className={`absolute top-1/2 -translate-y-1/2 w-48 md:w-64 ${isMobile
                                                    ? 'left-full ml-6 text-left'
                                                    : isLeft
                                                        ? 'right-full mr-8 text-right'
                                                        : 'left-full ml-8 text-left'
                                                } pointer-events-none`}>
                                                <motion.div
                                                    initial={{ opacity: 0, x: isMobile ? 20 : (isLeft ? -20 : 20) }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.2 + 0.8 }}
                                                >
                                                    <h3 className={`text-lg md:text-xl font-bold mb-1 leading-tight ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                                                        {node.title}
                                                    </h3>
                                                    <span className={`text-xs font-bold uppercase tracking-wider py-1 px-2 rounded-lg bg-slate-800/80 backdrop-blur-sm border border-slate-700 ${levelInfo.color}`}>
                                                        {node.level}
                                                    </span>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Spacer at bottom */}
                        <div style={{ height: sortedNodes.length * nodeHeight + 200 }} />
                    </div>

                    {/* Right Panel - Details (Sticky) */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <AnimatePresence mode="wait">
                                {selectedNodeData ? (
                                    <motion.div
                                        key={selectedNodeData.id}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 50, transition: { duration: 0.2 } }}
                                        className="glass-card p-8 border-t-4 border-t-purple-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-slate-900/90 backdrop-blur-xl"
                                    >
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="flex items-center gap-3">
                                                <div className={`p-3 rounded-xl bg-gradient-to-br ${levelConfig[selectedNodeData.level].gradient}`}>
                                                    {(() => {
                                                        const Icon = levelConfig[selectedNodeData.level].icon;
                                                        return <Icon className="w-6 h-6 text-white" />;
                                                    })()}
                                                </div>
                                                <div>
                                                    <h2 className="text-2xl font-black text-white leading-tight">{selectedNodeData.title}</h2>
                                                    <p className="text-purple-400 font-medium text-sm">Phase: {selectedNodeData.level}</p>
                                                </div>
                                            </div>
                                            <button onClick={() => setSelectedNode(null)} className="text-slate-500 hover:text-white transition-colors">
                                                <X className="w-6 h-6" />
                                            </button>
                                        </div>

                                        <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                                            {selectedNodeData.description}
                                        </p>

                                        <div className="space-y-6">
                                            {/* Why it matters */}
                                            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                                                <h4 className="flex items-center gap-2 font-bold text-white mb-2">
                                                    <Target className="w-4 h-4 text-red-400" />
                                                    Mission Objective
                                                </h4>
                                                <p className="text-sm text-slate-400">{selectedNodeData.whyItMatters}</p>
                                            </div>

                                            {/* Checklist */}
                                            <div>
                                                <h4 className="font-bold text-slate-200 mb-3 flex items-center gap-2">
                                                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                                                    Key Objectives
                                                </h4>
                                                <ul className="space-y-2">
                                                    {selectedNodeData.checklistItems.slice(0, 4).map((item, i) => (
                                                        <motion.li
                                                            key={i}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.1 * i }}
                                                            className="flex items-start gap-3 text-sm text-slate-400"
                                                        >
                                                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                                                            {item}
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Skills */}
                                            <div className="flex flex-wrap gap-2">
                                                {selectedNodeData.skills.map(skill => (
                                                    <span key={skill} className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>

                                            <button className="w-full btn-cyber mt-4 flex items-center justify-center gap-2 group">
                                                Start Module <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="glass-card p-12 text-center border border-slate-800"
                                    >
                                        <div className="w-20 h-20 mx-auto bg-slate-800/50 rounded-full flex items-center justify-center mb-6 animate-pulse">
                                            <Target className="w-10 h-10 text-slate-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Select a Node</h3>
                                        <p className="text-slate-400">
                                            Click on any circular node in the roadmap to view detailed module information, objectives, and resources.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
