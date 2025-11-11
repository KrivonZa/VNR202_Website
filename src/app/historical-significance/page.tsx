"use client";

import { useRouter } from "next/navigation";
import HistoricalSignificanceSection from "@/components/HistoricalSignificanceSection";

export default function HistoricalSignificancePage() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/inevitability");
  };

  const handleBack = () => {
    router.push("/platform");
  };

  const handleGoToDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <main>
      <HistoricalSignificanceSection
        onNext={handleNext}
        onBack={handleBack}
        onGoToDashboard={handleGoToDashboard}
      />
    </main>
  );
}