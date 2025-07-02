import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Zap, BookOpen, BrainCircuit, Users, Award, Shield, Moon, Sun } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: 'Bite-Sized Lessons',
    description: 'Learn complex topics in 5-10 minute modules, designed for your busy schedule.',
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    title: 'AI-Powered Paths',
    description: 'Personalized recommendations adapt to your learning style and career goals.',
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Community Learning',
    description: 'Connect with peers, share knowledge, and grow together in our community channels.',
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
          'Community access',
        ],
        cta: 'Start for Free',
        popular: false,
      },
      {
        name: 'Pro Monthly',
        price: 'KSh 999',
        period: '/ month',
        description: 'Unlock your full potential.',
        features: [
          'Unlimited access to all content',
          'Personalized learning paths with AI',
          'Ad-free experience',
          'Priority support',
        ],
        cta: 'Go Pro',
        popular: false,
      },
      {
        name: 'Pro Annual',
        price: 'KSh 9,999',
        period: '/ year',
        description: 'Commit to your growth and save.',
        features: [
          'All features of Pro',
          'Save over 15%!',
          'One free virtual coaching session',
        ],
        cta: 'Go Pro Annual',
        popular: true,
      },
      {
        name: 'Lifetime',
        price: 'KSh 29,999',
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
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">LearnSwift</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium ml-auto">
            <Link href="#features" className="transition-colors hover:text-primary">Features</Link>
            <Link href="#pricing" className="transition-colors hover:text-primary">Pricing</Link>
            <Link href="/auth">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/auth">
              <Button>Get Started</Button>
            </Link>
          </nav>
           <div className="ml-auto md:hidden">
              <Link href="/auth">
                <Button>Get Started</Button>
              </Link>
            </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-20 sm:py-32">
          <div className="container text-center">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl font-headline">
              Microlearning for a <span className="text-primary">Smarter</span> You.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              Master new skills in minutes, not months. LearnSwift delivers personalized, bite-sized lessons powered by AI that fit perfectly into your daily life.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/auth">
                <Button size="lg" className="w-full sm:w-auto">Start Learning Now</Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">Explore Features</Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 sm:py-32 bg-secondary">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Everything You Need to Grow</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Our platform is packed with features designed for effective and engaging learning, all powered by cutting-edge AI.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <Card key={feature.title} className="text-center bg-card shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                      {feature.icon}
                    </div>
                    <CardTitle className="mt-4 text-xl">{feature.title}</CardTitle>
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
            <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">A Dashboard as Smart as You Are</h2>
                <p className="mt-4 text-muted-foreground max-w-xl">
                  Your personal learning hub. Track progress, continue where you left off, and discover courses recommended just for you by our AI. All in a beautiful, intuitive interface.
                </p>
                <div className="mt-6 flex gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Progress Tracking</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>AI Recommendations</span>
                  </div>
                </div>
            </div>
            <div className="order-1 lg:order-2">
              <Image src="https://placehold.co/1200x800.png" data-ai-hint="dashboard interface" alt="App dashboard" width={1200} height={800} className="rounded-lg shadow-2xl"/>
            </div>
          </div>
        </section>


        <section id="pricing" className="py-20 sm:py-32 bg-secondary">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Choose Your Plan</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Simple, transparent pricing. Start for free and upgrade when you're ready for more.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 items-stretch">
              {pricingTiers.map((tier) => (
                <Card key={tier.name} className={`flex flex-col h-full shadow-lg ${tier.popular ? 'border-primary ring-2 ring-primary' : ''}`}>
                  {tier.popular && (
                    <div className="py-1.5 px-4 bg-primary text-primary-foreground text-sm font-semibold rounded-t-lg rounded-b-none text-center">Most Popular</div>
                  )}
                  <CardHeader className="items-center text-center">
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">{tier.price}</span>
                      <span className="text-muted-foreground">{tier.period}</span>
                    </div>
                    <CardDescription>{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-4">
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

      <footer className="border-t bg-secondary">
        <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-5 w-5 text-muted-foreground" />
            <span className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} LearnSwift. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
