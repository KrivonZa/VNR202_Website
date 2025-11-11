"use client";

import { useRouter } from "next/navigation";
import LandingPage from "@/components/LandingPage";

export default function Home() {
  const router = useRouter();

  const handleStartJourney = () => {
    router.push("/historical-context");
  };

  return (
    <main>
      <LandingPage onStartJourney={handleStartJourney} />
    </main>
  );
}
