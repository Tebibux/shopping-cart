import React from 'react';
import './css/style.css';

const App = () => {
  return (
    <div className="App">
      <header className="header">Header</header>
      <div className="container">
        <div className="sidebar-left">Left Sidebar</div>
        <main className="content">Main Content</main>
        <div className="sidebar-right">Right Sidebar</div>
      </div>
      <footer className="footer">Footer</footer>
    </div>
  );
};

export default App;
