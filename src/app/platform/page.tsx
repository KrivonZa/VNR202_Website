"use client";

import { useRouter } from "next/navigation";
import PlatformSection from "@/components/PlatformSection";

export default function PlatformPage() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/historical-significance");
  };

  const handleBack = () => {
    router.push("/party-formation");
  };

  const handleGoToDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <main>
      <PlatformSection
        onNext={handleNext}
        onBack={handleBack}
        onGoToDashboard={handleGoToDashboard}
      />
    </main>
  );
}