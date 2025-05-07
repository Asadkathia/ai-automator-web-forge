
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, CheckCircle, Bot, ArrowRight } from "lucide-react";

interface OnboardingTypeSelectionProps {
  onSelect: (type: "suggest" | "manual") => void;
}

const OnboardingTypeSelection = ({ onSelect }: OnboardingTypeSelectionProps) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Choose How You'd Like to Get Started</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Select the approach that works best for your business needs
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Suggest a Plan Card */}
        <Card className="border-2 hover:border-ai-blue hover:shadow-lg transition-all duration-300">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-ai-blue/10 rounded-full mx-auto flex items-center justify-center mb-4">
              <MessageSquare className="h-8 w-8 text-ai-blue" />
            </div>
            <CardTitle>Suggest a Plan for Me</CardTitle>
            <CardDescription>
              Let us recommend the best automation plan based on your business details
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-ai-blue mr-2" />
                <span>Personalized recommendations</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-ai-blue mr-2" />
                <span>Expert review of your needs</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-ai-blue mr-2" />
                <span>Tailored solution for your business</span>
              </li>
            </ul>
          </CardContent>
          
          <CardFooter>
            <Button 
              onClick={() => onSelect("suggest")} 
              className="w-full bg-ai-blue hover:bg-ai-blue/90"
            >
              Get Recommendations <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        {/* Build My Own Plan Card */}
        <Card className="border-2 hover:border-ai-blue hover:shadow-lg transition-all duration-300">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-ai-blue/10 rounded-full mx-auto flex items-center justify-center mb-4">
              <Bot className="h-8 w-8 text-ai-blue" />
            </div>
            <CardTitle>Build My Own Plan</CardTitle>
            <CardDescription>
              Choose features and integrations manually to fit your specific needs
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-ai-blue mr-2" />
                <span>Complete control over features</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-ai-blue mr-2" />
                <span>Customize integrations</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-ai-blue mr-2" />
                <span>Real-time pricing estimate</span>
              </li>
            </ul>
          </CardContent>
          
          <CardFooter>
            <Button 
              onClick={() => onSelect("manual")} 
              className="w-full bg-ai-blue hover:bg-ai-blue/90"
            >
              Build Your Plan <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default OnboardingTypeSelection;
