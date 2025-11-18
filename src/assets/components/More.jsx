import {moreitem} from './../../../data.js'
import './More.css'

function More(){
    
    return (
  <div className="More-main">
    <h1 className="More-heading">{moreitem.heading}</h1>
    <p className="More-para">{moreitem.para}</p>
    {
      <div className="more-card-container">
        {
          moreitem.morecards.map((item) =>
            <div className="morecard">
              <img src={item.image}  style={{width:'200px'}} />
              <div className='div2'>
                <h5>{item.name}</h5>
                <p>{item.country}</p>
              </div>
            </div>
          )
        }
      </div>
    }
  </div>
);
}

export default More;