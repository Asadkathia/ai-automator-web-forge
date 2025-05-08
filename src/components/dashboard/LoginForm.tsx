
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please enter both email and password",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate authentication - In a real app, this would be an API call
      setTimeout(() => {
        // Mock successful login
        toast({
          title: "Success",
          description: "You have successfully signed in to your account",
        });
        
        // Redirect to user dashboard
        navigate("/user-dashboard");
      }, 1500);
    } catch (error) {
      toast({
        title: "Sign in failed",
        description: "Please check your credentials and try again",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
          <CardDescription>Access your NeuraFlow dashboard</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Button variant="link" className="p-0 h-auto text-ai-blue" type="button">
                  Forgot password?
                </Button>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button 
              className="w-full bg-ai-blue hover:bg-ai-blue/90" 
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
            <div className="mt-4 text-center text-sm">
              <span className="text-gray-500">Don't have an account? </span>
              <a href="/onboarding" className="text-ai-blue hover:underline">
                Create one
              </a>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default LoginForm;
