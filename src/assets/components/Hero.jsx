import { heroitem } from "../../../data";
import "./Hero.css";


function Hero() {
    return (
        <div className="hero" style={{ backgroundImage: `url(${heroitem.bg})` }}>
            <div >
                <div><h1><center>{heroitem.heading}</center></h1></div>
                <p>{heroitem.para}</p>
            </div>

        </div>
    )
}
export default Hero;



