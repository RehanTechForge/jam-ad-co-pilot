import { Shield, Award, Star, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const TrustSignals = () => {
  const achievements = [
    {
      icon: Shield,
      title: "Secure & Reliable",
      description:
        "Industry-standard encryption and data protection for all your marketing data",
      metric: "SOC 2 Compliant",
    },
    // {
    //   icon: Award,
    //   title: "Trusted by Brands",
    //   description:
    //     "Join thousands of successful e-commerce brands growing with JAIM",
    //   metric: "5,00+ Active Users",
    // },
    {
      icon: Star,
      title: "Proven Results",
      description: "Average 3.8x return on ad spend for our customers",
      metric: "3.8x Average ROAS",
    },
    {
      icon: CheckCircle,
      title: "Official Partner",
      description: "Verified partner of Shopify, Meta, and TikTok for Ads",
      metric: "Triple Certified",
    },
  ];

  // const stats = [
  //   { value: "$50M+", label: "Revenue Generated" },
  //   { value: "10M+", label: "Ads Created" },
  //   { value: "99.9%", label: "Uptime" },
  //   { value: "24/7", label: "Support" }
  // ];
  const stats = [
    { value: "99.9%", label: "Platform Uptime" },
    { value: "24/7", label: "Customer Support" },
    // { value: "5,00+", label: "Active Users" },
    { value: "3.8x", label: "Avg. ROAS" },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Why Brands Trust <span className="text-gradient">JAIM</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of successful brands that rely on JAIM to power their
            social commerce growth
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center group hover:shadow-2xl transition-all duration-300 animate-on-scroll border-border hover:border-primary/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {achievement.description}
                </p>
                <div className="text-primary font-bold">
                  {achievement.metric}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-3xl p-8 lg:p-12 animate-on-scroll">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center animate-on-scroll">
          <p className="text-sm text-muted-foreground mb-6">
            Certified and Verified by
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-card px-6 py-3 rounded-lg border border-border">
              <span className="font-semibold text-foreground">
                Shopify Partner
              </span>
            </div>
            <div className="bg-card px-6 py-3 rounded-lg border border-border">
              <span className="font-semibold text-foreground">
                Meta Business Partner
              </span>
            </div>
            <div className="bg-card px-6 py-3 rounded-lg border border-border">
              <span className="font-semibold text-foreground">
                TikTok Marketing Partner
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
