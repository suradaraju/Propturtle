import { useState } from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "./Navbar";
import Footer from "./footer";
// import bg from '../assets/images/backgrounds/header-bg.jpg';
import bg from '../assets/images/backgrounds/Website_Live Projects Page.jpg';
import h1 from '../assets/images/shapes/page-header-s-1.png';
// import b1 from '../assets/images/blog/blog-1-1.jpg';
import b1 from '../assets/images/blog/Scroll Image-1.jpg';
import b2 from '../assets/images/blog/Scroll Image-2.jpg';
// import b2 from '../assets/images/blog/blog-1-2.jpg';
// import b3 from '../assets/images/blog/blog-1-3.jpg';
import b3 from '../assets/images/blog/Scroll Image-3.jpg';
import al from '../assets/images/arrow-left.png';
import ar from '../assets/images/arrow-right.png';
import { Helmet } from "react-helmet-async";

export default function Liveproperties() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
     <Helmet>
          <title>Live Investment Opportunities | Fractional Real Estate Hyderabad</title>
          <meta
            name="description"
            content="Explore live fractional real estate opportunities in Hyderabad. Invest in premium commercial and hospitality assets with targeted 18–22% IRR."
          />
        </Helmet>
      <div className="page-wrapper">
        <Navbar />
        <section className="page-header">


          <div className="page-header__bg" style={{ backgroundImage: `url(${bg})` }}></div>
          <div className="container">
            {/* <img src={h1} alt="News Carousel" className="page-header__shape" /> */}
            <h2 className="page-header__title">Live Investment Opportunities</h2>
            <p style={{fontSize:"20px", color:"#fff"}}>Seize Opportunities as They Happen</p>
            {/* <ul className="solinom-breadcrumb list-unstyled">
                    <li><a href="index.html">Home</a></li>
                    <li><span>Live Investment Opportunities</span></li>
                </ul> */}
          </div>
        </section>

        <section className="blog-one blog-one--page">
          <div className="container">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              loop={false}
              pagination={{ clickable: true }}
              slidesPerView={3}
              onSwiper={(swiper) => {
                setTimeout(() => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                });
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 }, // ✅ EXACTLY 3 cards on laptop
              }}
              className="blog-one__carousel"
            >


              <SwiperSlide>
                <div className="blog-card">
                  <div className="blog-card__image">
                    <div className="blog-card__image__inner">
                      <img src={b1} alt="" />
                      <img src={b1} alt="" />

                    </div>
                  </div>
                  <div className="blog-card__content">
                    <ul>
                      {/* <strong>Five Elements</strong> */}
                      <li><span>Location:</span></li>
                      <li><span>Property Type:</span></li>
                      <li><span>Target ROI Range:</span></li>
                      <li><span>Investment Tenure:</span></li>
                      <li><span>Status:</span> </li>
                    </ul>
                    <div className="blog-card__link">
                      <a href="https://www.fiveelementsinfra.com/altilia-campaign/?&srd=6900b5675d8def4a620abb10&utm_source=google&utm_medium=cpc&utm_campaign=RL_Google_Search_Brand&utm_term=five+elements+infra+tukkuguda" className="live-btn">Read more</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="blog-card">
                  <div className="blog-card__image">
                    <div className="blog-card__image__inner">
                      <img src={b2} alt="" />
                      <img src={b2} alt="" />

                    </div>
                  </div>
                  <div className="blog-card__content">
                    <ul>
                      <li><span>Location:</span></li>
                      <li><span>Property Type:</span></li>
                      <li><span>Target ROI Range:</span></li>
                      <li><span>Investment Tenure:</span> </li>
                      <li><span>Status:</span> </li>
                    </ul>
                    <div className="blog-card__link">
                      <a href="#" className="live-btn">Read more</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="blog-card">
                  <div className="blog-card__image">
                    <div className="blog-card__image__inner">
                      <img src={b3} alt="" />
                      <img src={b3} alt="" />

                    </div>
                  </div>
                  <div className="blog-card__content">
                    <ul>
                      <li><span>Location:</span></li>
                      <li><span>Property Type:</span></li>
                      <li><span>Target ROI Range:</span></li>
                      <li><span>Investment Tenure:</span></li>
                      <li><span>Status:</span></li>
                    </ul>
                    <div className="blog-card__link">
                      <a href="#" className="live-btn">Read more</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-card">
                  <div className="blog-card__image">
                    <div className="blog-card__image__inner">
                      <img src={b3} alt="" />
                      <img src={b3} alt="" />

                    </div>
                  </div>
                  <div className="blog-card__content">
                    <ul>
                      <li><span>Location:</span></li>
                      <li><span>Property Type:</span></li>
                      <li><span>Target ROI Range:</span></li>
                      <li><span>Investment Tenure:</span></li>
                      <li><span>Status:</span></li>
                    </ul>
                    <div className="blog-card__link">
                      <a href="#" className="live-btn">Read more</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="blog-carousel-nav">
              <img ref={prevRef} src={al} alt="Previous" className="carousel-arrow left" />
              <img ref={nextRef} src={ar} alt="Next" className="carousel-arrow right" />
            </div>

          </div>

        </section>
      </div>
      <Footer />
    </>
  );
}