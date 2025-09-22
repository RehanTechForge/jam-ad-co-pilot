import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  useEffect(() => {
    // Initialize scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation onOpenWaitlist={() => setIsWaitlistOpen(true)} />
      <div className="container mx-auto px-6 mt-10 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <span>Effective Date: 9/19/2015</span>
              <span>•</span>
              <span>Last Updated: 9/19/2015</span>
            </div>
          </div>

          {/* Plain Language Summary */}
          {/* <Card className="p-6 mb-8 bg-card/50">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <InfoIcon className="h-5 w-5 text-primary" />
              Plain Language Summary
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                • JAIM is a marketing automation platform for Shopify merchants
                that creates and manages social media ads
              </li>
              <li>
                • You must provide accurate information and are responsible for
                your account security and ad spend
              </li>
              <li>
                • We access your Shopify store and ad accounts with your
                permission to provide our services
              </li>
              <li>
                • Subscription fees apply after any trial period; you can cancel
                anytime with notice
              </li>
              <li>
                • We're not liable for third-party services or your advertising
                results
              </li>
            </ul>
          </Card> */}

          {/* Main Content */}
          <ScrollArea className="h-[600px] rounded-lg border p-6 bg-card">
            <div className="prose prose-sm max-w-none dark:prose-invert">
              {/* Title Section */}
              <div className="mb-6 text-center">
                <h1 className="text-2xl font-bold text-primary">
                  Terms & Conditions
                </h1>
                <p className="text-muted-foreground text-sm mt-1">
                  Last updated: September 2025
                </p>
              </div>

              <h2 id="intro">1. Introduction and Scope</h2>
              <p>
                These Terms and Conditions ("Terms") govern your use of JAIM
                ("Service"), a software-as-a-service application operated by
                JAIM ("Company", "we", "us", or "our"). JAIM is a marketing
                automation platform designed for Shopify merchants to create,
                manage, and optimize social media advertising campaigns across
                Meta (Facebook/Instagram) and TikTok platforms.
              </p>
              <p className="bg-muted/40 p-3 rounded-lg">
                By accessing or using JAIM, you agree to be bound by these
                Terms. If you disagree with any part of these terms, you may not
                access the Service.
              </p>

              <h2 id="definitions">2. Definitions</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <li>
                  <strong>"User"</strong>: Any individual or entity that creates
                  an account with JAIM
                </li>
                <li>
                  <strong>"Account"</strong>: Your unique access credentials and
                  associated data within JAIM
                </li>
                <li>
                  <strong>"Services"</strong>: All features, functionalities,
                  and capabilities offered by JAIM
                </li>
                <li>
                  <strong>"Content"</strong>: Any data, text, images, videos, or
                  materials uploaded or generated through JAIM
                </li>
                <li>
                  <strong>"Shopify"</strong>: The e-commerce platform operated
                  by Shopify Inc.
                </li>
                <li>
                  <strong>"Third-party Integrations"</strong>: External services
                  including Shopify, Meta, TikTok, and other connected platforms
                </li>
                <li>
                  <strong>"UGC"</strong>: User-generated content created by or
                  for users through our creator network
                </li>
                <li>
                  <strong>"AI-Generated Content"</strong>: Advertisements, copy,
                  images, or videos created using artificial intelligence
                </li>
              </ul>

              <h2 id="account">3. Account Registration & User Obligations</h2>
              <h3>3.1 Account Creation</h3>
              <p>
                To use JAIM, you must create an account providing accurate,
                current, and complete information. You must be at least 18 years
                old and have the legal capacity to enter into these Terms. You
                are responsible for maintaining the confidentiality of your
                account credentials.
              </p>

              <h3>3.2 User Obligations</h3>
              <div className="bg-muted/40 p-3 rounded-lg">
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Provide accurate and truthful information about your
                    business and products
                  </li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>
                    Not use the Service for illegal, fraudulent, or harmful
                    purposes
                  </li>
                  <li>
                    Not reverse engineer, decompile, or attempt to extract
                    source code
                  </li>
                  <li>Not interfere with or disrupt the Service or servers</li>
                  <li>Respect intellectual property rights of others</li>
                </ul>
              </div>

              <h3>3.3 Prohibited Uses</h3>
              <p className="font-semibold text-red-500">
                You may not use JAIM to:
              </p>
              <ul className="list-disc pl-5">
                <li>Advertise prohibited products (weapons, drugs, etc.)</li>
                <li>Engage in misleading or deceptive advertising</li>
                <li>Violate platform-specific advertising policies</li>
                <li>Harass, abuse, or harm others</li>
                <li>Spread malware or phishing attempts</li>
                <li>Circumvent usage limits or access restrictions</li>
              </ul>

              {/* ...baaki sections (Payments, Integrations, Liability, etc.) ko bhi isi tarah
        headings ke saath structured aur highlighted bana do. */}
            </div>
          </ScrollArea>

          {/* Legal Disclaimer */}
          <Alert className="mt-8 border-warning">
            <AlertDescription className="font-semibold">
              <strong>Legal Disclaimer:</strong> This template is for
              informational purposes only and is not legal advice. Consult a
              licensed attorney to finalize and localize these terms for your
              specific business needs and jurisdiction.
            </AlertDescription>
          </Alert>

          {/* Review Checklist */}
          <Card className="mt-6 p-6 bg-card/50">
            <h3 className="font-semibold mb-3">Legal Review Checklist</h3>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>
                ✓ Replace all placeholder values (JAIM,
                chris@jaimads.com, etc.)
              </li>
              <li>
                ✓ Review subscription pricing and refund policy for your
                business model
              </li>
              <li>✓ Confirm compliance with local consumer protection laws</li>
              <li>
                ✓ Verify arbitration clause is enforceable in your jurisdiction
              </li>
              <li>✓ Update prohibited uses based on your specific policies</li>
              <li>✓ Review data retention periods with privacy counsel</li>
              <li>✓ Confirm DMCA agent registration if operating in the US</li>
              <li>
                ✓ Add specific termination notice periods if required by law
              </li>
            </ul>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
