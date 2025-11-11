"use client";

import { useRouter } from "next/navigation";
import DashboardSection from "@/components/DashboardSection";
import { SECTION_TO_ROUTE, ROUTES } from "@/lib/routes";

export default function DashboardPage() {
  const router = useRouter();

  const handleBack = () => {
    router.push(ROUTES.SHARING);
  };

  const handleRestart = () => {
    router.push(ROUTES.HOME);
  };

  const handleNavigateToSection = (section: string) => {
    const route = SECTION_TO_ROUTE[section] || ROUTES.HOME;
    router.push(route);
  };

  return (
    <main>
      <DashboardSection
        onBack={handleBack}
        onRestart={handleRestart}
        onNavigateToSection={handleNavigateToSection}
      />
    </main>
  );
}