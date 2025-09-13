export interface AssessmentSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge?: string;
  badgeVariant?: "warm" | "calm" | "energy" | "balance";
  questions: Question[];
  timeEstimate: string;
}

export interface Question {
  id: string;
  type: "likert" | "scenario" | "forced-choice";
  text: string;
  dimension?: string;
  options?: QuestionOption[];
  min?: number;
  max?: number;
  labels?: { min: string; max: string };
}

export interface QuestionOption {
  id: string;
  label: string;
  value: number;
}

export interface AssessmentResponse {
  questionId: string;
  value: number;
  timestamp: Date;
}

export interface AssessmentState {
  currentSection: string;
  currentQuestion: number;
  responses: Record<string, number>;
  startTime: Date;
  sectionStartTime: Date;
}

export interface EQScore {
  selfAwareness: number;
  selfRegulation: number;
  empathy: number;
  socialSkills: number;
  motivation: number;
  overall: number;
}

export interface PEARLScore {
  presence: number;
  empathy: number;
  affectRegulation: number;
  relationalAgility: number;
  leadership: number;
}

export interface AssessmentResults {
  eqScores: EQScore;
  pearlScores: PEARLScore;
  emotionalProfile: string;
  attachmentStyle: string;
  socialStyle: string;
  situationalEQ: number;
  strengths: string[];
  growthAreas: string[];
  recommendations: string[];
}