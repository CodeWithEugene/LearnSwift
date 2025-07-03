import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, BookOpen, BrainCircuit, Users, Award, Star, Trophy } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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

const testimonials = [
    {
        name: 'Sarah K.',
        role: 'Frontend Developer',
        quote: 'LearnSwift changed the game for me. The bite-sized lessons fit perfectly into my schedule, and the AI recommendations are spot on. I feel like I\'m learning faster than ever before.',
        avatar: 'https://afrikalyrics.com/assets/artistes/dr-sarah-k.jpg',
        aiHint: 'woman avatar',
        rating: 5,
    },
    {
        name: 'David L.',
        role: 'UX Designer',
        quote: 'As a designer, I appreciate the beautiful UI, but it\'s the gamified experience that keeps me coming back. Earning badges and seeing my progress is incredibly motivating. Highly recommended!',
        avatar: 'https://www.hollywoodreporter.com/wp-content/uploads/2020/05/gettyimages-93358911-h_2020.jpg?w=1296&h=730&crop=1',
        aiHint: 'man avatar',
        rating: 5,
    },
    {
        name: 'Michael P.',
        role: 'Product Manager',
        quote: 'The quality of the content is top-notch. I\'ve taken several courses, and each one has been concise, practical, and directly applicable to my work. It\'s the best learning platform I\'ve used.',
        avatar: 'https://stamford.newyorkcomedyclub.com/img/comedians/Screenshot-2023-06-09-at-11-27-30-AM-eea30f63-main-image.png?1686324457',
        aiHint: 'person avatar',
        rating: 5,
    }
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
            <Link href="#testimonials" className="transition-colors hover:text-primary">Testimonials</Link>
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
          <div className="container grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl font-headline">
                Learn faster. <br/>
                Remember longer.
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                Master new skills in minutes, not months. LearnSwift delivers personalized, bite-sized lessons powered by AI that fit perfectly into your life.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link href="/auth">
                    <Button size="lg" className="w-full sm:w-auto">Start Your Free Trial</Button>
                </Link>
                <Link href="#features">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">How It Works</Button>
                </Link>
                </div>
            </div>
            <div>
              <Image src="https://i.ytimg.com/vi/lnMMyHa9Y-Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB8wpanC-IuZC8vDTxnSC-_whB02w" data-ai-hint="student learning happy" alt="A happy student learning online" width={1280} height={720} className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </section>

        <section id="features" className="py-20 sm:py-32 bg-secondary">
          <div className="container space-y-20">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">The Modern Way to Master Skills</h2>
              <p className="mt-4 text-muted-foreground">
                We've rebuilt the learning experience from the ground up. Say goodbye to long lectures and hello to effective, engaging, and personalized education.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <Image src="https://learn.microsoft.com/en-us/copilot/media/copilot/copilot-learning-hub/step-1.png" data-ai-hint="abstract neural network" alt="Abstract representation of AI" width={1200} height={900} className="rounded-lg shadow-xl"/>
                </div>
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold py-1 px-3 rounded-full">
                        <BrainCircuit className="w-5 h-5" />
                        <span>AI-Powered Personalization</span>
                    </div>
                    <h3 className="text-2xl font-bold">Your personal learning co-pilot.</h3>
                    <p className="text-muted-foreground">Our intelligent system analyzes your learning style, progress, and goals to create a unique curriculum just for you. It's like having a personal tutor, available 24/7.</p>
                     <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 shrink-0"/><span>Adaptive content that adjusts to your level.</span></li>
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 shrink-0"/><span>Smart recommendations for what to learn next.</span></li>
                    </ul>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                 <div className="space-y-4 lg:order-last">
                    <Image src="https://www.edrawmind.com/images/article/7-study-hacks-to-memorize-things-faster/record-what-you-are-memorizing.png" data-ai-hint="gamification achievement badge" alt="A digital achievement badge" width={1200} height={900} className="rounded-lg shadow-xl"/>
                </div>
                <div className="space-y-4">
                     <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold py-1 px-3 rounded-full">
                        <Trophy className="w-5 h-5" />
                        <span>Gamified & Fun</span>
                    </div>
                    <h3 className="text-2xl font-bold">Learning that feels like playing.</h3>
                    <p className="text-muted-foreground">We believe learning should be exciting. Earn points, unlock achievements, and compete with friends on the leaderboard. Stay motivated and watch your skills grow.</p>
                    <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 shrink-0"/><span>Daily challenges and learning streaks.</span></li>
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 shrink-0"/><span>Unlock badges and certificates for your accomplishments.</span></li>
                    </ul>
                </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 sm:py-32">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Loved by Learners Worldwide</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our community is saying about LearnSwift.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="flex flex-col h-full bg-card shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <CardContent className="pt-6 flex-1">
                        <div className="flex mb-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} />
                            ))}
                        </div>
                        <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                    </CardContent>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                        <Avatar>
                            <AvatarImage src={testimonial.avatar} data-ai-hint={testimonial.aiHint} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle className="text-base">{testimonial.name}</CardTitle>
                            <CardDescription>{testimonial.role}</CardDescription>
                        </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
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

        <section className="py-20 sm:py-24">
            <div className="container text-center bg-primary text-primary-foreground p-12 rounded-lg">
                <h2 className="text-3xl font-bold tracking-tight">Ready to start your learning journey?</h2>
                <p className="mt-4 max-w-xl mx-auto">
                    Join thousands of learners and take your skills to the next level. It's free to get started.
                </p>
                <div className="mt-8">
                     <Link href="/auth">
                        <Button size="lg" variant="secondary" className="text-lg">Sign Up for Free</Button>
                    </Link>
                </div>
            </div>
        </section>
      </main>

      <footer className="border-t">
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
