import React from "react";
import "../assets/css/TrustedBrand.css";

// Import your images
import Garuda from '../assets/images/GarudaLogo.jpeg';
import Rone from '../assets/images/R-ONE.png';
import FiveElements from '../assets/images/5Elements.jpeg';

export default function TrustedBrands() {

  const brands = [
    {
      name: "Garuda",
      img: Garuda,
      url: "https://thegarudagateway.com/"
    },
    {
      name: "R-One",
      img: Rone,
      url: "https://r1propturtle.in/"
    },
    {
      name: "Five Elements",
      img: FiveElements,
      url: "https://fiveelements.anantacore.com/"
    },
  ];

  return (
    <section className="trusted-brands">
      <div className="container">
        <h2>Trusted by Leading Brands</h2>

        <div className="brands-row">
          {brands.map((brand, i) => (
            <div className="brand-logo" key={i}>
              <a 
                href={brand.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={brand.img} alt={brand.name} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="hor-line"></div>
    </section>
  );
}