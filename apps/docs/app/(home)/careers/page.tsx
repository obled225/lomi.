import { detectLanguage } from '@/lib/i18n/server-utils';
import { t } from '@/lib/i18n/translations';
import type { Metadata } from 'next';
import CareersClient from '@/components/home/careers-client';
import { getActiveJobsServer, getUniqueDepartmentsServer, getUniqueLocationsServer } from '@/lib/supabase/queries.server';

export async function generateMetadata(): Promise<Metadata> {
    const language = await detectLanguage();
    return {
        title: t('careers.title', language) as string,
        description: t('careers.description', language) as string,
    };
}

export default async function CareersPage() {
    const [jobs, departments, locations] = await Promise.all([
        getActiveJobsServer(),
        getUniqueDepartmentsServer(),
        getUniqueLocationsServer()
    ]);

    return (
        <main className="flex-1 pt-0">
            <div className="relative">
                {/* Background decoration */}
                <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_10%,transparent_0%,var(--background)_75%)]"></div>

                <CareersClient jobs={jobs} departments={departments} locations={locations} />
            </div>
        </main>
    );
}
