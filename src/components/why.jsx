import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import bg from '../assets/images/backgrounds/slider-3-1.jpg';
import bg from '../assets/images/backgrounds/Website_Why Invest Page.jpg';
import I1 from '../assets/images/Website_Dual Return.jpg';
import I2 from '../assets/images/Website_Professional Management.jpg';
import I3 from '../assets/images/Website_Strategic Asset.jpg';
import I4 from '../assets/images/Website_Transparency & Governance.jpg'
import Footer from './footer';
import Navbar from './Navbar';
import '../assets/css/why.css';
import { Helmet } from "react-helmet-async";

const Why = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const investReasons = [
    {
      id: 1,
      title: "Operating real estate continues to outperform speculative assets when backed by:",
      subtitle: "Market Insight",
      description:
        `Strong demand,
                Professional operations,
                Long-term holding discipline.`,
      image:
        I4,
      // "https://t4.ftcdn.net/jpg/06/50/04/89/240_F_650048976_JRWZqjqTVjVueuDNqR5uPdMLBD8Ggxfa.jpg",
      // label: "Strategic"
    },
    {
      id: 2,
      title: "Investors earn through:",
      subtitle: "Earnings Model",
      description:
        `Regular income from rentals or operations,
Capital appreciation from early entry and value creation,
This dual-engine model drives stable long-term returns.`
      ,
      image:
        I1,
      // "https://t4.ftcdn.net/jpg/02/38/24/95/240_F_238249524_vdvI99c0qDpBBgI1c3yg5q0xuVxIlT9X.jpg",
      // label: "Managed"
    },
    {
      id: 3,
      title: "We reduce risk by:",
      subtitle: "Risk Management",
      description:
        `
                Entering at development-stage pricing,
                Partnering with experienced operators,
                Structuring assets with legal and financial discipline,
                Avoiding over-leveraged or speculative projects.`,
      image:
        I3,
      // "https://t4.ftcdn.net/jpg/05/01/90/89/240_F_501908974_mYX3lsbvj0cX9012NAQfbeDtFrO1jLMH.jpg",
      // label: "Dual Gains"
    },

  ];

  return (
    <>
    <Helmet>
  <title>Why Invest in Fractional Real Estate Hyderabad | PropTurtle</title>
  <meta
          name="description"
          content="Discover why fractional real estate in Hyderabad is a smart investment. Earn passive income, benefit from capital appreciation, and invest in professionally managed assets."
        />
</Helmet>
    <div className="page-wrapper">
      <Navbar />

      {/* Page Header */}
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
        <div className="container">
          <h3 className="page-header__title">Why Invest</h3>
          <ul className="solinom-breadcrumb list-unstyled">
            <p>
              Why Real Estate Still Builds Wealth-When Done Right
            </p>
          </ul>
        </div>
      </section>

      {/* Investment Reason Section */}
      <section className="luxury-section">
        <div className="container">

<div className="section-intro">
            <h1>Smarter Real Estate Investing Starts Here</h1>
            <span className="sub-title">Invest. Earn. Grow.</span>
            <p>
              Real estate remains one of the most reliable ways to build long-term wealth. With fractional real estate in Hyderabad, investors can access income-generating commercial and hospitality assets with lower capital, professional management, and structured investment models designed for stable returns.
            </p>
          </div>


          {/* LEFT CONTENT */}
          <div className="section-header">
            <h2>Why Real Estate</h2>
            <span className="sub-title">Timeless Assets. Consistent Performance.</span>
            <p>
              Fractional real estate in Hyderabad provides access to premium, income-generating properties backed by strong fundamentals. These assets are designed to deliver stable rental income and long-term capital appreciation.
            </p>
          </div>

          {/* PROPERTY GRID */}
          <div className="property-grid">

            {/* CARD 1 */}
            <div className="property-card">
              <img
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZSUyMGludmVzdG1lbnR8ZW58MHx8MHx8fDA%3D"
                alt="Urban Homes"
              />
              <span className="tag">Market Insight</span>
              <h3>Demand-Driven Investment Locations:</h3>
              <p>
                Invest in properties located in high-growth areas like Hyderabad’s IT corridors, supported by strong tenant demand, economic expansion, and limited supply.
              </p>
            </div>

            <div className="divider"></div>

            {/* CARD 2 */}
            <div className="property-card">
              <img
                src="https://media.istockphoto.com/id/2198320546/photo/real-estate-broker-agents-signature-on-the-contract-finalized-the-mortgage-agreement-marking.webp?a=1&b=1&s=612x612&w=0&k=20&c=F605pe9lEgJWOj_8Qi2XSSkWXBG7mCF_VDzuvY8iMmY="
                alt="Compact Homes"
              />
              <span className="tag">Earnings Model</span>
              <h3>Dual Returns: Income + Appreciation:</h3>
              <p>
                Earn regular income through rentals or operations while benefiting from capital appreciation driven by early-stage investment and value creation.
              </p>
            </div>

            <div className="divider"></div>

            {/* CARD 3 */}
            <div className="property-card">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlYWwlMjBlc3RhdGUlMjBpbnZlc3RtZW50fGVufDB8fDB8fHww"
                alt="Luxury Villas"
              />
              <span className="tag">Risk Management</span>
              <h3>Structured, Disciplined Investing:</h3>
              <p>
                Minimize risk through development-stage entry, experienced operators, SPV structuring, and legally compliant investment frameworks.
              </p>
            </div>

          </div>
        </div>
        <div className="cta-wrapper">
          <Link to="/contact" className="luxury-btn">Explore Fractional Real Estate Opportunities in Hyderabad</Link>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default Why;
