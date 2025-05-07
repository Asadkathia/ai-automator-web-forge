
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, CircleCheck, CircleX } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

interface ManualPlanFlowProps {
  businessName: string;
}

interface BotTypeOption {
  id: string;
  label: string;
}

interface ChannelOption {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface IntegrationOption {
  id: string;
  label: string;
  priceImpact: number;
}

const ManualPlanFlow = ({ businessName }: ManualPlanFlowProps) => {
  // Bot types
  const botTypes: BotTypeOption[] = [
    { id: "customer-service", label: "Customer Service Bot" },
    { id: "sales", label: "Sales Bot" },
    { id: "marketing", label: "Marketing Bot" },
    { id: "all", label: "All of the Above" },
  ];
  
  // Channel options
  const channelOptions: ChannelOption[] = [
    { 
      id: "website", 
      label: "Website Chat",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chat"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
    },
    { 
      id: "whatsapp", 
      label: "WhatsApp",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp"><path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.2.301-.767.966-.94 1.164-.173.199-.347.223-.647.075-.3-.15-1.269-.467-2.416-1.483-.893-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.46.13-.61.136-.135.301-.353.451-.533.151-.18.2-.301.3-.5.099-.2.05-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.242-.579-.487-.5-.672-.51-.172-.01-.371-.01-.571-.01-.2 0-.522.074-.796.359-.273.285-1.045.942-1.045 2.306s1.07 2.674 1.22 2.875c.149.2 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.273-.198-.574-.347z" /><path d="M20.1 3.9C17.9 1.7 14.8.4 11.5.4 5.5.5.9 5.1.8 11.1c0 2 .5 3.9 1.4 5.6l-1.5 5.5 5.6-1.5c1.7.9 3.5 1.3 5.4 1.3 6 0 10.6-4.6 10.7-10.6 0-2.8-1.1-5.7-3.3-7.9z" /></svg>
    },
    { 
      id: "facebook", 
      label: "Facebook Messenger",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    },
    { 
      id: "instagram", 
      label: "Instagram",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
    },
    { 
      id: "email", 
      label: "Email",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    },
  ];
  
  // Integration options
  const integrationOptions: IntegrationOption[] = [
    { id: "crm", label: "CRM (Salesforce, HubSpot, etc.)", priceImpact: 50 },
    { id: "ecommerce", label: "E-commerce Platforms (Shopify, WooCommerce, etc.)", priceImpact: 30 },
    { id: "payment", label: "Payment Gateways", priceImpact: 20 },
  ];

  // State
  const [selectedBotType, setSelectedBotType] = useState<string>("");
  const [selectedChannels, setSelectedChannels] = useState<string[]>([]);
  const [selectedIntegrations, setSelectedIntegrations] = useState<string[]>([]);
  const [userCount, setUserCount] = useState<string>("10");
  const [monthlyInteractions, setMonthlyInteractions] = useState<string>("1000");
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [basePrice, setBasePrice] = useState<number>(0);
  const [finalPrice, setFinalPrice] = useState<number>(0);
  
  // Update price when selections change
  useEffect(() => {
    // Base price depends on bot type
    let newBasePrice = 0;
    
    switch (selectedBotType) {
      case "customer-service":
        newBasePrice = 99;
        break;
      case "sales":
        newBasePrice = 149;
        break;
      case "marketing":
        newBasePrice = 129;
        break;
      case "all":
        newBasePrice = 299;
        break;
      default:
        newBasePrice = 0;
    }
    
    setBasePrice(newBasePrice);
    
    // Calculate final price based on all selections
    let calculatedPrice = newBasePrice;
    
    // Add channel costs (each channel adds 10% to base price)
    calculatedPrice += newBasePrice * (selectedChannels.length * 0.1);
    
    // Add integration costs
    selectedIntegrations.forEach(integrationId => {
      const integration = integrationOptions.find(opt => opt.id === integrationId);
      if (integration) {
        calculatedPrice += integration.priceImpact;
      }
    });
    
    // Scale by user count
    switch (userCount) {
      case "10":
        // Base price already includes this tier
        break;
      case "25":
        calculatedPrice *= 1.5;
        break;
      case "50":
        calculatedPrice *= 2;
        break;
      case "100":
        calculatedPrice *= 3;
        break;
      default:
        break;
    }
    
    // Scale by monthly interactions
    switch (monthlyInteractions) {
      case "1000":
        // Base price already includes this tier
        break;
      case "5000":
        calculatedPrice *= 1.3;
        break;
      case "10000":
        calculatedPrice *= 1.6;
        break;
      case "50000":
        calculatedPrice *= 2.2;
        break;
      default:
        break;
    }
    
    setFinalPrice(Math.round(calculatedPrice));
  }, [selectedBotType, selectedChannels, selectedIntegrations, userCount, monthlyInteractions]);

  // Handlers
  const handleChannelToggle = (channelId: string) => {
    setSelectedChannels(prev => 
      prev.includes(channelId) 
        ? prev.filter(id => id !== channelId) 
        : [...prev, channelId]
    );
  };

  const handleIntegrationToggle = (integrationId: string) => {
    setSelectedIntegrations(prev => 
      prev.includes(integrationId) 
        ? prev.filter(id => id !== integrationId) 
        : [...prev, integrationId]
    );
  };
  
  const handleNextStep = () => {
    // Validate current step
    if (currentStep === 1 && !selectedBotType) {
      toast({
        title: "Please select a bot type",
        description: "You need to select at least one bot type to continue",
        variant: "destructive",
      });
      return;
    }
    
    if (currentStep === 2 && selectedChannels.length === 0) {
      toast({
        title: "Please select at least one channel",
        description: "You need to select at least one communication channel to continue",
        variant: "destructive",
      });
      return;
    }
    
    setCurrentStep(prev => prev + 1);
  };
  
  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1);
  };
  
  const handleFinish = () => {
    toast({
      title: "Plan created successfully!",
      description: "You'll be redirected to the dashboard to complete setup.",
    });
    
    // Simulate redirect to dashboard
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1500);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">{businessName}: Build Your Plan</h2>
        <div className="text-right">
          <div className="text-sm text-gray-500">Your Custom Plan</div>
          <div className="text-2xl font-bold text-ai-blue">${finalPrice}/mo</div>
        </div>
      </div>

      <Progress value={currentStep * 25} className="h-2 mb-8" />

      {/* Step 1: Bot Type */}
      {currentStep === 1 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Step 1: Choose Bot Type</h3>
            <p className="text-gray-600 mb-6">
              Select the type of AI bot that best fits your business needs
            </p>
          </div>
          
          <RadioGroup 
            value={selectedBotType} 
            onValueChange={setSelectedBotType}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {botTypes.map((bot) => (
              <div key={bot.id} className="relative">
                <RadioGroupItem 
                  value={bot.id} 
                  id={`bot-${bot.id}`} 
                  className="peer sr-only" 
                />
                <Label 
                  htmlFor={`bot-${bot.id}`}
                  className="flex flex-col items-center justify-center p-6 border-2 rounded-lg cursor-pointer hover:border-ai-blue hover:bg-ai-blue/5 transition-all peer-data-[state=checked]:border-ai-blue peer-data-[state=checked]:bg-ai-blue/5"
                >
                  {selectedBotType === bot.id && (
                    <CircleCheck className="absolute top-3 right-3 h-5 w-5 text-ai-blue" />
                  )}
                  <div className="w-14 h-14 bg-ai-blue/10 rounded-full flex items-center justify-center mb-3">
                    <Bot className="h-7 w-7 text-ai-blue" />
                  </div>
                  <span className="font-medium text-lg">{bot.label}</span>
                </Label>
              </div>
            ))}
          </RadioGroup>
          
          <div className="flex justify-end pt-4">
            <Button
              onClick={handleNextStep}
              className="bg-ai-blue hover:bg-ai-blue/90"
            >
              Next Step <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
      
      {/* Step 2: Communication Channels */}
      {currentStep === 2 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Step 2: Select Communication Channels</h3>
            <p className="text-gray-600 mb-6">
              Choose how your customers will interact with your AI bot
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {channelOptions.map((channel) => (
              <div key={channel.id} className="relative">
                <Checkbox
                  id={`channel-${channel.id}`}
                  checked={selectedChannels.includes(channel.id)}
                  onCheckedChange={() => handleChannelToggle(channel.id)}
                  className="peer sr-only"
                />
                <label
                  htmlFor={`channel-${channel.id}`}
                  className={`flex items-center p-4 border-2 rounded-lg cursor-pointer hover:border-ai-blue hover:bg-ai-blue/5 transition-all ${
                    selectedChannels.includes(channel.id)
                      ? "border-ai-blue bg-ai-blue/5"
                      : "border-gray-200"
                  }`}
                >
                  <div className="mr-3 bg-ai-blue/10 p-2 rounded-full">
                    {channel.icon}
                  </div>
                  <span>{channel.label}</span>
                  {selectedChannels.includes(channel.id) && (
                    <CircleCheck className="ml-auto h-5 w-5 text-ai-blue" />
                  )}
                </label>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between pt-4">
            <Button
              onClick={handlePrevStep}
              variant="outline"
            >
              Previous
            </Button>
            <Button
              onClick={handleNextStep}
              className="bg-ai-blue hover:bg-ai-blue/90"
            >
              Next Step <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
      
      {/* Step 3: Integrations */}
      {currentStep === 3 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Step 3: Pick Integrations</h3>
            <p className="text-gray-600 mb-6">
              Connect your AI bot with your existing business tools
            </p>
          </div>
          
          <div className="space-y-4">
            {integrationOptions.map((integration) => (
              <div key={integration.id} className="relative flex items-center">
                <Checkbox
                  id={`integration-${integration.id}`}
                  checked={selectedIntegrations.includes(integration.id)}
                  onCheckedChange={() => handleIntegrationToggle(integration.id)}
                  className="mr-3"
                />
                <div className="flex-1">
                  <label
                    htmlFor={`integration-${integration.id}`}
                    className="flex justify-between cursor-pointer"
                  >
                    <span>{integration.label}</span>
                    <span className="text-sm text-gray-500">
                      +${integration.priceImpact}/mo
                    </span>
                  </label>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between pt-4">
            <Button
              onClick={handlePrevStep}
              variant="outline"
            >
              Previous
            </Button>
            <Button
              onClick={handleNextStep}
              className="bg-ai-blue hover:bg-ai-blue/90"
            >
              Next Step <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
      
      {/* Step 4: User Limits & Finish */}
      {currentStep === 4 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Step 4: Set User Limits</h3>
            <p className="text-gray-600 mb-6">
              Configure the scale of your AI bot implementation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="block text-sm font-medium">
                Number of users/seats
              </label>
              <Select value={userCount} onValueChange={setUserCount}>
                <SelectTrigger>
                  <SelectValue placeholder="Select user count" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">Up to 10 users</SelectItem>
                  <SelectItem value="25">Up to 25 users</SelectItem>
                  <SelectItem value="50">Up to 50 users</SelectItem>
                  <SelectItem value="100">Up to 100 users</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-3">
              <label className="block text-sm font-medium">
                Expected monthly interactions
              </label>
              <Select value={monthlyInteractions} onValueChange={setMonthlyInteractions}>
                <SelectTrigger>
                  <SelectValue placeholder="Select interaction volume" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1000">Up to 1,000 interactions</SelectItem>
                  <SelectItem value="5000">Up to 5,000 interactions</SelectItem>
                  <SelectItem value="10000">Up to 10,000 interactions</SelectItem>
                  <SelectItem value="50000">Up to 50,000 interactions</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Plan Summary */}
          <Card className="mt-8 border-2 border-ai-blue/20">
            <CardContent className="pt-6">
              <h4 className="text-lg font-semibold mb-4">Your Custom Plan Summary</h4>
              
              <div className="space-y-4">
                <div className="flex justify-between pb-2 border-b">
                  <span className="font-medium">Bot Type:</span>
                  <span>{botTypes.find(b => b.id === selectedBotType)?.label || "None selected"}</span>
                </div>
                
                <div className="flex justify-between pb-2 border-b">
                  <span className="font-medium">Channels:</span>
                  <span className="text-right">
                    {selectedChannels.length === 0 
                      ? "None selected" 
                      : selectedChannels.map(c => 
                          channelOptions.find(opt => opt.id === c)?.label
                        ).join(", ")
                    }
                  </span>
                </div>
                
                <div className="flex justify-between pb-2 border-b">
                  <span className="font-medium">Integrations:</span>
                  <span className="text-right">
                    {selectedIntegrations.length === 0 
                      ? "None selected" 
                      : selectedIntegrations.map(i => 
                          integrationOptions.find(opt => opt.id === i)?.label.split(" (")[0]
                        ).join(", ")
                    }
                  </span>
                </div>
                
                <div className="flex justify-between pb-2 border-b">
                  <span className="font-medium">User Seats:</span>
                  <span>{userCount} users</span>
                </div>
                
                <div className="flex justify-between pb-2 border-b">
                  <span className="font-medium">Monthly Interactions:</span>
                  <span>{Number(monthlyInteractions).toLocaleString()} interactions</span>
                </div>
                
                <div className="flex justify-between pt-2 text-xl font-bold">
                  <span>Total Monthly Price:</span>
                  <span className="text-ai-blue">${finalPrice}/mo</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-between pt-4">
            <Button
              onClick={handlePrevStep}
              variant="outline"
            >
              Previous
            </Button>
            <Button
              onClick={handleFinish}
              className="bg-ai-blue hover:bg-ai-blue/90"
            >
              Continue to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

// Bot icon component for consistency
const Bot = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="18" height="10" x="3" y="11" rx="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4" />
    <line x1="8" x2="8" y1="16" y2="16" />
    <line x1="16" x2="16" y1="16" y2="16" />
  </svg>
);

export default ManualPlanFlow;
