"use client";

import { useRouter } from "next/navigation";
import PartyFormationSection from "@/components/PartyFormationSection";

export default function PartyFormationPage() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/platform");
  };

  const handleBack = () => {
    router.push("/timeline");
  };

  const handleGoToDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <main>
      <PartyFormationSection
        onNext={handleNext}
        onBack={handleBack}
        onGoToDashboard={handleGoToDashboard}
      />
    </main>
  );
}