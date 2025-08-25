import MainLogo from './Main-logo';
import './Nav.css'
import navLogo from './nav-logo.png'
function Nav(){
    return(
        <nav className='nav' >
           <MainLogo/>
            <ul className='nav-list' > 
                <li className='nav-list-item' >Main page</li>
                <li className='nav-list-item' >Benefits</li>
                <li className='nav-list-item' >Advantages</li>
                <li className='nav-list-item' >Reviews</li>
                <li className='nav-list-item' >Contacts</li>
                <li className='nav-list-item' >Order</li>
            </ul>
            <div className="nav-lang">
                <button className="nav-lang-item">Ua</button>
                <button className="nav-lang-item">Eng</button>
            </div>
        </nav>
    )
}

export default Nav;