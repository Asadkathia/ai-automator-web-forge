
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/CallToAction";
import { Link } from "react-router-dom";
import { MessageSquare, ShoppingCart, Megaphone, CheckCircle, BarChart2, Clock, Users, Headphones, Gift, CreditCard, Target, MailOpen } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "customer-service",
      icon: <MessageSquare className="w-12 h-12 text-ai-blue" />,
      title: "Customer Service Bots",
      subtitle: "Always-on support for your customers",
      description:
        "Our AI-powered customer service bots handle inquiries, resolve issues, and provide immediate assistance around the clock, enhancing customer satisfaction while reducing support costs.",
      features: [
        { icon: <CheckCircle className="w-5 h-5 text-ai-blue" />, text: "24/7 customer support" },
        { icon: <CheckCircle className="w-5 h-5 text-ai-blue" />, text: "Multi-channel integration" },
        { icon: <CheckCircle className="w-5 h-5 text-ai-blue" />, text: "Instant response times" },
        { icon: <CheckCircle className="w-5 h-5 text-ai-blue" />, text: "Human handoff for complex issues" },
        { icon: <CheckCircle className="w-5 h-5 text-ai-blue" />, text: "Ticket creation and tracking" },
        { icon: <CheckCircle className="w-5 h-5 text-ai-blue" />, text: "Customizable knowledge base" },
      ],
      subFeatures: [
        {
          icon: <Clock className="w-6 h-6 text-ai-blue" />,
          title: "Always On",
          description: "Provide 24/7 support without any downtime or breaks."
        },
        {
          icon: <BarChart2 className="w-6 h-6 text-ai-blue" />,
          title: "Insights & Analytics",
          description: "Gather customer interaction data to identify trends and improvement areas."
        },
        {
          icon: <Users className="w-6 h-6 text-ai-blue" />,
          title: "Seamless Escalation",
          description: "Smart handoff to human agents when needed, with complete conversation history."
        },
        {
          icon: <Headphones className="w-6 h-6 text-ai-blue" />,
          title: "Omnichannel Presence",
          description: "Deploy across website, mobile app, social media, and messaging platforms."
        },
      ]
    },
    {
      id: "sales",
      icon: <ShoppingCart className="w-12 h-12 text-ai-blue" />,
      title: "Sales Bots",
      subtitle: "Convert more visitors into customers",
      description:
        "Drive revenue growth with intelligent sales bots that engage prospects, answer product questions, recommend solutions, and guide customers through the buying journey.",
      features: [
        { icon: <CheckCircle className="w-5 h-5 text-ai-blue" />, text: "Lead qualification" },
        { icon: <CheckCircle className="w-5 h-5 text-ai-blue" />, text: "Product recommendations" },
        { icon: <CheckCircle className="w-5 h-5 text-ai-blue" />, text: "Personalized interactions" },
        { icon: <CheckCircle className="w-5 h-5 text-ai-blue" />, text: "Cart recovery" },
        { icon: <CheckCircle className="w-5 h-5 text-ai-blue" />, text: "Upsell and cross-sell" },
        { icon: <CheckCircle className="w-5 h-5 text-ai-blue" />, text: "Payment processing" },
      ],
      subFeatures: [
        {
          icon: <CreditCard className="w-6 h-6 text-ai-blue" />,
          title: "Complete Transactions",
          description: "Guide customers through checkout with secure payment processing."
        },
        {
          icon: <Gift className="w-6 h-6 text-ai-blue" />,
          title: "Upsell & Cross-sell",
          description: "Intelligently suggest complementary products based on user behavior."
        },
        {
          icon: <BarChart2 className="w-6 h-6 text-ai-blue" />,
          title: "Conversion Analytics",
          description: "Track performance with detailed sales funnel and conversion reports."
        },
        {
          icon: <Users className="w-6 h-6 text-ai-blue" />,
          title: "Customer Segmentation",
          description: "Tailor interactions based on customer profiles and purchase history."
        },
      ]
    },
    {
      id: "marketing",
      icon: <Megaphone className="w-12 h-12 text-ai-blue" />,
      title: "Marketing Bots",
      subtitle: "Engage and nurture your audience",
      description:
        "Automate your marketing efforts with bots that engage prospects, deliver personalized content, capture leads, and nurture relationships throughout the customer journey.",
      features: [
        { icon: <CheckCircle className="w-5 h-5 text-ai-blue" />, text: "Lead generation" },
        { icon: <CheckCircle className="w-5 h-5 text-ai-blue" />, text: "Content delivery" },
        { icon: <CheckCircle className="w-5 h-5 text-ai-blue" />, text: "Campaign management" },
        { icon: <CheckCircle className="w-5 h-5 text-ai-blue" />, text: "Audience segmentation" },
        { icon: <CheckCircle className="w-5 h-5 text-ai-blue" />, text: "Drip campaigns" },
        { icon: <CheckCircle className="w-5 h-5 text-ai-blue" />, text: "Performance analytics" },
      ],
      subFeatures: [
        {
          icon: <Target className="w-6 h-6 text-ai-blue" />,
          title: "Targeted Campaigns",
          description: "Deliver personalized marketing messages based on user behavior and preferences."
        },
        {
          icon: <MailOpen className="w-6 h-6 text-ai-blue" />,
          title: "Automated Drip Campaigns",
          description: "Schedule and deliver timely follow-ups to nurture leads through the funnel."
        },
        {
          icon: <BarChart2 className="w-6 h-6 text-ai-blue" />,
          title: "Performance Tracking",
          description: "Monitor campaign effectiveness with comprehensive analytics dashboard."
        },
        {
          icon: <Users className="w-6 h-6 text-ai-blue" />,
          title: "Progressive Profiling",
          description: "Gradually collect customer information to build detailed prospect profiles."
        },
      ]
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-ai-dark to-ai-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI-Powered Solutions for Every Business Need
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Our intelligent chatbots automate customer service, sales, and marketing to help your business grow.
          </p>
          <Link to="/onboarding">
            <Button size="lg" className="bg-ai-blue hover:bg-ai-blue/90 text-white px-8 py-6 text-lg">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`mb-24 last:mb-0 reveal ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="mr-4 p-3 bg-ai-blue/10 rounded-lg">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold gradient-text">
                      {service.title}
                    </h2>
                  </div>
                  <h3 className="text-xl text-ai-dark mb-4">{service.subtitle}</h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        {feature.icon}
                        <span className="ml-2 text-gray-700">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/pricing">
                    <Button className="bg-ai-blue hover:bg-ai-blue/90 mr-4">
                      View Pricing
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="border-ai-blue text-ai-blue hover:bg-ai-blue/10">
                      Contact Sales
                    </Button>
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.subFeatures.map((feature, idx) => (
                    <div key={idx} className="bg-ai-light p-6 rounded-lg">
                      <div className="mb-4">
                        {feature.icon}
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction 
        title="Ready to implement AI automation?"
        description="Get started with NexusAI today and revolutionize your customer interactions."
        buttonText="Get Started"
        buttonLink="/onboarding"
      />
    </Layout>
  );
};

export default Services;
