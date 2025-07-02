'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, LogIn } from 'lucide-react';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg fill="currentColor" viewBox="0 0 48 48" {...props}><path d="M44.5,20H24v8.5h11.8C34.7,33.9,30.1,37,24,37c-7.2,0-13-5.8-13-13s5.8-13,13-13c3.1,0,5.9,1.1,8.1,2.9l6.4-6.4C34.6,4.1,29.6,2,24,2C11.8,2,2,11.8,2,24s9.8,22,22,22c11,0,21-8,21-22C45,22.5,44.9,21.2,44.5,20z"></path></svg>
    );
  }

export default function AuthPage() {
  const router = useRouter();
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAuth = (e: React.FormEvent, type: 'login' | 'signup') => {
    e.preventDefault();
    setLoading(true);
    console.log(`${type} with:`, type === 'login' ? loginEmail : signupEmail);
    
    // Simulate API call
    setTimeout(() => {
        router.push('/dashboard');
        // No need to setLoading(false) as we are navigating away
    }, 1000);
  };

  const handleGoogleAuth = () => {
    setLoading(true);
    console.log('Google authentication initiated.');
    // In a real app, this would trigger the Google OAuth flow.
    setTimeout(() => {
        router.push('/dashboard');
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <div className="absolute top-4 left-4">
        <Link href="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">LearnSwift</span>
        </Link>
      </div>

      <Card className="w-full max-w-md mx-auto shadow-xl">
        <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
                <CardHeader className="text-center">
                    <CardTitle>Welcome Back!</CardTitle>
                    <CardDescription>Sign in to continue your learning journey.</CardDescription>
                </CardHeader>
                <CardContent>
                <form onSubmit={(e) => handleAuth(e, 'login')} className="space-y-4">
                    <div className="space-y-2">
                    <Label htmlFor="email-login">Email</Label>
                    <Input id="email-login" type="email" placeholder="m@example.com" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} required disabled={loading} />
                    </div>
                    <div className="space-y-2">
                    <div className="flex items-center">
                        <Label htmlFor="password-login">Password</Label>
                        <Link href="#" onClick={(e) => { e.preventDefault(); console.log('Forgot password clicked'); }} className="ml-auto inline-block text-sm text-primary hover:underline">
                        Forgot your password?
                        </Link>
                    </div>
                    <Input id="password-login" type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required disabled={loading} />
                    </div>
                    <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </Button>
                    <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                        </div>
                    </div>
                    <Button variant="outline" className="w-full" type="button" onClick={handleGoogleAuth} disabled={loading}>
                        <GoogleIcon className="mr-2 h-4 w-4" />
                        Login with Google
                    </Button>
                </form>
                </CardContent>
            </TabsContent>
            <TabsContent value="signup">
                <CardHeader className="text-center">
                    <CardTitle>Create an Account</CardTitle>
                    <CardDescription>Start your learning journey in just a few clicks.</CardDescription>
                </CardHeader>
                <CardContent>
                <form onSubmit={(e) => handleAuth(e, 'signup')} className="space-y-4">
                    <div className="space-y-2">
                    <Label htmlFor="email-signup">Email</Label>
                    <Input id="email-signup" type="email" placeholder="m@example.com" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} required disabled={loading} />
                    </div>
                    <div className="space-y-2">
                    <Label htmlFor="password-signup">Password</Label>
                    <Input id="password-signup" type="password" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} required disabled={loading} />
                    </div>
                    <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? 'Creating Account...' : 'Create Account'}
                    </Button>
                     <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">Or sign up with</span>
                        </div>
                    </div>
                    <Button variant="outline" className="w-full" type="button" onClick={handleGoogleAuth} disabled={loading}>
                        <GoogleIcon className="mr-2 h-4 w-4" />
                        Sign up with Google
                    </Button>
                </form>
                </CardContent>
            </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
