import { Sparkles, TrendingUp, Calendar, Zap, Users, BarChart3 } from 'lucide-react';
import { useEffect } from 'react';

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Ad Creation',
    description: 'Auto-generate stunning images, videos, and copy tailored to your products.',
    metric: '10x faster creation',
    color: 'primary'
  },
  {
    icon: TrendingUp,
    title: 'Trend-Based Suggestions',
    description: 'Leverage viral hooks and trending formats matched to your catalog.',
    metric: '+45% engagement',
    color: 'secondary'
  },
  {
    icon: Calendar,
    title: 'Marketing Calendar',
    description: 'Drag & drop scheduling with automated posting across platforms.',
    metric: 'Plan weeks ahead',
    color: 'success'
  },
  {
    icon: Zap,
    title: 'Growth Modes',
    description: 'Choose Conservative, Balanced, or Aggressive automation strategies.',
    metric: 'Adaptive scaling',
    color: 'primary'
  },
  {
    icon: Users,
    title: 'UGC Management',
    description: 'Connect with creators, manage briefs, and organize content assets.',
    metric: '500+ creators',
    color: 'secondary'
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Real-time ROAS, CTR, and conversion tracking with AI insights.',
    metric: 'Live optimization',
    color: 'success'
  }
];

const Features = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Everything you need to{' '}
            <span className="text-gradient">scale your ads</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed for Shopify merchants who want to grow fast
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClasses = {
              primary: 'text-primary bg-primary/10 border-primary/20',
              secondary: 'text-secondary bg-secondary/10 border-secondary/20',
              success: 'text-success bg-success/10 border-success/20'
            };
            
            return (
              <div
                key={index}
                className="card-feature group animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl mb-4 border ${colorClasses[feature.color as keyof typeof colorClasses]}`}>
                  <Icon className="h-6 w-6" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                
                {/* Metric */}
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${feature.color === 'primary' ? 'text-primary' : feature.color === 'secondary' ? 'text-secondary' : 'text-success'}`}>
                    {feature.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-muted-foreground mb-4">
            Plus automated A/B testing, budget optimization, and more
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;