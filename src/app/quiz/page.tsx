"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import QuizPage from "@/components/QuizPage";

function QuizContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const resetKey = searchParams.get("reset") || "0";

  const handleNext = () => {
    router.push("/sharing");
  };

  const handleBack = () => {
    router.push("/inevitability");
  };

  const handleRestart = () => {
    const newKey = parseInt(resetKey) + 1;
    router.push(`/quiz?reset=${newKey}`);
  };

  const handleGoToDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <QuizPage
      key={resetKey}
      onNext={handleNext}
      onBack={handleBack}
      onRestart={handleRestart}
      onGoToDashboard={handleGoToDashboard}
    />
  );
}

export default function QuizPageWrapper() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <QuizContent />
      </Suspense>
    </main>
  );
}