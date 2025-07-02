import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Zap, BookOpen, Repeat, Users, Award, Shield, Moon, Sun } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: 'Bite-Sized Lessons',
    description: 'Learn complex topics in 3-7 minute modules, designed for your busy schedule.',
  },
  {
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    title: 'Personalized Paths',
    description: 'AI-powered recommendations adapt to your learning style and career goals.',
  },
  {
    icon: <Repeat className="w-8 h-8 text-primary" />,
    title: 'Spaced Repetition',
    description: 'Reinforce knowledge with a smart system that knows when you need a recap.',
  },
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    title: 'Gamified Experience',
    description: 'Earn points, badges, and climb the leaderboards to make learning fun.',
  },
];

const pricingTiers = [
  {
    name: 'Free',
    price: 'KSh 0',
    period: '/ month',
    description: 'Get a taste of microlearning.',
    features: [
      'Access to introductory courses',
      'Basic progress tracking',
      'Limited daily reviews',
    ],
    cta: 'Start for Free',
    popular: false,
  },
  {
    name: 'Monthly',
    price: 'KSh 499',
    period: '/ month',
    description: 'Unlock your full potential.',
    features: [
      'Unlimited access to all content',
      'Personalized learning paths',
      'Ad-free experience',
      'Priority support',
    ],
    cta: 'Choose Monthly',
    popular: false,
  },
  {
    name: 'Annual',
    price: 'KSh 4,999',
    period: '/ year',
    description: 'Commit to your growth and save.',
    features: [
      'All features of Monthly',
      'Save KSh 989!',
      'One free virtual coaching session',
    ],
    cta: 'Choose Annual',
    popular: true,
  },
  {
    name: 'Lifetime',
    price: 'KSh 14,999',
    period: ' one-time',
    description: 'Learn forever with a single payment.',
    features: [
      'Perpetual access to all content',
      'All future updates included',
      'Exclusive community access',
    ],
    cta: 'Get Lifetime Access',
    popular: false,
  },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">LearnSwift</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium ml-auto">
            <Link href="#features" className="transition-colors hover:text-primary">Features</Link>
            <Link href="#pricing" className="transition-colors hover:text-primary">Pricing</Link>
            <Link href="/auth">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/auth">
              <Button>Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-20 sm:py-32">
          <div className="container text-center">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl font-headline">
              Microlearning for a <span className="text-primary">Faster</span> World.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Master new skills in minutes, not months. LearnSwift delivers personalized, bite-sized lessons that fit into your daily life.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link href="/auth">
                <Button size="lg">Start Learning Now</Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline">Explore Features</Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 sm:py-32 bg-secondary">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Everything You Need to Grow</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Our platform is packed with features designed for effective and engaging learning.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <Card key={feature.title} className="text-center bg-background/50">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                      {feature.icon}
                    </div>
                    <CardTitle className="mt-4">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 sm:py-32">
          <div className="container grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Learn Your Way, Day or Night</h2>
                <p className="mt-4 text-muted-foreground max-w-xl">
                  Switch between light and dark modes to match your preference and reduce eye strain during late-night study sessions. LearnSwift's interface is designed to be beautiful and functional in any light.
                </p>
                <div className="mt-6 flex gap-4">
                  <div className="flex items-center gap-2">
                    <Sun className="w-5 h-5 text-amber-500" />
                    <span>Light Mode</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Moon className="w-5 h-5 text-blue-400" />
                    <span>Dark Mode</span>
                  </div>
                </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-2xl">
              <Image src="https://placehold.co/600x400/e0f2f1/4db6ac" data-ai-hint="light mode interface" alt="Light mode UI" layout="fill" objectFit="cover" className="absolute top-0 left-0 w-1/2 h-full"/>
              <Image src="https://placehold.co/600x400/263238/4db6ac" data-ai-hint="dark mode interface" alt="Dark mode UI" layout="fill" objectFit="cover" className="absolute top-0 right-0 w-1/2 h-full"/>
            </div>
          </div>
        </section>


        <section id="pricing" className="py-20 sm:py-32 bg-secondary">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Choose Your Plan</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Simple, transparent pricing. Start for free and upgrade when you're ready.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 items-start">
              {pricingTiers.map((tier) => (
                <Card key={tier.name} className={`flex flex-col h-full ${tier.popular ? 'border-primary ring-2 ring-primary' : ''}`}>
                  {tier.popular && (
                    <div className="py-1 px-4 bg-primary text-primary-foreground text-xs font-semibold rounded-t-lg rounded-b-none text-center">Most Popular</div>
                  )}
                  <CardHeader className="items-center text-center">
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">{tier.price}</span>
                      <span className="text-muted-foreground">{tier.period}</span>
                    </div>
                    <CardDescription>{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/auth" className="w-full">
                      <Button className="w-full" variant={tier.popular ? 'default' : 'outline'}>
                        {tier.cta}
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container py-8 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-5 w-5 text-muted-foreground" />
            <span className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} LearnSwift. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
