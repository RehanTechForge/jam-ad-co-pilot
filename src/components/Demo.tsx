import { useState } from "react";
import {
  Play,
  Pause,
  Maximize2,
  Calendar,
  TrendingUp,
  Users,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Demo = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState("create");

  const tabs = [
    { id: "create", label: "Create Ads", icon: Maximize2 },
    { id: "schedule", label: "Schedule", icon: Calendar },
    { id: "trends", label: "Trends", icon: TrendingUp },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
  ];

  return (
    <section id="demo" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            See JAIM in <span className="text-gradient">action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how JAIM transforms your product catalog into high-converting
            social ads in seconds
          </p>
        </div>

        {/* Demo Container */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-3xl border border-border shadow-2xl overflow-hidden animate-on-scroll">
            {/* Demo Header */}
            <div className="bg-popover border-b border-border p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-[#FFB800]" />
                  <div className="w-3 h-3 rounded-full bg-success" />
                </div>
                <span className="text-sm text-muted-foreground">
                  jaim.marketing/dashboard
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:bg-card"
                >
                  {isPlaying ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="border-b border-border bg-card/50">
              <div className="flex overflow-x-auto">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-6 py-4 border-b-2 transition-all whitespace-nowrap ${
                        activeTab === tab.id
                          ? "border-primary text-primary"
                          : "border-transparent text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Demo Content */}
            <div className="p-8 lg:p-12 min-h-[500px]">
              {activeTab === "create" && (
                <div className="space-y-6 animate-fade-in">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left - Product Selection */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">
                        Select Product
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className={`bg-popover rounded-xl p-4 border cursor-pointer transition-all ${
                              i === 1
                                ? "border-primary"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-2" />
                            <p className="text-sm font-medium">Product {i}</p>
                            <p className="text-xs text-muted-foreground">
                              $29.99
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right - Ad Preview */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">
                        Generated Ad Preview
                      </h3>
                      <div className="bg-popover rounded-xl p-6 border border-border">
                        <div className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-lg mb-4 flex items-center justify-center">
                          <Play className="h-12 w-12 text-white/80" />
                        </div>
                        <p className="font-medium mb-2">
                          ✨ Limited Time: 30% OFF!
                        </p>
                        <p className="text-sm text-muted-foreground mb-4">
                          Transform your style with our best-selling product.
                          Thousands of happy customers can't be wrong!
                        </p>
                        <div className="flex gap-2">
                          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                            Facebook
                          </span>
                          <span className="text-xs px-2 py-1 bg-secondary/10 text-secondary rounded">
                            Instagram
                          </span>
                          <span className="text-xs px-2 py-1 bg-success/10 text-success rounded">
                            TikTok
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* AI Generation Progress */}
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium">
                        AI Creative Generation
                      </span>
                      <span className="text-sm text-primary">
                        3 variations ready
                      </span>
                    </div>
                    <div className="w-full bg-background rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary animate-pulse"
                        style={{ width: "75%" }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "schedule" && (
                <div className="animate-fade-in">
                  <div className="grid grid-cols-7 gap-4 mb-8">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                      (day) => (
                        <div key={day} className="text-center">
                          <p className="text-sm text-muted-foreground mb-2">
                            {day}
                          </p>
                          <div className="space-y-2">
                            {[1, 2, 3].map((slot) => (
                              <div
                                key={slot}
                                className="h-20 bg-popover rounded-lg border border-border hover:border-primary/50 transition-all cursor-pointer"
                              />
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                    <p className="text-sm">
                      Drag and drop to schedule your campaigns
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "trends" && (
                <div className="space-y-4 animate-fade-in">
                  <div className="grid lg:grid-cols-3 gap-4">
                    {[
                      {
                        trend: "POV: You found the perfect gift",
                        growth: "+234%",
                        category: "Lifestyle",
                      },
                      {
                        trend: "Things that live rent-free",
                        growth: "+189%",
                        category: "Fashion",
                      },
                      {
                        trend: "Tell me you need this without...",
                        growth: "+156%",
                        category: "Beauty",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="bg-popover rounded-xl p-4 border border-border hover:border-primary/50 transition-all cursor-pointer"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <TrendingUp className="h-4 w-4 text-success" />
                          <span className="text-xs text-success font-medium">
                            {item.growth}
                          </span>
                        </div>
                        <p className="font-medium text-sm mb-1">{item.trend}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.category}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "analytics" && (
                <div className="space-y-6 animate-fade-in">
                  <div className="grid lg:grid-cols-4 gap-4">
                    {[
                      {
                        label: "ROAS",
                        value: "3.8x",
                        change: "+12%",
                        color: "success",
                      },
                      {
                        label: "CTR",
                        value: "2.4%",
                        change: "+8%",
                        color: "primary",
                      },
                      {
                        label: "Conversions",
                        value: "1,234",
                        change: "+24%",
                        color: "secondary",
                      },
                      {
                        label: "Ad Spend",
                        value: "$4,567",
                        change: "-5%",
                        color: "success",
                      },
                    ].map((metric, i) => (
                      <div
                        key={i}
                        className="bg-popover rounded-xl p-4 border border-border"
                      >
                        <p className="text-sm text-muted-foreground mb-1">
                          {metric.label}
                        </p>
                        <p className="text-2xl font-bold mb-1">
                          {metric.value}
                        </p>
                        <p
                          className={`text-sm ${
                            metric.color === "success"
                              ? "text-success"
                              : metric.color === "primary"
                              ? "text-primary"
                              : "text-secondary"
                          }`}
                        >
                          {metric.change}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-popover rounded-xl p-6 border border-border">
                    <h4 className="font-medium mb-4">Performance Over Time</h4>
                    <div className="h-64 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg flex items-end justify-around p-4">
                      {[40, 65, 45, 80, 56, 72, 88].map((height, i) => (
                        <div
                          key={i}
                          className="w-12 bg-gradient-to-t from-primary to-secondary rounded-t-lg transition-all hover:opacity-80"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Live Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="text-center animate-on-scroll">
            <div className="text-3xl font-bold text-primary mb-2">2.5M+</div>
            <p className="text-muted-foreground">Ads Generated</p>
          </div>
          <div
            className="text-center animate-on-scroll"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="text-3xl font-bold text-secondary mb-2">$12M+</div>
            <p className="text-muted-foreground">Revenue Generated</p>
          </div>
          <div
            className="text-center animate-on-scroll"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-3xl font-bold text-success mb-2">89%</div>
            <p className="text-muted-foreground">Time Saved</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
