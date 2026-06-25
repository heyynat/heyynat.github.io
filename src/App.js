import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Profile from './pages/Profile';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Profile />
      <About />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
