import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import MatchesSection from './components/MatchesSection';
import LeaderboardSection from './components/LeaderboardSection';
import NewsSection from './components/NewsSection';
import ProStatsSection from './components/ProStatsSection';
import FooterSection from './components/FooterSection';

export default function App() {
  return (
    <div className="app-container">
      <NavBar />
      <main className="container">
        <HeroSection />
        <MatchesSection />
        <LeaderboardSection />
        <NewsSection />
        <ProStatsSection />
      </main>
      <FooterSection />
    </div>
  );
}