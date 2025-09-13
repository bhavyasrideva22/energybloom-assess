import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface AssessmentCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  badge?: string;
  badgeVariant?: "warm" | "calm" | "energy" | "balance";
  children?: React.ReactNode;
  className?: string;
}

export const AssessmentCard = ({ 
  title, 
  description, 
  icon, 
  badge, 
  badgeVariant = "warm",
  children,
  className 
}: AssessmentCardProps) => {
  return (
    <Card className={cn("assessment-section group hover:shadow-xl transition-all duration-300", className)}>
      <div className="flex items-start gap-4 mb-4">
        <div className="shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center text-primary">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
            {badge && (
              <Badge className={cn("emotion-badge", badgeVariant)}>
                {badge}
              </Badge>
            )}
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
      </div>
      {children}
    </Card>
  );
};