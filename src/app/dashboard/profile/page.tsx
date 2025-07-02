'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

export default function ProfilePage() {
  const handleSaveChanges = () => {
    toast({
      title: "Changes Saved",
      description: "Your profile information has been updated.",
    });
  }

  const handleChangePhoto = () => {
    // In a real app, this would open a file picker
    const fileInput = document.getElementById('photo-upload');
    fileInput?.click();
    console.log('Change photo clicked.');
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
            <Card>
                <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal details here.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue="Alex Doe" />
                    </div>
                    <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="alex.doe@example.com" disabled />
                    </div>
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" placeholder="Tell us a little bit about yourself" defaultValue="I'm a passionate lifelong learner, currently diving into the world of AI and Next.js development." />
                </div>
                <Button onClick={handleSaveChanges}>Save Changes</Button>
                </CardContent>
            </Card>
        </div>
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Profile Picture</CardTitle>
                    <CardDescription>Update your avatar.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center text-center gap-4">
                    <Avatar className="h-24 w-24">
                        <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="user avatar" alt="User" />
                        <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                     <input type="file" id="photo-upload" className="hidden" />
                    <Button variant="outline" onClick={handleChangePhoto}>Change Photo</Button>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  )
}
