import './Home.css';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
  <div className='home'>
    <div className="welcome">
      <h1>Bienvenidos</h1>
      
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="img/deco1.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="img/deco2.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="img/deco3.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      
    </div>
    <div className='info'>
      <h3>Todo lo que buscás para tu fiesta...</h3>
      <ul>
        <li>Mesa Dulce</li>
        <li>Souvenirs</li>
        <li>Fondos de torta con globos</li>
        <li>Flores e Imagenes</li>
        <li>Flores en Goma Eva</li>
        <li>Tarjetas</li>
      </ul>
    </div>
   </div>
  );
}

export default Home;