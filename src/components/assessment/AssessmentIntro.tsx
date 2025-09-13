import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Target, Brain } from "lucide-react";

interface AssessmentIntroProps {
  onStart: () => void;
}

export const AssessmentIntro = ({ onStart }: AssessmentIntroProps) => {
  const benefits = [
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Emotional Intelligence Insights",
      description: "Understand your EQ across 5 core dimensions"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Personalized Growth Plan", 
      description: "Get a 4-week roadmap tailored to your results"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Relationship Enhancement",
      description: "Learn how your emotional patterns affect connections"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
          🌤️ Mood & Energy Awareness Assessment
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
          Track Your Emotional Patterns
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Understand Your Energy. Lead with Balance. Discover how your emotions and energy levels shape every interaction and decision in your life.
        </p>
      </div>

      {/* Key Info */}
      <Card className="assessment-section">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="space-y-2">
            <div className="w-12 h-12 mx-auto bg-emotion-warm/20 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-emotion-warm" />
            </div>
            <div className="font-semibold">25 Minutes</div>
            <div className="text-sm text-muted-foreground">Complete assessment</div>
          </div>
          <div className="space-y-2">
            <div className="w-12 h-12 mx-auto bg-emotion-calm/20 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-emotion-calm" />
            </div>
            <div className="font-semibold">5 Sections</div>
            <div className="text-sm text-muted-foreground">Comprehensive analysis</div>
          </div>
          <div className="space-y-2">
            <div className="w-12 h-12 mx-auto bg-emotion-energy/20 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-emotion-energy" />
            </div>
            <div className="font-semibold">Personalized</div>
            <div className="text-sm text-muted-foreground">Results & growth plan</div>
          </div>
        </div>
      </Card>

      {/* What You'll Discover */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">What You'll Discover</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                {benefit.icon}
              </div>
              <div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Assessment Sections Preview */}
      <Card className="assessment-section">
        <h3 className="text-xl font-semibold mb-4">Assessment Sections</h3>
        <div className="space-y-3">
          {[
            { name: "Emotional Intelligence Foundations", time: "8 min", badge: "Core", variant: "calm" },
            { name: "Personality & Emotional Style", time: "5 min", badge: "Personality", variant: "energy" },
            { name: "Situational EQ Scenarios", time: "6 min", badge: "Scenarios", variant: "balance" },
            { name: "PEARL Framework Analysis", time: "4 min", badge: "Advanced", variant: "warm" }
          ].map((section, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-surface/50">
              <div className="flex items-center gap-3">
                <Badge className={`emotion-badge ${section.variant}`}>
                  {section.badge}
                </Badge>
                <span className="font-medium">{section.name}</span>
              </div>
              <span className="text-sm text-muted-foreground">{section.time}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Call to Action */}
      <div className="text-center space-y-4">
        <p className="text-muted-foreground">
          Take this time for honest reflection. Your insights will help you lead with clarity, empathy, and emotional balance.
        </p>
        <Button 
          onClick={onStart}
          size="lg"
          className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all duration-300"
        >
          Begin Assessment
        </Button>
      </div>
    </div>
  );
};