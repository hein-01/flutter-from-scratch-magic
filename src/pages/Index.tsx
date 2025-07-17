
import { useState } from "react";
import { Onboarding } from "@/components/Onboarding";
import { MainApp } from "@/components/MainApp";

const Index = () => {
  const [showOnboarding, setShowOnboarding] = useState(true);

  if (showOnboarding) {
    return <Onboarding onComplete={() => setShowOnboarding(false)} />;
  }

  return <MainApp />;
};

export default Index;
