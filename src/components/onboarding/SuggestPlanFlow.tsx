
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, MessageSquare, Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface SuggestPlanFlowProps {
  businessName: string;
}

const SuggestPlanFlow = ({ businessName }: SuggestPlanFlowProps) => {
  const [businessDetails, setBusinessDetails] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!businessDetails.trim()) {
      toast({
        title: "Please tell us about your business",
        description: "We need some details to suggest the best plan for you",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "Thank you!",
        description: "We've received your information and will be in touch soon.",
      });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="text-center space-y-8 py-8 animate-fade-in">
        <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6">
          <Check className="h-10 w-10 text-green-600" />
        </div>
        
        <h2 className="text-3xl font-bold">Thank You!</h2>
        
        <p className="text-lg text-gray-600 max-w-lg mx-auto">
          Our team will review your input and send a personalized plan 
          for <span className="font-semibold">{businessName}</span> within 24 hours.
        </p>
        
        <div className="pt-6">
          <Card className="max-w-md mx-auto border-2 border-ai-blue/20">
            <CardHeader>
              <CardTitle className="text-xl">While You Wait</CardTitle>
              <CardDescription>Explore what NeuraFlow has to offer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link to="/services">
                <Button variant="outline" className="w-full justify-between">
                  Explore Our Services
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/integration">
                <Button variant="outline" className="w-full justify-between">
                  Learn About Integration
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="w-full bg-ai-blue hover:bg-ai-blue/90 justify-between">
                  Chat With Us
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Tell Us About Your Business</h2>
        <p className="text-gray-600">
          We'll use this information to suggest the best automation plan for {businessName}
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="businessDetails" className="block text-sm font-medium">
            Tell us about your business, goals, and automation needs
          </label>
          <Textarea
            id="businessDetails"
            value={businessDetails}
            onChange={(e) => setBusinessDetails(e.target.value)}
            placeholder="I run a mid-sized online clothing store and need help automating customer support and order updates..."
            className="min-h-[200px] text-base"
          />
          <p className="text-sm text-gray-500">
            The more details you provide, the better we can tailor our recommendations
          </p>
        </div>
        
        <div className="pt-4">
          <Button 
            type="submit" 
            className="w-full bg-ai-blue hover:bg-ai-blue/90" 
            size="lg"
          >
            Submit <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SuggestPlanFlow;
