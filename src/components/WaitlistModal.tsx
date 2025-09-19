import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Sparkles, CheckCircle, Share2, Twitter, Linkedin } from 'lucide-react';
import confetti from 'canvas-confetti';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    storeUrl: '',
    adSpend: '',
    interests: {
      autoAds: false,
      ugc: false,
      trends: false,
      analytics: false
    },
    launchTimeline: '',
    acceptMarketing: false
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referralLink, setReferralLink] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Trigger confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#4F6DF5', '#9A8FFF', '#A1E887']
    });
    
    // Generate referral link
    const link = `https://jam.marketing/ref/${Math.random().toString(36).substr(2, 9)}`;
    setReferralLink(link);
    setIsSubmitted(true);
    
    // Here you would typically send the data to your backend
    console.log('Waitlist submission:', formData);
  };

  const shareOnTwitter = () => {
    const text = `I just joined the JAM waitlist! 🚀 AI-powered social ads for Shopify stores. Get early access: ${referralLink}`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    const text = `Excited to join JAM's early access! It's an AI-powered marketing dashboard for Shopify that auto-generates social ads. Check it out: ${referralLink}`;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(referralLink)}`, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg bg-card border-border">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                Get Early Access to JAM
              </DialogTitle>
              <p className="text-muted-foreground mt-2">
                Limited beta seats available. Be among the first to automate your Shopify ads.
              </p>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="bg-input border-border"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-input border-border"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="storeUrl">Shopify Store URL *</Label>
                <Input
                  id="storeUrl"
                  placeholder="yourstore.myshopify.com"
                  required
                  value={formData.storeUrl}
                  onChange={(e) => setFormData({...formData, storeUrl: e.target.value})}
                  className="bg-input border-border"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="adSpend">Monthly Ad Spend</Label>
                  <Select value={formData.adSpend} onValueChange={(value) => setFormData({...formData, adSpend: value})}>
                    <SelectTrigger className="bg-input border-border">
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border">
                      <SelectItem value="0-1k">$0 - $1,000</SelectItem>
                      <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                      <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10k+">$10,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="launchTimeline">Launch Timeline</Label>
                  <Select value={formData.launchTimeline} onValueChange={(value) => setFormData({...formData, launchTimeline: value})}>
                    <SelectTrigger className="bg-input border-border">
                      <SelectValue placeholder="When?" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border">
                      <SelectItem value="immediately">Immediately</SelectItem>
                      <SelectItem value="1-month">Within 1 month</SelectItem>
                      <SelectItem value="3-months">1-3 months</SelectItem>
                      <SelectItem value="later">3+ months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label className="mb-3 block">What are you most interested in?</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="autoAds"
                      checked={formData.interests.autoAds}
                      onCheckedChange={(checked) => setFormData({...formData, interests: {...formData.interests, autoAds: checked as boolean}})}
                    />
                    <Label htmlFor="autoAds" className="font-normal cursor-pointer">Auto-generated ads</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="ugc"
                      checked={formData.interests.ugc}
                      onCheckedChange={(checked) => setFormData({...formData, interests: {...formData.interests, ugc: checked as boolean}})}
                    />
                    <Label htmlFor="ugc" className="font-normal cursor-pointer">UGC creator management</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="trends"
                      checked={formData.interests.trends}
                      onCheckedChange={(checked) => setFormData({...formData, interests: {...formData.interests, trends: checked as boolean}})}
                    />
                    <Label htmlFor="trends" className="font-normal cursor-pointer">Trend suggestions</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="analytics"
                      checked={formData.interests.analytics}
                      onCheckedChange={(checked) => setFormData({...formData, interests: {...formData.interests, analytics: checked as boolean}})}
                    />
                    <Label htmlFor="analytics" className="font-normal cursor-pointer">Performance analytics</Label>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="marketing"
                  checked={formData.acceptMarketing}
                  onCheckedChange={(checked) => setFormData({...formData, acceptMarketing: checked as boolean})}
                />
                <Label htmlFor="marketing" className="text-sm font-normal cursor-pointer">
                  Send me product updates and early access perks
                </Label>
              </div>
              
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                <p className="text-sm text-center font-medium text-primary">
                  🎁 Early access bonus: 1 month free + priority onboarding
                </p>
              </div>
              
              <Button type="submit" className="w-full bg-primary hover:opacity-90">
                Join Waitlist
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                Limited beta seats. We only email important updates.{' '}
                <a href="#" className="underline">Privacy Policy</a>
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
            
            <h3 className="text-2xl font-bold mb-2">You're in! 🎉</h3>
            <p className="text-muted-foreground mb-6">
              We'll notify you by email when your early access is ready.
            </p>
            
            <div className="bg-card rounded-lg border border-border p-4 mb-6">
              <p className="text-sm font-medium mb-2">Your referral link:</p>
              <div className="flex items-center gap-2">
                <Input 
                  value={referralLink} 
                  readOnly 
                  className="bg-input border-border text-sm"
                />
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => navigator.clipboard.writeText(referralLink)}
                >
                  Copy
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Share with friends to move up the waitlist!
              </p>
            </div>
            
            <div className="flex justify-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={shareOnTwitter}
                className="border-border hover:bg-card"
              >
                <Twitter className="h-4 w-4 mr-2" />
                Share on X
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={shareOnLinkedIn}
                className="border-border hover:bg-card"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                Share on LinkedIn
              </Button>
            </div>
            
            <Button
              variant="ghost"
              className="mt-6"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;