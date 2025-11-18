

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { sec } from "../../../data";
import "./Nav.css";

function Nav() {
  return (
    <div className="navbar">
      <div><h1>{sec.name}</h1></div>
      <div>
        <ul>
          {sec.navli.map((item, index) => (
            <li key={index}>{item.nav}</li>
          ))}
        </ul>
      </div>
      <div>{sec.nav6}</div>
      <div className="icons">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
      </div>
    </div>
  );
}

export default Nav;