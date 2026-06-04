import React from 'react';
import './NavBar.css';

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar-container container">
        <div className="logo">CS2<span>STATS</span></div>
        <nav className="nav-links">
          <a href="#matches">Матчи</a>
          <a href="#leaderboard">Турнирная таблица</a>
          <a href="#news">Новости</a>
          <a href="#stats">Про-Статистика</a>
        </nav>
        <button className="login-btn">Войти</button>
      </div>
    </header>
  );
}