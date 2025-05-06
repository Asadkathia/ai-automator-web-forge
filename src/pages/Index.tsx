
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CallToAction from "@/components/CallToAction";
import { MessageSquare, ShoppingCart, Megaphone, ArrowRight, CheckCircle2, Zap, Shield, Globe } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: <CheckCircle2 className="w-6 h-6 text-ai-blue" />,
      title: "24/7 Availability",
      description: "Our AI bots provide round-the-clock service without breaks or downtime."
    },
    {
      icon: <Zap className="w-6 h-6 text-ai-blue" />,
      title: "Instant Responses",
      description: "Deliver immediate answers to customer queries without making them wait."
    },
    {
      icon: <Shield className="w-6 h-6 text-ai-blue" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime for consistent performance."
    },
    {
      icon: <Globe className="w-6 h-6 text-ai-blue" />,
      title: "Multilingual Support",
      description: "Our bots communicate in over 50 languages to serve global customers."
    }
  ];

  const services = [
    {
      icon: <MessageSquare className="w-12 h-12 text-white" />,
      title: "Customer Service Bots",
      description: "Automate customer support with AI that handles inquiries, troubleshoots issues, and escalates complex cases when necessary.",
      link: "/services"
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-white" />,
      title: "Sales Bots",
      description: "Convert visitors into customers with AI salesbots that qualify leads, answer product questions, and guide purchases.",
      link: "/services"
    },
    {
      icon: <Megaphone className="w-12 h-12 text-white" />,
      title: "Marketing Bots",
      description: "Engage potential customers with personalized marketing campaigns and interactive content delivery.",
      link: "/services"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-ai-dark to-ai-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Transform Your Business With <span className="gradient-text">AI Automation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Intelligent chatbots that boost customer satisfaction, drive sales, and deliver marketing results 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/services">
                  <Button size="lg" className="bg-ai-blue hover:bg-ai-blue/90 text-white px-8 py-6 text-lg w-full sm:w-auto">
                    Get Started
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 px-8 py-6 text-lg w-full sm:w-auto">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              {/* Placeholder for an illustration or image */}
              <div className="w-full h-96 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-ai-blue/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-8 right-8 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
                <div className="flex items-center justify-center h-full">
                  <span className="text-2xl text-white/70">AI Demo Animation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-64 h-64 bg-ai-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-ai-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-ai-dark mb-4">Why Choose NexusAI</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI solutions drive efficiency, reduce costs, and deliver exceptional customer experiences around the clock.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 bg-ai-blue/10 p-3 rounded-full inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-ai-dark mb-4">Our AI Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored AI chatbots for every aspect of your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-ai-navy rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-8">
                  <div className="bg-ai-blue/20 p-4 rounded-full inline-block mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-ai-blue hover:text-ai-blue/80 font-medium"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-ai-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <p className="text-5xl font-bold gradient-text mb-2">95%</p>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <p className="text-5xl font-bold gradient-text mb-2">24/7</p>
              <p className="text-gray-600">Availability</p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <p className="text-5xl font-bold gradient-text mb-2">60%</p>
              <p className="text-gray-600">Cost Reduction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <div className="mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ai-blue mx-auto">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
            </svg>
          </div>
          <blockquote className="text-2xl font-medium text-gray-700 mb-8">
            "NexusAI's chatbots have revolutionized our customer service. We've seen a 45% increase in customer satisfaction and saved over $100,000 annually in support costs."
          </blockquote>
          <div className="flex items-center justify-center">
            <div className="mr-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            </div>
            <div className="text-left">
              <p className="font-semibold">Sarah Johnson</p>
              <p className="text-sm text-gray-500">CTO, TechCorp Inc.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction 
        title="Ready to Automate Your Business?"
        description="Get started with NexusAI today and transform your customer interactions."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </Layout>
  );
};

export default Home;
