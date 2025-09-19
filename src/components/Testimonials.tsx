import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Founder, Style Co.',
    avatar: 'SC',
    content: 'JAM transformed our ad strategy. We went from spending hours on creatives to launching campaigns in minutes. ROAS increased by 3.8x in just 30 days!',
    rating: 5
  },
  {
    name: 'Marcus Rodriguez',
    role: 'CEO, TechGear Plus',
    avatar: 'MR',
    content: 'The AI-generated ads are incredible. They actually understand our brand voice and create content that converts. Best marketing investment we\'ve made.',
    rating: 5
  },
  {
    name: 'Emma Thompson',
    role: 'Marketing Director, BeautyBox',
    avatar: 'ET',
    content: 'Finally, a tool that makes social advertising accessible. The trend suggestions alone have doubled our engagement rates. Can\'t imagine working without JAM.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 relative bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Loved by <span className="text-gradient">thousands of merchants</span>
          </h2>
          <p className="text-xl text-muted-foreground">Join the growing community of successful Shopify stores using JAM</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 mb-6">{testimonial.content}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-on-scroll">
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-card rounded-2xl border border-border">
            <div>
              <div className="text-2xl font-bold text-success">3.8x</div>
              <div className="text-sm text-muted-foreground">Average ROAS</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <div className="text-2xl font-bold text-primary">89%</div>
              <div className="text-sm text-muted-foreground">Time Saved</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <div className="text-2xl font-bold text-secondary">2.5M+</div>
              <div className="text-sm text-muted-foreground">Ads Created</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;