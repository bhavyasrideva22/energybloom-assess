import { useState } from "react";
import { AssessmentIntro } from "@/components/assessment/AssessmentIntro";
import { AssessmentSection } from "@/components/assessment/AssessmentSection";
import { assessmentSections } from "@/data/assessmentQuestions";
import { AssessmentState } from "@/types/assessment";

const Assessment = () => {
  const [assessmentState, setAssessmentState] = useState<AssessmentState>({
    currentSection: "intro",
    currentQuestion: 0,
    responses: {},
    startTime: new Date(),
    sectionStartTime: new Date()
  });

  const [allResponses, setAllResponses] = useState<Record<string, Record<string, number>>>({});

  const handleStart = () => {
    setAssessmentState(prev => ({
      ...prev,
      currentSection: "psychometric",
      sectionStartTime: new Date()
    }));
  };

  const handleSectionComplete = (sectionId: string, responses: Record<string, number>) => {
    setAllResponses(prev => ({
      ...prev,
      [sectionId]: responses
    }));

    // Move to next section
    const currentIndex = assessmentSections.findIndex(s => s.id === sectionId);
    const nextSection = assessmentSections[currentIndex + 1];
    
    if (nextSection) {
      setAssessmentState(prev => ({
        ...prev,
        currentSection: nextSection.id,
        currentQuestion: 0,
        sectionStartTime: new Date()
      }));
    } else {
      // Assessment complete
      console.log("Assessment completed!", allResponses);
    }
  };

  const handleBack = () => {
    const currentIndex = assessmentSections.findIndex(s => s.id === assessmentState.currentSection);
    
    if (currentIndex > 0) {
      const prevSection = assessmentSections[currentIndex - 1];
      setAssessmentState(prev => ({
        ...prev,
        currentSection: prevSection.id,
        currentQuestion: 0
      }));
    } else {
      setAssessmentState(prev => ({
        ...prev,
        currentSection: "intro"
      }));
    }
  };

  // Render intro
  if (assessmentState.currentSection === "intro") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-surface to-surface-soft py-12 px-4">
        <AssessmentIntro onStart={handleStart} />
      </div>
    );
  }

  // Render current section
  const currentSection = assessmentSections.find(s => s.id === assessmentState.currentSection);
  
  if (!currentSection) {
    return <div>Assessment Complete!</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface to-surface-soft py-12 px-4">
      <AssessmentSection
        title={currentSection.title}
        description={currentSection.description}
        icon={currentSection.icon}
        badge={currentSection.badge}
        badgeVariant={currentSection.badgeVariant}
        questions={currentSection.questions}
        onComplete={(responses) => handleSectionComplete(currentSection.id, responses)}
        onBack={handleBack}
      />
    </div>
  );
};

export default Assessment;