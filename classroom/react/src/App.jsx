import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h2>Простой счётчик</h2>
      
      <h1 style={{ fontSize: '48px' }}>{count}</h1>

      {}
      <button 
        onClick={() => setCount(count + 1)}
        style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer' }}
      >
        Кликни меня
      </button>
    </div>
  );
}

export default App;