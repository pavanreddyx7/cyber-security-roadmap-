'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { roadmapData } from '@/data/roadmap';
import {
    BookOpen, Clock, CheckCircle2, X, Target, TrendingUp, Zap, Award, ExternalLink, ChevronRight
} from 'lucide-react';
import type { SkillLevel, Domain } from '@/lib/types';

const levelConfig: Record<SkillLevel, { color: string; gradient: string; icon: any; position: number }> = {
    beginner: {
        color: 'text-green-400',
        gradient: 'from-green-500 to-emerald-500',
        icon: Target,
        position: 0,
    },
    intermediate: {
        color: 'text-blue-400',
        gradient: 'from-blue-500 to-cyan-500',
        icon: TrendingUp,
        position: 1,
    },
    advanced: {
        color: 'text-purple-400',
        gradient: 'from-purple-500 to-pink-500',
        icon: Zap,
        position: 2,
    },
    professional: {
        color: 'text-orange-400',
        gradient: 'from-orange-500 to-red-500',
        icon: Award,
        position: 3,
    },
};

const domainColors: Record<Domain, string> = {
    defense: 'badge-blue',
    offense: 'badge-pink',
    cloud: 'badge-cyan',
    devsecops: 'badge-green',
    grc: 'badge-purple',
    ot: 'badge-orange',
    leadership: 'badge-orange',
};

export default function RoadmapPage() {
    const [selectedDomain, setSelectedDomain] = useState<Domain | 'all'>('all');
    const [selectedNode, setSelectedNode] = useState<string | null>(null);
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    // Filter nodes based on domain
    const filteredNodes = useMemo(() => {
        return roadmapData.filter((node) => {
            const matchesDomain = selectedDomain === 'all' || node.domain.includes(selectedDomain);
            return matchesDomain;
        });
    }, [selectedDomain]);

    // Organize nodes by level
    const nodesByLevel = useMemo(() => {
        const levels: Record<SkillLevel, typeof filteredNodes> = {
            beginner: [],
            intermediate: [],
            advanced: [],
            professional: [],
        };

        filteredNodes.forEach(node => {
            levels[node.level].push(node);
        });

        return levels;
    }, [filteredNodes]);

    const selectedNodeData = selectedNode
        ? roadmapData.find((n) => n.id === selectedNode)
        : null;

    // Generate connection paths between nodes
    const renderConnections = () => {
        const paths: JSX.Element[] = [];

        filteredNodes.forEach((node, index) => {
            if (node.prerequisites && node.prerequisites.length > 0) {
                node.prerequisites.forEach((prereqId) => {
                    const prereqNode = filteredNodes.find(n => n.id === prereqId);
                    if (prereqNode) {
                        const isHighlighted = hoveredNode === node.id || hoveredNode === prereqId ||
                            selectedNode === node.id || selectedNode === prereqId;

                        paths.push(
                            <motion.div
                                key={`${prereqId}-${node.id}`}
                                className="absolute top-1/2 left-0 w-full h-0.5 origin-left"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            >
                                <div className={`h-full rounded-full transition-all duration-300 ${isHighlighted
                                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_10px_rgba(147,51,234,0.5)]'
                                        : 'bg-slate-700/50'
                                    }`} />
                            </motion.div>
                        );
                    }
                });
            }
        });

        return paths;
    };

    return (
        <div className="min-h-screen py-20">
            {/* Hero Header */}
            <section className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
                        <BookOpen className="w-4 h-4 text-purple-400" />
                        <span className="text-sm font-semibold text-slate-300">Learning Path</span>
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-black mb-6">
                        <span className="text-gradient">Visual</span> Roadmap
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Navigate your cybersecurity learning journey with our{' '}
                        <span className="text-purple-400 font-semibold">interactive roadmap</span>
                    </p>
                </motion.div>

                {/* Domain Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex flex-wrap gap-3 justify-center mb-16"
                >
                    <button
                        onClick={() => setSelectedDomain('all')}
                        className={`px-6 py-3 rounded-xl font-semibold transition-all ${selectedDomain === 'all'
                                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                                : 'glass-card text-slate-400 hover:text-white'
                            }`}
                    >
                        All Domains
                    </button>
                    {Object.keys(domainColors).map((domain) => (
                        <button
                            key={domain}
                            onClick={() => setSelectedDomain(domain as Domain)}
                            className={`px-6 py-3 rounded-xl font-semibold capitalize transition-all ${selectedDomain === domain
                                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                                    : 'glass-card text-slate-400 hover:text-white'
                                }`}
                        >
                            {domain}
                        </button>
                    ))}
                </motion.div>
            </section>

            {/* Visual Roadmap */}
            <section className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Side - Visual Path */}
                    <div className="lg:col-span-2">
                        <div className="relative">
                            {Object.entries(nodesByLevel).map(([level, nodes], levelIndex) => {
                                if (nodes.length === 0) return null;
                                const levelInfo = levelConfig[level as SkillLevel];
                                const Icon = levelInfo.icon;

                                return (
                                    <div key={level} className="mb-12">
                                        {/* Level Header */}
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${levelInfo.gradient} p-2.5 flex items-center justify-center`}>
                                                <Icon className="w-full h-full text-white" />
                                            </div>
                                            <div>
                                                <h2 className={`text-2xl font-black capitalize ${levelInfo.color}`}>
                                                    {level}
                                                </h2>
                                                <p className="text-sm text-slate-500">{nodes.length} topics</p>
                                            </div>
                                            <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent ml-4" />
                                        </div>

                                        {/* Nodes Grid with Connection Lines */}
                                        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {nodes.map((node, nodeIndex) => {
                                                const isSelected = selectedNode === node.id;
                                                const isHovered = hoveredNode === node.id;
                                                const hasPrerequisites = node.prerequisites && node.prerequisites.length > 0;

                                                return (
                                                    <motion.div
                                                        key={node.id}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.4, delay: levelIndex * 0.1 + nodeIndex * 0.05 }}
                                                        className="relative"
                                                    >
                                                        {/* Connection indicator */}
                                                        {hasPrerequisites && (
                                                            <motion.div
                                                                className="absolute -top-6 left-1/2 transform -translate-x-1/2"
                                                                initial={{ opacity: 0, y: 10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{ delay: levelIndex * 0.1 + nodeIndex * 0.05 + 0.2 }}
                                                            >
                                                                <div className={`w-1 h-6 rounded-full ${isHovered || isSelected
                                                                        ? 'bg-gradient-to-b from-purple-500 to-transparent'
                                                                        : 'bg-gradient-to-b from-slate-700 to-transparent'
                                                                    }`} />
                                                            </motion.div>
                                                        )}

                                                        <motion.div
                                                            whileHover={{ y: -4, scale: 1.02 }}
                                                            onMouseEnter={() => setHoveredNode(node.id)}
                                                            onMouseLeave={() => setHoveredNode(null)}
                                                            onClick={() => setSelectedNode(node.id)}
                                                            className={`glass-card p-6 cursor-pointer group transition-all duration-300 ${isSelected
                                                                    ? 'ring-2 ring-purple-500 bg-purple-500/10'
                                                                    : isHovered
                                                                        ? 'ring-1 ring-purple-500/50'
                                                                        : ''
                                                                }`}
                                                        >
                                                            <div className="flex items-start justify-between gap-4 mb-3">
                                                                <h3 className={`text-lg font-bold transition-all duration-300 ${isSelected || isHovered ? 'text-gradient' : 'text-slate-100'
                                                                    }`}>
                                                                    {node.title}
                                                                </h3>
                                                                <div className="flex items-center gap-1.5 text-xs text-slate-400 flex-shrink-0">
                                                                    <Clock className="w-3.5 h-3.5" />
                                                                    <span className="whitespace-nowrap">{node.timeline}</span>
                                                                </div>
                                                            </div>

                                                            <p className="text-sm text-slate-400 mb-4 leading-relaxed line-clamp-2">
                                                                {node.description}
                                                            </p>

                                                            <div className="flex flex-wrap gap-2 mb-3">
                                                                {node.domain.slice(0, 2).map((d) => (
                                                                    <span key={d} className={`badge ${domainColors[d]} text-xs capitalize`}>
                                                                        {d}
                                                                    </span>
                                                                ))}
                                                                {node.domain.length > 2 && (
                                                                    <span className="badge badge-purple text-xs">
                                                                        +{node.domain.length - 2}
                                                                    </span>
                                                                )}
                                                            </div>

                                                            {(isSelected || isHovered) && (
                                                                <motion.div
                                                                    initial={{ opacity: 0, height: 0 }}
                                                                    animate={{ opacity: 1, height: 'auto' }}
                                                                    className="flex items-center gap-2 text-sm text-purple-400 font-medium mt-3 pt-3 border-t border-slate-700/50"
                                                                >
                                                                    <span>View details</span>
                                                                    <ChevronRight className="w-4 h-4" />
                                                                </motion.div>
                                                            )}
                                                        </motion.div>

                                                        {/* Connection line to next node */}
                                                        {nodeIndex < nodes.length - 1 && (
                                                            <motion.div
                                                                className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5"
                                                                initial={{ scaleX: 0 }}
                                                                animate={{ scaleX: 1 }}
                                                                transition={{ duration: 0.3, delay: levelIndex * 0.1 + nodeIndex * 0.05 + 0.3 }}
                                                            >
                                                                <div className={`h-full rounded-full ${isHovered || isSelected
                                                                        ? 'bg-gradient-to-r from-purple-500 to-transparent'
                                                                        : 'bg-slate-700/50'
                                                                    }`} />
                                                            </motion.div>
                                                        )}
                                                    </motion.div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Side - Detail Panel */}
                    <div className="lg:sticky lg:top-24 h-fit">
                        <AnimatePresence mode="wait">
                            {selectedNodeData ? (
                                <motion.div
                                    key={selectedNodeData.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="glass-card p-8 space-y-6"
                                >
                                    {/* Header */}
                                    <div>
                                        <div className="flex items-start justify-between mb-4">
                                            <h2 className="text-2xl font-black text-slate-100">{selectedNodeData.title}</h2>
                                            <button
                                                onClick={() => setSelectedNode(null)}
                                                className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                                            >
                                                <X className="w-5 h-5" />
                                            </button>
                                        </div>
                                        <p className="text-slate-400 leading-relaxed mb-4">{selectedNodeData.description}</p>

                                        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
                                            <p className="text-sm text-slate-300">{selectedNodeData.whyItMatters}</p>
                                        </div>
                                    </div>

                                    {/* Timeline */}
                                    <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/50">
                                        <Clock className="w-5 h-5 text-cyan-400" />
                                        <div>
                                            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Timeline</div>
                                            <div className="text-lg font-bold text-cyan-400">{selectedNodeData.timeline}</div>
                                        </div>
                                    </div>

                                    {/* Key Skills */}
                                    {selectedNodeData.skills.length > 0 && (
                                        <div>
                                            <h3 className="font-bold mb-4 text-slate-200">Key Skills</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedNodeData.skills.map((skill) => (
                                                    <span key={skill} className="badge badge-blue text-xs">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Learning Checklist */}
                                    {selectedNodeData.checklistItems.length > 0 && (
                                        <div>
                                            <h3 className="font-bold mb-4 flex items-center gap-2 text-slate-200">
                                                <CheckCircle2 className="w-5 h-5 text-green-400" />
                                                Learning Checklist
                                            </h3>
                                            <ul className="space-y-3">
                                                {selectedNodeData.checklistItems.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-400">
                                                        <div className="w-5 h-5 rounded-full border-2 border-purple-500/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                            <div className="w-2 h-2 rounded-full bg-purple-500" />
                                                        </div>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Resources */}
                                    {selectedNodeData.resources.length > 0 && (
                                        <div>
                                            <h3 className="font-bold mb-4 text-slate-200">Resources</h3>
                                            <div className="space-y-3">
                                                {selectedNodeData.resources.map((resource) => (
                                                    <a
                                                        key={resource.id}
                                                        href={resource.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="block p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 group border border-transparent hover:border-purple-500/30"
                                                    >
                                                        <div className="flex items-start justify-between gap-2 mb-2">
                                                            <h4 className="font-semibold text-slate-200 group-hover:text-gradient transition-all">
                                                                {resource.title}
                                                            </h4>
                                                            <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-purple-400 flex-shrink-0 transition-colors" />
                                                        </div>
                                                        <div className="flex flex-wrap gap-2 text-xs">
                                                            <span className="badge badge-purple">{resource.type}</span>
                                                            <span className="badge badge-cyan">{resource.provider}</span>
                                                            {resource.cost && (
                                                                <span className="badge badge-green capitalize">{resource.cost}</span>
                                                            )}
                                                            {resource.duration && (
                                                                <span className="badge badge-orange">{resource.duration}</span>
                                                            )}
                                                        </div>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="glass-card p-12 text-center"
                                >
                                    <BookOpen className="w-16 h-16 mx-auto mb-4 text-slate-700" />
                                    <h3 className="text-lg font-semibold mb-2 text-slate-400">Select a Topic</h3>
                                    <p className="text-sm text-slate-500">
                                        Click on any topic card to view detailed information
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </div>
    );
}
