'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/contexts/translation-context';
import { JobApplicationForm } from './job-application-form';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, Briefcase, Clock, DollarSign } from 'lucide-react';
import Link from 'next/link';
import { getJobBySlug, Job } from '@/lib/supabase/queries';


interface JobDetailClientProps {
    jobSlug: string;
}

export default function JobDetailClient({ jobSlug }: JobDetailClientProps) {
    const { currentLanguage } = useTranslation();
    const [job, setJob] = useState<Job | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const jobData = await getJobBySlug(jobSlug);
                if (!jobData) {
                    setError('Job not found');
                    return;
                }
                setJob(jobData);
            } catch (err) {
                setError('Failed to load job details. Please try again later.');
                console.error('Error fetching job:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchJob();
    }, [jobSlug]);

    if (loading) {
        return (
            <section className="w-full py-8 md:py-20 lg:py-24 xl:py-32">
                <div className="max-w-4xl mx-auto pl-2 pr-4 py-2">
                    <div className="flex justify-center items-center py-12">
                        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    </div>
                </div>
            </section>
        );
    }

    if (error || !job) {
        return (
            <section className="w-full py-8 md:py-20 lg:py-24 xl:py-32">
                <div className="max-w-4xl mx-auto pl-2 pr-4 py-2">
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold text-foreground mb-4">
                            {error || 'Job Not Found'}
                        </h1>
                        <p className="text-muted-foreground mb-8">
                            {error ? error : 'The job position you\'re looking for doesn\'t exist.'}
                        </p>
                        <Link href="/careers">
                            <Button>
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Careers
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="w-full py-8 md:py-20 lg:py-24 xl:py-32">
            <div className="max-w-4xl mx-auto pl-2 pr-4 py-2">
                <motion.div
                    className="flex flex-col space-y-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Back Button */}
                    <Link href="/careers">
                        <Button variant="ghost" className="mb-4">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Careers
                        </Button>
                    </Link>

                    {/* Job Header */}
                    <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-3">
                            <Badge variant="secondary">{job.department}</Badge>
                            <Badge variant="outline">{job.type}</Badge>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                            </div>
                            {job.salary && (
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                    <DollarSign className="w-4 h-4" />
                                    {job.salary}
                                </div>
                            )}
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-foreground">{job.title}</h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">{job.description}</p>
                    </div>

                    {/* Job Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Requirements */}
                        {job.requirements && (
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold text-foreground">Requirements</h2>
                                <ul className="space-y-2">
                                    {job.requirements.map((requirement, index) => (
                                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <span className="text-primary mt-1">•</span>
                                            <span>{requirement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Responsibilities */}
                        {job.responsibilities && (
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold text-foreground">Responsibilities</h2>
                                <ul className="space-y-2">
                                    {job.responsibilities.map((responsibility, index) => (
                                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <span className="text-primary mt-1">•</span>
                                            <span>{responsibility}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Benefits */}
                    {job.benefits && (
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-foreground">Benefits</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {job.benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <span className="text-green-500">✓</span>
                                        <span>{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Application Form */}
                    <div className="mt-12 pt-8 border-t">
                        <h2 className="text-2xl font-semibold text-foreground mb-6">Apply for this position</h2>
                        <JobApplicationForm jobTitle={job.title} jobId={job.id} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
