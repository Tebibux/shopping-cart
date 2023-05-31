import React from 'react';
import './css/style.css';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
