import React, { useState } from "react";
import "../assets/css/solinom.css";
import Navbar from "./Navbar";
import Footer from "./footer";
import { Helmet } from "react-helmet-async";

// import headerBg from "../assets/images/backgrounds/header-bg.jpg";
import headerBg from '../assets/images/backgrounds/Website_FAQ.jpg';
import pageShape from "../assets/images/shapes/page-header-s-1.png";
import secTitleImg from "../assets/images/shapes/sec-title-s-1.png";

function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
     <Helmet>
          <title>Fractional Real Estate Hyderabad FAQs | Investment Questions Answered</title>
          <meta
                  name="description"
                  content="Find answers to common questions about fractional real estate in Hyderabad, including investment process, returns, risks, and ownership structure."
                />
        </Helmet>
      {/* PAGE HEADER */}
      <div className="page-wrapper">
        <Navbar />
        <section className="page-header">

          <div
            className="page-header__bg"
            style={{ backgroundImage: `url(${headerBg})` }}
          ></div>

          <div className="container text-center">
            {/* <img src={pageShape} alt="Faq" className="page-header__shape" /> */}
            <h2 className="page-header__title">FAQS</h2>
            <p style={{fontSize:"20px", color:"#fff"}}>Everything you need to know about investing with confidence.</p>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="faq-page">
          <div className="container">
            <div className="sec-title text-start mb-40">
              {/* <img src={secTitleImg} alt="FAQ" className="sec-title__img" /> */}
              {/* <h6 className="sec-title__tagline">Frequently Question</h6> */}
              <h2 className="faq-head">
                Frequently <br />
                <span className="ask">Asked</span>{" "}
                <span className="gold">Questions</span>
              </h2>
            </div>

            {/* TWO COLUMN LAYOUT */}
            <div className="row">
              {/* LEFT COLUMN */}
              <div className="col-lg-6">
                <div className="faq-page__accordion solinom-accrodion">

                  {/* 1 */}
                  <div className={`accrodion ${activeIndex === 0 ? "active" : ""}`}>
                    <div className="accrodion-title" onClick={() => toggleAccordion(0)}>
                      <h4 className="accrodion-title__text">
                        What exactly am I investing in?
                        <span className="accrodion-title__icon"></span>
                      </h4>
                    </div>
                    {activeIndex === 0 && (
                      <div className="accrodion-content">
                        <div className="inner">
                          <p className="inner__text">
                            A fractional ownership stake in an income-generating real estate business.
                            Each opportunity is a professionally structured asset designed for income and long-term value.

                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 3 */}
                  <div className={`accrodion ${activeIndex === 2 ? "active" : ""}`}>
                    <div className="accrodion-title" onClick={() => toggleAccordion(2)}>
                      <h4 className="accrodion-title__text">
                        How does fractional ownership work?
                        <span className="accrodion-title__icon"></span>
                      </h4>
                    </div>
                    {activeIndex === 2 && (
                      <div className="accrodion-content">
                        <div className="inner">
                          <p className="inner__text">
                            Multiple investors collectively own one asset.

                            Each investor holds a defined ownership share with professional management.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 5 */}
                  <div className={`accrodion ${activeIndex === 4 ? "active" : ""}`}>
                    <div className="accrodion-title" onClick={() => toggleAccordion(4)}>
                      <h4 className="accrodion-title__text">
                        How are returns generated?
                        <span className="accrodion-title__icon"></span>
                      </h4>
                    </div>
                    {activeIndex === 4 && (
                      <div className="accrodion-content">
                        <div className="inner">
                          <p className="inner__text">
                            Returns may come from operational income and potential value appreciation at exit.

                            Actual outcomes vary by project.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 7 */}
                  <div className={`accrodion ${activeIndex === 6 ? "active" : ""}`}>
                    <div className="accrodion-title" onClick={() => toggleAccordion(6)}>
                      <h4 className="accrodion-title__text">
                        What is the minimum investment amount?
                        <span className="accrodion-title__icon"></span>
                      </h4>
                    </div>
                    {activeIndex === 6 && (
                      <div className="accrodion-content">
                        <div className="inner">
                          <p className="inner__text">
                            Minimum investment varies by opportunity.
                            Each project clearly states ticket size, holding period, and exit strategy.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 9 */}
                  <div className={`accrodion ${activeIndex === 8 ? "active" : ""}`}>
                    <div className="accrodion-title" onClick={() => toggleAccordion(8)}>
                      <h4 className="accrodion-title__text">
                        How is my investment protected legally?
                        <span className="accrodion-title__icon"></span>
                      </h4>
                    </div>
                    {activeIndex === 8 && (
                      <div className="accrodion-content">
                        <div className="inner">
                          <p className="inner__text">
                            Each investment is structured through dedicated legal entities with formal agreements.
                            Investor rights are clearly defined.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="col-lg-6">
                <div className="faq-page__accordion solinom-accrodion">

                  {/* 2 */}
                  <div className={`accrodion ${activeIndex === 1 ? "active" : ""}`}>
                    <div className="accrodion-title" onClick={() => toggleAccordion(1)}>
                      <h4 className="accrodion-title__text">
                        Do I own real estate or just a financial product?
                        <span className="accrodion-title__icon"></span>
                      </h4>
                    </div>
                    {activeIndex === 1 && (
                      <div className="accrodion-content">
                        <div className="inner">
                          <p className="inner__text">
                            You own real estate through a legally structured entity.
                            This is not a REIT, mutual fund, or debt product.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 4 */}
                  <div className={`accrodion ${activeIndex === 3 ? "active" : ""}`}>
                    <div className="accrodion-title" onClick={() => toggleAccordion(3)}>
                      <h4 className="accrodion-title__text">
                        Who manages the property and operations?
                        <span className="accrodion-title__icon"></span>
                      </h4>
                    </div>
                    {activeIndex === 3 && (
                      <div className="accrodion-content">
                        <div className="inner">
                          <p className="inner__text">
                            PropTurtle manages the full asset lifecycle, from structuring to operations and reporting.
                            Professional operators are appointed where required.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 6 */}
                  <div className={`accrodion ${activeIndex === 5 ? "active" : ""}`}>
                    <div className="accrodion-title" onClick={() => toggleAccordion(5)}>
                      <h4 className="accrodion-title__text">
                        Are returns guaranteed?
                        <span className="accrodion-title__icon"></span>
                      </h4>
                    </div>
                    {activeIndex === 5 && (
                      <div className="accrodion-content">
                        <div className="inner">
                          <p className="inner__text">
                            No. Returns are not guaranteed.
                            PropTurtle focuses on asset quality, conservative assumptions, and disciplined execution
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 8 */}
                  <div className={`accrodion ${activeIndex === 7 ? "active" : ""}`}>
                    <div className="accrodion-title" onClick={() => toggleAccordion(7)}>
                      <h4 className="accrodion-title__text">
                        Is there a lock-in period?
                        <span className="accrodion-title__icon"></span>
                      </h4>
                    </div>
                    {activeIndex === 7 && (
                      <div className="accrodion-content">
                        <div className="inner">
                          <p className="inner__text">
                            Investments have defined holding periods.
                            Early exits may be possible, subject to project terms and liquidity.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 10 */}
                  <div className={`accrodion ${activeIndex === 9 ? "active" : ""}`}>
                    <div className="accrodion-title" onClick={() => toggleAccordion(9)}>
                      <h4 className="accrodion-title__text">
                        How transparent is reporting?
                        <span className="accrodion-title__icon"></span>
                      </h4>
                    </div>
                    {activeIndex === 9 && (
                      <div className="accrodion-content">
                        <div className="inner">
                          <p className="inner__text">
                            Investors receive regular updates, financial reports, and asset-level insights.
                            Communication remains clear throughout the investment lifecycle.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Faqs;
