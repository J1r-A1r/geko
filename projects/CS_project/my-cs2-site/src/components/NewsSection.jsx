import React from 'react';
import './NewsSection.css';

const NEWS = [
  { id: 1, title: 'Обновление CS2: Изменения на карте Inferno и фикс гранат', date: 'Сегодня' },
  { id: 2, title: 'donk забирает награду MVP на прошедшем турнире', date: 'Вчера' },
  { id: 3, title: 'Анонсированы открытые квалификации на следующий Major', date: '2 дня назад' }
];

export default function NewsSection() {
  return (
    <section id="news" className="news-section">
      <h2>Последние новости</h2>
      <div className="news-grid">
        {NEWS.map(item => (
          <div key={item.id} className="news-card">
            <span className="news-date">{item.date}</span>
            <h3>{item.title}</h3>
            <a href={`/news/${item.id}`} className="read-more">Читать далее →</a>
          </div>
        ))}
      </div>
    </section>
  );
}