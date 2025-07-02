'use client';

import { useParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, PlayCircle } from 'lucide-react';
import Link from 'next/link';

export default function CourseDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  // In a real app, you'd fetch course data based on the slug
  const courseTitle = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Link href="/dashboard/courses" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="h-4 w-4" />
          Back to Courses
        </Link>
        <h1 className="text-3xl font-bold tracking-tight mt-2">{courseTitle}</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Course Overview</CardTitle>
          <CardDescription>Welcome to {courseTitle}. Let's get started!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>This is a placeholder for the course content. In a real application, this page would be filled with video lessons, interactive quizzes, and learning materials.</p>
          <Button size="lg">
            <PlayCircle className="mr-2" />
            Start Learning
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
