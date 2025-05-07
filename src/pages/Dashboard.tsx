
import React from "react";
import Layout from "@/components/Layout";
import DashboardHero from "@/components/dashboard/DashboardHero";
import LoginForm from "@/components/dashboard/LoginForm";
import FeaturePreview from "@/components/dashboard/FeaturePreview";

const Dashboard = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <DashboardHero />

      {/* Login Section */}
      <section className="py-20 bg-ai-light">
        <LoginForm />
      </section>
      
      {/* Dashboard Preview Section */}
      <section className="py-20 bg-white">
        <FeaturePreview />
      </section>
    </Layout>
  );
};

export default Dashboard;
