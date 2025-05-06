
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Startup",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses getting started with AI automation.",
      features: [
        "1 AI bot (choose one type)",
        "5,000 monthly conversations",
        "Business hours support",
        "Basic analytics",
        "Website integration",
        "Custom welcome message",
      ],
      buttonText: "Get Started",
      buttonLink: "/contact",
      highlighted: false,
    },
    {
      name: "Business",
      price: "$299",
      period: "/month",
      description: "For growing businesses with multiple automation needs.",
      features: [
        "3 AI bots (all types included)",
        "25,000 monthly conversations",
        "24/7 priority support",
        "Advanced analytics & reporting",
        "Multi-channel integration",
        "Custom branding & appearance",
        "A/B testing capabilities",
        "Workflow automation",
      ],
      buttonText: "Get Started",
      buttonLink: "/contact",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations with complex needs.",
      features: [
        "Unlimited AI bots",
        "Unlimited conversations",
        "Dedicated account manager",
        "Custom AI training",
        "Enterprise-grade security",
        "SSO integration",
        "Custom API development",
        "On-premise deployment option",
        "SLA guarantees",
      ],
      buttonText: "Contact Sales",
      buttonLink: "/contact",
      highlighted: false,
    },
  ];

  const faqs = [
    {
      question: "Do I need technical knowledge to use NexusAI?",
      answer:
        "No, our platform is designed to be user-friendly with no coding required. We provide simple integration options including copy-paste scripts and dedicated support to help you get started.",
    },
    {
      question: "Can I customize the appearance of the AI bots?",
      answer:
        "Yes, all plans include customization options. You can adjust colors, fonts, and positioning to match your brand. Business and Enterprise plans offer additional branding and appearance options.",
    },
    {
      question: "How do I train the AI to answer specific questions?",
      answer:
        "Our platform allows you to upload FAQs, product information, and company policies through our intuitive dashboard. The AI automatically learns from this content to provide accurate responses.",
    },
    {
      question: "What happens when the AI can't answer a question?",
      answer:
        "You can configure custom fallback options, including directing users to a contact form, connecting them with a human agent, or providing alternative resources.",
    },
    {
      question: "Can I integrate with my existing CRM or helpdesk?",
      answer:
        "Yes, we offer integrations with popular platforms like Salesforce, Zendesk, HubSpot, and more. Enterprise plans include custom integrations for proprietary systems.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial for our Startup and Business plans. No credit card required to get started.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-ai-dark to-ai-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your business needs and scale as you grow
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-lg border ${
                  plan.highlighted
                    ? "border-ai-blue shadow-lg shadow-ai-blue/10 relative"
                    : "border-gray-200"
                } bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-ai-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-ai-blue mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to={plan.buttonLink} className="block w-full">
                  <Button
                    className={`w-full ${
                      plan.highlighted
                        ? "bg-ai-blue hover:bg-ai-blue/90"
                        : "bg-ai-navy hover:bg-ai-navy/90"
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-ai-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-ai-dark mb-4">
              Compare Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the plan that has the features you need
            </p>
          </div>

          <div className="overflow-x-auto reveal">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-ai-navy text-white">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center">Startup</th>
                  <th className="p-4 text-center">Business</th>
                  <th className="p-4 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4">
                    <div className="flex items-center">
                      <span>AI Bot Types</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="w-4 h-4 text-gray-400 ml-2" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-64">Choose between Customer Service, Sales, or Marketing bot</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </td>
                  <td className="p-4 text-center">1 Type</td>
                  <td className="p-4 text-center">All Types</td>
                  <td className="p-4 text-center">All Types</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4">Monthly Conversations</td>
                  <td className="p-4 text-center">5,000</td>
                  <td className="p-4 text-center">25,000</td>
                  <td className="p-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4">Web Integration</td>
                  <td className="p-4 text-center">
                    <CheckCircle className="w-5 h-5 text-ai-blue mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <CheckCircle className="w-5 h-5 text-ai-blue mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <CheckCircle className="w-5 h-5 text-ai-blue mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4">Mobile App Integration</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center">
                    <CheckCircle className="w-5 h-5 text-ai-blue mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <CheckCircle className="w-5 h-5 text-ai-blue mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4">Social Media Integration</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center">
                    <CheckCircle className="w-5 h-5 text-ai-blue mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <CheckCircle className="w-5 h-5 text-ai-blue mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4">Custom Branding</td>
                  <td className="p-4 text-center">Basic</td>
                  <td className="p-4 text-center">Advanced</td>
                  <td className="p-4 text-center">Complete</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4">Analytics</td>
                  <td className="p-4 text-center">Basic</td>
                  <td className="p-4 text-center">Advanced</td>
                  <td className="p-4 text-center">Enterprise</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4">Human Handoff</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center">
                    <CheckCircle className="w-5 h-5 text-ai-blue mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <CheckCircle className="w-5 h-5 text-ai-blue mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4">API Access</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center">Limited</td>
                  <td className="p-4 text-center">Full</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4">Support</td>
                  <td className="p-4 text-center">Email</td>
                  <td className="p-4 text-center">Priority</td>
                  <td className="p-4 text-center">Dedicated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-ai-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing and plans
            </p>
          </div>

          <div className="space-y-8 reveal">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center reveal">
            <p className="text-gray-600 mb-4">
              Still have questions about which plan is right for you?
            </p>
            <Link to="/contact">
              <Button className="bg-ai-blue hover:bg-ai-blue/90">
                Contact Our Sales Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
