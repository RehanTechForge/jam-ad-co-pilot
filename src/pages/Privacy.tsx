import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon, Shield, Cookie, UserCheck, Globe, Lock } from "lucide-react";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";

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
          <Card className="p-6 mb-8 bg-card/50">
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
          </Card>

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
          <ScrollArea className="h-[600px] rounded-lg border p-6 bg-card">
            <div className="prose prose-sm max-w-none dark:prose-invert">
              <h2 id="intro">1. Introduction</h2>
              <p>
                JAIM ("we", "us", "our") operates JAIM, a marketing automation
                platform for Shopify merchants. This Privacy Policy explains how
                we collect, use, disclose, and safeguard your information when
                you use our Service.
              </p>
              <p>
                <strong>Data Controller:</strong>
                <br />
                Company: JAIM
                <br />
                Email: developers@qfnetwork.org
              </p>

              <h2 id="collection">2. Information We Collect</h2>

              <h3>2.1 Information You Provide</h3>
              <ul>
                <li>
                  <strong>Account Information:</strong> Full name, email
                  address, company name, password (encrypted)
                </li>
                <li>
                  <strong>Waitlist Data:</strong> Name and email for early
                  access requests
                </li>
                <li>
                  <strong>Shopify Store Data:</strong> Store URL, admin API
                  credentials, business details
                </li>
                <li>
                  <strong>Payment Information:</strong> Processed securely
                  through third-party providers (we don't store card numbers)
                </li>
                <li>
                  <strong>Support Communications:</strong> Messages, emails, and
                  feedback you send us
                </li>
              </ul>

              <h3>2.2 Information From Integrations</h3>
              <p>When you connect third-party services, we access:</p>

              <h4>Shopify Integration:</h4>
              <ul>
                <li>
                  Product catalog (names, descriptions, prices, images, SKUs,
                  inventory levels)
                </li>
                <li>
                  Order data (order IDs, amounts, timestamps, customer locations
                  - anonymized)
                </li>
                <li>Store analytics (traffic, conversion rates, cart data)</li>
                <li>
                  Customer segments and tags (without personal customer data)
                </li>
              </ul>

              <h4>Meta (Facebook/Instagram) Integration:</h4>
              <ul>
                <li>Ad account ID and access tokens</li>
                <li>
                  Campaign performance metrics (impressions, clicks, CTR, ROAS,
                  spend)
                </li>
                <li>
                  Audience insights (demographics, interests - aggregated only)
                </li>
                <li>Creative assets uploaded to campaigns</li>
                <li>Pixel data and conversion events</li>
              </ul>

              <h4>TikTok Integration:</h4>
              <ul>
                <li>Ad account credentials and tokens</li>
                <li>Campaign analytics (views, engagement, conversions)</li>
                <li>Creative performance data</li>
                <li>TikTok pixel events</li>
              </ul>

              <h4>UGC Creator Network:</h4>
              <ul>
                <li>
                  Creator profiles (portfolios, rates, styles, contact info)
                </li>
                <li>Content briefs and deliverables</li>
                <li>Communication between merchants and creators</li>
                <li>Performance metrics of UGC content</li>
              </ul>

              <h3>2.3 Automatically Collected Information</h3>
              <ul>
                <li>
                  <strong>Usage Data:</strong> Features used, clicks, page
                  views, session duration
                </li>
                <li>
                  <strong>Device Information:</strong> IP address, browser type,
                  operating system, device type
                </li>
                <li>
                  <strong>Cookies:</strong> Session cookies, authentication
                  tokens, preference settings
                </li>
                <li>
                  <strong>Log Data:</strong> Access times, error logs, API calls
                </li>
                <li>
                  <strong>Analytics:</strong> Aggregated usage patterns, feature
                  adoption, performance metrics
                </li>
              </ul>

              <h2 id="use">3. How We Use Your Information</h2>

              <h3>3.1 Service Provision</h3>
              <ul>
                <li>Create and manage your JAIM account</li>
                <li>
                  Generate AI-powered advertisements using your product data
                </li>
                <li>Analyze trends and suggest optimal ad strategies</li>
                <li>Manage and optimize your advertising campaigns</li>
                <li>Connect you with UGC creators</li>
                <li>
                  Provide the AI Performance Coach with context for
                  recommendations
                </li>
                <li>Display analytics and performance dashboards</li>
              </ul>

              <h3>3.2 Service Improvement</h3>
              <ul>
                <li>Analyze usage patterns to improve features</li>
                <li>
                  Train and improve our AI models (using aggregated, anonymized
                  data)
                </li>
                <li>Debug issues and optimize performance</li>
                <li>Develop new features based on user behavior</li>
              </ul>

              <h3>3.3 Communication</h3>
              <ul>
                <li>Send service updates and important notices</li>
                <li>Respond to support requests</li>
                <li>Send marketing emails (with opt-out option)</li>
                <li>Notify about policy changes</li>
              </ul>

              <h3>3.4 Legal Bases (GDPR)</h3>
              <p>For EU users, we process data based on:</p>
              <ul>
                <li>
                  <strong>Contract Performance:</strong> To provide the services
                  you've subscribed to
                </li>
                <li>
                  <strong>Consent:</strong> For marketing communications and
                  optional features
                </li>
                <li>
                  <strong>Legitimate Interests:</strong> For security, fraud
                  prevention, and service improvement
                </li>
                <li>
                  <strong>Legal Obligations:</strong> To comply with laws and
                  regulations
                </li>
              </ul>

              <h2 id="sharing">4. Information Sharing</h2>

              <h3>4.1 Service Providers</h3>
              <p>
                We share data with trusted third parties who help us operate:
              </p>
              <ul>
                <li>
                  <strong>Cloud Hosting:</strong> [Cloud provider placeholder]
                  for data storage
                </li>
                <li>
                  <strong>Payment Processing:</strong> Stripe/Shopify Billing
                  for subscriptions
                </li>
                <li>
                  <strong>Email Services:</strong> For transactional and
                  marketing emails
                </li>
                <li>
                  <strong>Analytics:</strong> Aggregated usage tracking
                </li>
                <li>
                  <strong>AI Providers:</strong> OpenAI for content generation
                  (no personal data shared)
                </li>
              </ul>

              <h3>4.2 Integration Partners</h3>
              <p>When you connect accounts, we share necessary data with:</p>
              <ul>
                <li>
                  <strong>Shopify:</strong> To sync your store data and process
                  webhooks
                </li>
                <li>
                  <strong>Meta:</strong> Ad content, targeting parameters,
                  campaign settings
                </li>
                <li>
                  <strong>TikTok:</strong> Creative assets, campaign
                  configurations
                </li>
              </ul>
              <p className="font-semibold">
                Important: We use OAuth tokens to act on your behalf. We never
                share your passwords.
              </p>

              <h3>4.3 Legal Requirements</h3>
              <p>We may disclose information if required by:</p>
              <ul>
                <li>Court orders or legal processes</li>
                <li>Law enforcement requests (with proper warrants)</li>
                <li>To protect rights, property, or safety</li>
                <li>Business transfers (merger, acquisition) with notice</li>
              </ul>

              <h3>4.4 What We Never Do</h3>
              <ul>
                <li>Sell your personal information to third parties</li>
                <li>Share individual user data with other JAIM users</li>
                <li>Use your store data for competing services</li>
                <li>Access your customer's personal information</li>
              </ul>

              <h2 id="storage">5. Data Storage & Security</h2>

              <h3>5.1 Storage Location</h3>
              <p>
                Data is stored on servers hosted by [Cloud Provider] in
                [Region]. We use Content Delivery Networks (CDNs) for static
                assets globally.
              </p>

              <h3>5.2 Security Measures</h3>
              <ul>
                <li>
                  <strong>Encryption:</strong> TLS 1.3 for data in transit,
                  AES-256 for data at rest
                </li>
                <li>
                  <strong>Access Controls:</strong> Role-based permissions,
                  multi-factor authentication
                </li>
                <li>
                  <strong>Monitoring:</strong> 24/7 security monitoring and
                  intrusion detection
                </li>
                <li>
                  <strong>Audits:</strong> Regular security assessments and
                  penetration testing
                </li>
                <li>
                  <strong>Backup:</strong> Regular encrypted backups with
                  disaster recovery
                </li>
              </ul>

              <h3>5.3 Data Retention</h3>
              <ul>
                <li>
                  <strong>Active Accounts:</strong> Data retained while account
                  is active
                </li>
                <li>
                  <strong>Deleted Accounts:</strong> Personal data deleted
                  within 30 days
                </li>
                <li>
                  <strong>Logs:</strong> Security logs retained for 12 months
                </li>
                <li>
                  <strong>Analytics:</strong> Aggregated data may be retained
                  indefinitely
                </li>
                <li>
                  <strong>Legal Holds:</strong> Data preserved as required by
                  law
                </li>
              </ul>

              <h3>5.4 International Transfers</h3>
              <p>
                If you're outside [Country], your data may be transferred
                internationally. We ensure appropriate safeguards through
                Standard Contractual Clauses or adequacy decisions.
              </p>

              <h2 id="rights">6. Your Rights & Choices</h2>

              <h3>6.1 Access Rights</h3>
              <p>You have the right to:</p>
              <ul>
                <li>
                  <strong>Access:</strong> Request a copy of your personal data
                </li>
                <li>
                  <strong>Correction:</strong> Update inaccurate information
                </li>
                <li>
                  <strong>Deletion:</strong> Request account and data deletion
                </li>
                <li>
                  <strong>Portability:</strong> Receive data in a
                  machine-readable format
                </li>
                <li>
                  <strong>Restriction:</strong> Limit processing in certain
                  circumstances
                </li>
                <li>
                  <strong>Objection:</strong> Opt-out of certain data uses
                </li>
              </ul>

              <h3>6.2 How to Exercise Rights</h3>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p>
                  <strong>Request Data Export:</strong>
                </p>
                <ol>
                  <li>Go to Settings → Privacy → Export Data</li>
                  <li>
                    Or email developers@qfnetwork.org with subject "Data Export
                    Request"
                  </li>
                </ol>

                <p className="mt-4">
                  <strong>Delete Your Account:</strong>
                </p>
                <ol>
                  <li>Go to Settings → Account → Delete Account</li>
                  <li>
                    Or email developers@qfnetwork.org with subject "Account
                    Deletion Request"
                  </li>
                </ol>

                <p className="mt-4">
                  <strong>Revoke Integration Access:</strong>
                </p>
                <ol>
                  <li>Settings → Integrations → Disconnect</li>
                  <li>Also revoke in Shopify/Meta/TikTok app settings</li>
                </ol>
              </div>

              <h3>6.3 Marketing Preferences</h3>
              <ul>
                <li>Unsubscribe link in every marketing email</li>
                <li>Settings → Notifications → Email Preferences</li>
                <li>Email developers@qfnetwork.org to opt-out</li>
              </ul>

              <h2 id="cookies">7. Cookies & Tracking</h2>

              <h3>7.1 Essential Cookies</h3>
              <ul>
                <li>Authentication tokens</li>
                <li>Session management</li>
                <li>Security features</li>
              </ul>

              <h3>7.2 Functional Cookies</h3>
              <ul>
                <li>User preferences</li>
                <li>Language settings</li>
                <li>Feature toggles</li>
              </ul>

              <h3>7.3 Analytics Cookies</h3>
              <ul>
                <li>Usage patterns (anonymized)</li>
                <li>Feature adoption</li>
                <li>Performance monitoring</li>
              </ul>

              <p>
                You can manage cookies through browser settings or our cookie
                preference center. Disabling essential cookies may impact
                Service functionality.
              </p>

              <h2 id="automated">8. Automated Decision-Making</h2>

              <h3>8.1 AI-Powered Features</h3>
              <p>JAIM uses artificial intelligence for:</p>
              <ul>
                <li>
                  <strong>Ad Generation:</strong> Creating ad copy, images, and
                  videos based on your products
                </li>
                <li>
                  <strong>Campaign Optimization:</strong> Adjusting bids and
                  budgets based on performance
                </li>
                <li>
                  <strong>Trend Matching:</strong> Suggesting ad formats based
                  on market trends
                </li>
                <li>
                  <strong>Performance Coaching:</strong> Providing
                  recommendations via the AI assistant
                </li>
              </ul>

              <h3>8.2 Human Override</h3>
              <p>
                All automated decisions can be reviewed and overridden. You
                maintain full control over campaign launches and budget changes.
                Contact developers@qfnetwork.org to opt-out of specific
                automated features.
              </p>

              <h2 id="children">9. Children's Privacy</h2>
              <p>
                JAIM is not intended for users under 16 years old. We do not
                knowingly collect data from children. If we discover a user is
                under 16, we will delete their account and data immediately.
                Report underage users to developers@qfnetwork.org.
              </p>

              <h2 id="california">10. California Privacy Rights (CCPA)</h2>
              <p>California residents have additional rights:</p>
              <ul>
                <li>
                  <strong>Right to Know:</strong> Categories and sources of
                  personal information collected
                </li>
                <li>
                  <strong>Right to Delete:</strong> Request deletion of personal
                  information
                </li>
                <li>
                  <strong>Right to Opt-Out:</strong> Opt-out of sale of personal
                  information (we don't sell data)
                </li>
                <li>
                  <strong>Non-Discrimination:</strong> Equal service regardless
                  of privacy choices
                </li>
              </ul>
              <p>
                To exercise CCPA rights, email developers@qfnetwork.org with
                subject "CCPA Request" or call [Phone].
              </p>

              <h2 id="eu">11. European Privacy Rights (GDPR)</h2>
              <p>EU/EEA residents have enhanced rights including:</p>
              <ul>
                <li>Clear legal basis for processing</li>
                <li>Data minimization and purpose limitation</li>
                <li>Right to lodge complaints with supervisory authorities</li>
                <li>Data Protection Officer contact: [DPO_EMAIL]</li>
              </ul>
              <p>
                Supervisory Authority: You may lodge complaints with your local
                data protection authority.
              </p>

              <h2 id="changes">12. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. Material changes
                will be notified via:
              </p>
              <ul>
                <li>Email to your registered address</li>
                <li>In-app notification banner</li>
                <li>30 days notice for significant changes</li>
              </ul>
              <p>
                Review the "Last Updated" date above. Continued use after
                changes constitutes acceptance.
              </p>

              <h2 id="contact">13. Contact Us</h2>
              <p>For privacy-related questions or concerns:</p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p>
                  <strong>Email:</strong> developers@qfnetwork.org
                  <br />
                  <strong>Mail:</strong>
                  <br />
                  Company: JAIM
                  <br />
                  Attn: Privacy Team
                </p>
                <p className="mt-2">
                  <strong>Response Time:</strong> We aim to respond within 30
                  days
                </p>
              </div>
            </div>
          </ScrollArea>

          {/* Region-Specific Tabs */}
          <Card className="mt-8 p-6">
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
          </Card>

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
    </div>
  );
};

export default Privacy;
