import React from 'react';
import './FooterSection.css';

export default function FooterSection() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>&copy; 2026 CS2STATS. Все права защищены.</p>
        <div className="footer-links">
          <a href="#privacy">Конфиденциальность</a>
          <a href="#terms">Условия использования</a>
        </div>
      </div>
    </footer>
  );
}