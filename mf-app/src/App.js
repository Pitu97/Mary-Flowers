import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Decoraciones from './components/Decoraciones/Decoraciones';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Nosotros from './components/Nosotros/Nosotros';

function App() {
  return (
    <>
    <Header />
    <div className='App'>  
      <Home />
      <Decoraciones />
      <Nosotros />
    </div>
    <Footer />
    </>
  );
}

export default App;
