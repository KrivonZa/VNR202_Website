"use client";

import { useRouter } from "next/navigation";
import InevitabilitySection from "@/components/InevitabilitySection";

export default function InevitabilityPage() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/quiz");
  };

  const handleBack = () => {
    router.push("/historical-significance");
  };

  const handleGoToDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <main>
      <InevitabilitySection
        onNext={handleNext}
        onBack={handleBack}
        onGoToDashboard={handleGoToDashboard}
      />
    </main>
  );
}