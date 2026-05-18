import React from "react";
import "../assets/css/solinom.css";
import Navbar from "./Navbar";
import Footer from "./footer";
import { Helmet } from "react-helmet-async";

/* IMAGE IMPORTS */
import headerBg from "../assets/images/backgrounds/header-bg.jpg";

function HowItWorks() {
  return (
    <>
    <Helmet>
          <title>How Fractional Real Estate Works in Hyderabad | PropTurtle</title>
          <meta
      name="description"
      content="Learn how fractional real estate in Hyderabad works. Understand SPV structure, investment process, returns, and exit strategy with PropTurtle."
    />
        </Helmet>
      <div className="page-wrapper">
        <Navbar />

        {/* PAGE HEADER */}
        <section className="page-header">
          <div
            className="page-header__bg"
            style={{ backgroundImage: `url(${headerBg})` }}
          ></div>

          <div className="container text-center">
            <h2 className="page-header__title">How It Works</h2>
            <p className="sec-title__subtitle mt-3">
             From Investment Opportunity to Income - Fully Managed
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="how-steps-section">
          <div className="container text-center">
            <div className="how-steps-wrapper">

              {/* STEP 1 */}
              <div className="how-step">
                {/* <span className="step-badge">Step 01</span> */}
                <div className="step-icon">
                  <i className="fa-solid fa-location-crosshairs"></i>
                </div>
                <h4>Find the Right Asset</h4>
                <p>
                  We identify high-demand locations with strong infrastructure and long-term
value potential.
                </p>
              </div>

              <div className="step-arrow">
                <i className="fa-solid fa-arrow-right"></i>
              </div>

              {/* STEP 2 */}
              <div className="how-step">
                {/* <span className="step-badge">Step 02</span> */}
                <div className="step-icon">
                  <i className="fa-solid fa-coins"></i>
                </div>
                <h4>Invest Fractionally</h4>
                <p>
                  Investors participate through fractional ownership at the asset level, often at
early-stage pricing.
                </p>
              </div>

              <div className="step-arrow">
                <i className="fa-solid fa-arrow-right"></i>
              </div>

              {/* STEP 3 */}
              <div className="how-step">
                {/* <span className="step-badge">Step 03</span> */}
                <div className="step-icon">
                  <i className="fa-solid fa-gears"></i>
                </div>
                <h4>We Manage the Asset</h4>
                <p>
                  From development to leasing and operations, we manage the full asset
lifecycle.
                </p>
              </div>

              <div className="step-arrow">
                <i className="fa-solid fa-arrow-right"></i>
              </div>

              {/* STEP 4 */}
              <div className="how-step">
                {/* <span className="step-badge">Step 04</span> */}
                <div className="step-icon">
                  <i className="fa-solid fa-arrow-trend-up"></i>
                </div>
                <h4>Earn & Exit Clearly</h4>
                <p>
                  Investors receive income distributions and benefit from a structured exit
strategy.
                </p>
              </div>

            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default HowItWorks;
