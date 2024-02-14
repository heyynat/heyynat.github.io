import Footer from './components/Footer';
import Maintenance from './pages/maintenance';

function App() {
  const bgStyle = { backgroundColor: "rgb(39, 37, 37)"};
  return (
    <body style={bgStyle} data-spy="scroll" data-target=".navbar" data-offset="50">
      <Maintenance />
      <Footer />
    </body>
  );
}

export default App;
