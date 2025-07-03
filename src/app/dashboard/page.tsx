
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Activity, BookOpen, CheckCircle, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { LearningActivityChart } from './learning-activity-chart';

const recommendedCourses = [
  {
    title: 'Data Structures in Python',
    category: 'Programming',
    image: 'https://media.geeksforgeeks.org/wp-content/uploads/20211021164218/pythondatastructuresmin.png',
    aiHint: 'data structure algorithm',
    slug: 'data-structures-python'
  },
  {
    title: 'Advanced CSS and Sass',
    category: 'Web Design',
    image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*1Ue81hwzy2Lqp_anyO68Tg.jpeg',
    aiHint: 'design layout',
    slug: 'advanced-css-sass'
  }
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, Alex!</h1>
        <p className="text-muted-foreground">Here's a snapshot of your learning journey.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <LearningActivityChart />

          <Card>
            <CardHeader>
              <CardTitle>Continue Learning</CardTitle>
              <CardDescription>Pick up where you left off.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               <Card className="hover:bg-muted/50 transition-colors">
                  <Link href="/dashboard/courses/advanced-react-patterns" className="block p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex-grow">
                          <p className="font-semibold">Advanced React Patterns</p>
                          <p className="text-sm text-muted-foreground">Dive deeper into React with advanced hooks.</p>
                           <div className="flex items-center gap-2 mt-2">
                            <Progress value={75} className="w-full h-2" />
                            <span className="text-xs text-muted-foreground">75%</span>
                          </div>
                      </div>
                      <Button variant="ghost" size="sm">Continue</Button>
                    </div>
                  </Link>
              </Card>
              <Card className="hover:bg-muted/50 transition-colors">
                  <Link href="/dashboard/courses/nextjs-15-fundamentals" className="block p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex-grow">
                          <p className="font-semibold">Next.js 15 Fundamentals</p>
                          <p className="text-sm text-muted-foreground">Master the app router and server components.</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Progress value={40} className="w-full h-2" />
                            <span className="text-xs text-muted-foreground">40%</span>
                          </div>
                      </div>
                       <Button variant="ghost" size="sm">Continue</Button>
                    </div>
                  </Link>
              </Card>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Stats</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Courses in Progress</span>
                  </div>
                  <div className="text-lg font-bold">3</div>
              </div>
               <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">Completed Courses</span>
                  </div>
                  <div className="text-lg font-bold">12</div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm font-medium">Points Earned</span>
                  </div>
                  <div className="text-lg font-bold">1,250</div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                  <div className="flex items-center gap-3">
                    <Activity className="h-5 w-5 text-red-500" />
                    <span className="text-sm font-medium">Learning Streak</span>
                  </div>
                  <div className="text-lg font-bold">5 days</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recommended For You</CardTitle>
              <CardDescription>AI-powered suggestions to fuel your growth.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recommendedCourses.map(course => (
                  <Link key={course.slug} href={`/dashboard/courses/${course.slug}`} className="block hover:bg-muted/50 transition-colors rounded-lg p-3">
                      <div className="flex items-start gap-4">
                        <Image src={course.image} data-ai-hint={course.aiHint} alt={course.title} width={80} height={60} className="rounded-md" />
                        <div className="flex-grow">
                          <p className="font-semibold text-sm">{course.title}</p>
                          <p className="text-xs text-muted-foreground">{course.category}</p>
                        </div>
                      </div>
                  </Link>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
