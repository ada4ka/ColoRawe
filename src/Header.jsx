import './Header.css';
import MainLogo from './Main-logo';
import snickers from './snickers.png'
function Header(){
    return(
<header className='header' >
    <MainLogo/>
<div className="header-container">
<h4 className='header-subtitle' >С&R</h4>
<h1 className='header-title'>ColoRawe</h1>
<h2 className='header-item' >Your dream Nike</h2>
<p className='header-text' >On this site you can find custom Nike sneakers of your dreams. The original company caт`t create such beautiful sneakers as we do. Good luck finding your way in the world of custom sneakers.</p>
<button className='header-btn' >Buy my Nike</button>
</div>
</header>
    )
}
export default Header;










