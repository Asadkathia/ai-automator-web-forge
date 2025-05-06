
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/CallToAction";
import { Link } from "react-router-dom";
import { CheckCircle, Link as LinkIcon, Code, Server, Database, ArrowRight } from "lucide-react";

const Integration = () => {
  const integrationSteps = [
    {
      number: "01",
      title: "Initial Setup",
      description:
        "Connect your NexusAI account with your existing systems through our user-friendly dashboard.",
    },
    {
      number: "02",
      title: "Data Configuration",
      description:
        "Import your product catalog, FAQs, and company information to train your AI bots.",
    },
    {
      number: "03",
      title: "Customize & Test",
      description:
        "Personalize your bot's responses, appearance, and behavior, then test it thoroughly.",
    },
    {
      number: "04",
      title: "Deploy & Launch",
      description:
        "Add the bot to your website, app, or social media channels with a simple embed code or API integration.",
    },
  ];

  const platforms = [
    { name: "WordPress", logo: "WordPress" },
    { name: "Shopify", logo: "Shopify" },
    { name: "Wix", logo: "Wix" },
    { name: "Salesforce", logo: "Salesforce" },
    { name: "Slack", logo: "Slack" },
    { name: "Zendesk", logo: "Zendesk" },
    { name: "HubSpot", logo: "HubSpot" },
    { name: "Microsoft Teams", logo: "Teams" },
  ];

  const integrationOptions = [
    {
      icon: <Code className="w-10 h-10 text-ai-blue" />,
      title: "JavaScript Snippet",
      description:
        "Add a simple JavaScript snippet to your website to enable the chatbot interface. No coding knowledge required.",
    },
    {
      icon: <LinkIcon className="w-10 h-10 text-ai-blue" />,
      title: "API Integration",
      description:
        "Use our comprehensive REST API to deeply integrate AI capabilities into your existing applications and systems.",
    },
    {
      icon: <Server className="w-10 h-10 text-ai-blue" />,
      title: "Webhook Automation",
      description:
        "Configure webhooks to trigger automated actions between NexusAI and your internal systems.",
    },
    {
      icon: <Database className="w-10 h-10 text-ai-blue" />,
      title: "Data Sync",
      description:
        "Keep your product catalog, customer data, and knowledge base in sync with automated two-way data synchronization.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-ai-dark to-ai-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Seamless Integration With Your Existing Systems
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Our AI bots integrate easily with your website, CRM, e-commerce platform, and messaging channels.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-ai-blue hover:bg-ai-blue/90 text-white px-8 py-6 text-lg">
              Start Integrating
            </Button>
          </Link>
        </div>
      </section>

      {/* Integration Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-ai-dark mb-4">
              Integration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get up and running with NexusAI in just four simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal">
            {integrationSteps.map((step, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-8 bg-white hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl font-bold text-ai-blue mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 bg-ai-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="text-3xl font-bold text-ai-dark mb-6">
                Easy to Implement, Powerful to Use
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Adding our AI bots to your website is as simple as copying and pasting a few lines of code. No complex setup or technical expertise required.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-ai-blue mr-3 mt-1" />
                  <span>Just paste our script into your website's header or footer</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-ai-blue mr-3 mt-1" />
                  <span>Customize appearance and behavior from our dashboard</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-ai-blue mr-3 mt-1" />
                  <span>Your AI bot will be live instantly with no downtime</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button className="bg-ai-blue hover:bg-ai-blue/90">
                  Get Integration Support
                </Button>
              </Link>
            </div>

            <div className="bg-ai-dark rounded-lg p-6 shadow-lg reveal">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="text-gray-300 overflow-x-auto">
                <code>{`<script>
  window.NexusAI = {
    companyId: 'YOUR_COMPANY_ID',
    theme: 'light',
    position: 'bottom-right',
    welcomeMessage: 'Hello! How can I help you today?',
    showBranding: false
  };

  (function() {
    var script = document.createElement('script');
    script.src = 'https://cdn.nexusai.com/chatbot.min.js';
    script.async = true;
    document.head.appendChild(script);
  })();
</script>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-ai-dark mb-4">
              Flexible Integration Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the integration method that works best for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
            {integrationOptions.map((option, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-8 bg-white hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <Link
                  to="/documentation"
                  className="inline-flex items-center text-ai-blue hover:text-ai-blue/80 font-medium"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Compatibility */}
      <section className="py-20 bg-ai-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-ai-dark mb-4">
              Works With Your Favorite Platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              NexusAI integrates seamlessly with these popular platforms and many more
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm"
              >
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-lg font-medium">{platform.logo.charAt(0)}</span>
                </div>
                <p className="font-medium">{platform.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction
        title="Ready to integrate AI into your business?"
        description="Our team is ready to help you implement the perfect AI solution."
        buttonText="Contact Our Integration Team"
        buttonLink="/contact"
      />
    </Layout>
  );
};

export default Integration;
