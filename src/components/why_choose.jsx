import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './footer';
// import teamImg from '../assets/images/resources/professional_team.png';
import teamImg from '../assets/images/resources/Our Advantages.jpg';
// import bg from '../assets/images/backgrounds/slider-3-1.jpg';
import bg from '../assets/images/backgrounds/Website_Why Choose Us Page.jpg'; 
import '../assets/css/why_choose.css';
import Navbar from './Navbar';
import { Helmet } from "react-helmet-async";

const WhyChoose = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <Helmet>
      <title>Why Choose PropTurtle | Fractional Real Estate Hyderabad</title>
      <meta
        name="description"
        content="Discover why PropTurtle stands out in fractional real estate in Hyderabad with transparent investments, SPV structure, and professionally managed assets."
      />
    </Helmet>
        <div className="page-wrapper">
            <Navbar />

            {/* Page Header */}
            <section className="page-header">

                <div className="page-header__bg" style={{ backgroundImage: `url(${bg})` }}></div>
                <div className="container">
                    {/* <img src="../assets/images/shapes/page-header-s-1.png" alt="Why Choose Us" className="page-header__shape" /> */}
                    <h2 className="page-header__title">Why Choose Us</h2>
                    {/* <p className="page-header2">Designed For Senior Investors</p> */}
                    <ul className="solinom-breadcrumb">
                        <p>Premium real estate has always had demand.<br/> What it lacked was access,
timing, and disciplined execution.</p>
                    </ul>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-choose-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="why-choose-content">
                                <h2 className="why-choose-title">OUR ADVANTAGES?</h2>
                                <p className="why-choose-subtitle">
                                    Most investors enter real estate late-when prices are high, risks increase, and
returns shrink.<br />
<span><strong>PropTurtle was created to change that equation.</strong></span>
                                </p>
                                <div className="why-choose-image-wrapper">
                                    <img src={teamImg} alt="Professional Team" className="why-choose-image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-12">
                                    <div className="feature-card">
                                        <div className="feature-icon-box">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                        <h4 className="feature-title">Premium Assets</h4>
                                        <p className="feature-text">
                                            We focus on assets with strong demand drivers and reliable income potential.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="feature-card">
                                        <div className="feature-icon-box">
                                            <i className="fa-solid fa-shield-halved"></i>
                                        </div>
                                        <h4 className="feature-title">Transparent Structure</h4>
                                        <p className="feature-text">
                                            Every investment is clearly structured with defined ownership, reporting, and
exit plans.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="feature-card">
                                        <div className="feature-icon-box">
                                            <i className="fa-solid fa-chart-line"></i>
                                        </div>
                                        <h4 className="feature-title">Passive Investment</h4>
                                        <p className="feature-text">
                                           We manage development, leasing, and operations while you focus on capital
allocation.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="feature-card">
                                        <div className="feature-icon-box">
                                            <i className="fa-solid fa-arrow-right-arrow-left"></i>
                                        </div>
                                        <h4 className="feature-title">Governance & Reporting</h4>
                                        <p className="feature-text">
                                            Investors receive regular updates on performance, income distributions, and
milestones.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
        </>
    );
};

export default WhyChoose;
