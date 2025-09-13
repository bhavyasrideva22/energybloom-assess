import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  sectionName: string;
  className?: string;
}

export const ProgressBar = ({ currentStep, totalSteps, sectionName, className }: ProgressBarProps) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-card-foreground">{sectionName}</span>
        <span className="text-muted-foreground">
          {currentStep} of {totalSteps}
        </span>
      </div>
      
      <div className="relative">
        <Progress 
          value={progressPercentage} 
          className="h-2 progress-glow"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-primary-glow/20 to-primary/20 blur-sm"></div>
      </div>
      
      <div className="text-xs text-muted-foreground text-center">
        {Math.round(progressPercentage)}% Complete
      </div>
    </div>
  );
};