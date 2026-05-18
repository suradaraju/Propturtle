import React, { useEffect, useRef } from 'react';
import useScrollAnimation from '../components/hooks/useScrollAnimation';
import '../assets/css/Features.css';

const Features = () => {
  useScrollAnimation();

  const sliderRef = useRef(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    if (window.innerWidth > 991) return;

    const cards = slider.children;
    const total = cards.length;

    const slide = () => {
      indexRef.current = (indexRef.current + 1) % total;
      slider.scrollTo({
        left: cards[indexRef.current].offsetLeft,
        behavior: 'smooth',
      });
    };

    const interval = setInterval(slide, 3000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      id: 1,
      title: "Premium Assets",
      text: "Access professionally curated real estate assets built for income and growth.",
      icon: "fa-solid fa-building"
    },
    {
      id: 2,
      title: "Earn Dual Returns",
      text: "Earn stable income today while benefiting from long-term asset appreciation.",
      icon: "fa-solid fa-chart-line"
    },
    {
      id: 3,
      title: "Invest Passively",
      text: "Own premium real estate while experts manage operations and performance.",
      icon: "fa-solid fa-user-tie"
    }
  ];

  return (
    <section className="feature-three" id="benefit">
      <div className="container-feature">

        <div className="row-feature" ref={sliderRef}>
          {services.map(service => (
            <div className="col-lg-4 col-md-6" key={service.id}>
              <div className="invest-card animate-on-scroll">
                <div className="invest-card__content">
                  <div className="invest-card__icon">
                    <i className={service.icon} style={{ fontSize: '40px', color: '#1B2B5A' }} />
                  </div>
                  <h3 className="invest-card__title">{service.title}</h3>
                  <p className="invest-card__text">{service.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="sec-title text-center sec-title--two">
          <p className="text-head">
            Fractional real estate in Hyderabad is transforming access to premium property
investments.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Features;
