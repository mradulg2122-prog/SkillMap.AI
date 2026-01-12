import { FileText, Brain, User, BarChart2, MapPin } from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Data Collection",
    description: "Job descriptions and past placement data are collected from multiple sources.",
  },
  {
    icon: Brain,
    step: "02",
    title: "AI Skill Extraction",
    description: "AI extracts required skills and competencies from the collected data.",
  },
  {
    icon: User,
    step: "03",
    title: "Profile Analysis",
    description: "Student profiles and skill sets are analyzed against extracted requirements.",
  },
  {
    icon: BarChart2,
    step: "04",
    title: "Score Generation",
    description: "Skill gap and readiness scores are generated for each student.",
  },
  {
    icon: MapPin,
    step: "05",
    title: "Learning Roadmap",
    description: "Personalized learning roadmap is suggested based on identified gaps.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="section-gradient py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-primary">
            Process
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            How it works
          </h2>
          <p className="text-muted-foreground">
            A simple, data-driven approach to placement intelligence.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-border md:left-1/2 md:block md:-translate-x-1/2" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-6 md:gap-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step number circle */}
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-background bg-primary text-xl font-bold text-primary-foreground md:absolute md:left-1/2 md:-translate-x-1/2">
                  {step.step}
                </div>

                {/* Content card */}
                <div
                  className={`card-elevated flex-1 rounded-xl border border-border bg-card p-6 md:w-[calc(50%-4rem)] ${
                    index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
