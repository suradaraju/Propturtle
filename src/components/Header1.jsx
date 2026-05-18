import { useState, useEffect } from "react";
import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Logo1 from '../assets/images/Logo1.png';
// import Typewriter from 'typewriter-effect/dist/core';
// import Navbar from "./Navbar";
import "swiper/css";

import bg2 from "../assets/images/resources/brnrfit-2-1.jpg";
import bg from "../assets/images/backgrounds/slider-3-1.jpg";

export default function Header() {

  /* ===============================
     INLINE TYPEWRITER (~18% ROI)
  =============================== */
  const text = "~18% ROI";
  const [typed, setTyped] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    let timer;

    if (i < text.length) {
      // Typing
      timer = setTimeout(() => {
        setTyped(prev => prev + text.charAt(i));
        setI(i + 1);
      }, 120);
    } else {
      // After complete, wait 1.5s and restart
      timer = setTimeout(() => {
        setTyped("");
        setI(0);
      }, 1500);
    }

    return () => clearTimeout(timer);
  }, [i, text]);


  return (
    <>
      <div className="page-wrapper">
        {/* <Navbar /> */}<header className="main-header main-header--two sticky-header sticky-header--normal">
          <div className="container">
            <div className="main-header__inner">
              <div className="main-header__logo"> <a href="#home"> <img src={Logo1} alt="Solinom HTML"
                style={{ width: "100px", height: "70px" }} /> </a> </div>
              <div className="main-header__middle">
                <nav className="main-header__nav main-menu">
                  <ul className="main-menu__list one-page-scroll-menu">
                    <li className="dropdown megamenu scrollToLink current"> <a href="#home">Home</a>

                    </li>
                    <li className="scrollToLink"><a href="/aboutus">About Us</a></li>
                    {/* <!-- <li className="scrollToLink"><a href="#benefit">Why Choose Us</a></li> --> */}
                    <li className="scrollToLink"><a href="#feature">Live Projects</a></li>
                  </ul>
                </nav>
                <nav className="main-header__nav main-menu">
                  <ul className="main-menu__list one-page-scroll-menu">
                    {/* <!-- <li className="scrollToLink"><a href="#testimonial">How It Works</a></li> --> */}
                    <li className="scrollToLink"><a href="#blog">Why Invest</a></li>
                    <li className="scrollToLink"><a href="#instagram">FAQ'S</a></li>
                    <li className="scrollToLink"><a href="#contact">Contact</a></li>
                  </ul>
                </nav>
              </div>
              <div className="main-header__right">

                <div className="main-header__info">
                  <a href="javascript:void(0)" className="search-toggler main-header__info__item"> <i className="icon-search" aria-hidden="true"></i>
                    <span className="sr-only">Search</span> </a>
                </div>
                <div className="mobile-nav__btn mobile-nav__toggler"> <span></span> <span></span> <span></span> </div>
              </div>
            </div>
          </div>
        </header>

        {/* HERO */}
        <section className="main-slider-two">
          <div
            className="main-slider-two__bg"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-10 offset-lg-1 offset-xl-2">
                  <div className="main-slider-two__content text-center">
                    <h2 className="main-slider-two__title">
                      Own a Piece of the Future, Not Just Property.
                    </h2>

                    <p className="main-slider-p">
                      Fractional ownership in premium, professionally developed
                      real estate. Designed for stable income and long-term growth.
                    </p>

                    <button className="explore-header-btn">
                      Explore Live Opportunities
                    </button>

                    <p className="head-para">
                      Transparent. Institutional. Simple.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="offer-room" id="about">
          <div className="container">
            <div className="offer-room__inner">
              <div className="row gutter-x-20 gutter-y-40">

                <div className="col-xl-12">
                  <div className="offer-room__card">
                    <div
                      className="offer-room__card__bg"
                      style={{ backgroundImage: `url(${bg2})` }}
                    ></div>

                    <div className="offer-room__card__funfact">
                      <h2 className="offer-room__card__funfact__count">
                        About Us
                      </h2>

                      <p>
                        PropTurtle enables fractional ownership in premium real
                        estate assets. We develop and manage high-quality
                        properties to deliver stable income, long-term growth,
                        and complete transparency-without the complexity of
                        traditional investing.
                        PropTurtle enables fractional ownership in premium real
                        estate assets. We develop and manage high-quality
                        properties to deliver stable income, long-term growth,
                        and complete transparency-without the complexity of
                        traditional investing.
                      </p>

                      {/* INLINE TYPEWRITER */}
                      <div className="stat-prop">
                        <p className="typewriter-inline">
                          {typed}<span className="cursor">|</span>
                        </p>

                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6">
                  <Swiper modules={[Autoplay]} autoplay={{ delay: 3000 }} loop />
                </div>

              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
