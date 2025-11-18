import { water } from "../../../data";
import './Contain.css';

function Contain() {
  return (
    <div className="main">
      <div className="text-section">
        <h1 className="headingc">{water.heading}</h1>
        <p className="parac">{water.para}</p>
      </div>

      {
        <div className="card-container" >
          {
            water.cards.map((item) => 
              <div className="card" style={{ backgroundImage: `url(${item.image})`}}>
                <h4>{item.name}</h4>
                <p>{item.places}</p>
              </div>
            )
          }
        </div>
      }
    </div>
  );
}

export default Contain;