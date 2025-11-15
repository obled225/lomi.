import { createClient } from '@/lib/supabase/client';
import type { Database } from '@/lib/types/database.types';

export type Job = Database['public']['Tables']['jobs']['Row'];
export type JobApplication =
  Database['public']['Tables']['job_applications']['Row'];
export type JobApplicationInsert =
  Database['public']['Tables']['job_applications']['Insert'];
export type JobApplicationUpdate =
  Database['public']['Tables']['job_applications']['Update'];

// Fetch a single job by slug
export async function getJobBySlug(slug: string): Promise<Job | null> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('jobs')
    .select('*')
    .eq('slug', slug)
    .eq('is_active', true)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      // No rows found
      return null;
    }
    console.error('Error fetching job:', error);
    throw new Error('Failed to fetch job');
  }

  return data;
}

// Create a job application
export async function createJobApplication(
  jobId: string,
  applicationData: Omit<
    JobApplicationInsert,
    'job_id' | 'created_at' | 'updated_at' | 'id' | 'status'
  >,
): Promise<JobApplication> {
  const supabase = createClient();

  // Use the RPC function which also sends notification email
  const { data, error } = await supabase.rpc('create_job_application', {
    p_job_id: jobId,
    p_name: applicationData.name,
    p_email: applicationData.email,
    p_linkedin_url: applicationData.linkedin_url,
    p_github_url: applicationData.github_url,
    p_project_note: applicationData.project_note,
    p_resume_url: applicationData.resume_url,
  });

  if (error) {
    console.error('Error creating job application:', error);
    throw new Error('Failed to submit application');
  }

  // Fetch the created application data
  const { data: application, error: fetchError } = await supabase
    .from('job_applications')
    .select()
    .eq('id', data)
    .single();

  if (fetchError) {
    console.error('Error fetching created application:', fetchError);
    throw new Error('Application submitted but failed to retrieve details');
  }

  return application;
}

// Upload resume to storage
export async function uploadResume(
  file: File,
  applicationId: string,
): Promise<string> {
  const supabase = createClient();

  // Create a unique filename
  const fileExt = file.name.split('.').pop();
  const fileName = `${applicationId}.${fileExt}`;

  const { error } = await supabase.storage
    .from('resumes')
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: false,
    });

  if (error) {
    console.error('Error uploading resume:', error);
    throw new Error('Failed to upload resume');
  }

  // Get the public URL
  const {
    data: { publicUrl },
  } = supabase.storage.from('resumes').getPublicUrl(fileName);

  return publicUrl;
}
