import React from 'react';
import './LeaderboardSection.css';

const TEAMS_RANK = [
  { rank: 1, name: 'Team Spirit', points: 1000, winrate: '78%' },
  { rank: 2, name: 'Natus Vincere', points: 945, winrate: '72%' },
  { rank: 3, name: 'FaZe Clan', points: 890, winrate: '65%' },
];

export default function LeaderboardSection() {
  return (
    <section id="leaderboard" className="leaderboard-section">
      <h2>Мировой рейтинг команд</h2>
      <table className="rank-table">
        <thead>
          <tr>
            <th>Ранг</th>
            <th>Команда</th>
            <th>Очки</th>
            <th>Винрейт</th>
          </tr>
        </thead>
        <tbody>
          {TEAMS_RANK.map(team => (
            <tr key={team.rank}>
              <td>#{team.rank}</td>
              <td className="team-name">{team.name}</td>
              <td>{team.points}</td>
              <td>{team.winrate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}