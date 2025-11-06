'use client'

import { useState, useEffect } from 'react'
import LandingPage from '@/components/LandingPage'
import HistoricalContextSection from '@/components/HistoricalContextSection'
import InteractiveTimelineSection from '@/components/InteractiveTimelineSection'
import PartyFormationSection from '@/components/PartyFormationSection'
import PlatformSection from '@/components/PlatformSection'
import HistoricalSignificanceSection from '@/components/HistoricalSignificanceSection'
import InevitabilitySection from '@/components/InevitabilitySection'
import BreakthroughSection from '@/components/BreakthroughSection'
import QuizPage from '@/components/QuizPage'
import SharingSection from '@/components/SharingSection'
import DashboardSection from '@/components/DashboardSection'

export default function Home() {
  const [currentSection, setCurrentSection] = useState('landing')

  // Scroll to top whenever section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentSection])

  const goToHistoricalContext = () => setCurrentSection('historical-context')
  const goToTimeline = () => setCurrentSection('timeline')
  const goToExternalChallenges = () => setCurrentSection('external-challenges')
  const goToInternalChallenges = () => setCurrentSection('internal-challenges')
  const goToSolutions = () => setCurrentSection('solutions')
  const goToResults = () => setCurrentSection('results')
  const goToBreakthrough = () => setCurrentSection('breakthrough')
  const goToQuiz = () => setCurrentSection('quiz')
  const goToSharing = () => setCurrentSection('sharing')
  const goToDashboard = () => setCurrentSection('dashboard')
  const goToLanding = () => setCurrentSection('landing')

  return (
    <main>
      {currentSection === 'landing' && (
        <LandingPage 
          onStartJourney={goToHistoricalContext}
        />
      )}
      {currentSection === 'historical-context' && (
        <HistoricalContextSection 
          onNext={goToTimeline}
          onBack={goToLanding}
          onGoToDashboard={goToDashboard}
        />
      )}
      {currentSection === 'timeline' && (
        <InteractiveTimelineSection 
          onNext={goToExternalChallenges}
          onBack={goToHistoricalContext}
          onGoToDashboard={goToDashboard}
        />
      )}
      {currentSection === 'external-challenges' && (
        <PartyFormationSection 
          onNext={goToInternalChallenges}
          onBack={goToTimeline}
          onGoToDashboard={goToDashboard}
        />
      )}
      {currentSection === 'internal-challenges' && (
        <PlatformSection 
          onNext={goToSolutions}
          onBack={goToExternalChallenges}
          onGoToDashboard={goToDashboard}
        />
      )}
      {currentSection === 'solutions' && (
        <HistoricalSignificanceSection 
          onNext={goToResults}
          onBack={goToInternalChallenges}
          onGoToDashboard={goToDashboard}
        />
      )}
      {currentSection === 'results' && (
        <InevitabilitySection 
          onNext={goToBreakthrough}
          onBack={goToSolutions}
          onGoToDashboard={goToDashboard}
        />
      )}
      {currentSection === 'breakthrough' && (
        <BreakthroughSection 
          onNext={goToQuiz}
          onBack={goToResults}
          onGoToDashboard={goToDashboard}
        />
      )}
      {currentSection === 'quiz' && (
        <QuizPage 
          onNext={goToSharing}
          onBack={goToBreakthrough}
          onRestart={goToLanding}
          onGoToDashboard={goToDashboard}
        />
      )}
      {currentSection === 'dashboard' && (
        <DashboardSection 
          onBack={goToQuiz}
          onRestart={goToLanding}
          onNavigateToSection={(section) => setCurrentSection(section)}
        />
      )}
      {currentSection === 'sharing' && (
        <SharingSection 
          onBack={goToQuiz}
          onNext={goToDashboard}
          onRestart={goToLanding}
          onGoToDashboard={goToDashboard}
        />
      )}
    </main>
  )
}
