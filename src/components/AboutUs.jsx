import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect } from "react";
// import build from '../assets/images/backgrounds/about-bg.png';
import build from '../assets/images/backgrounds/Why investor.jpg';

import "swiper/css";
import Footer from "./footer";
// import bg1 from '../assets/images/backgrounds/header__bg.jpg';
// import bg1 from '../assets/images/backgrounds/header-bg.jpg';
import bg1 from '../assets/images/backgrounds/About-Propturtle.jpg';
import pg1 from '../assets/images/shapes/page-header-s-1.png';
import pg2 from '../assets/images/shapes/about-shape-1-1.png';
// import ab3 from '../assets/images/about/about-1-1.jpg';
import ab3 from '../assets/images/about/What Is Propturtle.jpg';
import ab4 from '../assets/images/roundlogo.png';
import ab5 from '../assets/images/shapes/about-shape-1-2.png';
import ab6 from '../assets/images/shapes/sec-title-s-1.png';
import bg from '../assets/images/resources/advantage-bg-1-1.png';
import ab7 from '../assets/images/backgrounds/cta-bg.jpg';
import ab8 from '../assets/images/shapes/advantages-card-shape-1-1.png';
import ab9 from '../assets/images/brand/brand-hover-1-1.png';
import ab10 from '../assets/images/brand/brand-1-1.png';
import ab11 from '../assets/images/shapes/advantages-shape-1-1.png';
import ab12 from '../assets/images/resources/review-1-1.jpg';
import ab13 from '../assets/images/shapes/testimonials-1-1.png';
import ab14 from '../assets/images/shapes/testimonials-hover-1-1.png';
import ab15 from '../assets/images/resources/review-1-3.jpg';
import ab16 from '../assets/images/resources/about-man.png';
import ab17 from '../assets/images/resources/review-1-2.jpg';
import booking from '../assets/images/booking.png';
import hotel from '../assets/images/hotel.png';
import sofa from '../assets/images/livingroom.png';
import travel from '../assets/images/travel.png';
import rating from '../assets/images/rating.png';
import hours from '../assets/images/24-hours.png';
import Navbar from "./Navbar";
import Leadership from "./leadership";
import { Helmet } from "react-helmet-async";

export default function AboutUs() {
    useEffect(() => {
        const net = document.getElementById("network");
        if (!net) return;

        net.addEventListener("mousemove", (e) => {
            const { width, height } = net.getBoundingClientRect();
            const x = (e.offsetX / width - 0.5) * 20;
            const y = (e.offsetY / height - 0.5) * 20;

            net.querySelectorAll(".node").forEach((node, i) => {
                node.style.transform += ` translate(${x / (i + 1)}px, ${y / (i + 1)}px)`;
            });
        });
    }, []);
    return (
        <>
        <Helmet>
  <title>About PropTurtle | Fractional Real Estate Hyderabad</title>
  <meta
          name="description"
          content="Learn about PropTurtle, a Hyderabad-based fractional real estate platform offering development-first investments in commercial and hospitality assets."
        />
</Helmet>
            <div className="page-wrapper">
                <Navbar />

                <section className="page-header">

                    <div className="page-header__bg" style={{ backgroundImage: `URL(${bg1})` }}></div>
                    <div className="container">
                        {/* <img src={pg1} alt="About Us" className="page-header__shape" /> */}
                        <h2 className="page-header__title">About Propturtle</h2>
                        <p className="prop-p">PropTurtle offers fractional real estate in Hyderabad with income-generating assets designed for stable returns and long-term wealth.</p>
                    </div>
                </section>

                <div className="about-one">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-one__thumb">
                                    <div className="about-one__thumb__item">
                                        <img src={ab3} alt="propturtle about" />
                                        <div className="about-one__thumb__item__element">
                                            {/* <img src={pg2} alt /> */}
                                        </div>
                                    </div>
                                    <div className="about-one__thumb__line">
                                        <span></span><span></span><span></span>
                                    </div>
                                    <div className="about-one__thumb__element">
                                        <div className="about-one__thumb__shape">
                                            <img src={ab4} alt="propturtle image" />
                                        </div>
                                        {/* <div className="about-one__thumb__shape-two">
                                    <img src={ab5} alt />
                                </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-one__content">
                                    <div className="sec-title text-start">

                                        {/* <img src={ab6} alt="WELCOME TO HOTEL" className="sec-title__img" /> */}

                                        {/* className="sec-title__tagline bw-split-in-right" */}
                                        <h3>WHAT IS PROPTURTLE?</h3>

                                        {/* <h6 style={{ color: "#1B2B5A", fontSize: "20PX", fontWeight: "600" }}>PropTurtle is not a marketplace.</h6> */}
                                    </div>
                                    {/* <p className="about-one__content__text">PropTurtle is a real estate investment and development platform that builds income-generating real estate businesses for long-term investors. */}
                                    {/* </p> */}
                                    <p className="about-one__content__text">PropTurtle identifies high-potential land and real estate opportunities at an early stage, structures them with institutional discipline, and develops and manages them professionally.
Through fractional real estate in Hyderabad, investors can participate in income-generating assets-earning stable income and long-term value without the complexities of managing properties.</p>
                                    <p className="about-one__content__text">We build and operate the assets. Investors share in the results.</p>
                                    <div className="about-one__feature">
                                        <div className="about-one__feature__item">
                                            <div className="about-one__feature__left">
                                                <div className="about-one__feature__icon">
                                                    <img src={booking} className="about-booking" />
                                                </div>
                                                <h4 className="about-one__feature__title"><a href="room-details-2.html">Vision</a></h4>
                                            </div>
                                            <p className="about-one__feature__text">To become India’s most trusted platform for institutional-grade fractional real estate investments
.</p>

                                        </div>
                                        <div className="about-one__feature__item">
                                            <div className="about-one__feature__left">
                                                <div className="about-one__feature__icon">
                                                    <img src={hotel} className="about-hotel" />
                                                </div>
                                                <h4 className="about-one__feature__title"><a href="room-details-2.html">Mission</a></h4>
                                            </div>
                                            <p className="about-one__feature__text">To help investors build long-term wealth through transparent, income-generating real estate.</p>
                                        </div>
                                    </div>
                                    {/* <a href="about.html" className="about-one__btn solinom-btn solinom-btn--base">Discover More</a> */}


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Leadership />

                <section className="funfact-one">
                    <div className="container">
                        <h2 className="why-head">Our Philososphy</h2>
                        <ul className="list-unstyled funfact-one__list">
                            <li className="funfact-one__item count-box">
                                <div className="funfact-one__icon">
                                    <img src={sofa} />
                                </div>
                                <div className="funfact-one__content">
                                    <h3 className="funfact-one__count">
                                        <span className="funfact-one__count__item count-text" data-stop="420" data-speed="1500"></span>
                                        <span>Development-First</span>
                                    </h3>
                                    <p className="funfact-one__text">We create value through disciplined development.</p>
                                </div>
                            </li>
                            <li className="funfact-one__item count-box">
                                <div className="funfact-one__icon" style={{ marginTop: "20px" }}>
                                    <img src={travel} />
                                </div>
                                <div className="funfact-one__content">
                                    <h3 className="funfact-one__count">
                                        <span className="funfact-one__count__item count-text" data-stop="860" data-speed="1500"></span>
                                        <span>Business Ownership</span>
                                    </h3>
                                    <p className="funfact-one__text"> Own a stake in a revenue-generating real estate business.</p>
                                </div>
                            </li>
                            <li className="funfact-one__item count-box">
                                <div className="funfact-one__icon" style={{ marginTop: "30px" }}>
                                    <img src={rating} />
                                </div>
                                <div className="funfact-one__content">
                                    <h3 className="funfact-one__count">
                                        <span className="funfact-one__count__item count-text" data-stop="390" data-speed="1500"></span>
                                        <span>Total Transparency</span>
                                    </h3>
                                    <p className="funfact-one__text">Every stage is managed with complete transparency.</p>
                                </div>
                            </li>
                            {/* <li className="funfact-one__item count-box">
                        <div className="funfact-one__icon">
                            <img src={hours}/>
                        </div>
                        <div className="funfact-one__content">
                            <h3 className="funfact-one__count">
                                <span className="funfact-one__count__item count-text" data-stop="6.30" data-speed="1500"></span>
                                <span>+</span>
                            </h3>
                            <p className="funfact-one__text">Year of Service</p>
                        </div>
                    </li> */}
                        </ul>
                    </div>
                </section>



                {/* <section className="why-poster">
      <div className="why-poster__container">

        
        <h2 className="why-poster__title">
         Why Investors Trust PropTurtle
        </h2>

     
        <div className="why-poster__image">
          {/* <img src={buildingImg} alt="Real Estate Investment" /> 
        </div>

      
        <div className="why-poster__card">
          <ul>
            <li>Institutional-grade structuring</li>
            <li>Transparent ownership model</li>
            <li>Professionally managed assets</li>
            <li>Regular reporting and updates</li>
            <li>Clear exit visibility</li>
          </ul>
        </div>

      </div>
    </section> */}
                <section className="why-poster">
                    <div className="why-poster__container">

                        {/* Title */}
                        <h2 className="why-poster__title">
                            Why Investors Trust PropTurtle
                        </h2>

                        {/* Image */}
                        <div className="why-poster__image">
                            <img src={build} alt="Real Estate Investment" />
                        </div>

                        {/* Benefits Card */}
                        <div className="why-poster__card">
                            <ul>
                                <li>Institutional-grade structuring</li>
                                <li>Transparent ownership model</li>
                                <li>Professionally managed assets</li>
                                <li>Regular reporting and updates</li>
                                <li>Clear exit visibility</li>
                            </ul>
                        </div>

                    </div>
                </section>

            </div>
            <Footer />
        </>
    );
}


