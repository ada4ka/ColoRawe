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
                <img className='card-reviews' src={Violet} alt="" />
            <img  className='card-reviews' src={Pink} alt="" />
            <img  className='card-reviews' src={Orange} alt="" />
        </div>
        </section>
    )
}
export default Reviews;