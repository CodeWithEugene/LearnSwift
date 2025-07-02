import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import Image from 'next/image';

const courses = [
  { title: 'Advanced React Patterns', category: 'React', image: 'https://placehold.co/600x400.png', aiHint: 'abstract pattern' },
  { title: 'Next.js 15 Fundamentals', category: 'Next.js', image: 'https://placehold.co/600x400.png', aiHint: 'modern architecture' },
  { title: 'AI with Genkit', category: 'AI', image: 'https://placehold.co/600x400.png', aiHint: 'artificial intelligence' },
  { title: 'Tailwind CSS for Designers', category: 'CSS', image: 'https://placehold.co/600x400.png', aiHint: 'design system' },
  { title: 'TypeScript from Scratch', category: 'TypeScript', image: 'https://placehold.co/600x400.png', aiHint: 'code screen' },
  { title: 'State Management with Zustand', category: 'React', image: 'https://placehold.co/600x400.png', aiHint: 'data flow' },
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
          <Card key={course.title}>
            <CardHeader className="p-0">
              <Image src={course.image} data-ai-hint={course.aiHint} alt={course.title} width={600} height={400} className="rounded-t-lg" />
            </CardHeader>
            <CardContent className="p-4">
              <CardDescription>{course.category}</CardDescription>
              <CardTitle className="mt-1 text-lg">{course.title}</CardTitle>
              <Button className="w-full mt-4">View Course</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
