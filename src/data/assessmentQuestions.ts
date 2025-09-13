import { AssessmentSection } from "@/types/assessment";

export const assessmentSections: AssessmentSection[] = [
  {
    id: "introduction",
    title: "Welcome to Mood & Energy Awareness",
    description: "Your emotions and energy levels affect every decision, conversation, and connection you have. This assessment will help you understand your emotional patterns and develop greater self-awareness.",
    icon: "🌤️",
    badge: "Start Here",
    badgeVariant: "warm",
    timeEstimate: "2 min",
    questions: []
  },
  {
    id: "psychometric",
    title: "Emotional Intelligence Foundations",
    description: "Explore your core emotional intelligence across five key dimensions: self-awareness, self-regulation, empathy, social skills, and motivation.",
    icon: "🧠",
    badge: "Core Assessment",
    badgeVariant: "calm",
    timeEstimate: "8 min",
    questions: [
      {
        id: "eq1",
        type: "likert",
        text: "I notice how my mood changes based on time of day or environment.",
        dimension: "selfAwareness",
        min: 1,
        max: 5,
        labels: { min: "Never", max: "Always" }
      },
      {
        id: "eq2", 
        type: "likert",
        text: "I can accurately identify what triggers my emotional reactions.",
        dimension: "selfAwareness",
        min: 1,
        max: 5,
        labels: { min: "Rarely", max: "Very Often" }
      },
      {
        id: "eq3",
        type: "likert", 
        text: "I remain calm even when my energy dips or others are reactive.",
        dimension: "selfRegulation",
        min: 1,
        max: 5,
        labels: { min: "Strongly Disagree", max: "Strongly Agree" }
      },
      {
        id: "eq4",
        type: "scenario",
        text: "You're exhausted but still expected to lead a group discussion. How do you respond?",
        dimension: "selfRegulation",
        options: [
          { id: "eq4a", label: "Push through without acknowledging my state", value: 1 },
          { id: "eq4b", label: "Acknowledge my energy level and adapt my approach", value: 4 },
          { id: "eq4c", label: "Ask someone else to take over", value: 2 },
          { id: "eq4d", label: "Use breathing techniques to center myself first", value: 5 }
        ]
      },
      {
        id: "eq5",
        type: "likert",
        text: "I can sense when others are feeling stressed or overwhelmed.",
        dimension: "empathy",
        min: 1,
        max: 5,
        labels: { min: "Rarely", max: "Very Often" }
      },
      {
        id: "eq6",
        type: "forced-choice",
        text: "Which sounds more like you?",
        dimension: "empathy",
        options: [
          { id: "eq6a", label: "I bounce back quickly after tough days", value: 1 },
          { id: "eq6b", label: "I read people's moods easily", value: 2 }
        ]
      },
      {
        id: "eq7",
        type: "scenario",
        text: "During a tense meeting, you notice someone becoming defensive. What's your first instinct?",
        dimension: "socialSkills",
        options: [
          { id: "eq7a", label: "Address their defensiveness directly", value: 2 },
          { id: "eq7b", label: "Validate their perspective first", value: 5 },
          { id: "eq7c", label: "Change the subject to reduce tension", value: 3 },
          { id: "eq7d", label: "Wait for them to calm down", value: 1 }
        ]
      },
      {
        id: "eq8",
        type: "likert",
        text: "I find emotional challenges energizing rather than draining.",
        dimension: "motivation",
        min: 1,
        max: 5,
        labels: { min: "Never", max: "Always" }
      }
    ]
  },
  {
    id: "personality",
    title: "Emotional Style & Personality",
    description: "Understand your unique emotional patterns, attachment style, and how you express energy in social situations.",
    icon: "🎭",
    badge: "Personality",
    badgeVariant: "energy",
    timeEstimate: "5 min",
    questions: [
      {
        id: "p1",
        type: "likert",
        text: "I enjoy learning new emotional skills, even if they challenge me.",
        dimension: "openness",
        min: 1,
        max: 5,
        labels: { min: "Strongly Disagree", max: "Strongly Agree" }
      },
      {
        id: "p2",
        type: "forced-choice",
        text: "When I'm emotionally drained, I tend to:",
        dimension: "attachment",
        options: [
          { id: "p2a", label: "Seek space and solitude to recharge", value: 1 },
          { id: "p2b", label: "Need reassurance and connection with others", value: 2 }
        ]
      },
      {
        id: "p3",
        type: "scenario",
        text: "In a group setting, I usually:",
        dimension: "socialStyle",
        options: [
          { id: "p3a", label: "Take charge and direct the energy", value: 1 },
          { id: "p3b", label: "Support others and maintain harmony", value: 2 },
          { id: "p3c", label: "Share stories and energize the group", value: 3 },
          { id: "p3d", label: "Listen carefully and ask thoughtful questions", value: 4 }
        ]
      }
    ]
  },
  {
    id: "situational",
    title: "Situational Emotional Intelligence",
    description: "Test your emotional intelligence in real-world scenarios involving mood, energy, and interpersonal dynamics.",
    icon: "⚖️",
    badge: "Scenarios",
    badgeVariant: "balance",
    timeEstimate: "6 min",
    questions: [
      {
        id: "s1",
        type: "scenario",
        text: "You feel emotionally drained after back-to-back meetings, but your friend wants to vent about their problems. What do you do?",
        dimension: "situationalEQ",
        options: [
          { id: "s1a", label: "Listen but mentally zone out", value: 1 },
          { id: "s1b", label: "Tell them honestly that you're drained", value: 4 },
          { id: "s1c", label: "Try to delay the conversation", value: 2 },
          { id: "s1d", label: "Force yourself to listen fully despite your state", value: 3 }
        ]
      },
      {
        id: "s2",
        type: "scenario", 
        text: "You're in a great mood, but you enter a room where everyone seems stressed and anxious. How do you respond?",
        dimension: "situationalEQ",
        options: [
          { id: "s2a", label: "Maintain my positive energy regardless", value: 2 },
          { id: "s2b", label: "Immediately adapt to match their energy", value: 3 },
          { id: "s2c", label: "Gently try to lift the mood", value: 5 },
          { id: "s2d", label: "Ask what's happening before responding", value: 4 }
        ]
      },
      {
        id: "s3",
        type: "scenario",
        text: "During an important conversation, you realize you're becoming emotionally triggered. What's your best response?",
        dimension: "situationalEQ", 
        options: [
          { id: "s3a", label: "Continue the conversation but try to hide my reaction", value: 2 },
          { id: "s3b", label: "Take a brief pause to center myself", value: 5 },
          { id: "s3c", label: "Address my emotional state openly", value: 4 },
          { id: "s3d", label: "End the conversation until I'm calmer", value: 3 }
        ]
      }
    ]
  },
  {
    id: "pearl",
    title: "PEARL Framework Analysis",
    description: "Explore your emotional intelligence through our custom PEARL framework: Presence, Empathy, Affect Regulation, Relational Agility, and Leadership.",
    icon: "💎",
    badge: "Advanced",
    badgeVariant: "calm",
    timeEstimate: "4 min",
    questions: [
      {
        id: "pearl1",
        type: "scenario",
        text: "You're overwhelmed but notice you're clenching your jaw and breathing shallowly. What do you do?",
        dimension: "presence",
        options: [
          { id: "pearl1a", label: "Pause and center myself with deep breathing", value: 5 },
          { id: "pearl1b", label: "Ignore it and push through", value: 1 },
          { id: "pearl1c", label: "Leave the room to reset", value: 3 },
          { id: "pearl1d", label: "Blame external stressors", value: 2 }
        ]
      },
      {
        id: "pearl2",
        type: "likert",
        text: "I can maintain emotional balance when others around me are highly emotional.",
        dimension: "affectRegulation",
        min: 1,
        max: 5,
        labels: { min: "Rarely", max: "Very Often" }
      }
    ]
  }
];