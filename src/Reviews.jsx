import  './Reviews.css'
import Violet  from './violet.png';
import Pink from './pink.png';
import Orange from './orange.png';
import FonReviews from './fon-reviews.png'
import John from './John.png'
import Eliza from './Eliza.png'
import Tom from './Tom.png'
function Reviews(){
    return(
        <section className="section-reviews"
        style={{
        background: `url(${FonReviews}) `,
        }}
        >
            <h4 className='reviews-item' >Reviews</h4>
      <div className="photo-card">
        <div className="card-reviews"
        style={{
        background: `url(${Violet}) `,
        }}
        > <p className='text-card' >Sneakers are very 
comfortable and well 
painted, nothing has 
worn off in a year.</p>
  <span className='data-card' >25.11</span>
  <div className="card-self">
    <img  className='avatar-card' src={John} alt="" />
<div className="container-info">
 <p className='name-card'> John Teylor</p>
  <p className='together-card' >With us from 2018</p>
 </div>
  </div>
        </div>
      
      <div className="card-reviews"
      style={{
        background: `url(${Orange}) `,
        }}
      ><p className='text-card' >I'm very happy with this color scheme.
They match all my clothes.</p>
  <span className='data-card' >05.01</span>
  <div className="card-self">
     <img className='avatar-card'  src={Eliza} alt="" />
  <div className="container-info">
     <p className='name-card' >Elizabeth Garsia </p>
   <p className='together-card' >With us from 2020</p>
  </div>
  </div>
</div>
      <div className="card-reviews"
      style={{
        background: `url(${Pink}) `,
        }}
      ><p className='text-card' >Just right if you need to go to a party.
I use them actively, the paint is super.</p>
  <span className='data-card' >18.06</span>
<div className="card-self">
     <img  className='avatar-card' src={Tom} alt="" />
     <div className="container-info">
 <p className='name-card' > Tom Maquare</p>
 <p className='together-card' >With us from 2019</p>
 </div>
</div>
</div>
      </div>
        </section>
    )
}
export default Reviews;