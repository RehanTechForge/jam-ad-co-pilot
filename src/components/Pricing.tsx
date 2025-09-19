import { Check, Sparkles, Zap, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Starter',
    price: 'Free Trial',
    description: '7 days to test everything',
    icon: Sparkles,
    features: [
      '10 AI-generated ads',
      '1 Shopify store',
      'Basic analytics',
      'Email support',
      'Standard templates'
    ],
    cta: 'Start Free Trial',
    popular: false
  },
  {
    name: 'Growth',
    price: '$99',
    period: '/month',
    description: 'Perfect for scaling stores',
    icon: Zap,
    features: [
      'Unlimited AI ads',
      '1 Shopify store',
      'Advanced analytics',
      'Priority support',
      'Custom templates',
      'UGC creator network',
      'Trend suggestions',
      'A/B testing'
    ],
    cta: 'Get Started',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For high-volume merchants',
    icon: Crown,
    features: [
      'Everything in Growth',
      'Multiple stores',
      'Dedicated account manager',
      'Custom integrations',
      'White-label options',
      'Advanced API access',
      'Training & onboarding',
      'SLA guarantee'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

const Pricing = ({ onOpenWaitlist }: { onOpenWaitlist: () => void }) => {
  return (
    <section id="pricing" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 mb-6">
            <Sparkles className="h-4 w-4 text-success" />
            <span className="text-sm text-success">Early access: 1 month free + priority onboarding</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Simple pricing that{' '}
            <span className="text-gradient">scales with you</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free, upgrade when you're ready. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative animate-on-scroll ${
                  plan.popular ? 'lg:-mt-8' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`h-full bg-card rounded-2xl p-8 border ${
                  plan.popular ? 'border-primary shadow-glow' : 'border-border'
                } hover:border-primary/50 transition-all duration-300`}>
                  {/* Plan Icon */}
                  <div className={`inline-flex p-3 rounded-xl mb-4 ${
                    plan.popular ? 'bg-primary/10 border border-primary/20 text-primary' : 'bg-muted text-muted-foreground'
                  }`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  {/* Plan Name & Price */}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                  </div>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  
                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <Button
                    onClick={onOpenWaitlist}
                    className={`w-full ${
                      plan.popular
                        ? 'bg-primary text-primary-foreground hover:opacity-90'
                        : 'bg-transparent border border-border hover:bg-card'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-muted-foreground mb-4">
            All plans include: SSL security, GDPR compliance, 99.9% uptime
          </p>
          <p className="text-sm text-muted-foreground">
            Questions? <button className="text-primary hover:underline">Chat with our team</button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;