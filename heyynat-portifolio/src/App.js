import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Profile from './pages/Profile';

const App = () => {
  const bgStyle = { backgroundColor: "rgb(39, 37, 37)"};
  return (
      <body style={bgStyle} data-spy="scroll" data-target=".navbar" data-offset="50">
      <Header />
      <Profile />
      <About />
      <Projects />
      <Footer />
    </body>
  );
}

export default App;
