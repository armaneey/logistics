import React, {component} from 'react';
import './App.css';
import Header from './component/Header';
import HeroSection from './component/HeroSection';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
