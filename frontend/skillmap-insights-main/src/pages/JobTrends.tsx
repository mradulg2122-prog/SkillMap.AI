import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MeshGradient from "@/components/MeshGradient";
import { 
  TrendingUp, 
  Briefcase, 
  Code2, 
  Database, 
  Cloud, 
  BarChart3
} from "lucide-react";

const trendingRoles = [
  {
    title: "Data Analyst",
    icon: BarChart3,
  },
  {
    title: "Cloud Engineer",
    icon: Cloud,
  },
  {
    title: "Software Developer",
    icon: Code2,
  },
];

const trendingSkills = [
  { name: "SQL", icon: Database },
  { name: "Python", icon: Code2 },
  { name: "Cloud", icon: Cloud },
  { name: "Data Visualization", icon: BarChart3 },
];

const JobTrends = () => {
  return (
    <div className="min-h-screen">
      <MeshGradient />
      <Navbar />
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-10 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl hero-gradient">
              <TrendingUp className="h-7 w-7 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-foreground md:text-4xl">
              Job Trends & Skill Demand
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Real-time insights from job market analysis to guide placement preparation.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Trending Job Roles */}
              <div className="card-elevated rounded-xl border border-border bg-card p-6">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">
                    Trending Job Roles
                  </h2>
                </div>
                <div className="space-y-4">
                  {trendingRoles.map((role, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 rounded-lg border border-border bg-background p-4 transition-all hover:border-primary/30"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg hero-gradient">
                        <role.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <span className="font-semibold text-foreground">
                        {role.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trending Skills */}
              <div className="card-elevated rounded-xl border border-border bg-card p-6">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Code2 className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">
                    Trending Skills
                  </h2>
                </div>
                <div className="space-y-4">
                  {trendingSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 rounded-lg border border-border bg-background p-4 transition-all hover:border-primary/30"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <skill.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-semibold text-foreground">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobTrends;
