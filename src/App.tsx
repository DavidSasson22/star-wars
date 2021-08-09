import React from 'react';
import './app.css';
import Toc from './components/Toc/Toc';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to star wars encyclopedia</h1>
        <h2>Everything you need to know about star wars' movies</h2>
      </header>
      <main>
        <Toc />
      </main>
    </div>
  );
}

export default App;
