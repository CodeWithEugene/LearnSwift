import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const courses = [
  { title: 'Advanced React Patterns', category: 'React', image: 'https://azagatti.dev/img/react-advanced-patterns.jpeg', aiHint: 'abstract pattern', slug: 'advanced-react-patterns' },
  { title: 'Next.js 15 Fundamentals', category: 'Next.js', image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*tH-hL0LqEfi0nsRuzDhC9g.jpeg', aiHint: 'modern architecture', slug: 'nextjs-15-fundamentals' },
  { title: 'AI with Genkit', category: 'AI', image: 'https://developer-blogs.nvidia.com/wp-content/uploads/2024/05/Firebase-Genkit-NVIDIA-RTX-GPUs-1.png', aiHint: 'artificial intelligence', slug: 'ai-with-genkit' },
  { title: 'Tailwind CSS for Designers', category: 'CSS', image: 'https://www.sarvika.com/wp-content/uploads/2023/12/Tailwind-Streamlining-Design-and-Development-beyond-traditional-CSS-jpg.webp', aiHint: 'design system', slug: 'tailwind-css-for-designers' },
  { title: 'TypeScript from Scratch', category: 'TypeScript', image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Dw2upzn0ChtieJnQQi80_w.jpeg', aiHint: 'code screen', slug: 'typescript-from-scratch' },
  { title: 'State Management with Zustand', category: 'React', image: 'https://placehold.co/600x400.png', aiHint: 'data flow', slug: 'state-management-with-zustand' },
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
              <Image src={course.image} data-ai-hint={course.aiHint} alt={course.title} width={600} height={400} className="w-full md:h-48 md:object-cover" />
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
