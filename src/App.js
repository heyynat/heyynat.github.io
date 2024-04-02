import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Profile from './pages/Profile';
import './App.css';

const App = () => {
  const bgStyle = { backgroundColor: "#16262E"};
  return (
    <main>
      <section style={bgStyle} data-spy="scroll" data-target=".navbar" data-offset="50">
        <Header />
        <Profile />
      </section>
        <About />
        <Projects />
        <Footer />
    </main>
  );
}

export default App;
