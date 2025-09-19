import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

interface WishlistSectionProps {
  onOpenWaitlist: () => void;
}

const WishlistSection = ({ onOpenWaitlist }: WishlistSectionProps) => {
  return (
    <section className="py-16 px-8 bg-card/50 backdrop-blur-sm border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
          <Sparkles className="h-6 w-6 text-primary" />
        </div>
        
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Shopify Marketing?
        </h2>
        
        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
          Join the waitlist and be among the first to automate your social ads with JAM. 
          Limited beta seats available.
        </p>
        
        <Button 
          onClick={onOpenWaitlist}
          size="lg"
          className="bg-primary hover:opacity-90 text-lg px-8"
        >
          Get Early Access
        </Button>
        
        <p className="text-sm text-muted-foreground mt-4">
          No credit card required • 1 month free for early adopters
        </p>
      </div>
    </section>
  );
};

export default WishlistSection;