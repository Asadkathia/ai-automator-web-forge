
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, MessageSquare, ShoppingCart } from "lucide-react";

// Mock data for the services
const services = [
  {
    id: 1,
    type: "Customer Service",
    name: "Support Assistant",
    channels: ["Website", "WhatsApp"],
    status: "active",
    icon: MessageSquare,
  },
  {
    id: 2,
    type: "Sales",
    name: "Sales Qualifier",
    channels: ["Website"],
    status: "active",
    icon: ShoppingCart,
  },
  {
    id: 3,
    type: "Marketing",
    name: "Lead Generator",
    channels: ["Website", "Facebook"],
    status: "inactive",
    icon: Bot,
  },
];

const ServicesPanel = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-bold">My Active Services</CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} className="overflow-hidden border">
                <div className="bg-gradient-to-r from-ai-blue/80 to-ai-blue/60 p-4 flex items-center gap-3">
                  <div className="bg-white p-2 rounded-md">
                    <Icon className="h-5 w-5 text-ai-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{service.name}</h3>
                    <p className="text-sm text-white/80">{service.type}</p>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.channels.map((channel) => (
                      <Badge key={channel} variant="secondary" className="bg-gray-100">
                        {channel}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Badge 
                      variant={service.status === "active" ? "default" : "outline"}
                      className={
                        service.status === "active" 
                          ? "bg-green-500 hover:bg-green-500" 
                          : "text-gray-500"
                      }
                    >
                      {service.status === "active" ? "Active" : "Inactive"}
                    </Badge>
                    
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm">
                        View Logs
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServicesPanel;
