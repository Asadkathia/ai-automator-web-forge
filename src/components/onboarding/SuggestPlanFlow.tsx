
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface SuggestPlanFlowProps {
  businessName: string;
}

const SuggestPlanFlow = ({ businessName }: SuggestPlanFlowProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Mock plan suggestion based on the business name
  const suggestedPlan = {
    name: "Enterprise Plan",
    price: "$499",
    period: "per month",
    features: [
      "24/7 Customer Support Chatbot",
      "Sales Qualification Bot",
      "Marketing Campaign Bot",
      "Unlimited conversations",
      "CRM Integration",
      "Advanced Analytics",
      "Custom Training",
      "Dedicated Support"
    ]
  };

  const handleSubmit = () => {
    setIsLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      toast({
        title: "Plan activated!",
        description: `Your ${suggestedPlan.name} has been set up successfully.`,
      });
      
      // Redirect to user dashboard
      navigate("/user-dashboard");
      
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Card className="border-ai-blue/20 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Suggested Plan for {businessName}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-gradient-to-r from-ai-blue/10 to-ai-blue/5 p-6 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-ai-blue mb-2">{suggestedPlan.name}</h3>
          <div className="flex justify-center items-end space-x-2 mb-4">
            <span className="text-3xl font-bold">{suggestedPlan.price}</span>
            <span className="text-gray-500">{suggestedPlan.period}</span>
          </div>
          
          <div className="space-y-2 text-left mt-6">
            {suggestedPlan.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col space-y-4">
          <Button 
            onClick={handleSubmit}
            className="w-full py-6 text-lg bg-ai-blue hover:bg-ai-blue/90"
            disabled={isLoading}
          >
            {isLoading ? "Setting Up Your Account..." : "Activate This Plan"}
          </Button>
          
          <Button variant="outline" className="w-full">
            I Need Something Different
          </Button>
        </div>
        
        <p className="text-sm text-gray-500 text-center">
          You can always change or customize your plan later.
        </p>
      </CardContent>
    </Card>
  );
};

export default SuggestPlanFlow;
