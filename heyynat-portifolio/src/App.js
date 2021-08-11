import React from 'react';
import MyProjects from './pages/MyProjects';
import About from './pages/About';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
    return (
      <main>
        <Header />
        <Profile />
        <About />
        <MyProjects />
        <Footer />
      </main>
    );
}

export default App;
