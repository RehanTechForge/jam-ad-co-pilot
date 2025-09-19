import { Button } from '@/components/ui/button';
import { ChevronRight, PlayCircle, Sparkles } from 'lucide-react';
import heroDashboard from '@/assets/hero-dashboard.jpg';

const Hero = ({ onOpenWaitlist }: { onOpenWaitlist: () => void }) => {
  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50" />
      
      {/* Animated Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-glow" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary">Beta open — limited early seats</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Create, launch & scale{' '}
              <span className="text-gradient">social ads</span> — in minutes.
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              JAM connects to your Shopify store, auto-generates image & video creatives, 
              and manages campaigns across Meta & TikTok — so you can sell more without 
              the marketing complexity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={onOpenWaitlist}
                size="lg"
                className="bg-primary text-primary-foreground hover:opacity-90 transition-all duration-200 hover:scale-[1.02] text-lg px-8"
              >
                Get Early Access
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                onClick={scrollToDemo}
                variant="outline"
                size="lg"
                className="border-border hover:bg-card text-lg px-8"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                See Demo
              </Button>
            </div>
            
            {/* Trust Row */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span>Works with Shopify</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>Meta Ads Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                <span>TikTok Integration</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Product Art */}
          <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <img 
                src={heroDashboard} 
                alt="JAM Dashboard" 
                className="w-full h-auto"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-card rounded-xl p-4 shadow-lg border border-border animate-float">
              <div className="text-2xl font-bold text-success">3.8x</div>
              <div className="text-sm text-muted-foreground">Avg ROAS</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-lg border border-border animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-2xl font-bold text-primary">89%</div>
              <div className="text-sm text-muted-foreground">Time Saved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;