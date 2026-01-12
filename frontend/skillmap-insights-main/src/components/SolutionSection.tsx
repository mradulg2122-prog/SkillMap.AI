import { BarChart3, TrendingUp, Target } from "lucide-react";

const solutions = [
  {
    icon: BarChart3,
    title: "Skill Gap Analysis",
    description: "Compare student skills with industry requirements to identify precise gaps.",
  },
  {
    icon: TrendingUp,
    title: "Job Trend Intelligence",
    description: "Analyze in-demand skills from job descriptions across industries.",
  },
  {
    icon: Target,
    title: "Placement Readiness Score",
    description: "Predict interview and placement success with data-driven metrics.",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-primary">
            Our Solution
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Intelligence that bridges the gap
          </h2>
          <p className="text-muted-foreground">
            Data-driven insights to align student skills with industry demands.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="card-elevated rounded-xl border border-border bg-card p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg hero-gradient">
                <solution.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {solution.title}
              </h3>
              <p className="text-sm text-muted-foreground">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
