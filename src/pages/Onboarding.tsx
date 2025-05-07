
import { useState } from "react";
import Layout from "@/components/Layout";
import AccountCreation from "@/components/onboarding/AccountCreation";
import OnboardingTypeSelection from "@/components/onboarding/OnboardingTypeSelection";
import SuggestPlanFlow from "@/components/onboarding/SuggestPlanFlow";
import ManualPlanFlow from "@/components/onboarding/ManualPlanFlow";
import OnboardingProgress from "@/components/onboarding/OnboardingProgress";
import { toast } from "@/hooks/use-toast";

type OnboardingStep = "account" | "type" | "suggest" | "manual";

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>("account");
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    businessName: "",
  });
  
  const handleAccountCreated = (data: typeof userData) => {
    setUserData(data);
    setCurrentStep("type");
    toast({
      title: "Account created successfully",
      description: "Please choose how you'd like to proceed",
    });
  };

  const handleTypeSelection = (type: "suggest" | "manual") => {
    setCurrentStep(type);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-gradient-to-r from-ai-dark to-ai-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Started with NeuraFlow
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Set up your AI automation solution in just a few simple steps
          </p>
        </div>
      </section>

      {/* Onboarding Progress */}
      <OnboardingProgress currentStep={currentStep} />

      {/* Onboarding Content */}
      <section className="py-12 bg-ai-light min-h-[600px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
          {currentStep === "account" && (
            <AccountCreation onSubmit={handleAccountCreated} />
          )}
          
          {currentStep === "type" && (
            <OnboardingTypeSelection onSelect={handleTypeSelection} />
          )}
          
          {currentStep === "suggest" && (
            <SuggestPlanFlow businessName={userData.businessName} />
          )}
          
          {currentStep === "manual" && (
            <ManualPlanFlow businessName={userData.businessName} />
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Onboarding;
