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
  const goToPartyFormation = () => setCurrentSection('party-formation')
  const goToPlatform = () => setCurrentSection('platform')
  const goToHistoricalSignificance = () => setCurrentSection('historical-significance')
  const goToInevitability = () => setCurrentSection('inevitability')
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
          onNext={goToPartyFormation}
          onBack={goToHistoricalContext}
          onGoToDashboard={goToDashboard}
        />
      )}
      {currentSection === 'party-formation' && (
        <PartyFormationSection 
          onNext={goToPlatform}
          onBack={goToTimeline}
          onGoToDashboard={goToDashboard}
        />
      )}
      {currentSection === 'platform' && (
        <PlatformSection 
          onNext={goToHistoricalSignificance}
          onBack={goToPartyFormation}
          onGoToDashboard={goToDashboard}
        />
      )}
      {currentSection === 'historical-significance' && (
        <HistoricalSignificanceSection 
          onNext={goToInevitability}
          onBack={goToPlatform}
          onGoToDashboard={goToDashboard}
        />
      )}
      {currentSection === 'inevitability' && (
        <InevitabilitySection 
          onNext={goToBreakthrough}
          onBack={goToHistoricalSignificance}
          onGoToDashboard={goToDashboard}
        />
      )}
      {currentSection === 'breakthrough' && (
        <BreakthroughSection 
          onNext={goToQuiz}
          onBack={goToInevitability}
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
