import './OrderSection';
import './OrderSection.css';
import FonOrder  from './fon-order.png';


function OrderSection(){
return(
    <section className='section-order' 
     style={{
        background: `url(${FonOrder})`,
        }}
    >
        <h4 className='order-item' >Order</h4>
<input type="text" placeholder="Write your email" className="main-order-input" />
<input type="text" placeholder="Your Country"  className="order-input" />
<input type="text" placeholder="Your City" className="order-input" />
<input type="text"  placeholder="Your Adress" className="order-input" />
<button className='order-button' >Order my Nike</button>
    </section>
)
}
export default OrderSection