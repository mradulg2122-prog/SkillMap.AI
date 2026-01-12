import { MessageSquare, Users, LineChart } from "lucide-react";

const futureFeatures = [
  {
    icon: MessageSquare,
    title: "Post-placement Feedback",
    description: "Analyze feedback after placements to continuously improve recommendations.",
  },
  {
    icon: Users,
    title: "Alumni Insights",
    description: "Leverage alumni career paths to enhance system intelligence.",
  },
  {
    icon: LineChart,
    title: "Institutional Intelligence",
    description: "Long-term analytics for strategic institutional decisions.",
  },
];

const FutureScopeSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-primary">
            Coming Soon
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Future Scope
          </h2>
          <p className="text-muted-foreground">
            Expanding capabilities for comprehensive placement intelligence.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {futureFeatures.map((feature, index) => (
            <div
              key={index}
              className="group rounded-xl border border-dashed border-border bg-muted/50 p-6 transition-all hover:border-primary/50 hover:bg-card"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureScopeSection;
