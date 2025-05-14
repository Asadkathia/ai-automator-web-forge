
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, loading, signIn, signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (isLogin) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };

  // Redirect if already authenticated
  if (user && !loading) {
    return <Navigate to="/user-dashboard" />;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-24 flex items-center justify-center min-h-[70vh]">
        <div className="max-w-md w-full">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                {isLogin ? "Sign In" : "Create Account"}
              </CardTitle>
              <CardDescription>
                {isLogin ? "Access your NeuraFlow dashboard" : "Join NeuraFlow to start building AI chatbots"}
              </CardDescription>
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
                    {isLogin && (
                      <Button variant="link" className="p-0 h-auto text-ai-blue" type="button">
                        Forgot password?
                      </Button>
                    )}
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
                  disabled={loading}
                >
                  {loading ? "Processing..." : isLogin ? "Sign In" : "Create Account"}
                </Button>
                <div className="mt-4 text-center text-sm">
                  {isLogin ? (
                    <span className="text-gray-500">
                      Don't have an account?{" "}
                      <Button
                        variant="link"
                        className="p-0 h-auto text-ai-blue"
                        type="button"
                        onClick={() => setIsLogin(false)}
                      >
                        Create one
                      </Button>
                    </span>
                  ) : (
                    <span className="text-gray-500">
                      Already have an account?{" "}
                      <Button
                        variant="link"
                        className="p-0 h-auto text-ai-blue"
                        type="button"
                        onClick={() => setIsLogin(true)}
                      >
                        Sign in
                      </Button>
                    </span>
                  )}
                </div>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Auth;
