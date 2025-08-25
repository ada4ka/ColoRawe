
import navLogo from './nav-logo.png';
import './Main.css';
import color from './color.svg'
import car from './car.png'
import stars from './stars.svg'
import mainFon from "./main-fon.png"; // импортируем как модуль

function Main() {
  return (
    <main className="main" style={{ backgroundImage: `url(${mainFon})` }}>
     <div className='main-container'>
     <div className="main-card">
      <h3 className='main-card-title' >Premium
      Quality</h3>
      <img src={stars} alt="" className='main-card-img' />
     </div>
     <div className="main-card">
      <img src={color} alt="" className='main-card-img' />
      <h3 id='id-main-card-title'  >Indelible paint</h3>
     </div>
     <div className="main-card">
      <h3 className='main-card-title' >Fast 
      shipping</h3>
      <img src={car} alt="" className='main-card-img' />
     </div>
    </div>
   </main>
  );
}

export default Main;