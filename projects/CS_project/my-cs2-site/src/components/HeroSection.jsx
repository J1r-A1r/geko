import React from 'react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="match-status"><span className="badge-live">Live</span> Главный матч дня</div>
        <h1>PGL Major: NAVI vs FaZe Clan</h1>
        <p>Решающая битва за выход в стадию плей-офф. Смотри прямую трансляцию прямо сейчас с аналитикой и статистикой игроков.</p>
        <div className="hero-actions">
          <button className="btn-primary">Смотреть стрим</button>
          <button className="btn-secondary">Статистика команд</button>
        </div>
      </div>
    </section>
  );
}