import { Store, Palette, Rocket, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Store,
    title: "Connect Shopify & ad accounts",
    description:
      "One-click integration with your store and Meta/TikTok accounts. Secure OAuth, no passwords needed.",
    features: ["Instant sync", "Product catalog import", "Pixel installation"],
  },
  {
    number: "02",
    icon: Palette,
    title: "Pick a product + choose mode",
    description:
      "Select products to promote and your growth strategy. JAIM handles the creative work.",
    features: [
      "AI creative generation",
      "Trend matching",
      "Audience targeting",
    ],
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch or schedule",
    description:
      "Review, launch immediately, or schedule campaigns. Sit back while JAIM optimizes performance.",
    features: [
      "Auto-optimization",
      "Budget management",
      "Performance tracking",
    ],
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-20 relative bg-gradient-to-b from-background to-card/30"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            From setup to sales in{" "}
            <span className="text-gradient">3 simple steps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No marketing experience needed. JAIM handles the complexity so you
            can focus on your business.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative animate-on-scroll"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Step Card */}
                  <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
                    {/* Step Number */}
                    <div className="text-6xl font-bold text-primary/20 mb-4">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20 mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {step.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {step.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Connection Dot */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 w-8 h-8 bg-card rounded-full border-2 border-primary items-center justify-center -translate-y-1/2 z-10">
                      <div className="w-3 h-3 bg-primary rounded-full" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-lg text-muted-foreground">
            Average setup time:{" "}
            <span className="text-primary font-semibold">under 5 minutes</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
