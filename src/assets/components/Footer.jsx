// import React from "react";
// import "./Footer.css";
// import {footerData} from './../../../data.js'


// const Footer = () => {
   
//   return (
     
//     <footer className="footer">
//       <div className="top-contact">{footerData.contact}</div>

//       <div className="footer-grid">
       
//         <div className="footer-section">
//           <h3>{footerData.contact.title}</h3>
//           <p>{footerData.contact.address}</p>
//           <p>{footerData.contact.phone}</p>
//           <p>{footerData.contact.email}</p>
//         </div>

       
//         <div className="footer-section">
//           <h3>{footerData.company.title}</h3>
//           <ul>
//             {footerData.company.links.map((link, i) => (
//               <li key={i}>{link}</li>
//             ))}
//           </ul>
//         </div>

       
//         <div className="footer-section">
//           <h3>{footerData.destinations.title}</h3>
//           <ul>
//             {footerData.destinations.places.map((place, i) => (
//               <li key={i}>{place}</li>
//             ))}
//           </ul>
//         </div>

       
//         <div className="footer-section">
//           <h3>{footerData.instagram.title}</h3>
//           <div className="insta-grid">
//             {footerData.instagram.images.map((src, i) => (
//               <img key={i} src={src} alt={`Instagram ${i + 1}`} />
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <p>{footerData.copyright}</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import "./Footer.css";
import { footerData } from "./../../../data.js";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="top-contact">{footerData.contact.phone}</div>

      <div className="footer-grid">
        <div className="footer-section">
          <h3>{footerData.contact.title}</h3>
          <p>{footerData.contact.address}</p>
          <p>{footerData.contact.phone}</p>
          <p>{footerData.contact.email}</p>
        </div>

        <div className="footer-section">
          <h3>{footerData.company.title}</h3>
          <ul>
            {footerData.company.links.map((link, i) => (
              <li key={i}>{link}</li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3>{footerData.destinations.title}</h3>
          <ul>
            {footerData.destinations.places.map((place, i) => (
              <li key={i}>{place}</li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3>{footerData.instagram.title}</h3>
          <div className="insta-grid">
            {footerData.instagram.images.map((src, i) => (
              <img key={i} src={src} alt={`Instagram ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{footerData.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;