import { AlertCircle, HelpCircle, RefreshCcw } from "lucide-react";

const problems = [
  {
    icon: HelpCircle,
    title: "Students lack skill clarity",
    description: "Students do not know which skills they lack for jobs they aspire to get.",
  },
  {
    icon: AlertCircle,
    title: "Colleges lack placement insights",
    description: "Colleges do not know why placements fail or which areas need improvement.",
  },
  {
    icon: RefreshCcw,
    title: "Generic training programs",
    description: "Training programs are generic while job requirements change frequently.",
  },
];

const ProblemSection = () => {
  return (
    <section className="section-gradient py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-primary">
            The Problem
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Why placements fail today
          </h2>
          <p className="text-muted-foreground">
            The disconnect between education and industry needs is growing wider every year.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="card-elevated rounded-xl border border-border bg-card p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                <problem.icon className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {problem.title}
              </h3>
              <p className="text-sm text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
