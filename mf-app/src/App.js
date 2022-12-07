import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
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
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/decoraciones' element={<Decoraciones />}></Route>
        <Route path='/nosotros' element={<Nosotros />}></Route>
      </Routes>
    </div>
    <div id='footer'>
      <Footer />
    </div>
  </>
  );
}

export default App;
