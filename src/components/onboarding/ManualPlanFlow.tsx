
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ManualPlanFlowProps {
  businessName: string;
}

const ManualPlanFlow = ({ businessName }: ManualPlanFlowProps) => {
  const [selectedTab, setSelectedTab] = useState("starter");
  const [selectedBot, setSelectedBot] = useState("customer-service");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const plans = {
    starter: {
      name: "Starter Plan",
      price: "$199",
      period: "per month",
      features: [
        "1 Chatbot Type",
        "1,000 conversations/mo",
        "Basic Analytics",
        "Email Support",
        "Website Integration"
      ]
    },
    professional: {
      name: "Professional Plan",
      price: "$349",
      period: "per month",
      features: [
        "2 Chatbot Types",
        "5,000 conversations/mo",
        "Advanced Analytics",
        "Priority Support",
        "Website & WhatsApp Integration",
        "Basic CRM Integration"
      ]
    },
    enterprise: {
      name: "Enterprise Plan",
      price: "$499",
      period: "per month",
      features: [
        "All Chatbot Types",
        "Unlimited conversations",
        "Custom Analytics Dashboard",
        "Dedicated Support",
        "All Platform Integrations",
        "Advanced CRM Integration",
        "Custom Training"
      ]
    }
  };

  const handleSubmit = () => {
    setIsLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      toast({
        title: "Plan activated!",
        description: `Your ${plans[selectedTab as keyof typeof plans].name} has been set up successfully.`,
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
          Choose Your Plan for {businessName}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="starter">Starter</TabsTrigger>
            <TabsTrigger value="professional">Professional</TabsTrigger>
            <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
          </TabsList>
          
          {Object.entries(plans).map(([key, plan]) => (
            <TabsContent key={key} value={key} className="space-y-4">
              <div className="bg-gradient-to-r from-ai-blue/10 to-ai-blue/5 p-6 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-ai-blue mb-2">{plan.name}</h3>
                <div className="flex justify-center items-end space-x-2 mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                
                <div className="space-y-2 text-left mt-6">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="border-t border-b py-4">
          <h3 className="font-medium mb-3">Select Primary Chatbot Type:</h3>
          <RadioGroup value={selectedBot} onValueChange={setSelectedBot} className="space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="customer-service" id="customer-service" />
              <Label htmlFor="customer-service">Customer Service Bot</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sales" id="sales" />
              <Label htmlFor="sales">Sales Bot</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="marketing" id="marketing" />
              <Label htmlFor="marketing">Marketing Bot</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div className="flex flex-col space-y-4">
          <Button 
            onClick={handleSubmit}
            className="w-full py-6 text-lg bg-ai-blue hover:bg-ai-blue/90"
            disabled={isLoading}
          >
            {isLoading ? "Setting Up Your Account..." : "Activate This Plan"}
          </Button>
        </div>
        
        <p className="text-sm text-gray-500 text-center">
          You can always change or customize your plan later.
        </p>
      </CardContent>
    </Card>
  );
};

export default ManualPlanFlow;
