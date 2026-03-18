import { useEffect, useState } from 'react';
import { 
  Sparkles, Bug, Users, Rocket, GitBranch, Shield, 
  Play, Star, Check, X, Menu, ChevronRight,
  Zap, MessageSquare, Cloud, Layers, Code,
  Twitter, Github, MessageCircle as Discord, Linkedin,
  ArrowRight, ChevronDown, Bot, Brain, Globe, Zap as ZapIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';

// Navigation Component
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Products', href: '#features' },
    { label: 'AI APIs', href: '#ai-apis' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Docs', href: '#faq' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img 
              src="/lp-app-builder-logo.png" 
              alt="LP App Builder" 
              className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-xl font-bold text-gray-900">LP App Builder</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" className="text-sm font-medium">
              Sign In
            </Button>
            <Button className="bg-brand-dark hover:bg-gray-800 text-white text-sm font-medium px-5">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-2 text-gray-600 hover:text-gray-900 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-gray-100 space-y-2">
              <Button variant="outline" className="w-full">Sign In</Button>
              <Button className="w-full bg-brand-dark text-white">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20 lg:pt-0 flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/20" />
      
      {/* Particle effect background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-pink/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <Badge className="bg-brand-blue/10 text-brand-blue border-0 text-xs font-medium px-3 py-1">
                <Sparkles className="w-3 h-3 mr-1" />
                AI-Powered App Builder
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Build apps with{' '}
                <span className="gradient-text">multi-AI power</span>{' '}
                in minutes
              </h1>
              
              <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                LP App Builder connects you to the world's best AI models - Groq, Claude, Gemini, 
                DeepSeek, and OpenRouter. Build, deploy, and scale your applications faster than ever.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-brand-dark hover:bg-gray-800 text-white px-8 py-6 text-base font-medium group"
              >
                Start Building Free
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-6 text-base font-medium group"
              >
                <Play className="mr-2 w-4 h-4" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>5 AI APIs included</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Free forever plan</span>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="pt-4">
              <p className="text-sm text-gray-500 mb-3">Trusted by 10,000+ developers worldwide</p>
              <div className="flex items-center gap-6 justify-center lg:justify-start">
                {['Google', 'Microsoft', 'Stripe', 'Vercel'].map((company) => (
                  <span key={company} className="text-gray-400 font-semibold text-sm">{company}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Dashboard Image */}
          <div className="relative perspective-1200">
            <div className="relative animate-float preserve-3d">
              <img 
                src="/hero-dashboard.jpg" 
                alt="LP App Builder Dashboard" 
                className="rounded-2xl shadow-2xl w-full"
              />
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-blue/20 via-brand-purple/20 to-brand-pink/20 rounded-3xl blur-2xl -z-10" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 animate-float-slow">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Code Generated</p>
                  <p className="text-sm font-semibold">2,847 lines</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Cloud className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Deployed</p>
                  <p className="text-sm font-semibold">Just now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Logo Ticker Section
function LogoTicker() {
  const logos = [
    'Google', 'Microsoft', 'Amazon', 'Meta', 'Netflix', 
    'Spotify', 'Uber', 'Airbnb', 'Stripe', 'Shopify'
  ];

  return (
    <section className="py-16 overflow-hidden bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-sm text-gray-500 uppercase tracking-wider">
          Trusted by teams at leading companies
        </p>
      </div>
      
      {/* Row 1 - Left to Right */}
      <div className="relative mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50/50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50/50 to-transparent z-10" />
        <div className="flex animate-scroll-left">
          {[...logos, ...logos].map((logo, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 px-8 py-3 mx-4 bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <span className="text-lg font-semibold text-gray-400 hover:text-gray-600 transition-colors">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Row 2 - Right to Left */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50/50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50/50 to-transparent z-10" />
        <div className="flex animate-scroll-right">
          {[...logos.reverse(), ...logos].map((logo, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 px-8 py-3 mx-4 bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <span className="text-lg font-semibold text-gray-400 hover:text-gray-600 transition-colors">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// AI APIs Section
function AIAPIsSection() {
  const apis = [
    {
      name: 'Groq',
      description: 'Lightning-fast inference with Llama 3, Mixtral, and Gemma models. Up to 800 tokens/second.',
      icon: ZapIcon,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      features: ['800+ tokens/sec', 'Llama 3', 'Mixtral 8x7B'],
    },
    {
      name: 'Claude',
      description: 'Anthropic\'s powerful AI assistant with exceptional reasoning and coding capabilities.',
      icon: Brain,
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      features: ['Claude 3.5 Sonnet', '200K context', 'Code expert'],
    },
    {
      name: 'Gemini',
      description: 'Google\'s multimodal AI with native image understanding and advanced reasoning.',
      icon: Layers,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      features: ['Multimodal', '1M context', 'Gemini Pro'],
    },
    {
      name: 'DeepSeek',
      description: 'State-of-the-art coding model with exceptional performance on programming tasks.',
      icon: Code,
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
      features: ['Code specialist', '64K context', 'C2.5 model'],
    },
    {
      name: 'OpenRouter',
      description: 'Universal API gateway accessing 100+ models from various providers with one key.',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      features: ['100+ models', 'One API key', 'Best pricing'],
    },
  ];

  return (
    <section id="ai-apis" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-brand-purple/5 to-brand-pink/5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-brand-purple/10 text-brand-purple border-0 text-xs font-medium px-3 py-1 mb-4">
            <Bot className="w-3 h-3 mr-1" />
            Multi-AI Power
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Access the world's best{' '}
            <span className="gradient-text">AI models</span>
          </h2>
          <p className="text-lg text-gray-600">
            LP App Builder integrates with 5 leading AI APIs. Switch between models instantly 
            and use the best AI for every task.
          </p>
        </div>

        {/* API Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {apis.map((api) => (
            <div
              key={api.name}
              className="group relative bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${api.bgColor} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <api.icon className={`w-7 h-7 bg-gradient-to-br ${api.color} text-white rounded-xl p-1.5`} />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {api.name}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {api.description}
              </p>
              
              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {api.features.map((feature) => (
                  <span 
                    key={feature} 
                    className="text-xs font-medium px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              
              {/* Hover gradient */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${api.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </div>
          ))}
        </div>

        {/* Integration Code Preview */}
        <div className="mt-16">
          <div className="bg-gray-900 rounded-2xl p-6 lg:p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-sm text-gray-400">lp-app-builder.config.js</span>
            </div>
            <pre className="text-sm lg:text-base text-gray-300 overflow-x-auto">
              <code>{`// Configure all AI APIs with a single setup
import { LPAppBuilder } from '@lp-app-builder/sdk';

const builder = new LPAppBuilder({
  aiProviders: {
    groq: { apiKey: process.env.GROQ_API_KEY },
    claude: { apiKey: process.env.CLAUDE_API_KEY },
    gemini: { apiKey: process.env.GEMINI_API_KEY },
    deepseek: { apiKey: process.env.DEEPSEEK_API_KEY },
    openrouter: { apiKey: process.env.OPENROUTER_API_KEY }
  },
  defaultModel: 'claude-3-5-sonnet',
  fallbackEnabled: true
});

// Use any AI with unified API
const response = await builder.ai.chat({
  model: 'groq/llama-3-70b',
  messages: [{ role: 'user', content: 'Build a React app' }]
});`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: Sparkles,
      title: 'AI Code Generation',
      description: 'Describe what you want, and watch as LP App Builder generates production-ready code in seconds.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Bug,
      title: 'Smart Debugging',
      description: 'Identify and fix bugs automatically with AI-powered error analysis and suggestions.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Users,
      title: 'Collaborative Editing',
      description: 'Work together in real-time with your team. See changes instantly, comment, and review.',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
    },
    {
      icon: Rocket,
      title: 'Instant Deployment',
      description: 'Deploy your applications with a single click. Global CDN, SSL, and custom domains included.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      description: 'Built-in Git integration with intelligent commit suggestions and conflict resolution.',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security with automated vulnerability scanning and compliance checks.',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
    },
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful features for{' '}
            <span className="gradient-text">modern development</span>
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to build, deploy, and scale your applications
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-6 h-6 bg-gradient-to-br ${feature.color} text-white rounded-lg p-1`} />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover gradient */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Choose Your AI',
      description: 'Select from Groq, Claude, Gemini, DeepSeek, or OpenRouter. Each AI excels at different tasks.',
      cta: 'Compare AIs',
    },
    {
      number: '02',
      title: 'Describe Your App',
      description: 'Tell LP App Builder what you want to build using natural language. The AI understands your intent.',
      cta: 'See examples',
    },
    {
      number: '03',
      title: 'Deploy Instantly',
      description: 'One-click deployment to our global infrastructure. Get a live URL in seconds with SSL and CDN included.',
      cta: 'Learn more',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How <span className="gradient-text">LP App Builder</span> Works
          </h2>
          <p className="text-lg text-gray-600">
            From idea to deployment in three simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-brand-blue to-brand-purple" />
              )}
              
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300">
                {/* Step number */}
                <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-purple rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>
                
                {/* CTA */}
                <a 
                  href="#" 
                  className="inline-flex items-center text-brand-blue font-medium hover:text-brand-purple transition-colors group"
                >
                  {step.cta}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Code Editor Preview */}
        <div className="mt-20">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/code-editor.jpg" 
              alt="LP App Builder Code Editor" 
              className="w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "LP App Builder has transformed how our team builds products. Having access to multiple AI models in one platform is a game-changer. We use Groq for speed and Claude for complex reasoning.",
      author: 'Sarah Chen',
      role: 'CTO at TechStart',
      avatar: '/avatar-sarah.jpg',
      rating: 5,
    },
    {
      quote: "I've tried many AI coding tools, but LP App Builder is on another level. The ability to switch between Gemini for multimodal tasks and DeepSeek for coding is incredibly powerful.",
      author: 'Marcus Johnson',
      role: 'Senior Developer',
      avatar: '/avatar-marcus.jpg',
      rating: 5,
    },
    {
      quote: "As a solo founder, LP App Builder is like having a team of AI experts. OpenRouter integration gives me access to 100+ models. It's helped me ship features I never thought I could build alone.",
      author: 'Emily Rodriguez',
      role: 'Indie Hacker',
      avatar: '/avatar-emily.jpg',
      rating: 5,
    },
    {
      quote: "The collaboration features combined with multi-AI support are unmatched. My team can leverage different AIs for different tasks—all within one unified platform.",
      author: 'David Kim',
      role: 'Engineering Manager',
      avatar: '/avatar-david.jpg',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-brand-purple/5 to-brand-pink/5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Loved by developers{' '}
            <span className="gradient-text">worldwide</span>
          </h2>
          <p className="text-lg text-gray-600">
            See what our community has to say
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
            {/* Quote icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-purple rounded-xl flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            
            {/* Content */}
            <div className="pt-4">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-xl lg:text-2xl text-gray-800 leading-relaxed mb-8">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].author}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonials[activeIndex].author}</p>
                  <p className="text-gray-500">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="absolute bottom-8 right-8 flex gap-2">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-brand-dark text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-8 bg-brand-blue' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function PricingSection() {
  const [yearly, setYearly] = useState(true);
  
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for learning and experimenting',
      price: { monthly: 0, yearly: 0 },
      features: [
        '3 projects',
        'All 5 AI APIs',
        'Community support',
        '1GB storage',
        'Public deployments',
        'Groq & OpenRouter',
      ],
      cta: 'Get Started Free',
      featured: false,
    },
    {
      name: 'Pro',
      description: 'For serious developers and small teams',
      price: { monthly: 29, yearly: 24 },
      features: [
        'Unlimited projects',
        'All 5 AI APIs',
        'Priority support',
        '50GB storage',
        'Custom domains',
        'Team collaboration',
        'Private deployments',
        'Claude & Gemini',
      ],
      cta: 'Start Pro Trial',
      featured: true,
    },
    {
      name: 'Enterprise',
      description: 'For organizations with advanced needs',
      price: { monthly: null, yearly: null },
      features: [
        'Everything in Pro',
        'SSO/SAML',
        'Dedicated support',
        'Unlimited storage',
        'SLA guarantee',
        'Custom integrations',
        'Advanced security',
        'DeepSeek Enterprise',
      ],
      cta: 'Contact Sales',
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple, transparent{' '}
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-lg text-gray-600">
            Choose the plan that fits your needs. All plans include access to 5 AI APIs.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium ${!yearly ? 'text-gray-900' : 'text-gray-500'}`}>
            Monthly
          </span>
          <Switch 
            checked={yearly} 
            onCheckedChange={setYearly}
            className="data-[state=checked]:bg-brand-blue"
          />
          <span className={`text-sm font-medium ${yearly ? 'text-gray-900' : 'text-gray-500'}`}>
            Yearly
          </span>
          <Badge className="bg-green-100 text-green-700 border-0 ml-2">
            Save 20%
          </Badge>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.featured 
                  ? 'bg-white border-2 border-brand-blue shadow-xl scale-105 z-10' 
                  : 'bg-white border border-gray-100 shadow-card'
              }`}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-brand-blue text-white border-0 px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              {/* Plan header */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-500">{plan.description}</p>
              </div>
              
              {/* Price */}
              <div className="mb-6">
                {plan.price.monthly !== null ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900">
                      ${yearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="text-gray-500">/month</span>
                  </div>
                ) : (
                  <div className="text-2xl font-bold text-gray-900">Custom</div>
                )}
                {yearly && plan.price.yearly !== null && plan.price.yearly > 0 && (
                  <p className="text-sm text-gray-500 mt-1">Billed annually</p>
                )}
              </div>
              
              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA */}
              <Button 
                className={`w-full ${
                  plan.featured 
                    ? 'bg-brand-dark hover:bg-gray-800 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: 'What is LP App Builder and how does it work?',
      answer: 'LP App Builder is an AI-powered development platform that connects you to 5 leading AI APIs - Groq, Claude, Gemini, DeepSeek, and OpenRouter. Simply describe what you want to create, and our platform intelligently routes your request to the best AI model for the task.',
    },
    {
      question: 'Which AI models are included?',
      answer: 'LP App Builder includes access to Groq (Llama 3, Mixtral), Anthropic Claude (3.5 Sonnet), Google Gemini (Pro, Ultra), DeepSeek (Coder, Chat), and OpenRouter (100+ models). You can switch between models instantly based on your needs.',
    },
    {
      question: 'Is the generated code production-ready?',
      answer: 'Yes! LP App Builder generates clean, well-documented code following industry best practices. It includes error handling, tests, and follows security guidelines. You can review and modify everything before deployment.',
    },
    {
      question: 'What programming languages are supported?',
      answer: 'LP App Builder supports all major programming languages including Python, JavaScript, TypeScript, Go, Ruby, Java, and more. It can also work with popular frameworks like React, Next.js, Django, and Flask.',
    },
    {
      question: 'Can I use my own API keys?',
      answer: 'Absolutely! You can bring your own API keys for any of the supported AI providers. Alternatively, use our unified API and we\'ll handle the routing and billing for you.',
    },
    {
      question: 'How does the free plan work?',
      answer: 'The Starter plan is free forever and includes 3 projects with access to Groq and OpenRouter APIs. It\'s perfect for learning and small experiments. Upgrade anytime to unlock all 5 AI APIs and advanced features.',
    },
  ];

  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently asked{' '}
            <span className="gradient-text">questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about LP App Builder
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`grid transition-all duration-300 ${
                  openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-brand-dark" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-brand-purple/20 to-brand-pink/20" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to build with{' '}
          <span className="gradient-text">multi-AI power?</span>
        </h2>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Join thousands of developers building the future with 5 powerful AI APIs. Start free today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-brand-dark hover:bg-gray-100 px-8 py-6 text-base font-medium group"
          >
            Get Started Free
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base font-medium"
          >
            Talk to Sales
          </Button>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const links = {
    Product: ['Features', 'AI APIs', 'Pricing', 'Changelog', 'Roadmap'],
    Resources: ['Documentation', 'API Reference', 'Tutorials', 'Blog', 'Community'],
    Company: ['About', 'Careers', 'Contact', 'Press', 'Partners'],
    Legal: ['Privacy', 'Terms', 'Security', 'Cookies', 'DPA'],
  };

  const socials = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Discord, href: '#', label: 'Discord' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <img src="/lp-app-builder-logo.png" alt="LP App Builder" className="h-10 w-10" />
              <span className="text-xl font-bold text-gray-900">LP App Builder</span>
            </a>
            <p className="text-gray-600 mb-6 max-w-xs">
              Build apps with multi-AI power. Access Groq, Claude, Gemini, DeepSeek, and OpenRouter in one platform.
            </p>
            
            {/* Social links */}
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-blue hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold text-gray-900 mb-4">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-gray-600 hover:text-brand-blue transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 LP App Builder. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              Status
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              Security
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <LogoTicker />
        <AIAPIsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
