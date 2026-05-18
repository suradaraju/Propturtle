import React from "react";
import "./Leadership.css";
import ceo from '../assets/images/raj_karan_new.png';
import coCeo from '../assets/images/chandra_mouli_new.png';
import cofounder from '../assets/images/RajKaran.jpeg';
import IIMB from '../assets/images/IIMB.png';
import carlton from '../assets/images/carlton.png';
import acer from '../assets/images/acer.png';
import daewoo from '../assets/images/daewoo.png';
import ebg from '../assets/images/EBG.png';
import rk from '../assets/images/RK.jpeg';
import ISB from '../assets/images/ISB.png';
import ebgrealty from '../assets/images/EBG Realty.png';
// import rk1 from '../assets/images/RK1.png';

export default function Leadership() {
  return (
    <section className="leadership-section">
      <div className="container">

        {/* Heading */}
        <div className="leadership-header">
          <h2>Built by Operators. Not Just Aggregators.</h2>
          <p>
       PropTurtle brings together institutional expertise and on-ground execution to
structure, develop, and operate income-generating real estate assets.
          </p>
        </div>

        {/* Leaders */}
        <div className="leaders-grid">

          {/* Leader 1 */}
          <div className="leader-card">
            <div className="leader-image-wrapper">
              <img src={ceo} alt="Chandra Mouli Goddanti" className="leader-image" />
            </div>
            <div className="leader-content">
              <h3>Chandra Mouli Goddanti</h3>
              <span className="leader-role">Founder & CEO <br /> Strategic Vision & Capital Governance </span>
              <div className="ceo-brands">
                <img src={ebg} className="ebg"/>
              {/* <img src={carlton} className="carlton"/> */}
              <img src={ebgrealty} className="ebg-realty"/>
              <img src={acer} className="acer"/>
              <img src={daewoo} className="daewoo"/>
              </div>
              <p className="leader-desc">
                Chandra Mouli Goddanti is the strategic architect behind PropTurtle’s investor-first platform. With over a decade of senior corporate leadership experience, he brings a rare ability to identify early-cycle real estate opportunities and convert them into structured, income-generating assets.
              </p>
              <p className="leader-desc">
                At PropTurtle, Chandra’s role goes beyond property selection. He focuses on asset strategy, platform vision, and long-term investor partnerships, ensuring that every offering aligns with predictable cash flows, downside protection, and scalability.
              </p>

              <p className="leader-desc">
                Before founding PropTurtle, Chandra served as Chief Business Officer at EBG Group, where he led diversified portfolios and strategic initiatives for globally recognized brands including Acer, Daewoo, Carlton, and ebikego. This exposure to multi-sector operations and large-scale business models shapes his disciplined approach to real estate investing.
              </p>

              <h4>What Sets Him Apart for Investors</h4>
              <ul>
                <li>Deep understanding of early-cycle asset identification</li>
                <li>Strong background in institutional business structuring</li>
                <li>Focus on converting real estate into operating income businesses, not speculative holdings</li>
              </ul>

              <h4 style={{paddingTop:"25px"}}>Investor Value</h4>
              <p className="leader-desc">Chandra ensures that every PropTurtle asset is evaluated not just as land or construction, but as a financially engineered business designed for sustainable wealth creation.</p>
              <ul>
                <li><b>Focus Areas:</b> Asset Strategy, Platform Vision, Investor Partnerships</li>
                <li><b>Background:</b>Former CBO, EBG Group,Experience across diversified real estate portfolios</li>
                <li><b>Value Added:</b> Turns properties into structured, income-driven
                  investment businesses</li>
              </ul>
            </div>
          </div>

          {/* Leader 2 */}
          <div className="leader-card">
            <div className="leader-image-wrapper">
              <img src={cofounder} alt="Raj Karan Puppala" className="leader-image" />
            </div>
            <div className="leader-content">
              <h3>Raj Karan Puppala </h3>
              <span className="leader-role-raj">Co-Founder & COO<br /> Execution, Compliance & Delivery <br /> <img src={IIMB} className="iim-raj"/><img src={ISB} className="raj-isb"/></span>
             
              <p className="leader-desc">
                Raj Karan Puppala is the execution backbone of PropTurtle. Where strategy meets ground reality, Raj ensures flawless translation-from approvals to project delivery.
              </p>

                <p className="leader-desc">
                  With deep expertise in construction management, regulatory frameworks, and RERA compliance, Raj oversees the entire lifecycle of PropTurtle assets. His role is critical in protecting investor interests by ensuring timelines, quality benchmarks, and statutory requirements are met without compromise.
                </p>
                <p  className="leader-desc">
                  Raj previously served as Director at RK Builders & Developers and was actively involved with Sree Shrestham Service Hotels, giving him hands-on experience across residential and hospitality real estate. He is also an alumnus of IIM Bangalore, having completed the Specialized Business Leadership Program bringing structured management rigor to execution.
                </p>
                <h4>
                  What Sets Him Apart for Investors

                </h4>
                <ul>
                  <li>Strong command over regulatory compliance and approvals</li>
                  <li>Proven ability to manage builders, vendors, and large execution teams</li>
                  <li>Disciplined focus on risk mitigation and delivery certainty</li>
                </ul>
                <h4 style={{paddingTop:"25px"}}>Investor Value
</h4>
<p className="leader-desc">Raj ensures that every PropTurtle project delivers what is promised on time, fully compliant, and operationally ready, safeguarding both capital and returns</p>
              <ul>
                <li><b>Focus Areas:</b> On-Ground Execution, RERA Compliance, Project Delivery</li>
                <li><b>Background:</b> 
Former Director, RK Builders & Developers,IIM Bangalore Alumnus</li>
                <li><b>Value Added:</b> Ensures timely delivery, quality control, and
                  regulatory adherence</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}