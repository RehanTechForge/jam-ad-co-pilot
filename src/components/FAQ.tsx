import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How secure is my Shopify data?",
    answer:
      "JAIM uses OAuth for secure authentication and never stores passwords. We're SOC 2 compliant and use enterprise-grade encryption for all data. Your store information is only accessed to sync products and performance metrics.",
  },
  {
    question: "What's included in the free trial?",
    answer:
      "Our 7-day free trial includes full access to all features: unlimited AI ad generation, trend suggestions, campaign management, and analytics. No credit card required to start.",
  },
  {
    question: "Which platforms does JAIM support?",
    answer:
      "JAIM currently integrates with Shopify, Meta (Facebook & Instagram), and TikTok. We're adding Google Ads and Pinterest in Q2 2024.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes! JAIM is a month-to-month subscription with no contracts. You can cancel anytime from your account settings, and you'll retain access until the end of your billing period.",
  },
  {
    question: "Do I need marketing experience?",
    answer:
      "Not at all! JAIM is designed for Shopify merchants with any level of marketing expertise. Our AI handles the complex parts while giving you full control when you want it.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Frequently asked <span className="text-gradient">questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about JAIM
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-xl border border-border px-6 animate-on-scroll"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <AccordionTrigger className="hover:no-underline text-left">
                <span className="text-lg font-medium">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a href="/contact" className="text-primary hover:underline">
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
