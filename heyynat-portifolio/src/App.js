import React from 'react';
import Routes from './Routes';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <main style={{backgroundColor: "rgb(39, 37, 37)"}}>
      <Header />
      <Routes />
      <Footer />
    </main>
    );
}

export default App;
