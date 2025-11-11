"use client";

import { useRouter } from "next/navigation";
import InteractiveTimelineSection from "@/components/InteractiveTimelineSection";

export default function TimelinePage() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/party-formation");
  };

  const handleBack = () => {
    router.push("/historical-context");
  };

  const handleGoToDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <main>
      <InteractiveTimelineSection
        onNext={handleNext}
        onBack={handleBack}
        onGoToDashboard={handleGoToDashboard}
      />
    </main>
  );
}