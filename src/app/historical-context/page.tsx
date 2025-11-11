"use client";

import { useRouter } from "next/navigation";
import HistoricalContextSection from "@/components/HistoricalContextSection";

export default function HistoricalContextPage() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/timeline");
  };

  const handleBack = () => {
    router.push("/");
  };

  const handleGoToDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <main>
      <HistoricalContextSection
        onNext={handleNext}
        onBack={handleBack}
        onGoToDashboard={handleGoToDashboard}
      />
    </main>
  );
}