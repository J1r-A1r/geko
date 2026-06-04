import React from 'react';
import './ProStatsSection.css';

const PLAYERS = [
  { name: 'donk', team: 'Spirit', rating: 1.34, hsPercentage: '62%' },
  { name: 'm0NESY', team: 'G2', rating: 1.28, hsPercentage: '41%' },
  { name: 'ZywOo', team: 'Vitality', rating: 1.25, hsPercentage: '39%' }
];

export default function ProStatsSection() {
  return (
    <section id="stats" className="stats-section">
      <h2>Статистика топ-игроков (Rating 2.0)</h2>
      <div className="players-grid">
        {PLAYERS.map((player, index) => (
          <div key={index} className="player-card">
            <div className="player-rank">#{index + 1}</div>
            <div className="player-info">
              <h3>{player.name}</h3>
              <p>{player.team}</p>
            </div>
            <div className="player-metrics">
              <div>Rating: <span className="highlight">{player.rating}</span></div>
              <div>HS: {player.hsPercentage}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}