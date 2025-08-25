import  './Reviews.css'
import Violet  from './violet.png';
import Pink from './pink.png';
import Orange from './orange.png';
import FonReviews from './fon-reviews.png'
function Reviews(){
    return(
        <section className="section-reviews"
        tyle={{
        background: `url(${FonReviews})`,
        }}
        >
            <h4 className='reviews-item' >Reviews</h4>
        <div className="photo-card">
            <p className='text-card' >Sneakers are very 
comfortable and well 
painted, nothing has 
worn off in a year.</p>
            <p className='text-card' >I'm very happy with this color scheme.
They match all my clothes.</p>
            <p className='text-card' >Just right if you need to go to a party.
I use them actively, the paint is super.</p>
                <img className='card-reviews' src={Violet} alt="" />
            <img  className='card-reviews' src={Pink} alt="" />
            <img  className='card-reviews' src={Orange} alt="" />
        </div>
        </section>
    )
}
export default Reviews;