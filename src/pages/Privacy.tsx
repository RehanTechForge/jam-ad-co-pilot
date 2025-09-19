import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon, Shield, Cookie, UserCheck, Globe, Lock } from "lucide-react";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
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
      <div className="container mx-auto mt-10 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
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
                • We collect your account info, Shopify store data, and ad
                performance metrics to provide our service
              </li>
              <li>
                • Your data is encrypted and stored securely; we never sell
                personal information
              </li>
              <li>
                • We share data with platforms you connect (Shopify, Meta,
                TikTok) to manage your ads
              </li>
              <li>
                • You can request to access, correct, or delete your data at any
                time
              </li>
              <li>
                • We use cookies for authentication and improving your
                experience
              </li>
            </ul>
          </Card> */}

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="p-4 hover:border-primary transition-colors cursor-pointer">
              <UserCheck className="h-5 w-5 text-primary mb-2" />
              <h3 className="font-semibold text-sm mb-1">Request Your Data</h3>
              <p className="text-xs text-muted-foreground">
                Email: developers@qfnetwork.org
              </p>
            </Card>
            <Card className="p-4 hover:border-primary transition-colors cursor-pointer">
              <Shield className="h-5 w-5 text-primary mb-2" />
              <h3 className="font-semibold text-sm mb-1">
                Delete Your Account
              </h3>
              <p className="text-xs text-muted-foreground">
                Settings → Account → Delete
              </p>
            </Card>
            <Card className="p-4 hover:border-primary transition-colors cursor-pointer">
              <Cookie className="h-5 w-5 text-primary mb-2" />
              <h3 className="font-semibold text-sm mb-1">Cookie Preferences</h3>
              <p className="text-xs text-muted-foreground">
                Manage cookie settings
              </p>
            </Card>
          </div>

          {/* Main Content */}
          {/* Main Content */}
          <ScrollArea className="h-[600px] rounded-lg border bg-card">
            <div className="p-6 lg:p-10 space-y-10">
              <div className="prose prose-sm max-w-none dark:prose-invert">
                {/* Section Example */}
                <section id="intro" className="space-y-4">
                  <h2 className="text-xl font-bold text-primary">
                    1. Introduction
                  </h2>
                  <p>
                    <span className="font-semibold">JAIM</span> ("we", "us",
                    "our") operates a marketing automation platform for Shopify
                    merchants. This Privacy Policy explains how we collect, use,
                    disclose, and safeguard your information when you use our
                    Service.
                  </p>
                  <div className="bg-muted/50 border border-border rounded-lg p-4 text-sm">
                    <p>
                      <strong>Data Controller</strong>
                    </p>
                    <p>Company: JAIM</p>
                    <p>Email: developers@qfnetwork.org</p>
                  </div>
                </section>

                <section id="collection" className="space-y-4">
                  <h2 className="text-xl font-bold text-primary">
                    2. Information We Collect
                  </h2>

                  <h3 className="text-lg font-semibold mt-6">
                    2.1 Information You Provide
                  </h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>Account Information:</strong> Full name, email,
                      company, password (encrypted)
                    </li>
                    <li>
                      <strong>Waitlist Data:</strong> Name + email for early
                      access
                    </li>
                    <li>
                      <strong>Shopify Store Data:</strong> Store URL, API
                      credentials
                    </li>
                    <li>
                      <strong>Payment Info:</strong> Handled via third parties
                      (no card numbers stored)
                    </li>
                    <li>
                      <strong>Support Comms:</strong> Messages and feedback
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold mt-6">
                    2.2 Information From Integrations
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Shopify</h4>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>
                          Product catalog (names, prices, images, inventory)
                        </li>
                        <li>
                          Order data (IDs, timestamps, anonymized customer info)
                        </li>
                        <li>Store analytics (traffic, conversion)</li>
                        <li>Customer segments & tags</li>
                      </ul>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">
                        Meta (Facebook/Instagram)
                      </h4>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Ad account ID & tokens</li>
                        <li>Campaign performance (CTR, ROAS, spend)</li>
                        <li>Audience insights (aggregated only)</li>
                        <li>Pixel & conversion events</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Example of Highlight Box */}
                <section id="rights" className="space-y-4">
                  <h2 className="text-xl font-bold text-primary">
                    6. Your Rights & Choices
                  </h2>
                  <p>You have rights under GDPR/CCPA to control your data.</p>
                  <div className="bg-primary/5 border border-primary/30 rounded-lg p-4 text-sm space-y-2">
                    <p>
                      <strong>✔ Access:</strong> Request your data
                    </p>
                    <p>
                      <strong>✔ Correction:</strong> Fix inaccuracies
                    </p>
                    <p>
                      <strong>✔ Deletion:</strong> Request full removal
                    </p>
                    <p>
                      <strong>✔ Portability:</strong> Export in machine-readable
                      format
                    </p>
                  </div>
                </section>

                {/* Contact */}
                <section id="contact" className="space-y-4">
                  <h2 className="text-xl font-bold text-primary">
                    13. Contact Us
                  </h2>
                  <div className="bg-muted/50 border rounded-lg p-4">
                    <p>
                      <strong>Email:</strong> developers@qfnetwork.org
                    </p>
                    <p>
                      <strong>Mail:</strong> JAIM, Attn: Privacy Team
                    </p>
                    <p className="mt-2">
                      <strong>Response Time:</strong> within 30 days
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </ScrollArea>

          {/* Region-Specific Tabs */}
          {/* <Card className="mt-8 p-6">
            <h3 className="font-semibold mb-4">Region-Specific Information</h3>
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="eu">EU/GDPR</TabsTrigger>
                <TabsTrigger value="california">California/CCPA</TabsTrigger>
              </TabsList>
              <TabsContent value="general" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  This privacy policy applies to all users globally. Some
                  regions have additional rights outlined in the specific tabs.
                </p>
              </TabsContent>
              <TabsContent value="eu" className="mt-4">
                <div className="space-y-2 text-sm">
                  <p className="font-semibold">Additional EU/EEA Rights:</p>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Explicit consent required for marketing</li>
                    <li>
                      Right to data portability in machine-readable format
                    </li>
                    <li>Right to restrict processing</li>
                    <li>Protection against automated decision-making</li>
                    <li>72-hour breach notification</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="california" className="mt-4">
                <div className="space-y-2 text-sm">
                  <p className="font-semibold">
                    California Consumer Privacy Act:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>"Do Not Sell" - We never sell personal information</li>
                    <li>Right to know categories of data collected</li>
                    <li>Right to delete with some exceptions</li>
                    <li>Right to non-discrimination</li>
                    <li>Verified consumer requests only</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </Card> */}

          {/* Legal Disclaimer */}
          <Alert className="mt-8 border-warning">
            <AlertDescription className="font-semibold">
              <strong>Legal Disclaimer:</strong> This template is for
              informational purposes only and is not legal advice. Consult a
              licensed attorney to finalize and localize this privacy policy for
              your specific business needs and jurisdiction.
            </AlertDescription>
          </Alert>

          {/* Review Checklist */}
          <Card className="mt-6 p-6 bg-card/50">
            <h3 className="font-semibold mb-3">Legal Review Checklist</h3>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>
                ✓ Replace all placeholder values (JAIM,
                developers@qfnetwork.org, etc.)
              </li>
              <li>✓ Confirm data storage locations and cloud providers</li>
              <li>✓ Review retention periods with legal counsel</li>
              <li>✓ Verify GDPR compliance if serving EU users</li>
              <li>✓ Confirm CCPA compliance if serving California users</li>
              <li>✓ Register with ICO or relevant data protection authority</li>
              <li>✓ Implement cookie consent banner before launch</li>
              <li>✓ Set up data subject request procedures</li>
            </ul>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
