import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Briefcase } from 'lucide-react';
import Link from 'next/link';

interface Job {
  slug: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
}

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Link href={`/careers/${job.slug}`}>
      <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer border-border/50 hover:border-border">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between mb-2">
            <Badge variant="secondary" className="text-xs">
              {job.department}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {job.type}
            </Badge>
          </div>
          <CardTitle className="text-lg font-semibold text-foreground leading-tight">
            {job.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <CardDescription className="text-sm text-muted-foreground mb-4 leading-relaxed">
            {job.description}
          </CardDescription>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Briefcase className="w-3 h-3" />
              <span>{job.department}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
