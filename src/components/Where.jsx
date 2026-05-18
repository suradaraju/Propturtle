import "../assets/css/Where.css";

/* IMAGES */
// import aboutImg from "../assets/images/about-2-1.jpg";
import aboutImg from "../assets/images/Where Vision.jpg";
import roundLogo from "../assets/images/roundlogo.png";
import bgShape from "../assets/images/shapes/home-two-about-shape.png";

function Where() {
  return (
    <section className="about-two" id="feature">

      {/* BACKGROUND SHAPE */}
      <div
        className="about-two__bg"
        style={{ backgroundImage: `url(${bgShape})` }}
      ></div>

      <div className="container">
        <div className="about-two__grid">

          {/* IMAGE SIDE */}
          <div className="about-two__left">
            <div className="about-two__thumb">
              <div className="about-two__thumb__item">
                <img src={aboutImg} alt="About" />
              </div>

              {/* FLOATING LOGO */}
              <div className="about-two__thumb__small">
                <img src={roundLogo} alt="Logo" />
              </div>
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div className="about-two__right">
            <h2>
              Where Vision <br />
              Meets Value
            </h2>

            <p className="about-desc">
             {/* We invest in well-located real estate with strong demand and consistent income potential. By combining market 
             insight with careful execution, we deliver dependable value for our investors. */}
             We invest in well-located real estate with strong demand and reliable income
potential. Through strategic insights and disciplined execution, we create long-
term value for investors.
            </p>

            {/* FOCUS TITLE */}
            <div className="about-focus-head">
              <h4>Our Focus:</h4>
            </div>

            {/* FOCUS GRID */}
            <div className="about-focus">

              <div className="focus-card">
                <span className="focus-icon">
                  <i className="fa-solid fa-hotel"></i>
                </span>
                <h5>Business Hotels & Hospitality</h5>
                <p>High-occupancy, branded returns</p>
              </div>

              <div className="focus-card">
                <span className="focus-icon">
                  <i className="fa-solid fa-building"></i>
                </span>
                <h5>Commercial Office Spaces</h5>
                <p>Stable, long-term tenant income</p>
              </div>

              <div className="focus-card">
                <span className="focus-icon">
                  <i className="fa-solid fa-house"></i>
                </span>
                <h5>Residential Properties</h5>
                <p>Essential housing in growing markets</p>
              </div>

              <div className="focus-card">
                <span className="focus-icon">
                  <i className="fa-solid fa-city"></i>
                </span>
                <h5>Mixed-Use Developments</h5>
                <p>Diversified income from a single asset</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Where;