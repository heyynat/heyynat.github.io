import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import './App.css';

function App() {
  const bgStyle = { backgroundColor: '#16262E' };

  return (
    <div className="app">
      <section
        style={bgStyle}
        data-spy="scroll"
        data-target=".navbar"
        data-offset="50"
      >
        <Header />
        <Profile />
      </section>
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
