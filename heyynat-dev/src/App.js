import React from 'react';
import MyProjects from './pages/MyProjects';
import About from './pages/About';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
    return (
      <>
        <Header />
        <Profile />
        <About />
        <MyProjects />
        <Footer />
      </>
    );
}

export default App;
