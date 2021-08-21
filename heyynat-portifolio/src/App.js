import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './Routes'

const App = () => {
  const bgStyle = { backgroundColor: "rgb(39, 37, 37)"};

  return (
    <main style={bgStyle} >
      <Header />
      <Routes />
      <Footer />
    </main>
  );
}

export default App;
