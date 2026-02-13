'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { detailedRoadmaps } from '@/data/detailed-roadmaps';
import { roadmapData } from '@/data/roadmap';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
    Target, TrendingUp, Zap, Award, ChevronLeft, Shield, CheckCircle2, X
} from 'lucide-react';
import type { SkillLevel } from '@/lib/types';
import type { RoadmapNode } from '@/lib/types'; // Import RoadmapNode from types

// Use the same visual config as main roadmap
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

export default function DetailedRoadmapPage({ params }: { params: { roadmapId: string } }) {
    const router = useRouter();
    const [selectedNode, setSelectedNode] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    // Get the curriculum data for this specific roadmap ID
    const curriculum = detailedRoadmaps[params.roadmapId] || detailedRoadmaps['junior-pentester']; // Fallback for demo
    const parentNode = roadmapData.find(n => n.id === params.roadmapId);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Use the curriculum as our sorted nodes list (it's already ordered)
    const sortedNodes = curriculum;

    const selectedNodeData = selectedNode
        ? sortedNodes.find((n) => n.id === selectedNode)
        : null;

    // --- SVG Path Calculation (Same as main map) ---
    const nodeHeight = 180;
    const containerWidth = isMobile ? 300 : 800;
    const centerX = containerWidth / 2;
    const curveWidth = isMobile ? 0 : 200;

    const getNodePosition = (index: number) => {
        const y = index * nodeHeight + 100;
        let x = centerX;
        if (!isMobile) {
            const direction = index % 2 === 0 ? 1 : -1;
            x = centerX + (direction * curveWidth);
        }
        return { x, y };
    };

    const pathData = useMemo(() => {
        if (sortedNodes.length < 2) return '';
        return sortedNodes.map((_, i) => {
            if (i === sortedNodes.length - 1) return '';
            const current = getNodePosition(i);
            const next = getNodePosition(i + 1);
            const cp1y = current.y + (nodeHeight / 2);
            const cp2y = next.y - (nodeHeight / 2);
            return `M ${current.x} ${current.y} C ${current.x} ${cp1y}, ${next.x} ${cp2y}, ${next.x} ${next.y}`;
        }).join(' ');
    }, [sortedNodes, isMobile]);

    return (
        <div className="min-h-screen py-20 overflow-hidden relative">
            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header & Back Button */}
                <div className="mb-12 flex flex-col items-center text-center">
                    <Link href="/roadmap" className="absolute left-0 top-0 p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                        <ChevronLeft className="w-5 h-5" />
                        <span className="hidden md:inline">Back to Overview</span>
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-8 md:mt-0"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-wider mb-4 border border-purple-500/20">
                            Detailed Curriculum
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black text-white mb-4">
                            {parentNode?.title || 'Cybersecurity'} <span className="text-gradient">Mastery Path</span>
                        </h1>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Follow this step-by-step interactive guide to master the skills needed for {parentNode?.title || 'this role'}.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">

                    {/* Main Roadmap Area */}
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
                                    <stop offset="100%" stopColor="#3B82F6" />
                                </linearGradient>
                                <filter id="glow">
                                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>
                            <motion.path
                                d={pathData}
                                fill="none"
                                stroke="url(#pathGradient)"
                                strokeWidth="4"
                                strokeLinecap="round"
                                filter="url(#glow)"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                        </svg>

                        {/* Nodes */}
                        <div className="relative w-full max-w-[800px]">
                            {sortedNodes.map((node, index) => {
                                const pos = getNodePosition(index);
                                const isLeft = pos.x < centerX;
                                const isSelected = selectedNode === node.id;
                                const levelInfo = levelConfig[node.level as SkillLevel] || levelConfig['beginner'];
                                const Icon = levelInfo.icon;

                                return (
                                    <motion.div
                                        key={node.id}
                                        className="absolute"
                                        style={{
                                            top: pos.y - 30,
                                            left: isMobile ? '50%' : `${(pos.x / containerWidth) * 100}%`,
                                            transform: 'translateX(-50%)',
                                            zIndex: 10
                                        }}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div
                                            className="group cursor-pointer"
                                            onClick={() => setSelectedNode(node.id)}
                                        >
                                            {/* Node Circle */}
                                            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-900 border-4 ${isSelected ? 'border-purple-400 scale-110' : 'border-slate-700 group-hover:border-purple-500/50'} shadow-xl flex items-center justify-center transition-all duration-300 relative z-10`}>
                                                <Icon className={`w-6 h-6 md:w-8 md:h-8 text-white ${isSelected ? 'animate-pulse' : ''}`} />
                                                {/* Number Badge */}
                                                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center text-xs font-bold text-slate-300">
                                                    {index + 1}
                                                </div>
                                            </div>

                                            {/* Label */}
                                            <div className={`absolute top-1/2 -translate-y-1/2 w-48 ${isMobile
                                                    ? 'left-full ml-4 text-left'
                                                    : isLeft
                                                        ? 'right-full mr-6 text-right'
                                                        : 'left-full ml-6 text-left'
                                                } pointer-events-none`}>
                                                <h3 className={`text-base md:text-lg font-bold leading-tight ${isSelected ? 'text-purple-400' : 'text-slate-300 group-hover:text-white'}`}>
                                                    {node.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                        {/* Spacer */}
                        <div style={{ height: sortedNodes.length * nodeHeight + 200 }} />
                    </div>

                    {/* Details Panel (Sticky) */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <AnimatePresence mode="wait">
                                {selectedNodeData ? (
                                    <motion.div
                                        key={selectedNodeData.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        className="glass-card p-6 border-t-2 border-t-purple-500 bg-slate-900/90 backdrop-blur-xl"
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <h2 className="text-xl font-bold text-white">{selectedNodeData.title}</h2>
                                            <button onClick={() => setSelectedNode(null)} className="text-slate-500 hover:text-white"><X className="w-5 h-5" /></button>
                                        </div>

                                        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                            {selectedNodeData.description}
                                        </p>

                                        <div className="space-y-4">
                                            {/* Concepts to Master */}
                                            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                                                <h4 className="flex items-center gap-2 font-bold text-purple-400 text-sm mb-3">
                                                    <Target className="w-4 h-4" />
                                                    Core Concepts
                                                </h4>
                                                <ul className="space-y-2">
                                                    {/* Parse description into bullets if possible, or use generic checklist */}
                                                    {['Core Logic', 'Implementation', 'Security Implications'].map((item, i) => (
                                                        <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                                                            <CheckCircle2 className="w-3 h-3 text-green-500/70" />
                                                            {item} in {selectedNodeData.title}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <button className="w-full btn-cyber text-sm py-2">
                                                Start Module
                                            </button>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <div className="glass-card p-8 text-center border-slate-800 border-dashed border-2">
                                        <p className="text-slate-500 text-sm">Select a step to view curriculum details</p>
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
