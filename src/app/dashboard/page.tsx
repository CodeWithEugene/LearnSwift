import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Activity, BookOpen, CheckCircle, Award } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, Alex!</h1>
        <p className="text-muted-foreground">Here's a snapshot of your learning journey.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Courses in Progress</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Keep up the great work!</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Courses</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 since last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Points Earned</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,250</div>
            <p className="text-xs text-muted-foreground">Top 10% of learners</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Activity</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5 days</div>
            <p className="text-xs text-muted-foreground">Your current learning streak</p>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Continue Learning</h2>
        <div className="grid gap-4 md:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle>Advanced React Patterns</CardTitle>
                    <CardDescription>Dive deeper into React with advanced hooks and state management.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Progress value={75} className="mb-2" />
                    <p className="text-sm text-muted-foreground">75% complete</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Next.js 15 Fundamentals</CardTitle>
                    <CardDescription>Master the app router, server components, and more.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Progress value={40} className="mb-2" />
                    <p className="text-sm text-muted-foreground">40% complete</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>AI with Genkit</CardTitle>
                    <CardDescription>Build powerful AI applications with Google's Genkit.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Progress value={20} className="mb-2" />
                    <p className="text-sm text-muted-foreground">20% complete</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
