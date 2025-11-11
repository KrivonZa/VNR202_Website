"use client";

import { useRouter } from "next/navigation";
import SharingSection from "@/components/SharingSection";

export default function SharingPage() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/dashboard");
  };

  const handleBack = () => {
    router.push("/quiz");
  };

  const handleRestart = () => {
    router.push("/");
  };

  const handleGoToDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <main>
      <SharingSection
        onNext={handleNext}
        onBack={handleBack}
        onRestart={handleRestart}
        onGoToDashboard={handleGoToDashboard}
      />
    </main>
  );
}