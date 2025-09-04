import './Footer.css';
import FooterLogo from './nav-logo.png'
export default function Footer() {
  return (
    <div className="footer">
<div className="container">
    <div className="container-right">
    <p className='questions'>Have a question?</p>
      <p className='questions'>Have a proposal for cooperation?</p>
        <p className='questions'>Advertising questions?</p>
    <div className="container-right-info">
            <p className='info' >2022 ColoRawe @All rights reserved</p>
        <p className='info' >United States</p>
    </div>
        </div>
        <div className="container-left">
        <span className='email'>ColoRawe_support@gmail.com</span>
        <span className='email'>ColoRawe_Cooperation@gmail.com </span>
        <span className='email'>ColoRawe_Advertising@gmail.com</span>
       <img  className='footer-logo' src={FooterLogo} alt="" /> 
</div>
</div>
    </div>
  );
}