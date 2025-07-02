import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const courses = [
  { title: 'Advanced React Patterns', category: 'React', image: 'https://placehold.co/600x400/dbeafe/3b82f6', aiHint: 'abstract pattern', slug: 'advanced-react-patterns' },
  { title: 'Next.js 15 Fundamentals', category: 'Next.js', image: 'https://placehold.co/600x400/c7d2fe/4338ca', aiHint: 'modern architecture', slug: 'nextjs-15-fundamentals' },
  { title: 'AI with Genkit', category: 'AI', image: 'https://placehold.co/600x400/ddd6fe/6d28d9', aiHint: 'artificial intelligence', slug: 'ai-with-genkit' },
  { title: 'Tailwind CSS for Designers', category: 'CSS', image: 'https://placehold.co/600x400/e9d5ff/7e22ce', aiHint: 'design system', slug: 'tailwind-css-for-designers' },
  { title: 'TypeScript from Scratch', category: 'TypeScript', image: 'https://placehold.co/600x400/f3e8ff/581c87', aiHint: 'code screen', slug: 'typescript-from-scratch' },
  { title: 'State Management with Zustand', category: 'React', image: 'https://placehold.co/600x400/fae8ff/701a75', aiHint: 'data flow', slug: 'state-management-with-zustand' },
];

export default function CoursesPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search courses..." className="pl-10" />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map(course => (
          <Card key={course.title} className="flex flex-col overflow-hidden transition-transform hover:scale-105">
            <CardHeader className="p-0">
              <Image src={course.image} data-ai-hint={course.aiHint} alt={course.title} width={600} height={400} className="w-full" />
            </CardHeader>
            <CardContent className="p-4 flex flex-col flex-grow">
              <CardDescription>{course.category}</CardDescription>
              <CardTitle className="mt-1 text-lg">{course.title}</CardTitle>
              <div className="mt-auto pt-4">
                <Link href={`/dashboard/courses/${course.slug}`} passHref>
                  <Button className="w-full">View Course</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
