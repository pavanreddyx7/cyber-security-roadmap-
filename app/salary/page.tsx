'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { salaryData, salaryMethodology, formatSalary } from '@/data/salary';
import { jobRolesData } from '@/data/jobs';
import { DollarSign, TrendingUp, Users, Globe } from 'lucide-react';

export default function SalaryPage() {
    const [selectedRole, setSelectedRole] = useState('security-analyst');
    const [selectedCountry, setSelectedCountry] = useState('USA');

    const roleData = jobRolesData.find((r) => r.id === selectedRole);
    const roleSalaries = salaryData.filter(
        (s) => s.roleId === selectedRole && s.country === selectedCountry
    );

    const countries = Array.from(new Set(salaryData.map((s) => s.country)));

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
                            <span className="gradient-text">Salary Insights</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Data-driven salary analysis for cybersecurity roles across multiple
                            countries and experience levels.
                        </p>
                    </motion.div>

                    {/* Filters */}
                    <div className="glass rounded-lg p-6 mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Role Select */}
                            <div>
                                <label className="block text-sm font-medium mb-2">Job Role</label>
                                <select
                                    value={selectedRole}
                                    onChange={(e) => setSelectedRole(e.target.value)}
                                    className="w-full px-4 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                >
                                    {jobRolesData.map((role) => (
                                        <option key={role.id} value={role.id}>
                                            {role.title}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Country Select */}
                            <div>
                                <label className="block text-sm font-medium mb-2">Country</label>
                                <select
                                    value={selectedCountry}
                                    onChange={(e) => setSelectedCountry(e.target.value)}
                                    className="w-full px-4 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                >
                                    {countries.map((country) => (
                                        <option key={country} value={country}>
                                            {country}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Salary Data */}
            <section className="section">
                <div className="container-custom">
                    {/* Role Info */}
                    {roleData && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="glass rounded-lg p-6 mb-8"
                        >
                            <h2 className="text-2xl font-bold mb-2">{roleData.title}</h2>
                            <p className="text-muted-foreground mb-4">{roleData.description}</p>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <span className="flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4 text-success" />
                                    Demand Score: {roleData.demandScore}/10
                                </span>
                                <span className="flex items-center gap-2 capitalize">
                                    <Globe className="w-4 h-4 text-primary" />
                                    Family: {roleData.family}
                                </span>
                            </div>
                        </motion.div>
                    )}

                    {/* Salary Cards by Experience Level */}
                    {roleSalaries.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                            {roleSalaries.map((salary, index) => (
                                <motion.div
                                    key={`${salary.experienceLevel}-${index}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="glass rounded-lg p-6 card-hover"
                                >
                                    <div className="flex items-center gap-2 mb-4">
                                        <DollarSign className="w-5 h-5 text-primary" />
                                        <h3 className="font-semibold capitalize">{salary.experienceLevel} Level</h3>
                                    </div>

                                    <div className="space-y-3">
                                        <div>
                                            <div className="text-sm text-muted-foreground mb-1">Median</div>
                                            <div className="text-2xl font-bold text-primary">
                                                {formatSalary(salary.median, salary.currency)}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 text-sm">
                                            <div>
                                                <div className="text-muted-foreground mb-1">25th %ile</div>
                                                <div className="font-semibold">
                                                    {formatSalary(salary.percentile25, salary.currency)}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-muted-foreground mb-1">75th %ile</div>
                                                <div className="font-semibold">
                                                    {formatSalary(salary.percentile75, salary.currency)}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-3 border-t border-border">
                                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                                                <span className="flex items-center gap-1">
                                                    <Users className="w-3 h-3" />
                                                    n={salary.sampleSize}
                                                </span>
                                                <span>
                                                    {(salary.confidenceScore * 100).toFixed(0)}% confidence
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="glass rounded-lg p-12 text-center mb-12">
                            <p className="text-muted-foreground text-lg">
                                No salary data available for {roleData?.title} in {selectedCountry}
                            </p>
                            <p className="text-sm text-muted-foreground mt-2">
                                Try selecting a different country or role.
                            </p>
                        </div>
                    )}

                    {/* Methodology */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="glass rounded-lg p-8"
                    >
                        <h2 className="text-2xl font-bold mb-6">Data Methodology</h2>

                        <div className="space-y-6">
                            {/* Sources */}
                            <div>
                                <h3 className="font-semibold mb-3">Data Sources</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {salaryMethodology.sources.map((source) => (
                                        <div
                                            key={source.name}
                                            className="p-3 rounded bg-background/50"
                                        >
                                            <a
                                                href={source.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-medium text-primary hover:underline"
                                            >
                                                {source.name}
                                            </a>
                                            <div className="text-xs text-muted-foreground mt-1">
                                                Type: {source.type} • Last accessed: {source.lastAccessed}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Collection Method */}
                            <div>
                                <h3 className="font-semibold mb-3">Collection Method</h3>
                                <p className="text-sm text-muted-foreground whitespace-pre-line">
                                    {salaryMethodology.collectionMethod}
                                </p>
                            </div>

                            {/* Normalization */}
                            <div>
                                <h3 className="font-semibold mb-3">Normalization Approach</h3>
                                <p className="text-sm text-muted-foreground whitespace-pre-line">
                                    {salaryMethodology.normalizationApproach}
                                </p>
                            </div>

                            {/* Update Frequency */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-semibold mb-2">Update Frequency</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {salaryMethodology.updateFrequency}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Minimum Sample Size</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {salaryMethodology.minSampleSize} data points per role/region
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
