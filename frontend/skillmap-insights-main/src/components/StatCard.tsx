interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning";
}

const StatCard = ({ title, value, subtitle, icon, variant = "default" }: StatCardProps) => {
  const variantStyles = {
    default: "bg-card border-border",
    primary: "stat-gradient border-primary/30",
    success: "bg-emerald-500/10 border-emerald-500/30",
    warning: "bg-amber-500/10 border-amber-500/30",
  };

  const valueStyles = {
    default: "text-foreground",
    primary: "text-primary",
    success: "text-emerald-400",
    warning: "text-amber-400",
  };

  return (
    <div className={`card-elevated rounded-xl border p-6 ${variantStyles[variant]}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className={`mt-2 text-3xl font-bold ${valueStyles[variant]}`}>{value}</p>
          {subtitle && (
            <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
        {icon && (
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
