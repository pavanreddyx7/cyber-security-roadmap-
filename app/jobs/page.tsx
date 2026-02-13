'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { jobRolesData } from '@/data/jobs';
import {
    Search, Briefcase, TrendingUp, Award, DollarSign,
    Shield, Users, Building2, X, ChevronRight, Sparkles,
    Target, Code, Cloud, Lock, FileCheck, Star
} from 'lucide-react';
import type { Domain } from '@/lib/types';

const familyConfig: Record<Domain | 'leadership', { name: string; icon: any; color: string; gradient: string }> = {
    defense: {
        name: 'Defensive Security',
        icon: Shield,
        color: 'text-blue-400',
        gradient: 'from-blue-500 to-cyan-500'
    },
    offense: {
        name: 'Offensive Security',
        icon: Target,
        color: 'text-red-400',
        gradient: 'from-red-500 to-pink-500'
    },
    cloud: {
        name: 'Cloud Security',
        icon: Cloud,
        color: 'text-cyan-400',
        gradient: 'from-cyan-500 to-blue-500'
    },
    devsecops: {
        name: 'DevSecOps',
        icon: Code,
        color: 'text-green-400',
        gradient: 'from-green-500 to-emerald-500'
    },
    grc: {
        name: 'GRC',
        icon: FileCheck,
        color: 'text-purple-400',
        gradient: 'from-purple-500 to-pink-500'
    },
    leadership: {
        name: 'Leadership',
        icon: Users,
        color: 'text-orange-400',
        gradient: 'from-orange-500 to-yellow-500'
    },
};

export default function JobsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFamily, setSelectedFamily] = useState<Domain | 'all' | 'leadership'>('all');
    const [selectedRole, setSelectedRole] = useState<string | null>(null);

    const filteredRoles = jobRolesData.filter((role) => {
        const matchesSearch =
            role.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            role.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFamily = selectedFamily === 'all' || role.family === selectedFamily;
        return matchesSearch && matchesFamily;
    });

    const selectedRoleData = selectedRole
        ? jobRolesData.find((r) => r.id === selectedRole)
        : null;

    const familyStats = Object.entries(familyConfig).map(([key, config]) => ({
        family: key as Domain | 'leadership',
        count: jobRolesData.filter(r => r.family === key).length,
        ...config
    }));

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
                        <Briefcase className="w-4 h-4 text-purple-400" />
                        <span className="text-sm font-semibold text-slate-300">Career Explorer</span>
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-black mb-6">
                        <span className="text-gradient">Cybersecurity</span> Roles
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Explore comprehensive career paths, skills, certifications, and salary ranges
                        for <span className="text-purple-400 font-semibold">{jobRolesData.length}+ cybersecurity roles</span>
                    </p>
                </motion.div>

                {/* Family Categories */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
                >
                    {familyStats.map((stat, index) => {
                        const Icon = stat.icon;
                        const isActive = selectedFamily === stat.family;
                        return (
                            <motion.button
                                key={stat.family}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                whileHover={{ y: -4, scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedFamily(isActive ? 'all' : stat.family)}
                                className={`glass-card p-4 transition-all duration-300 ${isActive
                                        ? 'ring-2 ring-purple-500 bg-purple-500/10'
                                        : 'hover:bg-slate-800/50'
                                    }`}
                            >
                                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.gradient} p-2 mx-auto mb-3`}>
                                    <Icon className="w-full h-full text-white" />
                                </div>
                                <div className={`text-2xl font-bold mb-1 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                                    {stat.count}
                                </div>
                                <div className="text-xs text-slate-400 font-medium">{stat.name}</div>
                            </motion.button>
                        );
                    })}
                </motion.div>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass-card p-6 mb-8"
                >
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search roles, skills, or descriptions..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-slate-900/50 border border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-slate-100 placeholder:text-slate-500 transition-all duration-200"
                        />
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm">
                        <span className="text-slate-400">
                            Showing <span className="text-purple-400 font-semibold">{filteredRoles.length}</span> of <span className="text-cyan-400 font-semibold">{jobRolesData.length}</span> roles
                        </span>
                        {(selectedFamily !== 'all' || searchQuery) && (
                            <button
                                onClick={() => {
                                    setSelectedFamily('all');
                                    setSearchQuery('');
                                }}
                                className="text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors"
                            >
                                <X className="w-4 h-4" />
                                Clear filters
                            </button>
                        )}
                    </div>
                </motion.div>
            </section>

            {/* Roles Grid & Detail Panel */}
            <section className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Roles Cards */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {filteredRoles.map((role, index) => {
                            const familyInfo = familyConfig[role.family as Domain | 'leadership'];
                            const Icon = familyInfo?.icon || Briefcase;
                            const isSelected = selectedRole === role.id;

                            return (
                                <motion.div
                                    key={role.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.03 }}
                                    whileHover={{ y: -6 }}
                                    onClick={() => setSelectedRole(role.id)}
                                    className={`glass-card p-6 cursor-pointer group transition-all duration-300 ${isSelected ? 'ring-2 ring-purple-500 bg-purple-500/5' : 'hover:bg-slate-800/50'
                                        }`}
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${familyInfo?.gradient} p-2.5 group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className="w-full h-full text-white" />
                                        </div>
                                        <span className="badge badge-purple flex items-center gap-1">
                                            <Star className="w-3 h-3" />
                                            {role.demandScore}/10
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold mb-2 text-slate-100 group-hover:text-gradient transition-all duration-300">
                                        {role.title}
                                    </h3>

                                    <p className="text-sm text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                                        {role.description}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                                        <span className="badge badge-cyan capitalize text-xs">
                                            {familyInfo?.name || role.family}
                                        </span>
                                        <div className="flex items-center gap-1 text-sm font-semibold text-green-400">
                                            <DollarSign className="w-4 h-4" />
                                            {(role.salaryBand.min / 1000).toFixed(0)}k-{(role.salaryBand.max / 1000).toFixed(0)}k
                                        </div>
                                    </div>

                                    {isSelected && (
                                        <div className="mt-4 flex items-center gap-2 text-sm text-purple-400 font-medium">
                                            <span>View details</span>
                                            <ChevronRight className="w-4 h-4" />
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Detail Panel */}
                    <div className="lg:sticky lg:top-24 h-fit">
                        <AnimatePresence mode="wait">
                            {selectedRoleData ? (
                                <motion.div
                                    key={selectedRoleData.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="glass-card p-8 space-y-6"
                                >
                                    {/* Header */}
                                    <div>
                                        <div className="flex items-start justify-between mb-4">
                                            <h2 className="text-2xl font-black text-slate-100">{selectedRoleData.title}</h2>
                                            <button
                                                onClick={() => setSelectedRole(null)}
                                                className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                                            >
                                                <X className="w-5 h-5" />
                                            </button>
                                        </div>
                                        <p className="text-slate-400 leading-relaxed">{selectedRoleData.description}</p>
                                    </div>

                                    {/* Salary Highlight */}
                                    <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
                                        <div className="flex items-center gap-2 mb-2 text-sm text-slate-400">
                                            <DollarSign className="w-4 h-4" />
                                            <span>Salary Range</span>
                                        </div>
                                        <div className="text-3xl font-black text-gradient mb-1">
                                            ${selectedRoleData.salaryBand.min.toLocaleString()} - ${selectedRoleData.salaryBand.max.toLocaleString()}
                                        </div>
                                        <div className="text-xs text-slate-500 uppercase tracking-wide">
                                            {selectedRoleData.salaryBand.experience} • {selectedRoleData.salaryBand.currency} Annual
                                        </div>
                                    </div>

                                    {/* Career Progression */}
                                    <div>
                                        <h3 className="font-bold mb-4 flex items-center gap-2 text-slate-200">
                                            <Award className="w-5 h-5 text-purple-400" />
                                            Career Progression
                                        </h3>
                                        <div className="space-y-3">
                                            {[
                                                { level: selectedRoleData.seniorityLevels.entry, color: 'from-green-500 to-emerald-500' },
                                                { level: selectedRoleData.seniorityLevels.mid, color: 'from-blue-500 to-cyan-500' },
                                                { level: selectedRoleData.seniorityLevels.senior, color: 'from-purple-500 to-pink-500' },
                                                { level: selectedRoleData.seniorityLevels.lead, color: 'from-orange-500 to-red-500' },
                                                selectedRoleData.seniorityLevels.executive && { level: selectedRoleData.seniorityLevels.executive, color: 'from-red-500 to-pink-500' },
                                            ].filter(Boolean).map((item: any, idx) => (
                                                <div key={idx} className="flex items-center gap-3">
                                                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-xs font-bold`}>
                                                        {idx + 1}
                                                    </div>
                                                    <span className="text-sm text-slate-300">{item.level}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Key Skills */}
                                    <div>
                                        <h3 className="font-bold mb-4 text-slate-200">Key Skills</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedRoleData.keySkills.map((skill) => (
                                                <span key={skill} className="badge badge-blue text-xs">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Certifications */}
                                    <div>
                                        <h3 className="font-bold mb-4 text-slate-200">Recommended Certifications</h3>
                                        <ul className="space-y-2">
                                            {selectedRoleData.certifications.map((cert) => (
                                                <li key={cert} className="flex items-start gap-2 text-sm text-slate-400">
                                                    <Sparkles className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                                                    {cert}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Responsibilities */}
                                    <div>
                                        <h3 className="font-bold mb-4 text-slate-200">Typical Responsibilities</h3>
                                        <ul className="space-y-2">
                                            {selectedRoleData.typicalResponsibilities.map((resp, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                                                    <ChevronRight className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                                                    {resp}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="glass-card p-12 text-center"
                                >
                                    <Building2 className="w-16 h-16 mx-auto mb-4 text-slate-700" />
                                    <h3 className="text-lg font-semibold mb-2 text-slate-400">Select a Role</h3>
                                    <p className="text-sm text-slate-500">
                                        Click on any role card to view detailed information
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
