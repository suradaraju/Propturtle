// import cta from '../assets/images/backgrounds/cta-bg-1-1.jpg';
import cta from '../assets/images/backgrounds/Start Building.jpg';
import Logo1 from '../assets/images/Logo1.png';
import cta1 from '../assets/images/shapes/cta-shape-1-3.png';
import cta2 from '../assets/images/shapes/cta-shape-1-2.png';

export default function Build() {
  return (
    <>
      <div className="cta-three" id="contact">
        <div className="cta-three__bg" style={{ backgroundImage: `url(${cta})` }}></div>
        <div className="container">
          <div className="cta-three__inner">
            <div className="cta-three__left">
              <h2 className="cta-three__title">Start Building <br />Institutional-Grade Wealth.</h2>
              <p className="cta-three__titl_h1">Discover how fractional real estate investment gives you access to premium
properties without high capital requirements or operational complexity</p>
              <a className="solinom-btn" href='/blogpage'>Learn More</a>
            </div>
            <div className="cta-three__right">
              <div className="cta-three__funfact count-box"> <span className="cta-three__funfact__top"> <img
                className="cta-three__funfact__element_img" src={Logo1} /></span>


                <div className="cta-three__funfact__element"> <img src={cta1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="cta-three__shape"> <img src={cta2} alt /> </div> */}
      </div>
    </>
  );
}
