import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";
import { useEffect } from "react";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <span>Effective Date: [DATE]</span>
              <span>•</span>
              <span>Last Updated: [DATE]</span>
            </div>
          </div>

          {/* Plain Language Summary */}
          <Card className="p-6 mb-8 bg-card/50">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <InfoIcon className="h-5 w-5 text-primary" />
              Plain Language Summary
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• JAM is a marketing automation platform for Shopify merchants that creates and manages social media ads</li>
              <li>• You must provide accurate information and are responsible for your account security and ad spend</li>
              <li>• We access your Shopify store and ad accounts with your permission to provide our services</li>
              <li>• Subscription fees apply after any trial period; you can cancel anytime with notice</li>
              <li>• We're not liable for third-party services or your advertising results</li>
            </ul>
          </Card>

          {/* Main Content */}
          <ScrollArea className="h-[600px] rounded-lg border p-6 bg-card">
            <div className="prose prose-sm max-w-none dark:prose-invert">
              <h2 id="intro">1. Introduction and Scope</h2>
              <p>
                These Terms and Conditions ("Terms") govern your use of JAM ("Service"), a software-as-a-service 
                application operated by [COMPANY_NAME] ("Company", "we", "us", or "our"). JAM is a marketing 
                automation platform designed for Shopify merchants to create, manage, and optimize social media 
                advertising campaigns across Meta (Facebook/Instagram) and TikTok platforms.
              </p>
              <p>
                By accessing or using JAM, you agree to be bound by these Terms. If you disagree with any part 
                of these terms, you may not access the Service.
              </p>

              <h2 id="definitions">2. Definitions</h2>
              <ul>
                <li><strong>"User"</strong>: Any individual or entity that creates an account with JAM</li>
                <li><strong>"Account"</strong>: Your unique access credentials and associated data within JAM</li>
                <li><strong>"Services"</strong>: All features, functionalities, and capabilities offered by JAM</li>
                <li><strong>"Content"</strong>: Any data, text, images, videos, or materials uploaded or generated through JAM</li>
                <li><strong>"Shopify"</strong>: The e-commerce platform operated by Shopify Inc.</li>
                <li><strong>"Third-party Integrations"</strong>: External services including Shopify, Meta, TikTok, and other connected platforms</li>
                <li><strong>"UGC"</strong>: User-generated content created by or for users through our creator network</li>
                <li><strong>"AI-Generated Content"</strong>: Advertisements, copy, images, or videos created using artificial intelligence</li>
              </ul>

              <h2 id="account">3. Account Registration & User Obligations</h2>
              <h3>3.1 Account Creation</h3>
              <p>
                To use JAM, you must create an account providing accurate, current, and complete information. 
                You must be at least 18 years old and have the legal capacity to enter into these Terms. 
                You are responsible for maintaining the confidentiality of your account credentials.
              </p>

              <h3>3.2 User Obligations</h3>
              <p>You agree to:</p>
              <ul>
                <li>Provide accurate and truthful information about your business and products</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use the Service for illegal, fraudulent, or harmful purposes</li>
                <li>Not reverse engineer, decompile, or attempt to extract source code</li>
                <li>Not interfere with or disrupt the Service or servers</li>
                <li>Respect intellectual property rights of others</li>
              </ul>

              <h3>3.3 Prohibited Uses</h3>
              <p>You may not use JAM to:</p>
              <ul>
                <li>Advertise prohibited products (weapons, drugs, counterfeit goods, etc.)</li>
                <li>Engage in misleading or deceptive advertising practices</li>
                <li>Violate platform-specific advertising policies (Meta, TikTok, Shopify)</li>
                <li>Harass, abuse, or harm others</li>
                <li>Spread malware or engage in phishing</li>
                <li>Circumvent usage limits or access restrictions</li>
              </ul>

              <h2 id="waitlist">4. Waitlist & Early Access</h2>
              <h3>4.1 Waitlist Registration</h3>
              <p>
                Users may join our waitlist to receive priority access to JAM. Joining the waitlist does not 
                guarantee access to the Service or establish any contractual obligation on our part.
              </p>

              <h3>4.2 Beta Access</h3>
              <p>
                Early access or beta versions may have limited features, bugs, or instabilities. Beta users 
                acknowledge these limitations and agree to provide feedback to help improve the Service.
              </p>

              <h2 id="payment">5. Payment and Billing</h2>
              <h3>5.1 Subscription Plans</h3>
              <p>
                JAM offers various subscription tiers with different features and limits. Pricing and features 
                are subject to change with notice to existing subscribers.
              </p>

              <h3>5.2 Free Trial</h3>
              <p>
                We may offer a free trial period. You will be notified before the trial ends and automatic 
                billing begins. You may cancel before the trial expires to avoid charges.
              </p>

              <h3>5.3 Payment Terms</h3>
              <ul>
                <li>Subscriptions are billed in advance on a monthly or annual basis</li>
                <li>All fees are in USD unless otherwise specified</li>
                <li>You authorize us to charge your payment method on file</li>
                <li>Failed payments may result in service suspension</li>
              </ul>

              <h3>5.4 Refunds</h3>
              <p>
                Monthly subscriptions are non-refundable. Annual subscriptions may be eligible for pro-rated 
                refunds within 30 days of purchase. No refunds are provided for partial months of service.
              </p>

              <h3>5.5 Taxes</h3>
              <p>
                You are responsible for all applicable taxes. Our fees do not include taxes unless explicitly stated.
              </p>

              <h2 id="integrations">6. Third-Party Integrations</h2>
              <h3>6.1 Authorization</h3>
              <p>
                By connecting your Shopify store, Meta ads account, or TikTok ads account, you authorize JAM to:
              </p>
              <ul>
                <li>Access and retrieve your product catalog, sales data, and store analytics</li>
                <li>Create, modify, and manage advertising campaigns on your behalf</li>
                <li>Access advertising performance metrics and analytics</li>
                <li>Upload and manage creative assets to your ad accounts</li>
                <li>Adjust budgets and bidding strategies within your specified limits</li>
              </ul>

              <h3>6.2 Third-Party Terms</h3>
              <p>
                You remain bound by the terms of service of all connected platforms. JAM is not responsible 
                for changes to third-party APIs, policies, or service availability.
              </p>

              <h3>6.3 Ad Spend Responsibility</h3>
              <p>
                You are solely responsible for all advertising costs incurred through connected platforms. 
                JAM manages campaigns but does not pay for your ad spend. Monitor your ad accounts regularly.
              </p>

              <h2 id="ip">7. Intellectual Property</h2>
              <h3>7.1 JAM Ownership</h3>
              <p>
                JAM and its original content, features, and functionality are owned by [COMPANY_NAME] and 
                are protected by international copyright, trademark, and other intellectual property laws.
              </p>

              <h3>7.2 User Content License</h3>
              <p>
                You retain ownership of content you upload. However, you grant JAM a worldwide, non-exclusive, 
                royalty-free license to use, modify, and display your content as necessary to provide the Service, 
                including generating ads and analytics.
              </p>

              <h3>7.3 AI-Generated Content</h3>
              <p>
                Content generated by JAM's AI tools may be used for your advertising purposes. You acknowledge 
                that AI-generated content may be similar to content created for other users. We do not guarantee 
                exclusivity of AI-generated materials.
              </p>

              <h3>7.4 Feedback</h3>
              <p>
                Any feedback, suggestions, or ideas you provide become the property of [COMPANY_NAME] without 
                compensation to you.
              </p>

              <h2 id="privacy">8. Data Usage & Privacy</h2>
              <p>
                Your use of JAM is also governed by our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>, 
                which describes how we collect, use, and protect your information. By using JAM, you consent 
                to data practices described in the Privacy Policy.
              </p>

              <h2 id="warranties">9. Disclaimers and Warranties</h2>
              <p>
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR 
                IMPLIED. WE DISCLAIM ALL WARRANTIES INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, 
                AND NON-INFRINGEMENT.
              </p>
              <p>
                We do not warrant that:
              </p>
              <ul>
                <li>The Service will be uninterrupted or error-free</li>
                <li>AI-generated content will be accurate or suitable for your needs</li>
                <li>Your advertising campaigns will achieve specific results</li>
                <li>The Service will meet all your requirements</li>
              </ul>

              <h2 id="liability">10. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, [COMPANY_NAME] SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR 
                GOODWILL, REGARDLESS OF THE CAUSE OF ACTION.
              </p>
              <p>
                OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID TO JAM IN THE 12 MONTHS PRECEDING 
                THE EVENT GIVING RISE TO LIABILITY.
              </p>

              <h2 id="indemnification">11. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless [COMPANY_NAME], its officers, directors, employees, 
                and agents from any claims, damages, or expenses arising from:
              </p>
              <ul>
                <li>Your use of the Service</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Your advertising content or campaigns</li>
              </ul>

              <h2 id="termination">12. Termination</h2>
              <h3>12.1 Your Right to Terminate</h3>
              <p>
                You may terminate your account at any time through account settings or by contacting support. 
                Termination does not entitle you to refunds for unused subscription periods.
              </p>

              <h3>12.2 Our Right to Terminate</h3>
              <p>
                We may suspend or terminate your account immediately for:
              </p>
              <ul>
                <li>Violation of these Terms</li>
                <li>Fraudulent or illegal activity</li>
                <li>Non-payment of fees</li>
                <li>Actions that harm other users or the Service</li>
              </ul>

              <h3>12.3 Effect of Termination</h3>
              <p>
                Upon termination, your access to JAM ceases immediately. We may retain certain data as required 
                by law or for legitimate business purposes.
              </p>

              <h2 id="governing">13. Governing Law & Disputes</h2>
              <p>
                These Terms are governed by the laws of [GOVERNING_JURISDICTION] without regard to conflict 
                of law principles. Any disputes shall be resolved through binding arbitration in [GOVERNING_JURISDICTION], 
                except for claims seeking injunctive relief, which may be brought in court.
              </p>

              <h2 id="dmca">14. DMCA & Copyright</h2>
              <p>
                We respect intellectual property rights. To report copyright infringement, contact our DMCA agent at:
              </p>
              <p className="pl-4">
                [COMPANY_NAME]<br />
                Attn: DMCA Agent<br />
                [COMPANY_ADDRESS]<br />
                Email: [CONTACT_EMAIL]
              </p>

              <h2 id="accessibility">15. Accessibility & Support</h2>
              <p>
                We strive to make JAM accessible to all users. For accessibility concerns or support, contact us at [CONTACT_EMAIL].
              </p>

              <h2 id="security">16. Security Practices</h2>
              <p>
                We implement industry-standard security measures including encryption, access controls, and 
                regular security audits. For details, see our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
              </p>

              <h2 id="changes">17. Changes to Terms</h2>
              <p>
                We may modify these Terms at any time. Material changes will be notified via email or in-app 
                notice at least 30 days before taking effect. Continued use after changes constitutes acceptance.
              </p>

              <h2 id="general">18. General Provisions</h2>
              <ul>
                <li><strong>Entire Agreement</strong>: These Terms constitute the entire agreement between you and JAM</li>
                <li><strong>Severability</strong>: If any provision is invalid, other provisions remain in effect</li>
                <li><strong>Waiver</strong>: Failure to enforce any right is not a waiver of that right</li>
                <li><strong>Assignment</strong>: You may not assign these Terms without our written consent</li>
              </ul>

              <h2 id="contact">19. Contact Information</h2>
              <p>
                For questions about these Terms, contact us at:
              </p>
              <p className="pl-4">
                [COMPANY_NAME]<br />
                [COMPANY_ADDRESS]<br />
                Email: [CONTACT_EMAIL]
              </p>
            </div>
          </ScrollArea>

          {/* Legal Disclaimer */}
          <Alert className="mt-8 border-warning">
            <AlertDescription className="font-semibold">
              <strong>Legal Disclaimer:</strong> This template is for informational purposes only and is not legal advice. 
              Consult a licensed attorney to finalize and localize these terms for your specific business needs and jurisdiction.
            </AlertDescription>
          </Alert>

          {/* Review Checklist */}
          <Card className="mt-6 p-6 bg-card/50">
            <h3 className="font-semibold mb-3">Legal Review Checklist</h3>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>✓ Replace all placeholder values ([COMPANY_NAME], [CONTACT_EMAIL], etc.)</li>
              <li>✓ Review subscription pricing and refund policy for your business model</li>
              <li>✓ Confirm compliance with local consumer protection laws</li>
              <li>✓ Verify arbitration clause is enforceable in your jurisdiction</li>
              <li>✓ Update prohibited uses based on your specific policies</li>
              <li>✓ Review data retention periods with privacy counsel</li>
              <li>✓ Confirm DMCA agent registration if operating in the US</li>
              <li>✓ Add specific termination notice periods if required by law</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Terms;