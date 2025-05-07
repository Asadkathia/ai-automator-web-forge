
import { CheckCircle } from "lucide-react";

type OnboardingStep = "account" | "type" | "suggest" | "manual";

interface OnboardingProgressProps {
  currentStep: OnboardingStep;
}

const OnboardingProgress = ({ currentStep }: OnboardingProgressProps) => {
  // Define steps and their completion status
  const steps = [
    { id: "account", label: "Create Account", isComplete: currentStep !== "account" },
    { id: "type", label: "Choose Path", isComplete: currentStep === "suggest" || currentStep === "manual" },
    { id: "final", label: currentStep === "suggest" ? "Suggest Plan" : "Build Plan", isComplete: false },
  ];

  return (
    <div className="py-6 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              {/* Step indicator */}
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                step.isComplete 
                  ? "bg-ai-blue text-white"
                  : currentStep === step.id 
                    ? "bg-ai-blue/20 text-ai-blue border-2 border-ai-blue" 
                    : "bg-gray-200 text-gray-400"
              }`}>
                {step.isComplete ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              
              {/* Step label */}
              <span className={`ml-2 text-sm ${
                currentStep === step.id 
                  ? "font-medium text-ai-blue" 
                  : step.isComplete 
                    ? "font-medium text-gray-900" 
                    : "text-gray-500"
              }`}>
                {step.label}
              </span>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className={`flex-1 mx-4 h-0.5 ${
                  steps[index + 1].isComplete || currentStep === steps[index + 1].id
                    ? "bg-ai-blue" 
                    : "bg-gray-200"
                }`} style={{ width: "70px" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnboardingProgress;
