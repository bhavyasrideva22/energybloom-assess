import { useState } from "react";
import { Button } from "@/components/ui/button";
import { QuestionCard, Question } from "./QuestionCard";
import { ProgressBar } from "./ProgressBar";
import { AssessmentCard } from "./AssessmentCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface AssessmentSectionProps {
  title: string;
  description: string;
  icon: string;
  badge?: string;
  badgeVariant?: "warm" | "calm" | "energy" | "balance";
  questions: Question[];
  onComplete: (responses: Record<string, number>) => void;
  onBack: () => void;
}

export const AssessmentSection = ({ 
  title, 
  description, 
  icon, 
  badge, 
  badgeVariant,
  questions, 
  onComplete, 
  onBack 
}: AssessmentSectionProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<Record<string, number>>({});

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const canProceed = responses[currentQuestion?.id] !== undefined;

  const handleAnswer = (questionId: string, value: number) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (isLastQuestion) {
      onComplete(responses);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else {
      onBack();
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Section Header */}
      <AssessmentCard
        title={title}
        description={description}
        icon={<span className="text-2xl">{icon}</span>}
        badge={badge}
        badgeVariant={badgeVariant}
      >
        <ProgressBar
          currentStep={currentQuestionIndex + 1}
          totalSteps={questions.length}
          sectionName={title}
        />
      </AssessmentCard>

      {/* Current Question */}
      {currentQuestion && (
        <QuestionCard
          question={currentQuestion}
          onAnswer={handleAnswer}
          currentAnswer={responses[currentQuestion.id]}
        />
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Button>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
        </div>

        <Button
          onClick={handleNext}
          disabled={!canProceed}
          className="flex items-center gap-2"
        >
          {isLastQuestion ? "Complete Section" : "Next"}
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};