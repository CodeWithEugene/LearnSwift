'use client';

import { useParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, PlayCircle, Bot, FileText, Check, Loader2 } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { aiContentSummary, AiContentSummaryInput } from '@/ai/flows/ai-content-summary';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const courseData = {
    'advanced-react-patterns': {
        title: 'Advanced React Patterns',
        description: 'Dive deep into advanced React patterns, hooks, and state management techniques to build scalable and maintainable applications.',
        content: `In this course, we explore a variety of advanced patterns in React. We start with a deep dive into custom hooks, learning how to abstract complex logic into reusable functions. We then cover advanced state management strategies using Context API and external libraries like Zustand and Redux Toolkit. Other topics include render props, higher-order components (HOCs), performance optimization with useMemo and useCallback, and effective component composition. By the end, you'll be able to write cleaner, more efficient, and highly scalable React code.`,
        videoUrl: 'https://www.youtube.com/embed/LlvBzyy-558',
    },
    'nextjs-15-fundamentals': {
        title: 'Next.js 15 Fundamentals',
        description: 'Master the fundamentals of Next.js 15, including the App Router, Server Components, and data fetching strategies.',
        content: `Next.js 15 introduces powerful new features built on the React Server Components paradigm. This course covers the fundamentals, starting with the App Router for file-based routing. We'll explore Server Components and Client Components, understanding the trade-offs and best use cases for each. You'll learn modern data fetching techniques, server actions for mutations, and how to build dynamic, high-performance web applications. We also cover routing, layouts, and error handling within the new router.`,
        videoUrl: 'https://www.youtube.com/embed/ZVnjOPwW4ZA',
    },
    'ai-with-genkit': {
        title: 'AI with Genkit',
        description: 'Learn how to build powerful AI applications using Google\'s Genkit framework, integrated with Next.js.',
        content: `This course provides a comprehensive introduction to building AI-powered features with Google's Genkit. You will learn how to define Genkit flows, prompts, and tools. We'll cover how to call large language models (LLMs) for tasks like text generation, summarization, and function calling. We will integrate these flows into a Next.js application, using Server Actions to connect your frontend to your AI backend securely and efficiently. By the end, you will be able to build and deploy your own generative AI applications.`,
        videoUrl: 'https://www.youtube.com/embed/3p1P5grjXIQ',
    },
    'tailwind-css-for-designers': {
        title: 'Tailwind CSS for Designers',
        description: 'Learn how to use Tailwind CSS to design and build beautiful, custom user interfaces without writing a single line of CSS.',
        content: 'This course is perfect for designers who want to bridge the gap between design and development. You will learn the core concepts of Tailwind CSS, how to think in utility classes, and how to build complex components from scratch. We will cover responsive design, dark mode, and customizing Tailwind to match your own design system.',
        videoUrl: 'https://www.youtube.com/embed/zKguO4oaAGs'
    },
    'typescript-from-scratch': {
        title: 'TypeScript from Scratch',
        description: 'A beginner-friendly guide to TypeScript. Learn the fundamentals and start writing safer, more robust JavaScript code.',
        content: 'This course will take you from zero to hero with TypeScript. We will cover basic types, interfaces, classes, generics, and more advanced features. You will understand how TypeScript helps you catch errors early and write more maintainable code. By the end, you will be confident using TypeScript in your own projects.',
        videoUrl: 'https://www.youtube.com/embed/d56mG7DezGs'
    },
    'state-management-with-zustand': {
        title: 'State Management with Zustand',
        description: 'A simple, fast, and scalable state management solution for React. Learn how to manage your app\'s state with ease.',
        content: 'Tired of boilerplate-heavy state management? Zustand offers a minimal and unopinionated approach. In this course, you will learn how to create stores, manage state, and handle asynchronous actions with Zustand. We will explore its hooks-based API and see how it can simplify state management in your React applications.',
        videoUrl: 'https://www.youtube.com/embed/fZPgBnL2x-Q'
    },
    'default': {
        title: 'Course Not Found',
        description: 'This course does not have any content yet. Please check back later.',
        content: 'No content available.',
        videoUrl: null,
    }
};

const lessons = [
  { title: 'Introduction', duration: '3:45', completed: true },
  { title: 'Core Concepts', duration: '7:12', completed: true },
  { title: 'Building the First Feature', duration: '12:30', completed: false },
  { title: 'Advanced Techniques', duration: '9:05', completed: false },
  { title: 'Deployment', duration: '5:20', completed: false },
]

export default function CourseDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const course = courseData[slug as keyof typeof courseData] || courseData.default;

  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateSummary = async () => {
    setIsLoading(true);
    setError('');
    setSummary('');
    try {
      const input: AiContentSummaryInput = { content: course.content };
      const result = await aiContentSummary(input);
      setSummary(result.summary);
    } catch (e) {
      setError('Failed to generate summary. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div>
        <Link href="/dashboard/courses" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-4 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Courses
        </Link>
        <h1 className="text-4xl font-bold tracking-tight">{course.title}</h1>
        <p className="mt-2 text-lg text-muted-foreground">{course.description}</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
            {course.videoUrl && (
                <div className="aspect-video w-full">
                    <iframe
                      src={course.videoUrl}
                      title={course.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full rounded-lg shadow-lg"
                    ></iframe>
                </div>
            )}
            <Card>
                <CardHeader>
                <CardTitle>Course Content</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{course.content}</p>
                    <Button onClick={handleGenerateSummary} disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Generating...
                            </>
                        ) : (
                            <>
                                <Bot className="mr-2" />
                                Generate AI Summary
                            </>
                        )}
                    </Button>
                    {error && (
                        <Alert variant="destructive">
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}
                    {summary && (
                        <Alert>
                            <FileText className="h-4 w-4" />
                            <AlertTitle>AI-Generated Summary</AlertTitle>
                            <AlertDescription>{summary}</AlertDescription>
                        </Alert>
                    )}
                </CardContent>
            </Card>
        </div>
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Lessons</CardTitle>
                    <CardDescription>Your progress in this course.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        {lessons.map(lesson => (
                            <li key={lesson.title} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${lesson.completed ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                                        {lesson.completed ? <Check className="h-5 w-5" /> : <PlayCircle className="h-5 w-5" />}
                                    </div>
                                    <div>
                                        <p className="font-medium">{lesson.title}</p>
                                        <p className="text-sm text-muted-foreground">{lesson.duration}</p>
                                    </div>
                                </div>
                                {lesson.completed && <span className="text-xs font-semibold text-green-500">Completed</span>}
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
