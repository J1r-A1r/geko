import React, { useState } from 'react';
import './MatchesSection.css';

const MOCK_MATCHES = [
  { id: 1, team1: 'Natus Vincere', team2: 'FaZe', score: '1 - 0', stage: 'Mirage', isLive: true },
  { id: 2, team1: 'Team Spirit', team2: 'G2 Esports', score: '0 - 0', stage: '19:30', isLive: false },
  { id: 3, team1: 'Team Vitality', team2: 'MOUZ', score: '2 - 1', stage: 'Завершен', isLive: false },
];

export default function MatchesSection() {
  const [filter, setFilter] = useState('all');

  const filteredMatches = MOCK_MATCHES.filter(match => {
    if (filter === 'live') return match.isLive;
    return true;
  });

  return (
    <section id="matches" className="matches-section">
      <div className="section-header">
        <h2>Текущие и предстоящие матчи</h2>
        <div className="filters">
          <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>Все</button>
          <button onClick={() => setFilter('live')} className={filter === 'live' ? 'active' : ''}>Live</button>
        </div>
      </div>

      <div className="matches-list">
        {filteredMatches.map(match => (
          <div key={match.id} className="match-card">
            <div className="team">{match.team1}</div>
            <div className="score-info">
              <span className="score">{match.score}</span>
              <span className="stage">{match.isLive ? <span className="badge-live">Live</span> : match.stage}</span>
            </div>
            <div className="team">{match.team2}</div>
          </div>
        ))}
      </div>
    </section>
  );
}