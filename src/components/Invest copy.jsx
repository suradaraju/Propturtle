import React from 'react';
import '../assets/css/invest.css'; // Import the new CSS


const img1 = 'https://t4.ftcdn.net/jpg/06/50/04/89/240_F_650048976_JRWZqjqTVjVueuDNqR5uPdMLBD8Ggxfa.jpg';
const img2 = 'https://t4.ftcdn.net/jpg/02/38/24/95/240_F_238249524_vdvI99c0qDpBBgI1c3yg5q0xuVxIlT9X.jpg';
const img3 = 'https://t4.ftcdn.net/jpg/05/01/90/89/240_F_501908974_mYX3lsbvj0cX9012NAQfbeDtFrO1jLMH.jpg'; // Fixed typo .jp -> .jpg
import useScrollAnimation from '../components/hooks/useScrollAnimation';

export default function Invest() {
  useScrollAnimation();

  const services = [
    {
      id: 1,
      title: "Premium Assets",
      text: "Move beyond mere ownership. Participate in revenue-generating enterprises.",
      image: img1,
      icon: "fa-solid fa-building" // Building for Premium Assets
    },
    {
      id: 2,
      title: "Earn Dual Returns",
      text: "Replace speculation with institutional-grade discipline and transparency.",
      image: img2,
      icon: "fa-solid fa-chart-line" // Chart for Returns
    },
    {
      id: 3,
      title: "Invest Passively",
      text: "Own a stake in high-growth hospitality and commercial assets, from the ground up.",
      image: img3,
      icon: "fa-solid fa-user-tie" // User Tie for Management/Passive
    },

  ];

  return (
    <section className="invest-services">
      <div className="container">
        <div className="invest-services__header text-center animate-on-scroll">
          <span className="invest-services__tagline">Why Choose Propturtle</span>
          <h2 className="invest-services__title"> For too long, premium real estate has been out of reach-locked behind high barriers and operational complexity. We're rewriting the rules.<br />
          </h2>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={service.id}>
              <div className={`invest-card animate-on-scroll`}>
                <div className="invest-card__image-wrapper">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="invest-card__content">
                  <div className="invest-card__icon">
                    <i className={service.icon} style={{ fontSize: '40px', color: '#1B2B5A' }}></i>
                  </div>
                  <h3 className="invest-card__title">{service.title}</h3>
                  <p className="invest-card__text">{service.text}</p>
                  {/* <a href="#" className="invest-card__link">Enquire Now</a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className='smart-p'>Fractional ownership is no longer an alternative. It's the intelligent way forward.</p>
      </div>
    </section>
  );
}
