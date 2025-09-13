import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

export type QuestionType = "likert" | "scenario" | "forced-choice";

export interface QuestionOption {
  id: string;
  label: string;
  value: number;
}

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  options?: QuestionOption[];
  min?: number;
  max?: number;
  labels?: { min: string; max: string };
}

interface QuestionCardProps {
  question: Question;
  onAnswer: (questionId: string, value: number) => void;
  currentAnswer?: number;
  className?: string;
}

export const QuestionCard = ({ question, onAnswer, currentAnswer, className }: QuestionCardProps) => {
  const [selectedValue, setSelectedValue] = useState<number | undefined>(currentAnswer);

  const handleAnswer = (value: number) => {
    setSelectedValue(value);
    onAnswer(question.id, value);
  };

  const renderLikertScale = () => (
    <div className="space-y-4">
      <div className="px-1">
        <Slider
          value={selectedValue ? [selectedValue] : []}
          onValueChange={(value) => handleAnswer(value[0])}
          max={question.max || 5}
          min={question.min || 1}
          step={1}
          className="w-full"
        />
      </div>
      <div className="flex justify-between text-sm text-muted-foreground px-1">
        <span>{question.labels?.min || "Strongly Disagree"}</span>
        <span>{question.labels?.max || "Strongly Agree"}</span>
      </div>
      {selectedValue && (
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Selected: {selectedValue}
          </div>
        </div>
      )}
    </div>
  );

  const renderMultipleChoice = () => (
    <RadioGroup 
      value={selectedValue?.toString()} 
      onValueChange={(value) => handleAnswer(parseInt(value))}
      className="space-y-3"
    >
      {question.options?.map((option) => (
        <div key={option.id} className="flex items-start space-x-3">
          <RadioGroupItem value={option.value.toString()} id={option.id} className="mt-0.5" />
          <Label 
            htmlFor={option.id} 
            className="flex-1 text-sm leading-relaxed cursor-pointer hover:text-primary transition-colors"
          >
            {option.label}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );

  const renderForcedChoice = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {question.options?.map((option) => (
        <Button
          key={option.id}
          variant={selectedValue === option.value ? "default" : "outline"}
          onClick={() => handleAnswer(option.value)}
          className={cn(
            "h-auto p-4 text-left justify-start whitespace-normal",
            selectedValue === option.value && "bg-primary text-primary-foreground shadow-lg"
          )}
        >
          <div>
            <div className="font-medium mb-1">Option {option.value}</div>
            <div className="text-sm opacity-90">{option.label}</div>
          </div>
        </Button>
      ))}
    </div>
  );

  return (
    <Card className={cn("assessment-section", className)}>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-card-foreground mb-2">
            {question.text}
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary-glow rounded-full"></div>
        </div>

        <div>
          {question.type === "likert" && renderLikertScale()}
          {question.type === "scenario" && renderMultipleChoice()}
          {question.type === "forced-choice" && renderForcedChoice()}
        </div>
      </div>
    </Card>
  );
};