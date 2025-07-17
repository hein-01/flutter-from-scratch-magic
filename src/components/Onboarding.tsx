
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Smartphone, Zap, Heart } from "lucide-react";

interface OnboardingProps {
  onComplete: () => void;
}

const onboardingSteps = [
  {
    icon: <Smartphone className="w-16 h-16 text-blue-500" />,
    title: "Welcome to FlutterMagic",
    description: "Experience the power of modern mobile development with beautiful, responsive design.",
  },
  {
    icon: <Zap className="w-16 h-16 text-purple-500" />,
    title: "Lightning Fast",
    description: "Built with cutting-edge technology for smooth performance and instant loading.",
  },
  {
    icon: <Heart className="w-16 h-16 text-pink-500" />,
    title: "Made with Love",
    description: "Crafted with attention to detail and user experience in mind.",
  },
];

export const Onboarding = ({ onComplete }: OnboardingProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const skipOnboarding = () => {
    onComplete();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center max-w-sm w-full">
        {/* Progress indicator */}
        <div className="flex justify-center space-x-2 mb-8">
          {onboardingSteps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentStep ? "bg-white w-8" : "bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 mb-8 border border-white/20">
          <div className="mb-6 flex justify-center transform transition-transform duration-500 hover:scale-110">
            {onboardingSteps[currentStep].icon}
          </div>
          <h1 className="text-2xl font-bold text-white mb-4 transition-all duration-300">
            {onboardingSteps[currentStep].title}
          </h1>
          <p className="text-white/80 leading-relaxed">
            {onboardingSteps[currentStep].description}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="ghost"
            onClick={skipOnboarding}
            className="text-white/70 hover:text-white hover:bg-white/10"
          >
            Skip
          </Button>
          <Button
            onClick={nextStep}
            className="bg-white/20 hover:bg-white/30 text-white border-white/20 backdrop-blur-lg"
          >
            {currentStep === onboardingSteps.length - 1 ? "Get Started" : "Next"}
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};
